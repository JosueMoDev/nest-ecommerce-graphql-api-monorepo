import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateGpuInput } from './inputs/create-gpu.input';
import { UpdateGpuInput } from './inputs/update-gpu.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GpuService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(createGpuInput: CreateGpuInput) {
    return await this.prismaService.gpu.create({
      data: { ...createGpuInput },
    });
  }

  async findAll() {
    return await this.prismaService.gpu.findMany();
  }

  async findOne(id: string) {
    const gpu = await this.prismaService.gpu.findUnique({
      where: { id },
    });
    if (!gpu) throw new NotFoundException('Not Found');
    return gpu;
  }

  async update(updateGpuInput: UpdateGpuInput) {
    const { id, ...rest } = updateGpuInput;
    return await this.prismaService.gpu.update({
      where: { id },
      data: { ...rest },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} gpu`;
  }
}
