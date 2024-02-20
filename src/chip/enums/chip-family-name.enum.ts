import { registerEnumType } from '@nestjs/graphql';

export enum ChipFamilyName {
  M1,
  M2,
  M3,
  S8,
  S9,
  A15,
  A16,
  A17,
}
registerEnumType(ChipFamilyName, { name: 'ChipFamilyName' });
