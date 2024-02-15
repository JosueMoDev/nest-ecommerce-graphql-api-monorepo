import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUndefinedMemoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
