import { InputType, Int, Field, ID } from '@nestjs/graphql';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUUID,
} from 'class-validator';

@InputType()
class ItemInOrder {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  stockId: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Field(() => Int)
  quantity: number;
}
@InputType()
export class CreateOrderInput {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  userId: string;

  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  shippingAddressId: string;

  @IsNotEmpty()
  @IsArray()
  @Field(() => [ItemInOrder])
  itemsInOrder: ItemInOrder[];
}
