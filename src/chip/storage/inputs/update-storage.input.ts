import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateStorageInput } from './create-storage.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateStorageInput extends PartialType(CreateStorageInput) {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  id: string;
}
