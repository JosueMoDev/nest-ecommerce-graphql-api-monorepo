import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CategoryName } from './enum/category-name.enum';
import { CreateCategoryInput, UpdateCategoryInput } from './inputs';

@Injectable()
export class CategoryService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async create(createCategoryInput: CreateCategoryInput) {
    try {
      return await this.prismaService.category.create({
        data: {
          name: CategoryName[createCategoryInput.categoryName],
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: string) {
    return `This action returns a #${id} category`;
  }

  update(updateCategoryInput: UpdateCategoryInput) {
    return `This action updates category`;
  }

  remove(id: string) {
    return `This action removes a #${id} category`;
  }
}
