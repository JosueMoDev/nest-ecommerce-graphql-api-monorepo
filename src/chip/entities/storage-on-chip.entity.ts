import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
// import { Chip } from './chip.entity';
import { Storage } from '../storage/entities/storage.entity';

@ObjectType({ description: 'Storage On Chip' })
export class StorageOnChip {
  @Field(() => ID)
  id: string;

  @Field(() => Storage)
  storage: Storage;

  @Field(() => Float)
  price: number;
}
