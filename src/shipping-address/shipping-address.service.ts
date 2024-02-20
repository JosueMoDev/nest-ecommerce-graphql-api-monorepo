import { Inject, Injectable } from '@nestjs/common';
import { CreateShippingAddressInput } from './inputs/create-shipping-address.input';
import { UpdateShippingAddressInput } from './inputs/update-shipping-address.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShippingAddressService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async user(shippingAddressId: string) {
    return await this.prismaService.shippingAddress
      .findUnique({
        where: { id: shippingAddressId },
      })
      .user();
  }

  async country(shippingAddressId: string) {
    return await this.prismaService.shippingAddress
      .findUnique({
        where: { id: shippingAddressId },
      })
      .country();
  }

  async create(createShippingAddressInput: CreateShippingAddressInput) {
    const { countryId, userId, ...rest } = createShippingAddressInput;
    return await this.prismaService.shippingAddress.create({
      data: {
        ...rest,
        country: {
          connect: {
            id: countryId,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prismaService.shippingAddress.findMany({});
  }

  async findOne(id: string) {
    return await this.prismaService.shippingAddress.findUnique({ where: { id }})
  }

  async update(updateShippingAddressInput: UpdateShippingAddressInput) {
    const { id, ...rest } = updateShippingAddressInput;
    return await this.prismaService.shippingAddress.update({
      where: {
        id: updateShippingAddressInput.id,
      },
      data: {
        ...rest
      }
    })
  }
  // TODO pensar implementacion de eliminar direccion
  remove(id: number) {
    return `This action removes a #${id} shippingAddress`;
  }
}
