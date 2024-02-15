import { Module } from '@nestjs/common';
import { ProductPictureService } from './product-picture.service';
import { ProductPictureResolver } from './product-picture.resolver';

@Module({
  providers: [ProductPictureResolver, ProductPictureService]
})
export class ProductPictureModule {}
