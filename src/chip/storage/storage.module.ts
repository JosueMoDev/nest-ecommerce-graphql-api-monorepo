import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageResolver } from './storage.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [StorageResolver, StorageService, PrismaService],
})
export class StorageModule {}
