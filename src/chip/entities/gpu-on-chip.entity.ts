import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Gpu } from '../gpu/entities/gpu.entity';

@ObjectType({ description: 'Gpu On Chip' })
export class GpuOnChip {
  @Field(() => Gpu)
  gpu: Gpu;

  @Field(() => Float)
  price: number;
}
