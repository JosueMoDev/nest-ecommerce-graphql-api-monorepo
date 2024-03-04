import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateCpuInput } from './create-cpu.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCpuInput extends PartialType(CreateCpuInput) {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  id: string;
}
