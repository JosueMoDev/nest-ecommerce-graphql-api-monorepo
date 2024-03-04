import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateSubCategoryInput } from './inputs/create-sub-category.input';
import { UpdateSubCategoryInput } from './inputs/update-sub-category.input';
import { PrismaService } from 'src/prisma.service';
import { ProductGender } from './enum/product-gender.enum';

@Injectable()
export class SubCategoryService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async category(subCategoryId: string) {
    try {
      return this.prismaService.subCategory
        .findUnique({
          where: {
            id: subCategoryId,
          },
        })
        .category();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async create(createSubCategoryInput: CreateSubCategoryInput) {
    try {
      const slug = createSubCategoryInput.name
        .split(' ')
        .map((word) => word.toLowerCase())
        .join('-');
      return await this.prismaService.subCategory.create({
        data: {
          name: createSubCategoryInput.name,
          slug: slug,
          gender: ProductGender[createSubCategoryInput.productGender],
          category: {
            connect: {
              id: createSubCategoryInput.categoryId,
            },
          },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAll() {
    return await this.prismaService.subCategory.findMany({});
  }

  async findOne(id: string) {
    try {
      const subCategory = await this.prismaService.subCategory.findUnique({
        where: { id: id },
      });
      if (!subCategory) throw new NotFoundException('Sub Category not found');
      return subCategory;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async update(updateSubCategoryInput: UpdateSubCategoryInput) {
    try {
      const { id, productGender, ...rest } = updateSubCategoryInput;
      const subCategory = await this.findOne(id);
      const slug = rest.name
        ? rest.name
            .split(' ')
            .map((word) => word.toLowerCase())
            .join('-')
        : subCategory.slug;

      const gender = !!productGender
        ? ProductGender[productGender]
        : subCategory.gender;
      return await this.prismaService.subCategory.update({
        where: { id: updateSubCategoryInput.id },
        data: {
          ...subCategory,
          ...rest,
          slug,
          gender,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async toggleSubCategoryStatus(id: string) {
    const subCategory = await this.prismaService.subCategory.findUnique({
      where: { id },
    });
    return await this.prismaService.subCategory.update({
      where: { id },
      data: {
        isActive: !subCategory.isActive,
      },
    });
  }
}
