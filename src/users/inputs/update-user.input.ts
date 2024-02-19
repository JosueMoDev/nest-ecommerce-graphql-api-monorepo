import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, ID, PartialType, OmitType } from '@nestjs/graphql';

@InputType()
//   extends PartialType(
//   PickType(CreateUserInput, ['email', 'password'] as const),
// )
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['password'] as const),
) {
  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  id: string;
}
