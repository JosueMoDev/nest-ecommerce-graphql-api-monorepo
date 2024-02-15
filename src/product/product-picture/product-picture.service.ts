import { Injectable } from '@nestjs/common';
import { CreateProductPictureInput } from './dto/create-product-picture.input';
import { UpdateProductPictureInput } from './dto/update-product-picture.input';

@Injectable()
export class ProductPictureService {
  create(createProductPictureInput: CreateProductPictureInput) {
    return 'This action adds a new productPicture';
  }

  findAll() {
    return `This action returns all productPicture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productPicture`;
  }

  update(id: number, updateProductPictureInput: UpdateProductPictureInput) {
    return `This action updates a #${id} productPicture`;
  }

  remove(id: number) {
    return `This action removes a #${id} productPicture`;
  }
}
