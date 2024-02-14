import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';
import { Gender } from '../enum/product-gender.enum';

@ObjectType()
export class SubCategory {
  @Field(() => ID, { description: 'Subcategory Id' })
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  slug: string;
  @Field(() => Gender)
  gender: Gender;

  // * Relations
  @Field(() => Category)
  category: Category;
}
