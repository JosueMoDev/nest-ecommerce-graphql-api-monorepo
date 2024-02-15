import { Module } from '@nestjs/common';
import { ChipFamilyService } from './chip-family.service';
import { ChipFamilyResolver } from './chip-family.resolver';

@Module({
  providers: [ChipFamilyResolver, ChipFamilyService]
})
export class ChipFamilyModule {}
