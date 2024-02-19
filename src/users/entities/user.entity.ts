import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserRole } from '../enum/user-role.enum';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Date, { nullable: true })
  emailVerified: Date;

  @Field(() => String)
  password: string;

  @Field(() => String)
  role: string;

  @Field(() => Boolean, { nullable: true, defaultValue: true })
  isActive: boolean;

  @Field(() => String, { nullable: true })
  picture: string;
}
