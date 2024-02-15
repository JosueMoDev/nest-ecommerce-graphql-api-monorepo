import { Injectable } from '@nestjs/common';
import { CreateUndefinedMemoryInput } from './dto/create-undefined-memory.input';
import { UpdateUndefinedMemoryInput } from './dto/update-undefined-memory.input';

@Injectable()
export class UndefinedMemoryService {
  create(createUndefinedMemoryInput: CreateUndefinedMemoryInput) {
    return 'This action adds a new undefinedMemory';
  }

  findAll() {
    return `This action returns all undefinedMemory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} undefinedMemory`;
  }

  update(id: number, updateUndefinedMemoryInput: UpdateUndefinedMemoryInput) {
    return `This action updates a #${id} undefinedMemory`;
  }

  remove(id: number) {
    return `This action removes a #${id} undefinedMemory`;
  }
}
