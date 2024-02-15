import { CreateCpuInput } from './create-cpu.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCpuInput extends PartialType(CreateCpuInput) {
  @Field(() => Int)
  id: number;
}
