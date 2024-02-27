import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsDate,
  IsHexColor,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateColorInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsHexColor()
  @Field(() => String)
  hexadecimalColor: string;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  release?: Date | null;
}
