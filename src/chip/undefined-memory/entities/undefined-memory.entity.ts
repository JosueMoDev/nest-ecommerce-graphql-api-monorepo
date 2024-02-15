import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class UndefinedMemory {
  @Field(() => ID, { description: 'Undefined Memory ID' })
  id: string;

  @Field(() => Int)
  capacity: number;
}
