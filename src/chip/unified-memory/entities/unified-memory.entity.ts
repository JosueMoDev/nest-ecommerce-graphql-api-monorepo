import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class UnifiedMemory {
  @Field(() => ID, { description: 'Unified Memory ID' })
  id: string;

  @Field(() => Int)
  capacity: number;
}
