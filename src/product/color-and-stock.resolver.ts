import { Resolver, Mutation, Args, ResolveField, Root } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateColorAndStockInput } from './inputs/create-color-and-stock.input';

@Resolver()
export class ColorAndStockResolver {
  constructor(private readonly productService: ProductService) {}

  // @ResolveField(() => [ColorOnProduct])
  // colorAndStock(@Root() product: Product) {
  //   return this.productService.colorAndStock(product.id);
  // }

  // @Mutation(() => ColorAndStock)
  // createColorAndStock(
  //   @Args('createColorAndStock')
  //   createColorAndStockInput: CreateColorAndStockInput,
  // ) {
  //   return this.productService.createColorAndStock(createColorAndStockInput);
  // }
}
