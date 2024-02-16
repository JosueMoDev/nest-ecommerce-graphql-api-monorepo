import { Injectable } from '@nestjs/common';
import { CreateCpuInput } from './inputs/create-cpu.input';
import { UpdateCpuInput } from './inputs/update-cpu.input';

@Injectable()
export class CpuService {
  create(createCpuInput: CreateCpuInput) {
    return 'This action adds a new cpu';
  }

  findAll() {
    return `This action returns all cpu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cpu`;
  }

  update(id: number, updateCpuInput: UpdateCpuInput) {
    return `This action updates a #${id} cpu`;
  }

  remove(id: number) {
    return `This action removes a #${id} cpu`;
  }
}
