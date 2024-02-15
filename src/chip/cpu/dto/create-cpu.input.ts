import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCpuInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
