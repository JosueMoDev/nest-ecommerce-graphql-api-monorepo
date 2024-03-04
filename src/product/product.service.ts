import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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
    try {
      return await this.prismaService.product
        .findUnique({
          where: { id },
        })
        .subCategory();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async chip(id: string) {
    try {
      return await this.prismaService.product
        .findUnique({
          where: { id },
        })
        .chip();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async stockByColor(id: string) {
    try {
      return await this.prismaService.stockByColor.findMany({
        where: {
          productId: id,
        },
        select: {
          id: true,
          stock: true,
          color: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async picturesByColor(id: string) {
    try {
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
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async createProduct(createProductInput: CreateProductInput) {
    try {
      return await this.prismaService.product.create({
        data: {
          ...createProductInput,
          slug: '',
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async setStockByColor(setStockByColorInput: SetStockByColorInput) {
    try {
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
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async uploadPicturesByColor(
    id: string,
    picturesByColor: PictureByColorInput,
  ) {
    try {
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
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAll() {
    return await this.prismaService.product.findMany();
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.product.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  update(updateProductInput: UpdateProductInput) {
    return `This action updates a product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
