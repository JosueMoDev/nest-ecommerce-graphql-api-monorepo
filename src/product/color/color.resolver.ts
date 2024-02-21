import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ColorService } from './color.service';
import { Color } from './entities/color.entity';
import { CreateColorInput } from './inputs/create-color.input';
import { UpdateColorInput } from './inputs/update-color.input';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private readonly colorService: ColorService) {}

  @Mutation(() => Color)
  createColor(@Args('createColorInput') createColorInput: CreateColorInput) {
    return this.colorService.create(createColorInput);
  }

  @Query(() => [Color], { name: 'colors' })
  findAll() {
    return this.colorService.findAll();
  }

  @Query(() => Color, { name: 'color' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.colorService.findOne(id);
  }

  @Mutation(() => Color)
  updateColor(@Args('updateColorInput') updateColorInput: UpdateColorInput) {
    return this.colorService.update(updateColorInput);
  }

  @Mutation(() => Color)
  removeColor(@Args('id', { type: () => ID }) id: string) {
    return this.colorService.remove(id);
  }
}
