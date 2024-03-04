import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

@InputType()
export class CreateGpuInput {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field(() => Int)
  cores: number;
}
