import { Inject, Injectable } from '@nestjs/common';
import { CreateChipInput } from './inputs/create-chip.input';
import { UpdateChipInput } from './inputs/update-chip.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChipService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  create(createChipInput: CreateChipInput) {
    return 'This action adds a new chip';
  }

  findAll() {
    return `This action returns all chip`;
  }

  async findOne(id: string) {
    return await this.prismaService.chip.findUnique({ where: { id } });
  }

  update(id: number, updateChipInput: UpdateChipInput) {
    return `This action updates a #${id} chip`;
  }

  remove(id: number) {
    return `This action removes a #${id} chip`;
  }
}
