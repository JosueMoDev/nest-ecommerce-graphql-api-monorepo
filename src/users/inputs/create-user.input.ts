import { InputType, Field } from '@nestjs/graphql';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from '../enum/user-role.enum';

@InputType()
export class CreateUserInput {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'Name should be at least 3 characters long' })
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Field(() => String)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  password: string;

  @IsNotEmpty()
  @IsEnum(UserRole)
  @Field(() => UserRole)
  userRole: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  picture!: string;
}
