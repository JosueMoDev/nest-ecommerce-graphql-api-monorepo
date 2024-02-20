import { Module } from '@nestjs/common';
import { ChipService } from './chip.service';
import { ChipResolver } from './chip.resolver';
import { ChipFamilyModule } from './chip-family/chip-family.module';
import { StorageModule } from './storage/storage.module';
import { CpuModule } from './cpu/cpu.module';
import { GpuModule } from './gpu/gpu.module';
import { UndefinedMemoryModule } from './undefined-memory/undefined-memory.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ChipResolver, ChipService, PrismaService],
  imports: [
    ChipFamilyModule,
    StorageModule,
    CpuModule,
    GpuModule,
    UndefinedMemoryModule,
  ],
})
export class ChipModule {}
