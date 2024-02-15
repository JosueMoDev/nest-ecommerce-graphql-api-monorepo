import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ChipFamilyName } from '../enums/chip-family-name.enum';
import { ChipGama } from '../enums/chip-gama.enum';

@ObjectType()
export class ChipFamily {
  @Field(() => ID, { description: 'Chip Family ID' })
  id: string;

  @Field(() => ChipFamilyName)
  chipFamilyName: ChipFamilyName;

  @Field(() => ChipGama)
  gama: ChipGama;

  @Field(() => String)
  description: string;
}
