import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  CLIENT,
  USER,
  SUPERUSER,
}
registerEnumType(UserRole, { name: 'UserRole' });
