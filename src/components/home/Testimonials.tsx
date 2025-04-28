
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Pro Gamer",
    content: "The ASUS ROG Strix laptop I purchased from Pixel Palace has transformed my gaming experience. The performance is unmatched, and customer service was top-notch.",
    avatar: "https://i.pravatar.cc/150?img=1",
    initials: "AJ",
    rating: 5,
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "Content Creator",
    content: "I've been using the SteelSeries Arctis Pro Wireless headset for my streams, and the audio quality is phenomenal. Definitely worth every rupee!",
    avatar: "https://i.pravatar.cc/150?img=5",
    initials: "SL",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "Gaming Enthusiast",
    content: "The delivery was incredibly fast, and the gaming PC I ordered was expertly packaged. It arrived in perfect condition and was easy to set up. Exceptional service!",
    avatar: "https://i.pravatar.cc/150?img=8",
    initials: "RS",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Esports Team Manager",
    content: "Our team has been exclusively using Pixel Palace for all our gear. The consistent quality and reliability of their products have made them our go-to store.",
    avatar: "https://i.pravatar.cc/150?img=9",
    initials: "PP",
    rating: 4,
  },
  {
    id: 5,
    name: "Mike Chen",
    role: "Tech Reviewer",
    content: "As someone who reviews gaming gear professionally, I'm impressed by the range and quality of products at Pixel Palace. They stay ahead of the curve with the latest tech.",
    avatar: "https://i.pravatar.cc/150?img=12",
    initials: "MC",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };
  
  return (
    <section className="container py-8 md:py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it — read what our happy customers have to say about their experience shopping with us.
        </p>
      </div>
      
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {getVisibleTestimonials().map((testimonial, idx) => (
            <Card 
              key={testimonial.id} 
              className={cn(
                "flex-1 transition-all duration-500 gaming-card",
                idx === 0 ? "md:translate-y-4 opacity-80" : "",
                idx === 1 ? "md:scale-110 z-10 shadow-lg dark:shadow-primary/20" : "",
                idx === 2 ? "md:translate-y-4 opacity-80" : ""
              )}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                      )}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="italic text-sm md:text-base">"{testimonial.content}"</blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-4">
          <button
            onClick={prevTestimonial}
            className="bg-background/80 backdrop-blur-sm border rounded-full p-2 shadow-md hover:bg-accent transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-background/80 backdrop-blur-sm border rounded-full p-2 shadow-md hover:bg-accent transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
