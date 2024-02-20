import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuResolver } from './cpu.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CpuResolver, CpuService, PrismaService],
})
export class CpuModule {}
