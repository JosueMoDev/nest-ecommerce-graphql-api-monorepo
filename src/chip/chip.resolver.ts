import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChipService } from './chip.service';
import { Chip } from './entities/chip.entity';
import { CreateChipInput } from './dto/create-chip.input';
import { UpdateChipInput } from './dto/update-chip.input';

@Resolver(() => Chip)
export class ChipResolver {
  constructor(private readonly chipService: ChipService) {}

  @Mutation(() => Chip)
  createChip(@Args('createChipInput') createChipInput: CreateChipInput) {
    return this.chipService.create(createChipInput);
  }

  @Query(() => [Chip], { name: 'chip' })
  findAll() {
    return this.chipService.findAll();
  }

  @Query(() => Chip, { name: 'chip' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.chipService.findOne(id);
  }

  @Mutation(() => Chip)
  updateChip(@Args('updateChipInput') updateChipInput: UpdateChipInput) {
    return this.chipService.update(updateChipInput.id, updateChipInput);
  }

  @Mutation(() => Chip)
  removeChip(@Args('id', { type: () => Int }) id: number) {
    return this.chipService.remove(id);
  }
}
