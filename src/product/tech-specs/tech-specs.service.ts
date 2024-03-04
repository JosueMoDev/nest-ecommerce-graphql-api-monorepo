import { Injectable } from '@nestjs/common';
import { CreateTechSpecInput } from './inputs/create-tech-spec.input';
import { UpdateTechSpecInput } from './inputs/update-tech-spec.input';

@Injectable()
export class TechSpecsService {
  create(createTechSpecInput: CreateTechSpecInput) {
    return 'This action adds a new techSpec';
  }

  findAll() {
    return `This action returns all techSpecs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} techSpec`;
  }

  update(id: number, updateTechSpecInput: UpdateTechSpecInput) {
    return `This action updates a #${id} techSpec`;
  }

  remove(id: number) {
    return `This action removes a #${id} techSpec`;
  }
}
