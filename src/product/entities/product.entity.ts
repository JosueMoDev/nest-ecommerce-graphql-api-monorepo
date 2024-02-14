import { ObjectType, Field, Float, ID } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID, { description: 'Product' })
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  slug: string;

  @Field(() => Float)
  price: number;
}
