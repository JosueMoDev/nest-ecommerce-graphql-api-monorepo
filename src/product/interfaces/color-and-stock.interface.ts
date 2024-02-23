export interface ColorAndStockResponse {
  stock: number;
  picturesByColor: picturesByColor[];
  color: Color;
}

export interface ColorAndStockOptions {
  colorAndStock: ColorAndStock;
  picturesByColor: picturesByColor;
}
export interface CreateColorAndStock {
  productId: string;
  colorId: string;
  picturesUrls: string[];
  stock: number;
}

interface picturesByColor {
  productPictures: ProductPicture[];
  colorName: ColorName;
}

interface ColorAndStock {
  color: Color;
  stock: number;
}

interface ProductPicture {
  id: string;
  url: string;
}

interface ColorName {
  name: string;
}

interface Color {
  id: string;
  name: string;
  hexadecimalColor: string;
  release: Date;
}
