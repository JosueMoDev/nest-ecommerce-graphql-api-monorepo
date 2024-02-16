import { Injectable } from '@nestjs/common';
import { CreateChipFamilyInput } from './inputs/create-chip-family.input';
import { UpdateChipFamilyInput } from './inputs/update-chip-family.input';

@Injectable()
export class ChipFamilyService {
  create(createChipFamilyInput: CreateChipFamilyInput) {
    return 'This action adds a new chipFamily';
  }

  findAll() {
    return `This action returns all chipFamily`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chipFamily`;
  }

  update(id: number, updateChipFamilyInput: UpdateChipFamilyInput) {
    return `This action updates a #${id} chipFamily`;
  }

  remove(id: number) {
    return `This action removes a #${id} chipFamily`;
  }
}
