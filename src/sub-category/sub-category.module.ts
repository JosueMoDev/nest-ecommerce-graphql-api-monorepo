import { Module } from '@nestjs/common';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryResolver } from './sub-category.resolver';
import { CategoryModule } from 'src/category/category.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [SubCategoryResolver, SubCategoryService, PrismaService],
  imports: [CategoryModule],
})
export class SubCategoryModule {}
