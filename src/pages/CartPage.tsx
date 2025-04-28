
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { PriceFormat } from "@/components/product/PriceFormat";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart } from "lucide-react";

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Calculate totals
  const shipping = subtotal > 5000 ? 0 : 250;
  const total = subtotal + shipping;
  
  const handleApplyCoupon = () => {
    setIsApplyingCoupon(true);
    setTimeout(() => {
      setIsApplyingCoupon(false);
      if (couponCode.toLowerCase() === "first10") {
        toast({
          title: "Coupon applied!",
          description: "10% discount has been applied to your order.",
        });
      } else {
        toast({
          title: "Invalid coupon",
          description: "The coupon code you entered is invalid or expired.",
          variant: "destructive",
        });
      }
    }, 1000);
  };
  
  const handleCheckout = () => {
    navigate("/checkout");
  };
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="text-center max-w-md mx-auto">
            <div className="mb-6">
              <ShoppingCart className="h-20 w-20 mx-auto text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any products to your cart yet.
              Browse our collection to find something you'll love!
            </p>
            <Button
              onClick={() => navigate("/")}
              className="w-full"
              size="lg"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="gaming-card overflow-hidden">
              <div className="p-4 md:p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-medium text-xl">
                    Cart Items ({items.reduce((sum, item) => sum + item.quantity, 0)})
                  </h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
                
                {items.map((item) => (
                  <div key={item.product.id} className="flex flex-col md:flex-row gap-4 py-6 border-b last:border-0">
                    <div className="w-full md:w-24 h-24 flex-shrink-0">
                      <Link to={`/product/${item.product.id}`}>
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </Link>
                    </div>
                    
                    <div className="flex-1">
                      <Link 
                        to={`/product/${item.product.id}`}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.product.brand}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                        <div className="flex items-center">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus">
                              <path d="M5 12h14"/>
                            </svg>
                          </Button>
                          <span className="min-w-[40px] text-center">{item.quantity}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.product.id, Math.min(10, item.quantity + 1))}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus">
                              <path d="M5 12h14"/>
                              <path d="M12 5v14"/>
                            </svg>
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <PriceFormat amount={item.product.price * item.quantity} />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 6h18"/>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                              <line x1="10" y1="11" x2="10" y2="17"/>
                              <line x1="14" y1="11" x2="14" y2="17"/>
                            </svg>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate("/")}
              >
                Continue Shopping
              </Button>
              <Button 
                className="flex-1"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="gaming-card p-6 sticky top-20">
              <h2 className="font-medium text-xl mb-4">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <PriceFormat amount={subtotal} />
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  {shipping > 0 ? (
                    <PriceFormat amount={shipping} />
                  ) : (
                    <span className="text-green-600 font-medium">Free</span>
                  )}
                </div>
                
                {/* Coupon Code Form */}
                <div className="pt-3">
                  <label htmlFor="coupon" className="text-xs font-medium mb-2 block">
                    Coupon Code
                  </label>
                  <div className="flex">
                    <Input
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                      className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 border-r-0"
                    />
                    <Button
                      onClick={handleApplyCoupon}
                      disabled={!couponCode || isApplyingCoupon}
                      className="rounded-l-none"
                      variant="secondary"
                    >
                      {isApplyingCoupon ? "..." : "Apply"}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Try "FIRST10" for 10% off your first order
                  </p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-medium text-base">
                  <span>Total</span>
                  <PriceFormat amount={total} />
                </div>
              </div>
              
              <Button 
                className="w-full mt-6"
                size="lg"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
              
              <div className="mt-6 space-y-2 text-center text-xs text-muted-foreground">
                <p>Secure Checkout</p>
                <div className="flex justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-indian-rupee">
                    <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z" />
                    <path d="M8 11h8" />
                    <path d="M8 8h8" />
                    <path d="m13 17 3-6" />
                    <path d="M9 17c1 0 2-1 3-2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
