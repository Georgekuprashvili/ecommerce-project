import Heading from "@/components/__atoms/Heading";
import ReversedProduct from "@/components/__molecules/ReversedProduct";
import SimpleProduct from "@/components/__molecules/SimpleProduct";
import AboutSection from "@/components/__organisms/AboutSection";
import CategoryGrid from "@/components/__organisms/CategoryGrid";
import FeaturedProduct from "@/components/__organisms/FeaturedProduct";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading />
      <FeaturedProduct />
      <ReversedProduct />
      <SimpleProduct />
      <CategoryGrid />
      <AboutSection />
    </div>
  );
};

export default page;
