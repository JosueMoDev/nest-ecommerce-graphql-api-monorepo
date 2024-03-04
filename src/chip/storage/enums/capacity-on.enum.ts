import { registerEnumType } from '@nestjs/graphql';

export enum CapacityOn {
  GB,
  TB,
}
registerEnumType(CapacityOn, { name: 'CapacityOn' });
