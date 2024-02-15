import { CreateGpuInput } from './create-gpu.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGpuInput extends PartialType(CreateGpuInput) {
  @Field(() => Int)
  id: number;
}
