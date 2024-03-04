import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Storage {
  @Field(() => ID, { description: 'Storage ID' })
  id: string;

  @Field(() => Int)
  capacity: number;

  @Field(() => String)
  capacityOn: string;
}
