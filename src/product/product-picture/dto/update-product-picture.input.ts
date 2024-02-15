import { CreateProductPictureInput } from './create-product-picture.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductPictureInput extends PartialType(CreateProductPictureInput) {
  @Field(() => Int)
  id: number;
}
