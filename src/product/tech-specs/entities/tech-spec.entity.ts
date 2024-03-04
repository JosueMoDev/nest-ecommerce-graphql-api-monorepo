import { ObjectType, Field, ID } from '@nestjs/graphql';
import { SubCategory } from 'src/sub-category/entities/sub-category.entity';

@ObjectType()
export class TechSpec {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  // TODO: implement class for tech specs
  // @Field(() => TechSpecs)
  // techSpecs: TechSpec;

  // *Relations
  @Field(() => SubCategory)
  subCategory: SubCategory;
}
