import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubCategoryInput } from './inputs/create-sub-category.input';
import { UpdateSubCategoryInput } from './inputs/update-sub-category.input';
import { PrismaService } from 'src/prisma.service';
import { ProductGender } from './enum/product-gender.enum';

@Injectable()
export class SubCategoryService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}
  async create(createSubCategoryInput: CreateSubCategoryInput) {
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
  }

  async findAll() {
    return await this.prismaService.subCategory.findMany({});
  }

  async findOne(id: string) {
    const subCategory = await this.prismaService.subCategory.findUnique({
      where: { id: id },
    });
    if (!subCategory) throw new NotFoundException('Sub Category not found');
    return subCategory;
  }

  async update(updateSubCategoryInput: UpdateSubCategoryInput) {
    const subCategory = await this.findOne(updateSubCategoryInput.id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, productGender, ...rest } = updateSubCategoryInput;

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
