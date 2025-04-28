
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function BannerSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="container space-y-8">
        {/* Main Promotional Banner */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-900 dark:to-indigo-900">
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1500&auto=format&fit=crop')" }}
          />
          <div className="relative h-full flex flex-col justify-center px-6 md:px-12 max-w-2xl">
            <Badge className="bg-white text-primary mb-4 hover:bg-white">Limited Time</Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Summer Gaming Sale
            </h2>
            <p className="text-white/90 mb-6">
              Up to 30% off on selected gaming laptops and accessories. 
              Upgrade your setup with the latest tech at unbeatable prices.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 md:self-start">
              <Link to="/deals">Shop Now</Link>
            </Button>
          </div>
        </div>
        
        {/* Feature Banners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Free Shipping Banner */}
          <div className={cn(
            "gaming-card p-6 flex flex-col md:flex-row items-center text-center md:text-left gap-4",
            "hover:shadow-md transition-all duration-300"
          )}>
            <div className="flex-shrink-0 bg-primary/10 rounded-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-6 w-6">
                <path d="M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M5 18V9.5a.5.5 0 0 1 .5-.5H16a2 2 0 0 1 2 2v7" />
                <path d="M9 18V9.5" />
                <path d="M15.5 13v5.5" />
                <path d="M2 6h4.5" />
                <path d="M2 10h3" />
                <path d="M2 14h2" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders above ₹5,000</p>
            </div>
          </div>
          
          {/* Warranty Banner */}
          <div className={cn(
            "gaming-card p-6 flex flex-col md:flex-row items-center text-center md:text-left gap-4",
            "hover:shadow-md transition-all duration-300"
          )}>
            <div className="flex-shrink-0 bg-primary/10 rounded-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-6 w-6">
                <path d="M19.9 15.5c.6 .7 .8 1.5 .9 2.5s-.1 1.9-.5 2.8c-.2 .4-.4 .4-.7 .2l-1.1-.6a3.8 3.8 0 0 0 -5.5 5.5l.6 1.1c.2 .3 .2 .5 -.2 .7c-.9 .4-1.8 .6-2.8 .5s-1.8-.3-2.5-.9l-4.8-4.8a3.8 3.8 0 0 1 -1.1-2.5c0-.9 .4-1.8 1.1-2.5l10.4-10.4c.6-.6 1.5-1 2.5-1s1.9 .4 2.5 1l4.8 4.8c.6 .6 1 1.5 1 2.5s-.4 1.9-1 2.5l-3.9 3.9" />
                <path d="M15.5 7c.2 .2 .3 .4 .3 .7s-.1 .5-.3 .7s-.4 .3-.7 .3s-.5-.1-.7-.3s-.3-.4-.3-.7s.1-.5 .3-.7s.4-.3 .7-.3s.5 .1 .7 .3z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">1-Year Warranty</h3>
              <p className="text-sm text-muted-foreground">On all products</p>
            </div>
          </div>
          
          {/* Support Banner */}
          <div className={cn(
            "gaming-card p-6 flex flex-col md:flex-row items-center text-center md:text-left gap-4",
            "hover:shadow-md transition-all duration-300"
          )}>
            <div className="flex-shrink-0 bg-primary/10 rounded-full p-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-6 w-6">
                <path d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-1">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Talk to our gaming experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
