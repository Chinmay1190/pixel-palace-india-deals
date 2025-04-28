
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  
  // If the user navigates directly to this page without items in cart, redirect to home
  useEffect(() => {
    if (items.length > 0) {
      // In a real application, we would handle order completion here
      // This could include saving the order to a database, etc.
    }
  }, [items]);
  
  return (
    <Layout>
      <div className="container py-12 flex flex-col items-center max-w-md mx-auto text-center">
        <div className="mb-6 bg-green-100 dark:bg-green-900/30 h-24 w-24 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
        <p className="text-muted-foreground mb-6">
          Your order has been placed successfully. We've sent you an email with the order details.
        </p>
        
        <div className="gaming-card p-6 w-full mb-6">
          <div className="mb-4">
            <h3 className="font-medium mb-1">Order Number</h3>
            <p className="text-primary font-mono">ORD-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-medium mb-1">Estimated Delivery</h3>
            <p>{new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Payment Method</h3>
            <p>Online Payment</p>
          </div>
        </div>
        
        <div className="space-y-4 w-full">
          <Button
            onClick={() => navigate("/orders")}
            variant="outline"
            className="w-full"
          >
            View Order
          </Button>
          
          <Button
            onClick={() => navigate("/")}
            className="w-full"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
