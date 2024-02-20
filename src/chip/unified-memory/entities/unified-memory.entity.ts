import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class UnifiedMemory {
  @Field(() => ID, { description: 'Undefined Memory ID' })
  id: string;

  @Field(() => Int)
  capacity: number;
}
