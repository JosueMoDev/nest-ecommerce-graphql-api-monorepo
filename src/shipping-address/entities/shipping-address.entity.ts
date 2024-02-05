import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ShippingAddress {
  @Field(() => ID, { description: 'Shipping id' })
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  address2: string;

  @Field(() => String)
  postalCode: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  city: string;
}
