import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Root,
  ID,
} from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './inputs/create-product.input';
import { UpdateProductInput } from './inputs/update-product.input';
import { SubCategory } from 'src/sub-category/entities/sub-category.entity';
import { Chip } from 'src/chip/entities';
import { ProductPicture, StockByColor } from './entities';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @ResolveField(() => SubCategory)
  subCategory(@Root() product: Product) {
    return this.productService.subCategory(product.id);
  }

  @ResolveField(() => Chip)
  chip(@Root() product: Product) {
    return this.productService.chip(product.id);
  }

  @ResolveField(() => [StockByColor])
  stockByColor(@Root() product: Product) {
    return this.productService.stockByColor(product.id);
  }

  @ResolveField(() => [ProductPicture])
  picturesByColor(@Root() product: Product) {
    return this.productService.picturesByColor(product.id);
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.createProduct(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }
}
