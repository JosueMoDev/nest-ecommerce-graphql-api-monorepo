import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateGpuInput } from './create-gpu.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateGpuInput extends PartialType(CreateGpuInput) {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  id: string;
}
