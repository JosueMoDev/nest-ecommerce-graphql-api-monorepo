import { Module } from '@nestjs/common';
import { ColorService } from './color.service';
import { ColorResolver } from './color.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ColorResolver, ColorService, PrismaService],
})
export class ColorModule {}
