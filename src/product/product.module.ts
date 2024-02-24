import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { ColorModule } from './color/color.module';
import { TechSpecsModule } from './tech-specs/tech-specs.module';
import { PrismaService } from 'src/prisma.service';
@Module({
  providers: [ProductResolver, ProductService, PrismaService],
  imports: [ColorModule, TechSpecsModule],
})
export class ProductModule {}
