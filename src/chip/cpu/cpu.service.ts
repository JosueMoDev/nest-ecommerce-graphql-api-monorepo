import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCpuInput, UpdateCpuInput } from './inputs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CpuService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(createCpuInput: CreateCpuInput) {
    try {
      return await this.prismaService.cpu.create({
        data: { ...createCpuInput },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAll() {
    return await this.prismaService.gpu.findMany();
  }

  async findOne(id: string) {
    try {
      const cpu = await this.prismaService.cpu.findUnique({
        where: { id },
      });
      if (!cpu) throw new NotFoundException('Not Found');
      return cpu;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async update(updateCpuInput: UpdateCpuInput) {
    try {
      const { id, cores } = updateCpuInput;
      await this.findOne(id);
      return await this.prismaService.cpu.update({
        where: { id },
        data: { cores },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} cpu`;
  }
}
