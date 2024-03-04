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
          id: true,
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
          id: true,
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

  async configOnChip(chipId: string) {
    try {
      return await this.prismaService.configOnChip.findMany({
        where: { chipId },
        select: {
          id: true,
          cpu: {
            select: {
              id: true,
              cores: true,
            },
          },
          gpu: {
            select: {
              id: true,
              cores: true,
            },
          },
          neuralEngine: true,
          price: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async create(createChipInput: CreateChipInput) {
    try {
      const { configOnChip, unifiedMemoryOnChip, storageOnChip, ...rest } =
        createChipInput;

      const configOnChipArray = configOnChip.map(
        ({ cpuId, gpuId, neuralEngine, price }) => ({
          cpuId,
          gpuId,
          neuralEngine: NeuralEngine[neuralEngine],
          price,
        }),
      );
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
          storageOnChip: {
            create: storageArray,
          },
          unifiedMemoryOnChip: {
            create: unifiedMemoryArray,
          },
          configOnChip: {
            create: configOnChipArray,
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
        include: {
          storageOnChip: true,
          configOnChip: true,
          unifiedMemoryOnChip: true,
        },
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
