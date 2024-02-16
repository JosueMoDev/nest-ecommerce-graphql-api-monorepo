import { CreateChipFamilyInput } from './create-chip-family.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChipFamilyInput extends PartialType(CreateChipFamilyInput) {
  @Field(() => Int)
  id: number;
}
