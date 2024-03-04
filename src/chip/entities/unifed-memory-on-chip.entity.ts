import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import { UnifiedMemory } from '../unified-memory/entities/unified-memory.entity';

@ObjectType({ description: 'Unified Memory On Chip' })
export class UnifedMemoryOnChip {
  @Field(() => ID)
  id: string;

  @Field(() => UnifiedMemory)
  unifiedMemory: UnifiedMemory;

  @Field(() => Float)
  price: number;
}
