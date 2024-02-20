import { ObjectType, Field, ID } from '@nestjs/graphql';
import { NeuralEngine, ChipFamilyName, ChipGama } from '../enums';
import { StorageOnChip } from './storage-on-chip.entity';

@ObjectType()
export class Chip {
  @Field(() => ID, { description: 'Chip ID' })
  id: string;

  @Field(() => ChipFamilyName)
  chipFamilyName: ChipFamilyName;

  @Field(() => ChipGama)
  gama: ChipGama;

  @Field(() => [NeuralEngine])
  neuralEngine: NeuralEngine[];

  // *Relations
  @Field(() => [StorageOnChip])
  storageOnChip: StorageOnChip[];
}
