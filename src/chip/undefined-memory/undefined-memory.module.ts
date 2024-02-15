import { Module } from '@nestjs/common';
import { UndefinedMemoryService } from './undefined-memory.service';
import { UndefinedMemoryResolver } from './undefined-memory.resolver';

@Module({
  providers: [UndefinedMemoryResolver, UndefinedMemoryService]
})
export class UndefinedMemoryModule {}
