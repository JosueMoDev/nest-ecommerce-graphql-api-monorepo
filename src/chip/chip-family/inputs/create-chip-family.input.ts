import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateChipFamilyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
