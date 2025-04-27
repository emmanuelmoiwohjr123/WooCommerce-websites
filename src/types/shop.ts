
export interface Product {
  id: number;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  shortDescription: string;
  images: string[];
  category: string;
  tags: string[];
  rating: number;
  stock: number;
  sku: string;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  featured: boolean;
}
