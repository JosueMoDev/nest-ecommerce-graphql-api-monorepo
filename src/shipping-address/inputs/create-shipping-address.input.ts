import { InputType, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateShippingAddressInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  lastName: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  address: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  address2?: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  postalCode: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  city: string;

  // * Relations

  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  userId: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  countryId: string;
}
