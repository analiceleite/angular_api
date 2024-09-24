export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    brand: string;
    price: number;
    rating: number;
    stock: number;
    tags: string[];
    images?: [];
    discountPercentage: number;
  }

  export interface ProductsResponse {
    products: Product[];
  }
