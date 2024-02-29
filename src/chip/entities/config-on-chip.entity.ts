import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import { Gpu } from '../gpu/entities/gpu.entity';
import { Cpu } from '../cpu/entities/cpu.entity';

@ObjectType({ description: 'Gpu On Chip' })
export class ConfigOnChip {

  @Field(() => ID)
  id: string;

  @Field(() => Gpu)
  gpu: Gpu;

  @Field(() => Cpu)
  cpu: Cpu;

  @Field(() => String)
  neuralEngine: string;

  @Field(() => Float)
  price: number;
}
