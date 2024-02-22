import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ProductPicture {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  url: string;
}
