import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ColorService } from './color.service';
import { Color } from './entities/color.entity';
import { CreateColorInput } from './dto/create-color.input';
import { UpdateColorInput } from './dto/update-color.input';

@Resolver(() => Color)
export class ColorResolver {
  constructor(private readonly colorService: ColorService) {}

  @Mutation(() => Color)
  createColor(@Args('createColorInput') createColorInput: CreateColorInput) {
    return this.colorService.create(createColorInput);
  }

  @Query(() => [Color], { name: 'color' })
  findAll() {
    return this.colorService.findAll();
  }

  @Query(() => Color, { name: 'color' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.colorService.findOne(id);
  }

  @Mutation(() => Color)
  updateColor(@Args('updateColorInput') updateColorInput: UpdateColorInput) {
    return this.colorService.update(updateColorInput.id, updateColorInput);
  }

  @Mutation(() => Color)
  removeColor(@Args('id', { type: () => Int }) id: number) {
    return this.colorService.remove(id);
  }
}
