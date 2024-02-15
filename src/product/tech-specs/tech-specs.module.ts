import { Module } from '@nestjs/common';
import { TechSpecsService } from './tech-specs.service';
import { TechSpecsResolver } from './tech-specs.resolver';

@Module({
  providers: [TechSpecsResolver, TechSpecsService]
})
export class TechSpecsModule {}
