import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ColorModule } from './color/color.module';
import { TechSpecsModule } from './tech-specs/tech-specs.module';
import { PrismaService } from 'src/prisma.service';
import { ColorAndStockResolver } from './color-and-stock.resolver';
@Module({
  providers: [
    ProductResolver,
    ProductService,
    PrismaService,
    ColorAndStockResolver,
  ],
  imports: [ColorModule, TechSpecsModule],
})
export class ProductModule {}
