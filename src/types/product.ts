
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  brand: string;
  image: string;
  rating: number;
  inStock: boolean;
  featured?: boolean;
  specifications: Record<string, string | number | boolean>;
  tags?: string[];
  createdAt: string;
}

export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
};

export type Brand = {
  id: string;
  name: string;
  logo?: string;
};
