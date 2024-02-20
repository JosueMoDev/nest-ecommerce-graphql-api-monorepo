import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { GpuService } from './gpu.service';
import { Gpu } from './entities/gpu.entity';
import { CreateGpuInput } from './inputs/create-gpu.input';
import { UpdateGpuInput } from './inputs/update-gpu.input';

@Resolver(() => Gpu)
export class GpuResolver {
  constructor(private readonly gpuService: GpuService) {}

  @Mutation(() => Gpu)
  createGpu(@Args('createGpuInput') createGpuInput: CreateGpuInput) {
    return this.gpuService.create(createGpuInput);
  }

  @Query(() => [Gpu], { name: 'gpu' })
  findAll() {
    return this.gpuService.findAll();
  }

  @Query(() => Gpu, { name: 'gpu' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.gpuService.findOne(id);
  }

  @Mutation(() => Gpu)
  updateGpu(@Args('updateGpuInput') updateGpuInput: UpdateGpuInput) {
    return this.gpuService.update(updateGpuInput);
  }

  @Mutation(() => Gpu)
  removeGpu(@Args('id', { type: () => ID }) id: string) {
    return this.gpuService.remove(id);
  }
}
