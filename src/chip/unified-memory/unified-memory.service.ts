import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUnifiedMemoryInput, UpdateUnifiedMemoryInput } from './inputs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UnifiedMemoryService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(createUnifiedMemoryInput: CreateUnifiedMemoryInput) {
    try {
      return await this.prismaService.unifiedMemory.create({
        data: { ...createUnifiedMemoryInput },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAll() {
    return await this.prismaService.unifiedMemory.findMany();
  }

  async findOne(id: string) {
    try {
      const unifiedMemory = await this.prismaService.unifiedMemory.findUnique({
        where: { id },
      });
      if (!unifiedMemory) throw new NotFoundException('Not Found');
      return unifiedMemory;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async update(updateUnifiedMemoryInput: UpdateUnifiedMemoryInput) {
    try {
      const { id, capacity } = updateUnifiedMemoryInput;
      await this.findOne(id);
      return await this.prismaService.unifiedMemory.update({
        where: { id },
        data: { capacity },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} undefinedMemory`;
  }
}
