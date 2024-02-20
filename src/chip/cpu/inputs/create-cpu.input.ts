import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

@InputType()
export class CreateCpuInput {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field(() => Int)
  cores: number;
}
