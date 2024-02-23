interface Color {
  id: string;
  name: string;
  hexadecimalColor: string;
  release: Date;
}

interface PicturesByColor {
  productPictures: ProductPicture[];
  colorName: string;
}

interface ProductPicture {
  id: string;
  url: string;
}

export interface ColorAndStockResponse {
  stock: number;
  PicturesByColor: PicturesByColor[];
  color: Color;
}
