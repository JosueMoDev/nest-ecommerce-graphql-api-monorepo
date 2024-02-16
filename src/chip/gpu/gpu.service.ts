import { Injectable } from '@nestjs/common';
import { CreateGpuInput } from './inputs/create-gpu.input';
import { UpdateGpuInput } from './inputs/update-gpu.input';

@Injectable()
export class GpuService {
  create(createGpuInput: CreateGpuInput) {
    return 'This action adds a new gpu';
  }

  findAll() {
    return `This action returns all gpu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gpu`;
  }

  update(id: number, updateGpuInput: UpdateGpuInput) {
    return `This action updates a #${id} gpu`;
  }

  remove(id: number) {
    return `This action removes a #${id} gpu`;
  }
}
