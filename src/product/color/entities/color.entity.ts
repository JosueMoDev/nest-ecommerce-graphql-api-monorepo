import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Color {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  hexadecimalColor: string;
}
