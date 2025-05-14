import React from "react";
import Heading from "../__molecules/Heading";
import FeaturedProducts from "../__molecules/FeaturedProducts";
import ReversedProduct from "../__molecules/ReversedProducts";
import SimpleProduct from "../__molecules/SimpleProduct";
import CategoryGrid from "./CategoryGrid";
import AboutSection from "./AboutSection";

const Headphones = () => {
  return (
    <>
      <Heading />
      <FeaturedProducts />
      <ReversedProduct />
      <SimpleProduct />
      <CategoryGrid />
      <AboutSection />
    </>
  );
};

export default Headphones;
