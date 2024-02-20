import { registerEnumType } from '@nestjs/graphql';

export enum ChipGama {
  BASE,
  PRO,
  BIONIC,
  MAX,
  ULTRA,
}
registerEnumType(ChipGama, { name: 'ChipGama' });
