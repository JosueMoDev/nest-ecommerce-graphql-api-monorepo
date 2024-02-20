import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ID,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import { ShippingAddressService } from './shipping-address.service';
import { ShippingAddress } from './entities/shipping-address.entity';
import { CreateShippingAddressInput } from './inputs/create-shipping-address.input';
import { UpdateShippingAddressInput } from './inputs/update-shipping-address.input';

@Resolver(() => ShippingAddress)
export class ShippingAddressResolver {
  constructor(
    private readonly shippingAddressService: ShippingAddressService,
  ) {}

  @ResolveField()
  user(@Root() shippingAddress: ShippingAddress) {
    return this.shippingAddressService.user(shippingAddress.id);
  }

  @ResolveField()
  country(@Root() shippingAddress: ShippingAddress) {
    return this.shippingAddressService.country(shippingAddress.id);
  }

  @Mutation(() => ShippingAddress)
  createShippingAddress(
    @Args('createShippingAddressInput')
    createShippingAddressInput: CreateShippingAddressInput,
  ) {
    return this.shippingAddressService.create(createShippingAddressInput);
  }

  @Query(() => [ShippingAddress], { name: 'shippingAddresses' })
  findAll() {
    return this.shippingAddressService.findAll();
  }

  @Query(() => ShippingAddress, { name: 'shippingAddress' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.shippingAddressService.findOne(id);
  }

  @Mutation(() => ShippingAddress)
  updateShippingAddress(
    @Args('updateShippingAddressInput')
    updateShippingAddressInput: UpdateShippingAddressInput,
  ) {
    return this.shippingAddressService.update(updateShippingAddressInput);
  }

  @Mutation(() => ShippingAddress)
  removeShippingAddress(@Args('id', { type: () => Int }) id: number) {
    return this.shippingAddressService.remove(id);
  }
}
