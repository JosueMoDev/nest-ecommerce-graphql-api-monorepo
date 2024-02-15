import { Module } from '@nestjs/common';
import { GpuService } from './gpu.service';
import { GpuResolver } from './gpu.resolver';

@Module({
  providers: [GpuResolver, GpuService]
})
export class GpuModule {}
