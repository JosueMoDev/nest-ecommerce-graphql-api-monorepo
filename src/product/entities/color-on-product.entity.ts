import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Color } from '../color/entities/color.entity';
// import { Product } from './product.entity';
import { PicturesByColor } from './pictures-by-color.entity';

@ObjectType()
export class ColorOnProduct {
  @Field(() => Color)
  color: Color;

  @Field(() => [PicturesByColor])
  picturesByColor: [PicturesByColor];

  @Field(() => Int)
  stock: number;
}
