import { CreateChipInput } from './create-chip.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChipInput extends PartialType(CreateChipInput) {
  @Field(() => Int)
  id: number;
}
