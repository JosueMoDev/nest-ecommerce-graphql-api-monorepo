import { Field, Int, ID, InputType } from '@nestjs/graphql';
import {
  IsInt,
  IsUUID,
  IsPositive,
  IsNotEmpty,
  IsArray,
} from 'class-validator';

@InputType()
class ColorAndStockInput {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  colorId: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(() => Int)
  stock: number;
}

@InputType()
export class SetStockByColorInput {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  productId: string;

  @IsNotEmpty()
  @IsArray()
  @Field(() => [ColorAndStockInput])
  colorAndStock: ColorAndStockInput[];
}
