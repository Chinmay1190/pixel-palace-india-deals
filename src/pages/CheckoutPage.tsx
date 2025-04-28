
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Layout } from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { PriceFormat } from "@/components/product/PriceFormat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City is required.",
  }),
  state: z.string().min(1, {
    message: "State is required.",
  }),
  pincode: z.string().min(6, {
    message: "Pincode must be at least 6 digits.",
  }),
  paymentMethod: z.enum(["cod", "online"]),
  saveInfo: z.boolean().default(false),
});

const CheckoutPage = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
  // Calculate totals
  const shipping = subtotal > 5000 ? 0 : 250;
  const total = subtotal + shipping;
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      paymentMethod: "online",
      saveInfo: false,
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      
      if (values.paymentMethod === "cod") {
        // Show success message for Cash on Delivery
        toast({
          title: "Order Placed Successfully!",
          description: "Your order has been placed and will be delivered in 3-5 business days.",
        });
      } else {
        // For online payment, redirect to a success page
        navigate("/payment-success");
      }
      
      // Clear the cart
      clearCart();
    }, 2000);
  }
  
  if (items.length === 0) {
    navigate("/cart");
    return null;
  }
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="flex-1">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="gaming-card p-6">
                  <h2 className="font-medium text-xl mb-6">Delivery Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="9999999999" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main Street, Apartment 4B" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Mumbai" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                              <SelectItem value="Delhi">Delhi</SelectItem>
                              <SelectItem value="Karnataka">Karnataka</SelectItem>
                              <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                              <SelectItem value="Gujarat">Gujarat</SelectItem>
                              <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                              <SelectItem value="West Bengal">West Bengal</SelectItem>
                              <SelectItem value="Telangana">Telangana</SelectItem>
                              <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="pincode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PIN Code</FormLabel>
                          <FormControl>
                            <Input placeholder="400001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="saveInfo"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-6">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Save this information for next time</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="gaming-card p-6">
                  <h2 className="font-medium text-xl mb-6">Payment Method</h2>
                  
                  <FormField
                    control={form.control}
                    name="paymentMethod"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormItem
                            className={`flex p-4 border rounded-lg cursor-pointer ${
                              field.value === "online" ? "border-primary bg-primary/5" : "border-border"
                            }`}
                            onClick={() => field.onChange("online")}
                          >
                            <FormControl>
                              <input
                                type="radio"
                                className="mr-2"
                                checked={field.value === "online"}
                                onChange={() => field.onChange("online")}
                              />
                            </FormControl>
                            <div className="flex-1">
                              <FormLabel
                                className="font-medium cursor-pointer"
                                onClick={(e) => {
                                  e.preventDefault();
                                  field.onChange("online");
                                }}
                              >
                                Pay Online
                              </FormLabel>
                              <FormDescription>
                                Credit/debit card, UPI, Netbanking, and more
                              </FormDescription>
                            </div>
                            <div className="ml-2 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card mr-2">
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                              </svg>
                            </div>
                          </FormItem>
                          
                          <FormItem
                            className={`flex p-4 border rounded-lg cursor-pointer ${
                              field.value === "cod" ? "border-primary bg-primary/5" : "border-border"
                            }`}
                            onClick={() => field.onChange("cod")}
                          >
                            <FormControl>
                              <input
                                type="radio"
                                className="mr-2"
                                checked={field.value === "cod"}
                                onChange={() => field.onChange("cod")}
                              />
                            </FormControl>
                            <div className="flex-1">
                              <FormLabel
                                className="font-medium cursor-pointer"
                                onClick={(e) => {
                                  e.preventDefault();
                                  field.onChange("cod");
                                }}
                              >
                                Cash on Delivery
                              </FormLabel>
                              <FormDescription>
                                Pay when your order is delivered
                              </FormDescription>
                            </div>
                            <div className="ml-2 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote">
                                <rect width="20" height="12" x="2" y="6" rx="2" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="M6 12h.01M18 12h.01" />
                              </svg>
                            </div>
                          </FormItem>
                        </div>
                        
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/cart")}
                  >
                    Back to Cart
                  </Button>
                  
                  <Button
                    type="submit"
                    disabled={isProcessingPayment}
                    className="min-w-[150px]"
                  >
                    {isProcessingPayment ? "Processing..." : "Place Order"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          
          {/* Order Summary */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="gaming-card p-6 sticky top-20">
              <h2 className="font-medium text-xl mb-4">Order Summary</h2>
              
              <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 mb-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3 py-2 border-b last:border-b-0">
                    <div className="w-16 h-16 rounded overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium line-clamp-1">{item.product.name}</h4>
                      <div className="text-sm text-muted-foreground">
                        Qty: {item.quantity}
                      </div>
                      <PriceFormat amount={item.product.price * item.quantity} className="text-sm" />
                    </div>
                  </div>
                ))}
              </div>
              
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
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-medium text-base">
                  <span>Total</span>
                  <PriceFormat amount={total} />
                </div>
                
                <div className="text-xs text-muted-foreground pt-2">
                  All taxes included. Payment is secure and encrypted.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
