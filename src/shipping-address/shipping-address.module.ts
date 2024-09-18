import { Module } from '@nestjs/common';
import { ShippingAddressService } from './shipping-address.service';
import { ShippingAddressResolver } from './shipping-address.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ShippingAddressResolver, ShippingAddressService, PrismaService],
  imports: [],
})
export class ShippingAddressModule {}
