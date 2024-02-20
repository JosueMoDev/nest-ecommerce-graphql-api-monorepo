import { Module } from '@nestjs/common';
import { ChipService } from './chip.service';
import { ChipResolver } from './chip.resolver';
import { StorageModule } from './storage/storage.module';
import { CpuModule } from './cpu/cpu.module';
import { GpuModule } from './gpu/gpu.module';
import { PrismaService } from 'src/prisma.service';
import { UnifiedMemoryModule } from './unified-memory/unified-memory.module';

@Module({
  providers: [ChipResolver, ChipService, PrismaService],
  imports: [StorageModule, CpuModule, GpuModule, UnifiedMemoryModule],
})
export class ChipModule {}
