
import { Link } from "react-router-dom";
import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

export function CategoryGrid() {
  return (
    <section className="container py-8 md:py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Shop By Category</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id}
            to={`/category/${category.slug}`}
            className={cn(
              "group relative h-48 md:h-56 overflow-hidden rounded-lg gaming-card gaming-glow hover:scale-[1.02]",
              "transition-all duration-300 ease-out"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent z-10" />
            <img 
              src={category.image} 
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-500" 
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
              <h3 className="font-medium text-lg md:text-xl text-white">
                {category.name}
              </h3>
              <p className="text-xs md:text-sm text-white/80 line-clamp-1">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
