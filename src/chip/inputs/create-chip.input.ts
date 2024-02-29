import { InputType, Field } from '@nestjs/graphql';
import { ChipFamilyName, ChipGama } from '../enums';
import { IsArray, IsEnum, IsNotEmpty } from 'class-validator';
import { OnChipInput } from './on-chip.input';
import { Type } from 'class-transformer';
import { ConfigOnChipInput } from './';

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


  // *Relations
  @IsNotEmpty()
  @IsArray()
  @Type(() => OnChipInput)
  @Field(() => [OnChipInput])
  storageOnChip: OnChipInput[];

  @IsNotEmpty()
  @IsArray()
  @Type(() => OnChipInput)
  @Field(() => [OnChipInput])
  unifiedMemoryOnChip: OnChipInput[];

  @IsNotEmpty()
  @IsArray()
  @Type(() => ConfigOnChipInput)
  @Field(() => [ConfigOnChipInput])
  configOnChip: ConfigOnChipInput[];

}
