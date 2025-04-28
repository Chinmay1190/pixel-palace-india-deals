
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BannerSection } from "@/components/home/BannerSection";
import { Testimonials } from "@/components/home/Testimonials";
import { products } from "@/data/products";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts products={products} />
      <BannerSection />
      <Testimonials />
    </Layout>
  );
};

export default Index;
