import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { Order, OrderItem, User, ShippingAddress } from './entities';
import { CreateOrderInput, UpdateOrderInput } from './inputs';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @ResolveField(() => User)
  user(@Root() order: Order) {
    return this.ordersService.user(order.id);
  }

  @ResolveField(() => ShippingAddress)
  shippingAddress(@Root() order: Order) {
    return this.ordersService.shippingAddress(order.id);
  }

  @ResolveField(() => [OrderItem])
  itemsInOrder(@Root() order: Order) {
    return this.ordersService.itemsInOnder(order.id);
  }

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.ordersService.findOne(id);
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.ordersService.update(updateOrderInput);
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => ID }) id: string) {
    return this.ordersService.remove(id);
  }
}
