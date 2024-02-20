import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStorageInput } from './inputs/create-storage.input';
import { UpdateStorageInput } from './inputs/update-storage.input';
import { PrismaService } from 'src/prisma.service';
import { CapacityOn } from './enums/capacity-on.enum';

@Injectable()
export class StorageService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async create(createStorageInput: CreateStorageInput) {
    return await this.prismaService.storage.create({
      data: {
        capacity: createStorageInput.capacity,
        capacityOn: CapacityOn[createStorageInput.capacityOn],
      },
    });
  }

  async findAll() {
    return await this.prismaService.storage.findMany();
  }

  async findOne(id: string) {
    const storage = await this.prismaService.storage.findUnique({
      where: { id },
    });
    if (!storage) throw new NotFoundException('Not Found');
    return storage;
  }

  async update(updateStorageInput: UpdateStorageInput) {
    const storage = await this.findOne(updateStorageInput.id);
    return await this.prismaService.storage.update({
      where: { id: updateStorageInput.id },
      data: {
        capacity: updateStorageInput.capacity ?? storage.capacity,
        capacityOn:
          CapacityOn[updateStorageInput.capacityOn] ?? storage.capacityOn,
      },
    });
  }

  remove(id: string) {
    return `This action removes a #${id} storage`;
  }
}
