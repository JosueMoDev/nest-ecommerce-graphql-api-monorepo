import { Module } from '@nestjs/common';
import { ShippingAddressService } from './shipping-address.service';
import { ShippingAddressResolver } from './shipping-address.resolver';
import { PrismaService } from 'src/prisma.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [ShippingAddressResolver, ShippingAddressService, PrismaService],
  imports: [UsersModule]
})
export class ShippingAddressModule {}
