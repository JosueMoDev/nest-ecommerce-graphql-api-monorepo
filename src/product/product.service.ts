import { Inject, Injectable } from '@nestjs/common';
import {
  CreateProductInput,
  UpdateProductInput,
  CreateColorAndStockInput,
} from './inputs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}
  async subCategory(id: string) {
    return await this.prismaService.product
      .findUnique({
        where: { id },
      })
      .subCategory();
  }

  async chip(id: string) {
    return await this.prismaService.product
      .findUnique({
        where: { id },
      })
      .chip();
  }

  async stockByColor(id: string) {
    return await this.prismaService.stockByColor.findMany({
      where: {
        productId: id,
      },
      select: {
        stockByColor: true,
        color: true,
      },
    });
  }

  async picturesByColor(id: string) {
    return await this.prismaService.productPicture.findMany({
      where: {
        productId: id,
      },
      select: {
        id: true,
        url: true,
        color: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        color: {
          name: 'desc',
        },
      },
    });
  }

  async createProduct(createProductInput: CreateProductInput) {
    return await this.prismaService.product.create({
      data: {
        ...createProductInput,
        slug: '',
      },
    });
  }

  async createColorAndStock(
    createColorAndStockInput: CreateColorAndStockInput,
  ) {
    const { colorAndStock } = createColorAndStockInput;
    const pictures = colorAndStock.flatMap(
      ({ colorId, productId, picturesUrls }) =>
        picturesUrls.map((url) => ({
          colorId,
          productId,
          url,
        })),
    );
    return await this.prismaService.product.update({
      where: { id: createColorAndStockInput.productId },
      data: {
        stockByColor: {
          create: colorAndStock.map(({ stock, colorId }) => ({
            stockByColor: stock,
            colorId,
          })),
        },
        productPicture: {
          create: pictures,
        },
      },
    });
    return;
  }

  findAll() {
    return `This action returns all product`;
  }

  async findOne(id: string) {
    return await this.prismaService.product.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
