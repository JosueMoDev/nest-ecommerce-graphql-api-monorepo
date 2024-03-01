import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateOrderInput,
  ProductDetailsInput,
  UpdateOrderInput,
} from './inputs';
import { PrismaService } from 'src/prisma.service';
import { OrderItem } from './entities/order-item.entity';
import { OrderItemMapper } from './mappers/order-item.mapper';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async productDetails(orderItems: OrderItem[]) {
    orderItems.map((orderItem) => console.log(orderItem.id));
    return;
  }
  async user(id: string) {
    try {
      return await this.prismaService.order
        .findUnique({
          where: { id },
        })
        .user();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async shippingAddress(id: string) {
    try {
      return await this.prismaService.order
        .findUnique({
          where: { id },
        })
        .shippingAddress();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }
  // TODO product Details,
  async itemsInOnder(id: string) {
    try {
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
          productDetailsOnItem: {
            select: {
              configOnChip: {
                select: {
                  neuralEngine: true,
                  id: true,
                  price: true,
                  cpu: true,
                  gpu: true,
                },
              },
              storageOnChip: {
                select: {
                  id: true,
                  price: true,
                  storage: true,
                },
              },
              unifiedMemoryOnChip: {
                select: {
                  id: true,
                  price: true,
                  unifiedMemory: true,
                },
              },
            },
          },
          price: true,
          id: true,
        },
      });
      return response.map(OrderItemMapper.fromObject);
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async create(createOrderInput: CreateOrderInput) {
    try {
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
        if (!products.length)
          throw new BadRequestException('Any products found');

        //* Step 2: Calculate prices
        const getOverCharge = async (productDetials: ProductDetailsInput) => {
          const { price: storageOverCharge } = productDetials.storageOnChipId
            ? await this.prismaService.storageOnChip.findUnique({
                where: { id: productDetials.storageOnChipId },
                select: { price: true },
              })
            : { price: 0 };
          const { price: unifiedMemoryOverCharge } =
            productDetials.unifiedMemoryOnChipId
              ? await this.prismaService.unifiedMemoryOnChip.findUnique({
                  where: { id: productDetials.unifiedMemoryOnChipId },
                  select: { price: true },
                })
              : { price: 0 };

          const { price: configChipOverCharge } = productDetials.configOnChipId
            ? await this.prismaService.configOnChip.findUnique({
                where: { id: productDetials.configOnChipId },
                select: { price: true },
              })
            : { price: 0 };

          return (
            storageOverCharge + unifiedMemoryOverCharge + configChipOverCharge
          );
        };
        // const { subTotal, tax, total } = itemsInOrder.reduce(
        //   (totals, item) => {
        //     const productQuantity = item.quantity;
        //     const product = products.find(
        //       (product) => product.id === item.productId,
        //     );
        //     if (!product) throw new NotFoundException('Not Found Product');
        //     // TODO si existen variaciones de precio acorde al chip
        //     if (!item.productDetails) {
        //       const subTotal = product.price * productQuantity;
        //       totals.subTotal += subTotal;
        //       totals.tax += subTotal * 0.15;
        //       totals.total += subTotal * 1.15;
        //       return totals;
        //     }

        //     getOverCharge(item.productDetails).then((overCharge) =>
        //       console.log(overCharge),
        //     );

        //     const subTotal = (product.price + 0) * productQuantity;
        //     totals.subTotal += subTotal;
        //     totals.tax += subTotal * 0.15;
        //     totals.total += subTotal * 1.15;

        //     return totals;
        //   },
        //   { subTotal: 0, tax: 0, total: 0 },
        // );
        //* Step 3: Check if product has stock
        const { subTotal, tax, total } = await itemsInOrder.reduce(
          async (accumulatorPromise, item) => {
            const accumulator = await accumulatorPromise;
            const totals = { ...accumulator };
            const productQuantity = item.quantity;
            const product = products.find(
              (product) => product.id === item.productId,
            );
            if (!product) throw new NotFoundException('Not Found Product');

            if (!item.productDetails) {
              const subTotal = product.price * productQuantity;
              totals.subTotal += subTotal;
              totals.tax += subTotal * 0.15;
              totals.total += subTotal * 1.15;
              return totals;
            }

            const overCharge = await getOverCharge(item.productDetails);
            const subTotal = (product.price + overCharge) * productQuantity;
            totals.subTotal += subTotal;
            totals.tax += subTotal * 0.15;
            totals.total += subTotal * 1.15;

            return totals;
          },
          Promise.resolve({ subTotal: 0, tax: 0, total: 0 }),
        );

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
              create: itemsInOrder.map(
                ({ quantity, productId, price, productDetails }) => ({
                  quantity,
                  productId,
                  price,
                  productDetailsOnItem: {
                    create: productDetails,
                  },
                }),
              ),
            },
          },
        });
        if (!order)
          throw new InternalServerErrorException('Order no hasnt creted');
        return order;
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
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
