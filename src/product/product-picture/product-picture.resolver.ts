import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductPictureService } from './product-picture.service';
import { ProductPicture } from './entities/product-picture.entity';
import { CreateProductPictureInput } from './inputs/create-product-picture.input';
import { UpdateProductPictureInput } from './inputs/update-product-picture.input';

@Resolver(() => ProductPicture)
export class ProductPictureResolver {
  constructor(private readonly productPictureService: ProductPictureService) {}

  @Mutation(() => ProductPicture)
  createProductPicture(@Args('createProductPictureInput') createProductPictureInput: CreateProductPictureInput) {
    return this.productPictureService.create(createProductPictureInput);
  }

  @Query(() => [ProductPicture], { name: 'productPicture' })
  findAll() {
    return this.productPictureService.findAll();
  }

  @Query(() => ProductPicture, { name: 'productPicture' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productPictureService.findOne(id);
  }

  @Mutation(() => ProductPicture)
  updateProductPicture(@Args('updateProductPictureInput') updateProductPictureInput: UpdateProductPictureInput) {
    return this.productPictureService.update(updateProductPictureInput.id, updateProductPictureInput);
  }

  @Mutation(() => ProductPicture)
  removeProductPicture(@Args('id', { type: () => Int }) id: number) {
    return this.productPictureService.remove(id);
  }
}
