import { ObjectType, Field, Float } from '@nestjs/graphql';
import { UnifiedMemory } from '../unified-memory/entities/unified-memory.entity';

@ObjectType({ description: 'Unified Memory On Chip' })
export class UnifedMemoryOnChip {
  @Field(() => UnifiedMemory)
  unifiedMemory: UnifiedMemory;

  @Field(() => Float)
  price: number;
}
