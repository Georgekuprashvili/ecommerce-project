
import React from "react";
import ProductHero from "../../../components/__organisms/ProductHero";
import CategoryGrid from "../../../components/__organisms/CategoryGrid";
import ProductPromos from "../../../components/__organisms/ProductPromos";
import AboutSection from "../../../components/__organisms/AboutSection";

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
