import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Color } from '../color/entities/color.entity';

@ObjectType()
export class StockByColor {
  @Field(() => Color)
  color: Color;

  @Field(() => Int)
  stock: number;
}
