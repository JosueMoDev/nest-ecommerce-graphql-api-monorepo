import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateOrderInput } from './inputs/create-order.input';
import { UpdateOrderInput } from './inputs/update-order.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async user(id: string) {
    return await this.prismaService.order
      .findUnique({
        where: { id },
      })
      .user();
  }

  async shippingAddress(id: string) {
    return await this.prismaService.order
      .findUnique({
        where: { id },
      })
      .shippingAddress();
  }

  async itemsInOnder(id: string) {
    const response = await this.prismaService.orderItem.findMany({
      where: {
        orderId: id,
      },
      select: {
        quantity: true,
        product: {
          select: {
            name: true,
          },
        },
        id: true,
      },
    });
    return response.map(({ quantity, product, id }) => ({
      id,
      quantity,
      product: product.name,
    }));
  }

  async create(createOrderInput: CreateOrderInput) {
    const { userId, shippingAddressId, itemsInOrder } = createOrderInput;

    const totalItemsInOrder = itemsInOrder.reduce(
      (count, p) => count + p.quantity,
      0,
    );
    return await this.prismaService.$transaction(async (transaction) => {
      //* Step 1 : vefiry if products exists on db
      const products = await transaction.product.findMany({
        where: {
          id: {
            in: itemsInOrder.map(({ productId }) => productId),
          },
        },
        select: {
          slug: true,
          id: true,
          name: true,
          price: true,
        },
      });
      if (!products.length) throw new BadRequestException('Any products found');

      //* Step 2: Calculate prices

      const { subTotal, tax, total } = itemsInOrder.reduce(
        (totals, item) => {
          const productQuantity = item.quantity;
          const product = products.find(
            (product) => product.id === item.productId,
          );

          if (!product) throw new NotFoundException('Not Found Product');
          // TODO si existen variaciones de precio acorde al chip
          const subTotal = product.price * productQuantity;

          totals.subTotal += subTotal;
          totals.tax += subTotal * 0.15;
          totals.total += subTotal * 1.15;

          return totals;
        },
        { subTotal: 0, tax: 0, total: 0 },
      );
      //* Step 3: Check if product has stock

      const updateStock = products.map((product) => {
        const { quantity, stockId } = itemsInOrder
          .filter((item) => item.productId === product.id)
          .reduce(
            (acc, item) => {
              acc.quantity += item.quantity;
              acc.stockId = item.stockId;
              return acc;
            },
            { quantity: 0, stockId: '' },
          );
        return transaction.stockByColor.update({
          where: {
            id: stockId,
          },
          data: {
            stock: {
              decrement: quantity,
            },
          },
          select: {
            stock: true,
            product: true,
          },
        });
      });

      const updatedProducts = await Promise.all(updateStock);

      updatedProducts.forEach(({ stock, product }) => {
        if (stock < 0) {
          throw new Error(`${product.name} no tiene inventario suficiente`);
        }
      });

      // * Step 4: Create Order

      const order = await transaction.order.create({
        data: {
          userId,
          shippingAddressId,
          subTotal,
          tax,
          total,
          totalOfItems: totalItemsInOrder,
          OrderItem: {
            createMany: {
              data: itemsInOrder.map(({ quantity, productId }) => ({
                quantity,
                productId,
                productDetails: {},
                price:
                  products.find((product) => product.id === productId)?.price ??
                  0,
              })),
            },
          },
        },
      });
      if (!order)
        throw new InternalServerErrorException('Order no hasnt creted');
      console.log(order);
      return order;
    });
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: string) {
    return `This action returns a #${id} order`;
  }

  update(updateOrderInput: UpdateOrderInput) {
    return `This action updates order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
