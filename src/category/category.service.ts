import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './inputs/create-category.input';
import { UpdateCategoryInput } from './inputs/update-category.input';
import { PrismaService } from 'src/prisma.service';
import { CategoryName } from './enum/category-name.enum';

@Injectable()
export class CategoryService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(createCategoryInput: CreateCategoryInput) {
    return await this.prismaService.category.create({
      data: {
        name: CategoryName[createCategoryInput.categoryName],
      },
    });
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
