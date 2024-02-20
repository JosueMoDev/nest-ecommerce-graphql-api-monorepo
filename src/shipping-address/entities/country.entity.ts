import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field(() => String, { description: 'Shipping id' })
  id: string;

  @Field(() => String)
  name: string;

}
