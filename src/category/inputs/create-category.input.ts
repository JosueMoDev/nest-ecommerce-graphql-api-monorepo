import { InputType, Field } from '@nestjs/graphql';
import { CategoryName } from '../enum/category-name.enum';
import { IsEnum, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @IsNotEmpty()
  @IsEnum(CategoryName)
  @Field(() => CategoryName)
  categoryName: string;
}
