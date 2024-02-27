import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field(() => String, { description: 'Country id' })
  id: string;

  @Field(() => String)
  name: string;
}
