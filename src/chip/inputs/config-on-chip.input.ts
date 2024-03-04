import { InputType, Field, ID, Float } from '@nestjs/graphql';
import { IsDecimal, IsNotEmpty, IsPositive, IsUUID } from 'class-validator';
import { NeuralEngine } from '../enums';

@InputType()
export class ConfigOnChipInput {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  cpuId: string;

  @IsUUID()
  @Field(() => ID)
  gpuId: string;

  @IsNotEmpty()
  @Field(() => NeuralEngine)
  neuralEngine: string;

  @IsNotEmpty()
  @IsPositive()
  @IsDecimal()
  @Field(() => Float)
  price: number;
}
