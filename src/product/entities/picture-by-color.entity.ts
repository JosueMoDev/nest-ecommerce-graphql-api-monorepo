import { ObjectType, Field } from '@nestjs/graphql';
import { Color } from '../color/entities/color.entity';
import { ProductPicture } from '../product-picture/entities/product-picture.entity';

@ObjectType()
export class PictureByColor {

  @Field(() => Color)
  colorProduct: Color;

  @Field(() => ProductPicture)
  pictureProduct: string;

}
