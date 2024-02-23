import { Field, Int, ID, InputType } from '@nestjs/graphql';
import { CreateColorAndStock } from '../interfaces/color-and-stock.interface';
import {
  IsInt,
  IsUUID,
  IsUrl,
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
  @IsUrl()
  @Field(() => [String])
  picturesUrls: string[];

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  @Field(() => Int)
  stock: number;
}

@InputType()
export class CreateColorAndStockInput {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  productId: string;

  @IsNotEmpty()
  @IsArray()
  @Field(() => [ColorAndStockInput])
  colorAndStock: CreateColorAndStock[];
}
