
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products, categories, brands } from "@/data/products";
import { Product } from "@/types/product";
import { Slider } from "@/components/ui/slider";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  
  // Filters state
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [inStock, setInStock] = useState<boolean | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("featured");
  
  // Get all products for this category
  const categoryProducts = products.filter((p) => p.category === slug);
  
  // Filter products
  const filteredProducts = categoryProducts.filter((product) => {
    // Filter by brand
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    
    // Filter by price
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    // Filter by stock
    if (inStock !== null && product.inStock !== inStock) {
      return false;
    }
    
    return true;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      case "rating":
        return b.rating - a.rating;
      default:
        // Featured products first
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });
  
  // Get unique brands in this category
  const categoryBrands = Array.from(new Set(categoryProducts.map((p) => p.brand)));
  
  // Get price range for this category
  const minPrice = Math.min(...categoryProducts.map((p) => p.price));
  const maxPrice = Math.max(...categoryProducts.map((p) => p.price));
  
  // Toggle brand selection
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) => 
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };
  
  // Reset filters
  const resetFilters = () => {
    setSelectedBrands([]);
    setPriceRange([minPrice, maxPrice]);
    setInStock(null);
  };
  
  if (!category) {
    return (
      <Layout>
        <div className="container py-12">
          <h1 className="text-3xl font-bold mb-4">Category not found</h1>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        {category.description && (
          <p className="text-muted-foreground mb-6">{category.description}</p>
        )}
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="gaming-card p-4 mb-4 lg:mb-0 sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium text-lg">Filters</h2>
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  Reset
                </Button>
              </div>
              
              <Accordion type="single" collapsible defaultValue="brands" className="mb-4">
                <AccordionItem value="brands">
                  <AccordionTrigger>Brands</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {categoryBrands.map((brand) => (
                        <div key={brand} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`brand-${brand}`}
                            checked={selectedBrands.includes(brand)}
                            onChange={() => toggleBrand(brand)}
                            className="mr-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor={`brand-${brand}`} className="text-sm">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[minPrice, maxPrice]}
                        min={minPrice}
                        max={maxPrice}
                        step={1000}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value as [number, number])}
                        className="mt-6"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>₹{priceRange[0].toLocaleString()}</span>
                        <span>₹{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="availability">
                  <AccordionTrigger>Availability</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="instock-all"
                          name="availability"
                          checked={inStock === null}
                          onChange={() => setInStock(null)}
                          className="mr-2 h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="instock-all" className="text-sm">
                          All
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="instock-yes"
                          name="availability"
                          checked={inStock === true}
                          onChange={() => setInStock(true)}
                          className="mr-2 h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="instock-yes" className="text-sm">
                          In Stock
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="instock-no"
                          name="availability"
                          checked={inStock === false}
                          onChange={() => setInStock(false)}
                          className="mr-2 h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="instock-no" className="text-sm">
                          Out of Stock
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <p className="text-muted-foreground mb-2 sm:mb-0">
                Showing {sortedProducts.length} of {categoryProducts.length} products
              </p>
              
              <Select
                value={sortOrder}
                onValueChange={(value) => setSortOrder(value)}
              >
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {sortedProducts.length === 0 ? (
              <div className="text-center py-12 gaming-card">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filter criteria to find products in this category.
                </p>
                <Button onClick={resetFilters}>Reset Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
