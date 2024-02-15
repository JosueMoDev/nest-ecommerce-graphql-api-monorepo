import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Chip } from './chip.entity';
import { Gpu } from '../gpu/entities/gpu.entity';

@ObjectType({ description: 'Cpu On Chip' })
export class GpuOnChip {
  @Field(() => Chip)
  chip: Chip;

  @Field(() => Gpu)
  gpu: Gpu;

  @Field(() => Float)
  price: number;
}
