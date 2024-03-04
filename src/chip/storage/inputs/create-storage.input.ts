import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEnum, IsInt, IsNotEmpty, IsPositive } from 'class-validator';
import { CapacityOn } from '../enums/capacity-on.enum';

@InputType()
export class CreateStorageInput {
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @Field(() => Int)
  capacity: number;

  @IsNotEmpty()
  @IsEnum(CapacityOn)
  @Field(() => CapacityOn)
  capacityOn: string;
}
