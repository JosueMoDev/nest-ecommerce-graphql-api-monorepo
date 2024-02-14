import { registerEnumType } from '@nestjs/graphql';

export enum CategoryName {
  IPHONE,
  IPAD,
  WATCH,
  MAC,
  VISION,
  AIRPODS,
  TVHOME,
  ACCESSORIES,
}
registerEnumType(CategoryName, { name: 'CategoryName' });
