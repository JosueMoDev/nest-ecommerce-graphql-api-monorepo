import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Chip } from './chip.entity';
import { Storage } from '../storage/entities/storage.entity';

@ObjectType({ description: 'Storage On Chip' })
export class StorageOnChip {
  @Field(() => Chip)
  chip: Chip;

  @Field(() => Storage)
  storage: Storage;

  @Field(() => Float)
  price: number;
}
