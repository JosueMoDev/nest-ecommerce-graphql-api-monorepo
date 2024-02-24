import { Inject, Injectable } from '@nestjs/common';
import {
  CreateProductInput,
  PictureByColorInput,
  SetStockByColorInput,
  UpdateProductInput,
} from './inputs';
import { PrismaService } from 'src/prisma.service';
import { PicturesByColorMapper } from './mappers/pictures-by-color.mapper';

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
        stock: true,
        color: true,
      },
    });
  }

  async picturesByColor(id: string) {
    const response = await this.prismaService.productPicture.findMany({
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
    return PicturesByColorMapper.fromObject(response);
  }

  async createProduct(createProductInput: CreateProductInput) {
    return await this.prismaService.product.create({
      data: {
        ...createProductInput,
        slug: '',
      },
    });
  }

  async setStockByColor(setStockByColorInput: SetStockByColorInput) {
    const { colorAndStock } = setStockByColorInput;
    return await this.prismaService.product.update({
      where: { id: setStockByColorInput.productId },
      data: {
        stockByColor: {
          create: colorAndStock.map(({ stock, colorId }) => ({
            stock,
            colorId,
          })),
        },
      },
    });
  }

  async uploadPicturesByColor(
    id: string,
    picturesByColor: PictureByColorInput,
  ) {
    const productPictures = picturesByColor.productPictures.flatMap(
      ({ colorId, urls }) =>
        urls.map((url) => ({
          colorId,
          url,
        })),
    );
    return await this.prismaService.product.update({
      where: { id },
      data: {
        productPicture: {
          create: productPictures,
        },
      },
    });
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
