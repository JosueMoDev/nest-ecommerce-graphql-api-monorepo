import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';
// import { ProductDetails } from '../interfaces/productDetails.inteface';
import { Product } from 'src/product/entities/product.entity';
import { Order } from 'src/orders/entities/order.entity';

@ObjectType()
export class OrderItem {
  @Field(() => ID, { description: 'Order Item Id' })
  id: string;

  @Field(() => Int)
  quantity: number;

  @Field(() => Float)
  price: number;
  //TODO implement a class to type and validate 'productDetails'
  // @Field(() => ProductDetails)
  // productDetails?: ProductDetails;

  // * Relations
  @Field(() => Product)
  product: Product;

  @Field(() => Order)
  order: Order;
}
