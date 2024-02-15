import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TechSpecsService } from './tech-specs.service';
import { TechSpec } from './entities/tech-spec.entity';
import { CreateTechSpecInput } from './dto/create-tech-spec.input';
import { UpdateTechSpecInput } from './dto/update-tech-spec.input';

@Resolver(() => TechSpec)
export class TechSpecsResolver {
  constructor(private readonly techSpecsService: TechSpecsService) {}

  @Mutation(() => TechSpec)
  createTechSpec(@Args('createTechSpecInput') createTechSpecInput: CreateTechSpecInput) {
    return this.techSpecsService.create(createTechSpecInput);
  }

  @Query(() => [TechSpec], { name: 'techSpecs' })
  findAll() {
    return this.techSpecsService.findAll();
  }

  @Query(() => TechSpec, { name: 'techSpec' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.techSpecsService.findOne(id);
  }

  @Mutation(() => TechSpec)
  updateTechSpec(@Args('updateTechSpecInput') updateTechSpecInput: UpdateTechSpecInput) {
    return this.techSpecsService.update(updateTechSpecInput.id, updateTechSpecInput);
  }

  @Mutation(() => TechSpec)
  removeTechSpec(@Args('id', { type: () => Int }) id: number) {
    return this.techSpecsService.remove(id);
  }
}
