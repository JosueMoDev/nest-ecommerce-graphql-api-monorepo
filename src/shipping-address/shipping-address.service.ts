import { Injectable } from '@nestjs/common';
import { CreateShippingAddressInput } from './dto/create-shipping-address.input';
import { UpdateShippingAddressInput } from './dto/update-shipping-address.input';

@Injectable()
export class ShippingAddressService {
  create(createShippingAddressInput: CreateShippingAddressInput) {
    return 'This action adds a new shippingAddress';
  }

  findAll() {
    return `This action returns all shippingAddress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shippingAddress`;
  }

  update(id: number, updateShippingAddressInput: UpdateShippingAddressInput) {
    return `This action updates a #${id} shippingAddress`;
  }

  remove(id: number) {
    return `This action removes a #${id} shippingAddress`;
  }
}
