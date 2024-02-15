import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { CpuResolver } from './cpu.resolver';

@Module({
  providers: [CpuResolver, CpuService]
})
export class CpuModule {}
