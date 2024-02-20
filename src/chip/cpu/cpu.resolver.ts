import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CpuService } from './cpu.service';
import { Cpu } from './entities/cpu.entity';
import { CreateCpuInput } from './inputs/create-cpu.input';
import { UpdateCpuInput } from './inputs/update-cpu.input';

@Resolver(() => Cpu)
export class CpuResolver {
  constructor(private readonly cpuService: CpuService) {}

  @Mutation(() => Cpu)
  createCpu(@Args('createCpuInput') createCpuInput: CreateCpuInput) {
    return this.cpuService.create(createCpuInput);
  }

  @Query(() => [Cpu], { name: 'cpu' })
  findAll() {
    return this.cpuService.findAll();
  }

  @Query(() => Cpu, { name: 'cpu' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.cpuService.findOne(id);
  }

  @Mutation(() => Cpu)
  updateCpu(@Args('updateCpuInput') updateCpuInput: UpdateCpuInput) {
    return this.cpuService.update(updateCpuInput);
  }

  @Mutation(() => Cpu)
  removeCpu(@Args('id', { type: () => ID }) id: string) {
    return this.cpuService.remove(id);
  }
}
