import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
@Module({
  providers: [ProductResolver, ProductService],
  imports: [],
})
export class ProductModule {}
