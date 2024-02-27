import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Root,
  ID,
} from '@nestjs/graphql';
import { SubCategoryService } from './sub-category.service';
import { SubCategory } from './entities/sub-category.entity';
import { CreateSubCategoryInput, UpdateSubCategoryInput } from './inputs';

@Resolver(() => SubCategory)
export class SubCategoryResolver {
  constructor(private readonly subCategoryService: SubCategoryService) {}

  @ResolveField()
  category(@Root() subCategory: SubCategory) {
    return this.subCategoryService.category(subCategory.id);
  }

  @Mutation(() => SubCategory)
  createSubCategory(
    @Args('createSubCategoryInput')
    createSubCategoryInput: CreateSubCategoryInput,
  ) {
    return this.subCategoryService.create(createSubCategoryInput);
  }

  @Query(() => [SubCategory], { name: 'subCategories' })
  findAll() {
    return this.subCategoryService.findAll();
  }

  @Query(() => SubCategory, { name: 'subCategory' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.subCategoryService.findOne(id);
  }

  @Mutation(() => SubCategory)
  updateSubCategory(
    @Args('updateSubCategoryInput')
    updateSubCategoryInput: UpdateSubCategoryInput,
  ) {
    return this.subCategoryService.update(updateSubCategoryInput);
  }

  @Mutation(() => SubCategory)
  toggleSubCategoryStatus(@Args('id', { type: () => ID }) id: string) {
    return this.subCategoryService.toggleSubCategoryStatus(id);
  }
}
