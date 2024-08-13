import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Root,
  ID,
} from '@nestjs/graphql';
import { ProductService } from './product.service';
import {
  CreateProductInput,
  UpdateProductInput,
  SetStockByColorInput,
  PictureByColorInput,
} from './inputs';
import {
  PicturesByColor,
  StockByColor,
  SubCategory,
  Product,
  Chip,
} from './entities';

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

  @ResolveField(() => [PicturesByColor])
  picturesByColor(@Root() product: Product) {
    return this.productService.picturesByColor(product.id);
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.createProduct(createProductInput);
  }

  @Mutation(() => Product)
  setStockByColor(
    @Args('stockByColorInput')
    setStockByColorInput: SetStockByColorInput,
  ) {
    return this.productService.setStockByColor(setStockByColorInput);
  }

  @Mutation(() => Product)
  uploadPicturesByColor(
    @Args('picturesByColor')
    picturesByColor: PictureByColorInput,
    @Args('productId', { type: () => ID }) id: string,
  ) {
    return this.productService.uploadPicturesByColor(id, picturesByColor);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => [Product], { name: 'productsByCategory' })
  findManyByCategory(
    @Args('category', { type: () => String }) category: string,
  ) {
    return this.productService.findManyByCategory(category);
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('slug', { type: () => String }) slug: string) {
    return this.productService.findOne(slug);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.update(updateProductInput);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => ID }) id: string) {
    return this.productService.remove(id);
  }
}
