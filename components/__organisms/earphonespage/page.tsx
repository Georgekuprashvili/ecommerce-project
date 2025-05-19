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

      <div className=" md:px-90">
        <ProductPreview product={product} image={YX1Image} reverse={false} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl w-full mt-60 px-4 max-md:gap-[70px] ">
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

        <section className="mt-[100px] mb-[100px] bg-white">
          <AboutSection />
        </section>
      </div>
    </div>
  );
}
