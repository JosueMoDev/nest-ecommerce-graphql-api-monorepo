import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductPictureInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
