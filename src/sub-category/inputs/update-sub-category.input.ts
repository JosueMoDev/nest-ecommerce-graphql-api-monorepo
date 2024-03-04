import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateSubCategoryInput } from './create-sub-category.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubCategoryInput extends PartialType(
  CreateSubCategoryInput,
) {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  id: string;
}
