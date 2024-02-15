import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Color } from '../color/entities/color.entity';
import { ProductPicture } from '../product-picture/entities/product-picture.entity';
import { Product } from './product.entity';

@ObjectType()
export class ColorOnProduct {
  @Field(() => Color)
  color: Color;

  @Field(() => Product)
  product: Product;

  @Field(() => Int)
  stock: number;
}
