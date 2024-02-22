import { ObjectType, Field } from '@nestjs/graphql';
import { ProductPicture } from './product-picture.entity';

@ObjectType()
export class PicturesByColor {
  @Field(() => String)
  color: string;

  @Field(() => [ProductPicture])
  pictures: ProductPicture[];
}
