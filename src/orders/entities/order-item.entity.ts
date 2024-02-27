import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
// import { ProductDetails } from '../interfaces/productDetails.inteface';

@ObjectType()
export class OrderItem {
  @Field(() => ID, { description: 'Order Item Id' })
  id: string;

  @Field(() => Int)
  quantity: number;

  //TODO implement a class to type and validate 'productDetails'
  // @Field(() => ProductDetails)
  // productDetails?: ProductDetails;
  // productDetails: {
  //   chip: "M1 Base",
  //   storage: {
  //     capacity: "256gb",
  //     price: 0,
  //   },
  //   unifiedMemory: {},

  // }
  // * Relations
  @Field(() => String)
  product: string;
}
