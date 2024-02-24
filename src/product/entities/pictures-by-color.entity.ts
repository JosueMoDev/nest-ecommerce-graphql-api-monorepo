import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
class ProductPicture {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  url: string;
}

@ObjectType()
export class PicturesByColor {
  @Field(() => String)
  color: string;

  @Field(() => [ProductPicture])
  productPictures: ProductPicture[];
}
