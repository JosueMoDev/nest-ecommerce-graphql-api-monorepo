import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Country } from './country.entity';

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

  @Field(() => String, { nullable: true})
  address2?: string | null;

  @Field(() => String)
  postalCode: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  city: string;

  // * Relations

  @Field(() => User)
  user: User;

  @Field(() => Country)
  country: Country;
}
