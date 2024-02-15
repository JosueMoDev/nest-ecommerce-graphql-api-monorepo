import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { CapacityOn } from '../enums/capacity-on.enum';

@ObjectType()
export class Storage {
  @Field(() => ID, { description: 'Storage ID' })
  id: string;

  @Field(() => Int)
  capacity: number;

  @Field(() => CapacityOn)
  capacityOn: CapacityOn;
}
