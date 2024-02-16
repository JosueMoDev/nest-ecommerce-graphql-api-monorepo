import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UndefinedMemoryService } from './undefined-memory.service';
import { UndefinedMemory } from './entities/undefined-memory.entity';
import { CreateUndefinedMemoryInput } from './inputs/create-undefined-memory.input';
import { UpdateUndefinedMemoryInput } from './inputs/update-undefined-memory.input';

@Resolver(() => UndefinedMemory)
export class UndefinedMemoryResolver {
  constructor(private readonly undefinedMemoryService: UndefinedMemoryService) {}

  @Mutation(() => UndefinedMemory)
  createUndefinedMemory(@Args('createUndefinedMemoryInput') createUndefinedMemoryInput: CreateUndefinedMemoryInput) {
    return this.undefinedMemoryService.create(createUndefinedMemoryInput);
  }

  @Query(() => [UndefinedMemory], { name: 'undefinedMemory' })
  findAll() {
    return this.undefinedMemoryService.findAll();
  }

  @Query(() => UndefinedMemory, { name: 'undefinedMemory' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.undefinedMemoryService.findOne(id);
  }

  @Mutation(() => UndefinedMemory)
  updateUndefinedMemory(@Args('updateUndefinedMemoryInput') updateUndefinedMemoryInput: UpdateUndefinedMemoryInput) {
    return this.undefinedMemoryService.update(updateUndefinedMemoryInput.id, updateUndefinedMemoryInput);
  }

  @Mutation(() => UndefinedMemory)
  removeUndefinedMemory(@Args('id', { type: () => Int }) id: number) {
    return this.undefinedMemoryService.remove(id);
  }
}
