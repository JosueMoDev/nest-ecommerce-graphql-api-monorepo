import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Color } from '../color/entities/color.entity';
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

@ObjectType()
export class ColorAndStock {
  @Field(() => [ColorOnProduct])
  colorAndStock: ColorOnProduct[];
}
