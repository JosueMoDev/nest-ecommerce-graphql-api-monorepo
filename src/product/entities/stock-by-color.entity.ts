import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Color } from '../color/entities/color.entity';

@ObjectType()
export class StockByColor {
  @Field(() => ID)
  id: string;

  @Field(() => Color)
  color: Color;

  @Field(() => Int)
  stock: number;
}
