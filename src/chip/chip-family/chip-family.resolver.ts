import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ChipFamilyService } from './chip-family.service';
import { ChipFamily } from './entities/chip-family.entity';
import { CreateChipFamilyInput } from './inputs/create-chip-family.input';
import { UpdateChipFamilyInput } from './inputs/update-chip-family.input';

@Resolver(() => ChipFamily)
export class ChipFamilyResolver {
  constructor(private readonly chipFamilyService: ChipFamilyService) {}

  @Mutation(() => ChipFamily)
  createChipFamily(
    @Args('createChipFamilyInput') createChipFamilyInput: CreateChipFamilyInput,
  ) {
    return this.chipFamilyService.create(createChipFamilyInput);
  }

  @Query(() => [ChipFamily], { name: 'chipFamily' })
  findAll() {
    return this.chipFamilyService.findAll();
  }

  @Query(() => ChipFamily, { name: 'chipFamily' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.chipFamilyService.findOne(id);
  }

  @Mutation(() => ChipFamily)
  updateChipFamily(
    @Args('updateChipFamilyInput') updateChipFamilyInput: UpdateChipFamilyInput,
  ) {
    return this.chipFamilyService.update(
      updateChipFamilyInput.id,
      updateChipFamilyInput,
    );
  }

  @Mutation(() => ChipFamily)
  removeChipFamily(@Args('id', { type: () => Int }) id: number) {
    return this.chipFamilyService.remove(id);
  }
}
