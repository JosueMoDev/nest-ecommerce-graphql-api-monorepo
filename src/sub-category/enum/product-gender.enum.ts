import { registerEnumType } from '@nestjs/graphql';

export enum Gender {
  DISPLAY,
  LAPTOP,
  DESKTOP,
  PHONE,
  TABLET,
  WATCH,
  AUDIO,
  ACCESSORY,
  VISION,
}
registerEnumType(Gender, { name: 'Gender' });
