import Navbar from "@/components/__molecules/Navbar";

import ProductHero from "@/components/__organisms/ProductHero";
import ProductPromos from "@/components/__organisms/ProductPromos";
import React from "react";

const page = () => {
  return (
    <div>
      <ProductHero />
      <ProductPromos />
    </div>
  );
};

export default page;
