
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PriceFormat } from "@/components/product/PriceFormat";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product by ID
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/')}>Back to Homepage</Button>
        </div>
      </Layout>
    );
  }
  
  // Get related products (same category, excluding current product)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };
  
  // Handle quantity change
  const updateQuantity = (value: number) => {
    if (value < 1) return;
    if (value > 10) return;
    setQuantity(value);
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-6 flex items-center text-sm">
          <Link to="/" className="hover:underline text-muted-foreground">Home</Link>
          <span className="mx-2">/</span>
          <Link to={`/category/${product.category}`} className="hover:underline text-muted-foreground">
            {product.category.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg bg-white dark:bg-secondary">
            <div className="aspect-square relative">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                  <Badge variant="destructive" className="text-lg py-2 px-4">Out of Stock</Badge>
                </div>
              )}
              {product.originalPrice && product.originalPrice > product.price && (
                <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-base py-1.5 px-3">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </Badge>
              )}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={cn(
                      "w-5 h-5",
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
              <span className="text-muted-foreground">
                {product.rating} rating
              </span>
            </div>
            
            <div className="mb-6">
              <PriceFormat 
                amount={product.price} 
                originalPrice={product.originalPrice} 
                className="text-xl"
              />
            </div>
            
            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Brand</span>
                <p>{product.brand}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Category</span>
                <p>{product.category.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground">Availability</span>
                <p>
                  {product.inStock ? (
                    <span className="text-green-600 font-medium">In Stock</span>
                  ) : (
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  )}
                </p>
              </div>
            </div>
            
            {product.inStock && (
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border rounded-md">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="rounded-r-none"
                    onClick={() => updateQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus">
                      <path d="M5 12h14"/>
                    </svg>
                  </Button>
                  <span className="px-4 py-2 border-l border-r">{quantity}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="rounded-l-none"
                    onClick={() => updateQuantity(quantity + 1)}
                    disabled={quantity >= 10}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                      <path d="M5 12h14"/>
                      <path d="M12 5v14"/>
                    </svg>
                  </Button>
                </div>
                
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1"
                  disabled={!product.inStock}
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                
                <Button 
                  variant="secondary"
                  className="flex-1"
                  size="lg"
                  onClick={() => {
                    handleAddToCart();
                    navigate('/cart');
                  }}
                >
                  Buy Now
                </Button>
              </div>
            )}
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="m9 11 3 3L22 4"/>
                </svg>
                <span>Free shipping on orders over ₹5,000</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="m9 11 3 3L22 4"/>
                </svg>
                <span>1 year warranty</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <path d="m9 11 3 3L22 4"/>
                </svg>
                <span>7-day easy return policy</span>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="details" className="mb-12">
          <TabsList className="mb-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="text-muted-foreground space-y-4">
            <h3 className="text-xl font-medium text-foreground">Product Description</h3>
            <p>{product.description}</p>
            <p>
              Experience the ultimate in gaming performance with this premium product from {product.brand}. 
              Designed for serious gamers who demand the best, this {product.category.replace(/-/g, ' ')} 
              delivers exceptional quality and performance for your gaming needs.
            </p>
            <p>
              With cutting-edge features and premium build quality, this product is built to enhance 
              your gaming experience and give you the competitive edge you need.
            </p>
          </TabsContent>
          
          <TabsContent value="specifications">
            <h3 className="text-xl font-medium mb-4">Technical Specifications</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <tr key={key} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                      <td className="px-4 py-3 border-b text-muted-foreground w-1/3 md:w-1/4">
                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                      </td>
                      <td className="px-4 py-3 border-b">
                        {typeof value === 'boolean' ? 
                          (value ? 'Yes' : 'No') : 
                          value.toString()
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="shipping" className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Shipping Information</h3>
              <p className="text-muted-foreground">
                We offer free shipping on all orders over ₹5,000. For orders below ₹5,000, 
                a shipping fee of ₹250 will be applied. Most orders are processed and shipped 
                within 1-2 business days.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Return Policy</h3>
              <p className="text-muted-foreground">
                We offer a 7-day return policy on most items. If you are not satisfied with your 
                purchase, you can return it within 7 days of delivery for a full refund or exchange. 
                The item must be unused and in its original packaging.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Warranty Information</h3>
              <p className="text-muted-foreground">
                All products come with a 1-year manufacturer warranty. Extended warranty options 
                may be available for select products. Please contact our customer service for 
                more information.
              </p>
            </div>
          </TabsContent>
        </Tabs>
        
        <Separator className="mb-12" />
        
        {relatedProducts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {relatedProducts.map((product) => (
                <div key={product.id} className="gaming-card gaming-glow overflow-hidden rounded-lg">
                  <Link to={`/product/${product.id}`} className="block aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                  <div className="p-4">
                    <Link 
                      to={`/product/${product.id}`} 
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {product.name}
                    </Link>
                    <div className="flex items-center justify-between mt-2">
                      <PriceFormat amount={product.price} />
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
