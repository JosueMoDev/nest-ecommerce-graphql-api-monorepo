import { InputType, Field, ID } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ProductGender } from '../enum/product-gender.enum';

@InputType()
export class CreateSubCategoryInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsEnum(ProductGender)
  @Field(() => ProductGender)
  productGender: string;

  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  categoryId: string;
}
