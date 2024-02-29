import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
import {
  ConfigOnChip,
  StorageOnChip,
  UnifedMemoryOnChip,
} from 'src/chip/entities';
// import { ProductDetails } from '../interfaces/productDetails.inteface';
@ObjectType()
export class ProductDetails {
  @Field(() => StorageOnChip, { nullable: true })
  storageOnChip?: StorageOnChip | null;

  @Field(() => UnifedMemoryOnChip, { nullable: true })
  unifiedMemoryOnChip?: UnifedMemoryOnChip | null;

  @Field(() => ConfigOnChip, { nullable: true })
  configOnChip?: ConfigOnChip | null;
}
@ObjectType()
export class OrderItem {
  @Field(() => ID, { description: 'Order Item Id' })
  id: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => ProductDetails)
  productDetails?: ProductDetails;

  @Field(() => Float)
  price: string;

  // * Relations
  @Field(() => String)
  product: string;
}
