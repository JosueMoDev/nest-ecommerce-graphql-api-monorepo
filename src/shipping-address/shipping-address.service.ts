import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateShippingAddressInput } from './inputs/create-shipping-address.input';
import { UpdateShippingAddressInput } from './inputs/update-shipping-address.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShippingAddressService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService,
  ) {}

  async user(shippingAddressId: string) {
    try {
      return await this.prismaService.shippingAddress
        .findUnique({
          where: { id: shippingAddressId },
        })
        .user();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async country(shippingAddressId: string) {
    try {
      return await this.prismaService.shippingAddress
        .findUnique({
          where: { id: shippingAddressId },
        })
        .country();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async create(createShippingAddressInput: CreateShippingAddressInput) {
    try {
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
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAll() {
    return await this.prismaService.shippingAddress.findMany({});
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.shippingAddress.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async update(updateShippingAddressInput: UpdateShippingAddressInput) {
    try {
      const { id, ...rest } = updateShippingAddressInput;
      const address = await this.findOne(id);
      return await this.prismaService.shippingAddress.update({
        where: {
          id: updateShippingAddressInput.id,
        },
        data: {
          ...address,
          ...rest,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }
  // TODO pensar implementacion de eliminar direccion
  remove(id: string) {
    return `This action removes a #${id} shippingAddress`;
  }
}
