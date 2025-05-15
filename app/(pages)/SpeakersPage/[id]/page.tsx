import React from "react";
import data from "../../../../data.json";
import SpeakersInnerPageComp from "@/components/__organisms/SpeakersInnerPageComp/SpeakersInnerPageComp";
interface ProductPage {
  params: { id: string };
}
export default function ProductPage({ params }: ProductPage) {
  const product = data.find((item) => item.id === Number(params.id));
  if (!product) return <div>Product not found</div>;
  return <SpeakersInnerPageComp product={product} />;
}
