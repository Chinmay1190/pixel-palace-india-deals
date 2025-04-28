
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductCard } from "@/components/product/ProductCard";

interface FeaturedProductsProps {
  products: Product[];
  isLoading?: boolean;
}

export function FeaturedProducts({ products, isLoading = false }: FeaturedProductsProps) {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Filter featured products or get the first 8 products if none are marked as featured
    const featured = products.filter(product => product.featured);
    setFeaturedProducts(featured.length > 0 ? featured : products.slice(0, 8));
  }, [products]);

  if (isLoading) {
    return (
      <section className="container py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button variant="outline" disabled>View All</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(8).fill(0).map((_, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <Skeleton className="w-full aspect-square rounded-md" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-6 w-1/3" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <Link to="/products">
          <Button variant="outline">View All</Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
