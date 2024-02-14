import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { ShippingAddress } from 'src/shipping-address/entities/shipping-address.entity';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Order {
  @Field(() => ID)
  id: string;

  @Field(() => Float)
  subTotal: number;

  @Field(() => Float)
  tax: number;

  @Field(() => Float)
  total: number;

  @Field(() => Int)
  itemsInOrder: number;

  @Field(() => Boolean)
  isPaid: boolean;

  @Field(() => Date)
  paidAt: Date;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => String)
  transactionId: string;

  // * Relations
  @Field(() => User)
  user: User;

  @Field(() => ShippingAddress, { nullable: true })
  shippingAddress?: ShippingAddress | null;
}
