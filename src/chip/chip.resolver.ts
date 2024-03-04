import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import { ChipService } from './chip.service';
import { Chip } from './entities/chip.entity';
import { CreateChipInput, UpdateChipInput } from './inputs';

@Resolver(() => Chip)
export class ChipResolver {
  constructor(private readonly chipService: ChipService) {}

  @ResolveField()
  storageOnChip(@Root() chip: Chip) {
    return this.chipService.StorageOnChip(chip.id);
  }

  @ResolveField()
  unifedMemoryOnChip(@Root() chip: Chip) {
    return this.chipService.UnifedMemoryOnChip(chip.id);
  }

  @ResolveField()
  configOnChip(@Root() chip: Chip) {
    return this.chipService.configOnChip(chip.id);
  }

  @Mutation(() => Chip)
  createChip(@Args('createChipInput') createChipInput: CreateChipInput) {
    return this.chipService.create(createChipInput);
  }

  @Query(() => [Chip], { name: 'chips' })
  findAll() {
    return this.chipService.findAll();
  }

  @Query(() => Chip, { name: 'chip' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.chipService.findOne(id);
  }

  @Mutation(() => Chip)
  updateChip(@Args('updateChipInput') updateChipInput: UpdateChipInput) {
    return this.chipService.update(updateChipInput);
  }

  @Mutation(() => Chip)
  removeChip(@Args('id', { type: () => ID }) id: string) {
    return this.chipService.remove(id);
  }
}
