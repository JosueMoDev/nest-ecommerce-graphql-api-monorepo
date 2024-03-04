import { InputType, Int, Field, ID, Float } from '@nestjs/graphql';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUUID,
} from 'class-validator';

@InputType()
export class ProductDetailsInput {
  @IsOptional()
  @IsUUID()
  @Field(() => ID, { nullable: true })
  storageOnChipId?: string | null;

  @IsOptional()
  @IsUUID()
  @Field(() => ID, { nullable: true })
  unifiedMemoryOnChipId?: string | null;

  @IsOptional()
  @IsUUID()
  @Field(() => ID, { nullable: true })
  configOnChipId?: string | null;
}
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

  @IsOptional()
  @IsUUID()
  @Field(() => ProductDetailsInput, { nullable: true })
  productDetails?: ProductDetailsInput | null;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Field(() => Int)
  quantity: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Field(() => Float)
  price: number;
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
