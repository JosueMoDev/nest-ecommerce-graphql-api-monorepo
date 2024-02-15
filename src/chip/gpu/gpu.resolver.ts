import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GpuService } from './gpu.service';
import { Gpu } from './entities/gpu.entity';
import { CreateGpuInput } from './dto/create-gpu.input';
import { UpdateGpuInput } from './dto/update-gpu.input';

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
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gpuService.findOne(id);
  }

  @Mutation(() => Gpu)
  updateGpu(@Args('updateGpuInput') updateGpuInput: UpdateGpuInput) {
    return this.gpuService.update(updateGpuInput.id, updateGpuInput);
  }

  @Mutation(() => Gpu)
  removeGpu(@Args('id', { type: () => Int }) id: number) {
    return this.gpuService.remove(id);
  }
}
