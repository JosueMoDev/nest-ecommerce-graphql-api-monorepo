import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTechSpecInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
