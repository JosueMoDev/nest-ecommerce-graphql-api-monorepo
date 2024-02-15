import { Injectable } from '@nestjs/common';
import { CreateChipInput } from './dto/create-chip.input';
import { UpdateChipInput } from './dto/update-chip.input';

@Injectable()
export class ChipService {
  create(createChipInput: CreateChipInput) {
    return 'This action adds a new chip';
  }

  findAll() {
    return `This action returns all chip`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chip`;
  }

  update(id: number, updateChipInput: UpdateChipInput) {
    return `This action updates a #${id} chip`;
  }

  remove(id: number) {
    return `This action removes a #${id} chip`;
  }
}
