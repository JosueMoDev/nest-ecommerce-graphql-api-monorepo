import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateShippingAddressInput } from './create-shipping-address.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateShippingAddressInput extends PartialType(CreateShippingAddressInput) {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  id: string;
}
