import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Gpu {
  @Field(() => ID, { description: 'GPU ID' })
  id: string;

  @Field(() => Int)
  cores: number;
}
