import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Chip } from './chip.entity';
import { UndefinedMemory } from '../undefined-memory/entities/undefined-memory.entity';

@ObjectType({ description: 'Undefined Memory On Chip' })
export class StorageOnChip {
  @Field(() => Chip)
  chip: Chip;

  @Field(() => UndefinedMemory)
  undefinedMomory: UndefinedMemory;

  @Field(() => Float)
  price: number;
}
