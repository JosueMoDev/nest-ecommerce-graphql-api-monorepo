import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Cpu } from '../cpu/entities/cpu.entity';

@ObjectType({ description: 'Cpu On Chip' })
export class CpuOnChip {
  @Field(() => Cpu)
  cpu: Cpu;

  @Field(() => Float)
  price: number;
}
