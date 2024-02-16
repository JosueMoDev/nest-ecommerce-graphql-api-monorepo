import { CreateUndefinedMemoryInput } from './create-undefined-memory.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUndefinedMemoryInput extends PartialType(CreateUndefinedMemoryInput) {
  @Field(() => Int)
  id: number;
}
