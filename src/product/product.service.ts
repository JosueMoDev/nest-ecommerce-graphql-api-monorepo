import { Inject, Injectable } from '@nestjs/common';
import {
  CreateProductInput,
  UpdateProductInput,
  CreateColorAndStockInput,
} from './inputs';
import { PrismaService } from 'src/prisma.service';
import { ColorOnProduct } from './entities/color-on-product.entity';

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

  async colorAndStock(id: string) {
    const response = await this.prismaService.product.findMany({
      where: {
        id,
      },
      select: {
        productPicture: {
          select: {
            PictureByColorOnProduct: {
              select: {
                productPicture: {
                  select: {
                    url: true,
                  },
                },
                colorProduct: {
                  select: {
                    hexadecimalColor: true,
                    name: true,
                    ColorOnProduct: {
                      select: {
                        stockByColor: true,
                        color: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    return response;
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
    return await this.prismaService.product.update({
      where: { id: createColorAndStockInput.productId },
      data: {
        ColorOnProduct: {
          create: {
            colorId: colorAndStock[0].colorId,
            stockByColor: colorAndStock[0].stock,
          },
        },
        productPicture: {
          create: {
            url: colorAndStock[0].picturesUrls[0],
            PictureByColorOnProduct: {
              create: {
                colorProductId: colorAndStock[0].colorId,
              },
            },
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
