import { InputType, Field, ID, Float } from '@nestjs/graphql';
import { IsDecimal, IsNotEmpty, IsPositive, IsUUID } from 'class-validator';

@InputType()
export class OnChipInput {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID, {
    description: 'Could be Storage,  Unified Memory Id',
  })
  id: string;

  @IsNotEmpty()
  @IsPositive()
  @IsDecimal()
  @Field(() => Float)
  price: number;
}
