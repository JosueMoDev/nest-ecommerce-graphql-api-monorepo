import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Cpu {
  @Field(() => ID, { description: 'Storage ID' })
  id: string;

  @Field(() => Int)
  cores: number;
}
