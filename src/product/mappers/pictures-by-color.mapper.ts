interface ProductPictures {
  id: string;
  url: string;
  color: Color;
}

export interface Color {
  name: string;
}
export class PicturesByColorMapper {
  static fromObject(object: ProductPictures[]) {
    const groupedByColor = object.reduce((acc, curr) => {
      const { color, id, url } = curr;
      if (!acc[color.name]) {
        acc[color.name] = { color: color.name, productPictures: [] };
      }
      acc[color.name].productPictures.push({ id, url });
      return acc;
    }, {});

    return Object.values(groupedByColor);
  }
}
