import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCpuInput } from './inputs/create-cpu.input';
import { UpdateCpuInput } from './inputs/update-cpu.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CpuService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(createCpuInput: CreateCpuInput) {
    return await this.prismaService.cpu.create({
      data: { ...createCpuInput },
    });
  }

  async findAll() {
    return await this.prismaService.gpu.findMany();
  }

  async findOne(id: string) {
    const cpu = await this.prismaService.cpu.findUnique({
      where: { id },
    });
    if (!cpu) throw new NotFoundException('Not Found');
    return cpu;
  }

  async update(updateCpuInput: UpdateCpuInput) {
    const { id, ...rest } = updateCpuInput;
    return await this.prismaService.cpu.update({
      where: { id },
      data: { ...rest },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} cpu`;
  }
}
