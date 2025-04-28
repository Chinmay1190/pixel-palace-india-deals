
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Moon, Sun, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-gaming bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
              PIXEL PALACE
            </div>
          </Link>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={`/category/${category.slug}`}
                            className="flex items-center gap-2 rounded-md p-3 hover:bg-accent"
                          >
                            <div className="w-12 h-12 rounded overflow-hidden">
                              <img 
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{category.name}</h3>
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {category.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/deals" className={navigationMenuTriggerStyle()}>
                  Deals
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/new-arrivals" className={navigationMenuTriggerStyle()}>
                  New Arrivals
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex w-full max-w-sm items-center px-4">
          <Input
            type="search"
            placeholder="Search products..."
            className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 border-r-0"
          />
          <Button
            type="submit"
            variant="default"
            className="rounded-l-none"
          >
            Search
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge 
                  variant="destructive"
                  className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/login">Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/register">Register</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/orders">My Orders</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="md:hidden container flex items-center px-4 pb-2">
        <Input
          type="search"
          placeholder="Search products..."
          className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 border-r-0"
        />
        <Button
          type="submit"
          variant="default"
          className="rounded-l-none"
        >
          Search
        </Button>
      </div>
      
      <div className="md:hidden container overflow-x-auto scrollbar-hide border-t">
        <div className="flex space-x-4 py-2">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/category/${category.slug}`}
              className="whitespace-nowrap text-sm px-3 py-1 rounded-full border hover:bg-accent"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
