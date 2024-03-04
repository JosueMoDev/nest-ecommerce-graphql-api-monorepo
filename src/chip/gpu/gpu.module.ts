import { Module } from '@nestjs/common';
import { GpuService } from './gpu.service';
import { GpuResolver } from './gpu.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [GpuResolver, GpuService, PrismaService],
})
export class GpuModule {}
