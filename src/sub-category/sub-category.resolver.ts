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
import { CreateSubCategoryInput } from './inputs/create-sub-category.input';
import { UpdateSubCategoryInput } from './inputs/update-sub-category.input';
import { Category } from '@prisma/client';
import { Inject } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Resolver(() => SubCategory)
export class SubCategoryResolver {
  constructor(
    private readonly subCategoryService: SubCategoryService,
    @Inject(PrismaService) private prismaService: PrismaService,
  ) {}
  @ResolveField()
  category(@Root() subCategory: SubCategory): Promise<Category | null> {
    return this.prismaService.subCategory
      .findUnique({
        where: {
          id: subCategory.id,
        },
      })
      .category();
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
