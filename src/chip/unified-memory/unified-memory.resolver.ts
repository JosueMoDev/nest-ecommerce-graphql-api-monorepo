import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UnifiedMemoryService } from './unified-memory.service';
import { UnifiedMemory } from './entities/unified-memory.entity';
import { CreateUnifiedMemoryInput, UpdateUnifiedMemoryInput } from './inputs';

@Resolver(() => UnifiedMemory)
export class UnifiedMemoryResolver {
  constructor(private readonly unifiedMemoryService: UnifiedMemoryService) {}

  @Mutation(() => UnifiedMemory)
  createUnifiedMemory(
    @Args('createUndefinedMemoryInput')
    createUndefinedMemoryInput: CreateUnifiedMemoryInput,
  ) {
    return this.unifiedMemoryService.create(createUndefinedMemoryInput);
  }

  @Query(() => [UnifiedMemory], { name: 'undefinedMemory' })
  findAll() {
    return this.unifiedMemoryService.findAll();
  }

  @Query(() => UnifiedMemory, { name: 'undefinedMemory' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.unifiedMemoryService.findOne(id);
  }

  @Mutation(() => UnifiedMemory)
  updateUnifiedMemory(
    @Args('updateUndefinedMemoryInput')
    updateUndefinedMemoryInput: UpdateUnifiedMemoryInput,
  ) {
    return this.unifiedMemoryService.update(updateUndefinedMemoryInput);
  }

  @Mutation(() => UnifiedMemory)
  removeUnifedMemory(@Args('id', { type: () => ID }) id: string) {
    return this.unifiedMemoryService.remove(id);
  }
}
