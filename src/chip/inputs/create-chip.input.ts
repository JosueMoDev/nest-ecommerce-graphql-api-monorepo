import { InputType, Field } from '@nestjs/graphql';
import { ChipFamilyName, ChipGama, NeuralEngine } from '../enums';
import { IsArray, IsEnum, IsNotEmpty } from 'class-validator';
import { OnChipInput } from './storage-on-chip.input';
import { OnChip } from '../intefaces/storageOnChip.interface';
import { Type } from 'class-transformer';

@InputType()
export class CreateChipInput {
  @IsNotEmpty()
  @IsEnum(ChipFamilyName)
  @Field(() => ChipFamilyName)
  chipFamilyName: string;

  @IsNotEmpty()
  @IsEnum(ChipGama)
  @Field(() => ChipGama)
  gama: string;

  @IsNotEmpty()
  @Field(() => [NeuralEngine])
  neuralEngine: string[];

  // *Relations
  @IsNotEmpty()
  @IsArray()
  @Type(() => OnChipInput)
  @Field(() => [OnChipInput])
  storageOnChip: OnChip[];

  @IsNotEmpty()
  @IsArray()
  @Type(() => OnChipInput)
  @Field(() => [OnChipInput])
  unifiedMemoryOnChip: [];

  @IsNotEmpty()
  @IsArray()
  @Type(() => OnChipInput)
  @Field(() => [OnChipInput])
  cpuOnChip: OnChip[];

  @IsNotEmpty()
  @IsArray()
  @Type(() => OnChipInput)
  @Field(() => [OnChipInput])
  gpuOnChip: OnChip[];
}
