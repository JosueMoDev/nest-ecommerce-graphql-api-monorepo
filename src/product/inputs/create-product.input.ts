import { InputType, Field, Float, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString, IsUUID, Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Field(() => Float)
  price: number;

  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  subCategoryId: string;

  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  techSpecsOnProductId: string;

  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  chipId: string;
}
