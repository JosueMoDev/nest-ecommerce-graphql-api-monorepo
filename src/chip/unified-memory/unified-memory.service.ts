import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUnifiedMemoryInput, UpdateUnifiedMemoryInput } from './inputs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UnifiedMemoryService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(createUnifiedMemoryInput: CreateUnifiedMemoryInput) {
    return await this.prismaService.unifiedMemory.create({
      data: { ...createUnifiedMemoryInput },
    });
  }

  async findAll() {
    return await this.prismaService.unifiedMemory.findMany();
  }

  async findOne(id: string) {
    const unifiedMemory = await this.prismaService.unifiedMemory.findUnique({
      where: { id },
    });
    if (!unifiedMemory) throw new NotFoundException('Not Found');
    return unifiedMemory;
  }

  async update(updateUnifiedMemoryInput: UpdateUnifiedMemoryInput) {
    const { id, ...rest } = updateUnifiedMemoryInput;
    return await this.prismaService.unifiedMemory.update({
      where: { id },
      data: { ...rest },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} undefinedMemory`;
  }
}
