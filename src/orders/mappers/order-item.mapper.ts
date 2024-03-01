interface OrderItem {
  id: string;
  price: number;
  quantity: number;
  product: Product;
  productDetailsOnItem?: ProductDetailsOnItem | null;
}

interface Product {
  name: string;
}

interface ProductDetailsOnItem {
  configOnChip?: ConfigOnChip | null;
  storageOnChip?: StorageOnChip | null;
  unifiedMemoryOnChip?: UnifiedMemoryOnChip | null;
}

interface ConfigOnChip {
  id: string;
  neuralEngine: string;
  price: number;
  cpu: {
    id: string;
    cores: number;
  };
  gpu: {
    id: string;
    cores: number;
  };
}

interface StorageOnChip {
  id: string;
  price: number;
  storage: {
    id: string;
    capacity: number;
    capacityOn: string;
  };
}
interface UnifiedMemoryOnChip {
  id: string;
  price: number;
  unifiedMemory: {
    id: string;
    capacity: number;
  };
}
export class OrderItemMapper {
  static fromObject(object: OrderItem) {
    const { productDetailsOnItem, product, id, quantity, price } = object;
    return {
      id,
      quantity,
      product: product.name,
      price,
      productDetails: productDetailsOnItem as any,
    };
  }
}
