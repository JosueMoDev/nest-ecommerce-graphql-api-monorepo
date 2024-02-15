import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Chip } from './chip.entity';
import { Cpu } from '../cpu/entities/cpu.entity';

@ObjectType({ description: 'Cpu On Chip' })
export class CpuOnChip {
  @Field(() => Chip)
  chip: Chip;

  @Field(() => Cpu)
  cpu: Cpu;

  @Field(() => Float)
  price: number;
}
