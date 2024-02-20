import { Module } from '@nestjs/common';
import { UnifiedMemoryService } from './unified-memory.service';
import { UnifiedMemoryResolver } from './unified-memory.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UnifiedMemoryResolver, UnifiedMemoryService, PrismaService],
})
export class UnifiedMemoryModule {}
