import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateUnifiedMemoryInput } from './create-unified-memory.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateUnifiedMemoryInput extends PartialType(
  CreateUnifiedMemoryInput,
) {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  id: string;
}
