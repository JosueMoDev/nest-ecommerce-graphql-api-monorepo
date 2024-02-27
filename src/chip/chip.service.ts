import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateChipInput, UpdateChipInput } from './inputs';
import { ChipFamilyName, ChipGama, NeuralEngine } from './enums';

@Injectable()
export class ChipService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async StorageOnChip(chipId: string) {
    try {
      return await this.prismaService.storageOnChip.findMany({
        where: { chipId },
        select: {
          storage: {
            select: {
              id: true,
              capacity: true,
              capacityOn: true,
            },
          },
          price: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async UnifedMemoryOnChip(chipId: string) {
    try {
      return await this.prismaService.unifiedMemoryOnChip.findMany({
        where: { chipId },
        select: {
          unifiedMemory: {
            select: {
              id: true,
              capacity: true,
            },
          },
          price: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async CpuOnChip(chipId: string) {
    try {
      return await this.prismaService.cpuOnChip.findMany({
        where: { chipId },
        select: {
          cpu: {
            select: {
              id: true,
              cores: true,
            },
          },
          price: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async GpuOnChip(chipId: string) {
    try {
      return await this.prismaService.gpuOnChip.findMany({
        where: { chipId },
        select: {
          gpu: {
            select: {
              id: true,
              cores: true,
            },
          },
          price: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async create(createChipInput: CreateChipInput) {
    try {
      const {
        cpuOnChip,
        gpuOnChip,
        unifiedMemoryOnChip,
        storageOnChip,
        ...rest
      } = createChipInput;

      const neuralEngineArray = rest.neuralEngine.map(
        (neuralEngine) => NeuralEngine[neuralEngine],
      );

      const gpuArray = gpuOnChip.map(({ id, price }) => ({ gpuId: id, price }));
      const cpuArray = cpuOnChip.map(({ id, price }) => ({ cpuId: id, price }));
      const storageArray = storageOnChip.map(({ id, price }) => ({
        storageId: id,
        price,
      }));
      const unifiedMemoryArray = unifiedMemoryOnChip.map(({ id, price }) => ({
        unifiedMemoryId: id,
        price,
      }));
      return await this.prismaService.chip.create({
        data: {
          chipFamilyName: ChipFamilyName[rest.chipFamilyName],
          gama: ChipGama[rest.gama],
          name: `Apple Silicone ${ChipFamilyName[rest.chipFamilyName]} ${
            ChipGama[rest.gama]
          }`,
          neuralEngine: neuralEngineArray,
          storage: {
            create: storageArray,
          },
          unifiedMemory: {
            create: unifiedMemoryArray,
          },
          gpu: {
            create: gpuArray,
          },
          cpu: {
            create: cpuArray,
          },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAll() {
    return await this.prismaService.chip.findMany({});
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.chip.findUnique({
        where: { id },
        include: { storage: true, cpu: true, gpu: true, unifiedMemory: true },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  update(updateChipInput: UpdateChipInput) {
    return `This action updates a chip`;
  }

  remove(id: string) {
    return `This action removes a #${id} chip`;
  }
}
