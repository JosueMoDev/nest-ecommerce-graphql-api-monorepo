import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateColorInput } from './inputs/create-color.input';
import { UpdateColorInput } from './inputs/update-color.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ColorService {
  constructor(@Inject(PrismaService) private readonly prismaService: PrismaService){}
  

  async create(createColorInput: CreateColorInput) {
    return await this.prismaService.color.create({
      data: {...createColorInput}
    });
  }

  async findAll() {
    return await this.prismaService.color.findMany();
  }

  async findOne(id: string) {
    const color = await this.prismaService.color.findUnique({ where: { id }});
    if(!color) throw new NotFoundException('Color not found');
    return color;
  }

  async update(updateColorInput: UpdateColorInput) {
    const color = await this.findOne(updateColorInput.id);
    const { id, ... rest } = updateColorInput;
    return await this.prismaService.color.update({
      where: { id },
      data: {
        ...color,
        ...rest
      }
    })
  }

  remove(id: string) {
    return `This action removes a #${id} color`;
  }
}
