import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';

@ObjectType()
export class ProductPicture {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  url: string;

  // * Relations

  @Field(() => Product)
  product: Product;

}
