import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  email: string;

  @Field(() => Date, { nullable: true })
  emailVerified: Date;

  @Field(() => String)
  role: string;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  isActive: boolean;

  @Field(() => String, { nullable: true })
  picture: string;
}
