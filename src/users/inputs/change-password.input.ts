import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ChangePasswordInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  newPassword: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @Field(() => String)
  email: string;
}
