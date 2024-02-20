import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Chip } from './chip.entity';
import { UnifiedMemory } from '../unified-memory/entities/unified-memory.entity';

@ObjectType({ description: 'Undefined Memory On Chip' })
export class UndefinedMemoryOnChip {
  @Field(() => Chip)
  chip: Chip;

  @Field(() => UnifiedMemory)
  undefinedMomory: UnifiedMemory;

  @Field(() => Float)
  price: number;
}
