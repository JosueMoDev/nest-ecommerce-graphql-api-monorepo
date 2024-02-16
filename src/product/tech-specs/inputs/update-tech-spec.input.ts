import { CreateTechSpecInput } from './create-tech-spec.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTechSpecInput extends PartialType(CreateTechSpecInput) {
  @Field(() => Int)
  id: number;
}
