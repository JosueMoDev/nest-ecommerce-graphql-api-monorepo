import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

@InputType()
export class CreateUnifiedMemoryInput {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field(() => Int)
  capacity: number;
}
