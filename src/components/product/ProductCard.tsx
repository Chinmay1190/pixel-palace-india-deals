
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PriceFormat } from "./PriceFormat";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();
  
  return (
    <div className={cn(
      "group relative flex flex-col overflow-hidden rounded-lg gaming-card",
      className
    )}>
      {/* Product Image with Hover Zoom */}
      <Link 
        to={`/product/${product.id}`} 
        className="aspect-square overflow-hidden relative"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <Badge variant="destructive" className="text-base py-1 px-3">Out of Stock</Badge>
          </div>
        )}
        
        {/* Discount Badge */}
        {product.originalPrice && product.originalPrice > product.price && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
            Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </Badge>
        )}
      </Link>
      
      {/* Product Info */}
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex items-center gap-1 mb-1">
          {/* Star Rating */}
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={cn(
                  "w-3.5 h-3.5",
                  index < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            {product.rating}
          </span>
        </div>
        
        <Link to={`/product/${product.id}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-medium text-lg mb-1 line-clamp-2">{product.name}</h3>
        </Link>
        
        <div className="text-sm text-muted-foreground mb-2">
          {product.brand}
        </div>
        
        <PriceFormat 
          amount={product.price} 
          originalPrice={product.originalPrice}
          className="mb-4 mt-auto"
        />
        
        <Button 
          onClick={(e) => {
            e.preventDefault();
            if (product.inStock) {
              addToCart(product);
            }
          }}
          disabled={!product.inStock}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
}
