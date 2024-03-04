import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateColorInput } from './create-color.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateColorInput extends PartialType(CreateColorInput) {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  id: string;
}
