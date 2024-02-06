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

  @Field(() => Date)
  emailVerified: Date;

  @Field(() => String)
  password: string;

  @Field(() => UserRole)
  role: UserRole;

  @Field(() => String)
  picture: string;
}
