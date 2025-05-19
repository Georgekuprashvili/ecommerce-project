"use client";

import React from "react";
import AboutSection from "../AboutSection";
import HeadphonesImage from "../../../public/assets1/headphones.svg";
import FirstSpeakerImage from "../../../public/assets1/image-removebg-preview(38).svg";
import EarphoneImg from "../../../public/assets1/earphones.svg";
import SpeakersPageProductsSmallDivs from "../../__molecules/SpeakersPageProductSmallDivs/SpeakersPageProductsSmallDivs";

import ProductPreview from "./ProductPreviewEarphones";

const YX1Image = "/assets1/earphones.svg";

export default function Page() {
  const product = {
    name: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    slug: "yx1-earphones",
    new: true,
  };

  return (
    <div>
      <div className="w-full  h-[238px] bg-black flex justify-center items-center text-center">
        <h1 className="text-[32px] font-[700] text-white">EARPHONES</h1>
      </div>

      <div>
        <div className="flex justify-center items-center w-[100%]"
        >
          <ProductPreview product={product} image={YX1Image} reverse={false} />
        </div>
        <div className="mt-[200px] max-w-[1180px] px-[20px] mx-auto flex  gap-[20px] items-center justify-between max-[800px]:gap-[10px] max-[600px]:flex-col max-[600px]:gap-[100px]">
          <SpeakersPageProductsSmallDivs
            href="/Headphones"
            alt="HEADPHONES"
            image={HeadphonesImage}
            h3="HEADPHONES"
          />
          <SpeakersPageProductsSmallDivs
            href="/SpeakersPage"
            image={FirstSpeakerImage}
            h3="SPEAKERS"
            alt="SPEAKERS"
          />
          <SpeakersPageProductsSmallDivs
            href="/EarphonesPage"
            image={EarphoneImg}
            h3="EARPHONES"
            alt="EARPHONES"
          />
        </div>

        <div className="w-[100%] flex justify-center mt-[160px] mb-[160px]">
          <AboutSection />
        </div>
      </div>
    </div>
  );
}
