import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import { OrderItem } from './order-item.entity';

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
  totalOfItems: number;

  @Field(() => Boolean)
  isPaid: boolean;

  @Field(() => Date, { nullable: true })
  paidAt: Date | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;

  @Field(() => String, { nullable: true })
  transactionId: string | null;

  // * Relations

  @Field(() => [OrderItem])
  itemsInOrder: OrderItem[];
}
