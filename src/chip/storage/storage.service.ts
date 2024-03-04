import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateStorageInput, UpdateStorageInput } from './inputs';
import { CapacityOn } from './enums/capacity-on.enum';

@Injectable()
export class StorageService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(createStorageInput: CreateStorageInput) {
    try {
      return await this.prismaService.storage.create({
        data: {
          capacity: createStorageInput.capacity,
          capacityOn: CapacityOn[createStorageInput.capacityOn],
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAll() {
    return await this.prismaService.storage.findMany();
  }

  async findOne(id: string) {
    try {
      const storage = await this.prismaService.storage.findUnique({
        where: { id },
      });
      if (!storage) throw new NotFoundException('Not Found');
      return storage;
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async update(updateStorageInput: UpdateStorageInput) {
    try {
      const storage = await this.findOne(updateStorageInput.id);
      return await this.prismaService.storage.update({
        where: { id: updateStorageInput.id },
        data: {
          capacity: updateStorageInput.capacity ?? storage.capacity,
          capacityOn:
            CapacityOn[updateStorageInput.capacityOn] ?? storage.capacityOn,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  remove(id: string) {
    return `This action removes a #${id} storage`;
  }
}
