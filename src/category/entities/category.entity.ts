import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CategoryName } from '../enum/category-name.enum';

@ObjectType()
export class Category {
  @Field(() => ID, { description: 'Category Id' })
  id: string;

  @Field(() => CategoryName)
  name: CategoryName;
}
