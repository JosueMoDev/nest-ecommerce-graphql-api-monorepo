import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID, IsUrl } from 'class-validator';

@InputType()
class PicturesUrl {
  @IsNotEmpty()
  @IsUrl()
  @Field(() => [String])
  urls: string[];

  @IsNotEmpty()
  @IsUUID()
  @Field(() => ID)
  colorId: string;
}

@InputType()
export class PictureByColorInput {
  @IsNotEmpty()
  @Field(() => [PicturesUrl])
  productPictures: PicturesUrl[];
}
