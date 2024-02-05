import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserRole } from './enum/user-role.enum';

@ObjectType()
export class User {
  @Field(() => ID, { description: 'User ID' })
  id:  string;

  @Field(() => String, { description: 'User name' })
  name: string;

  @Field(() => String, { description: 'User Email' })
  email: string;

  @Field(() => Date, { description: 'Confirmation account date' })
  emailVerified: Date;

  @Field(() => String, { description: 'User password' })
  password: String;

  @Field(() => UserRole, { description: 'User Role' })
  role: UserRole;

  @Field(() => String, { description: 'User picture' })
  picture: String;
}
