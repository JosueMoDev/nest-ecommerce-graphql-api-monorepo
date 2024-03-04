import { registerEnumType } from '@nestjs/graphql';

export enum ProductGender {
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
registerEnumType(ProductGender, { name: 'ProductGender' });
