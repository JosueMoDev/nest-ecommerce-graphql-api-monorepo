import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LoginInput {
  @IsNotEmpty()
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  password: string;
}
