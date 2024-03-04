import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ConfigOnChip, StorageOnChip, UnifedMemoryOnChip } from './';

@ObjectType()
export class Chip {
  @Field(() => ID, { description: 'Chip ID' })
  id: string;

  @Field(() => String)
  chipFamilyName: string;

  @Field(() => String)
  gama: string;

  @Field(() => String)
  name: string;

  // *Relations
  @Field(() => [StorageOnChip])
  storageOnChip: StorageOnChip[];

  @Field(() => [UnifedMemoryOnChip])
  unifedMemoryOnChip: UnifedMemoryOnChip[];

  @Field(() => [ConfigOnChip])
  configOnChip: ConfigOnChip[];
}
