import {
  Injectable,
  Inject,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateColorInput, UpdateColorInput } from './inputs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ColorService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(createColorInput: CreateColorInput) {
    try {
      return await this.prismaService.color.create({
        data: { ...createColorInput },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAll() {
    return await this.prismaService.color.findMany();
  }

  async findOne(id: string) {
    try {
      const color = await this.prismaService.color.findUnique({
        where: { id },
      });
      if (!color) throw new NotFoundException('Color not found');
      return color;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async update(updateColorInput: UpdateColorInput) {
    try {
      const color = await this.findOne(updateColorInput.id);
      const { id, ...rest } = updateColorInput;
      return await this.prismaService.color.update({
        where: { id },
        data: {
          ...color,
          ...rest,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} color`;
  }
}
