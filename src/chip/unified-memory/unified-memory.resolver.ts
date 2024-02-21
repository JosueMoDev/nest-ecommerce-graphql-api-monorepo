import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { UnifiedMemoryService } from './unified-memory.service';
import { UnifiedMemory } from './entities/unified-memory.entity';
import { CreateUnifiedMemoryInput, UpdateUnifiedMemoryInput } from './inputs';

@Resolver(() => UnifiedMemory)
export class UnifiedMemoryResolver {
  constructor(private readonly unifiedMemoryService: UnifiedMemoryService) {}

  @Mutation(() => UnifiedMemory)
  createUnifiedMemory(
    @Args('createUnifiedMemoryInput')
    createUndefinedMemoryInput: CreateUnifiedMemoryInput,
  ) {
    return this.unifiedMemoryService.create(createUndefinedMemoryInput);
  }

  @Query(() => [UnifiedMemory], { name: 'unifiedMemories' })
  findAll() {
    return this.unifiedMemoryService.findAll();
  }

  @Query(() => UnifiedMemory, { name: 'unifiedMemory' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.unifiedMemoryService.findOne(id);
  }

  @Mutation(() => UnifiedMemory)
  updateUnifiedMemory(
    @Args('updateUnifedMemoryInput')
    updateUnifiedMemoryInput: UpdateUnifiedMemoryInput,
  ) {
    return this.unifiedMemoryService.update(updateUnifiedMemoryInput);
  }

  @Mutation(() => UnifiedMemory)
  removeUnifedMemory(@Args('id', { type: () => ID }) id: string) {
    return this.unifiedMemoryService.remove(id);
  }
}
