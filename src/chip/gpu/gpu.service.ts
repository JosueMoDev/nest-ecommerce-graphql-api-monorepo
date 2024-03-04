import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateGpuInput, UpdateGpuInput } from './inputs';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GpuService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(createGpuInput: CreateGpuInput) {
    try {
      return await this.prismaService.gpu.create({
        data: { ...createGpuInput },
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
      const gpu = await this.prismaService.gpu.findUnique({
        where: { id },
      });
      if (!gpu) throw new NotFoundException('Not Found');
      return gpu;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async update(updateGpuInput: UpdateGpuInput) {
    try {
      const { id, cores } = updateGpuInput;
      await this.findOne(id);
      return await this.prismaService.gpu.update({
        where: { id },
        data: { cores },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} gpu`;
  }
}
