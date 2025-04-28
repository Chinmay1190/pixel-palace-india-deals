
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    id: 1,
    title: "Next-Gen Gaming",
    subtitle: "Elevate your gaming experience with cutting-edge tech",
    description: "Explore premium gaming laptops and accessories built for performance",
    image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=2000&auto=format&fit=crop",
    cta: "Shop Gaming Laptops",
    link: "/category/gaming-laptops"
  },
  {
    id: 2,
    title: "Premium Audio",
    subtitle: "Immersive sound for your gaming sessions",
    description: "Professional-grade headphones and earbuds for the ultimate audio experience",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000&auto=format&fit=crop",
    cta: "Shop Audio Gear",
    link: "/category/headphones"
  },
  {
    id: 3,
    title: "Gaming Smartphones",
    subtitle: "Mobile gaming redefined",
    description: "High-refresh rate displays and cutting-edge processors for mobile gaming",
    image: "https://images.unsplash.com/photo-1612442443949-503b65924956?q=80&w=2000&auto=format&fit=crop",
    cta: "Shop Gaming Phones",
    link: "/category/smartphones"
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-black overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          
          <div className="relative h-full container flex flex-col justify-center items-start text-white">
            <div className="max-w-lg">
              <h1 className="font-gaming text-4xl md:text-6xl font-bold mb-3">
                {slide.title}
              </h1>
              <div className="bg-primary inline-block px-3 py-1 mb-4">
                <p className="text-lg md:text-xl text-primary-foreground font-medium">
                  {slide.subtitle}
                </p>
              </div>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                {slide.description}
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => navigate(slide.link)}
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              index === currentSlide ? "bg-primary w-6" : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
