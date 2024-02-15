import { ObjectType, Field, ID } from '@nestjs/graphql';
import { NeuralEngine } from '../enums/neural-engine.enum';
import { ChipFamily } from '../chip-family/entities/chip-family.entity';

@ObjectType()
export class Chip {
  @Field(() => ID, { description: 'Chip ID' })
  id: string;

  @Field(() => [NeuralEngine])
  neuralEngine: NeuralEngine[];

  // *Relations
  @Field(() => ChipFamily)
  chipFamily: ChipFamily;
}
