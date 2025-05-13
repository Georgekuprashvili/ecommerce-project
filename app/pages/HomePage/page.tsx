import AboutSection from "@/components/__organisms/AboutSection";
import CategoryGrid from "@/components/__organisms/CategoryGrid";
import ProductHero from "@/components/__organisms/ProductHero";
import ProductPromos from "@/components/__organisms/ProductPromos";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductHero />
      <CategoryGrid />
      <ProductPromos />
      <AboutSection />
    </div>
  );
};

export default page;
