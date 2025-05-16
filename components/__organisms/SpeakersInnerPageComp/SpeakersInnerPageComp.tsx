"use client";

import React from "react";
import FirstSpeakerImage from "../../../public/assets/image-removebg-preview(38).svg";
import SecondSpeakersImage from "../../../public/assets/image-removebg-preview(49).svg";
import HeadphonesImage from "../../../public/assets/headphones.svg";
import EarphoneImg from "../../../public/assets/earphones.svg";
import AboutSection from "../AboutSection";
import ZX9SPEAKERFirst from "../../../public/assets/ZX9 SPEAKERFirst.svg";
import ZX7SPEAKERFirst from "../../../public/assets/ZX7SPEAKERFirst.svg";
import zx9SecondIMG from "../../../public/assets/zx9Second.svg";
import zx7Second from "../../../public/assets/zx7second.svg";
import zx9third from "../../../public/assets/zx9third.svg";
import zx7third from "../../../public/assets/zx7third.svg";
import Image from "next/image";
import whiteHeadsetImage from "../../../public/assets/whiteheadset.svg";
import SpeakersInnerPageProductsSection from "../../__molecules/SpeakersInnerPageProductsSection.tsx/SpeakersInnerPageProductsSection";
import { SpeakersInnerPageCompInterface } from "../../../app/common/types/Type";
import SpeakersPageProductsSmallDivs from "../../__molecules/SpeakersPageProductSmallDivs/SpeakersPageProductsSmallDivs";
import Link from "next/link";
function SpeakersInnerPageComp({ product }: SpeakersInnerPageCompInterface) {
  console.log(product);

  return (
    <div className="w-[100%] flex items-center justify-center flex-col  ">
      <div className="w-[100%] flex justify-center mt-[160px]">
        <SpeakersInnerPageProductsSection
          h1={product?.name}
          classname={`max-w-[1180px] w-[100%] mt-[160px] flex items-center justify-between px-[20px] gap-[20px] max-[800px]:flex-col max-[800px]:mt-[120px] max-[800px]:gap-[55px]  `}
          image={
            product?.name === "ZX9 Speaker"
              ? FirstSpeakerImage
              : SecondSpeakersImage
          }
          p={product?.description}
          price={product.price}
        />
      </div>
      <div className="w-[100%] max-w-[1180px] mt-[160px] px-[20px] flex justify-between gap-[30px] max-[800px]:flex-col">
        <div className="flex flex-col">
          <h1 className="text-[#000000] text-[32px] font-bold eading-[36px] tracking-[1.14px] max-[500px]:text-[24px]">
            FEATURES
          </h1>
          <p className="max-w-[635px] leading-[25px] text-[15px] font-normal text-[#000000] mt-[32px] max-[800]:max-w-[100%]">
            {product.features}
          </p>
        </div>
        <div className="flex flex-col max-[800px]:flex-row max-[800px]:w-[100%] max-[800px]:justify-between max-[500px]:flex-col">
          <h1 className="text-[#000000] text-[32px] font-bold max-[500px]:text-[24px]">
            in the box
          </h1>
          <div className="flex flex-col mt-[32px] gap-[8px]">
            {product.includes.map((item, key) => (
              <div className="flex gap-[24px] items-center" key={key}>
                <p className="text-[#D87D4A] text-[15px] leading-[25px] font-bold">
                  {item.quantity}x
                </p>
                <p className="text-[#000000] text-[15px] leading-[25px] font-normal">
                  {item.item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1180px] w-[100%] px-[20px] flex mt-[160px]  gap-[32px] items-center max-[800px]:flex-col max-[800px]:gap-[20px]">
        <div className="flex flex-col gap-[32px] max-[800px]:w-[100%] max-[800px]:gap-[20px]">
          <Image
            src={
              product.name === "ZX9 Speaker" ? ZX9SPEAKERFirst : ZX7SPEAKERFirst
            }
            alt="speakers"
            width={500}
            height={500}
            className="w-[100%] min-w-[277px] max-[800px]:w-[100%] "
          />
          <Image
            src={product.name === "ZX9 Speaker" ? zx9SecondIMG : zx7Second}
            alt="speakers"
            width={500}
            height={500}
            className="w-[100%] min-w-[277px] max-[800px]:w-[100%] "
          />
        </div>
        <Image
          src={product.name === "ZX9 Speaker" ? zx9third : zx7third}
          alt="speakers"
          width={500}
          height={500}
          className="w-[100%] min-w-[395px] max-w-[635px] h-[100%] max-[800px]:max-w-[100%] max-[800px]:min-w-auto "
        />
      </div>
      <div className="flex max-w-[1180px] px-[20px] w-[100%] items-center justify-center flex-col mt-[160px] ">
        <h1 className="font-bold text-[32px] leading-[36px] tracking-[1.14px] max-[800px]:text-[24px ">
          you may also like
        </h1>
        <div className="w-[100%] flex items-center justify-between mt-[64px] gap-[20px] max-[600px]:flex-col">
          {product.others.map((item, key) => (
            <div
              className="flex flex-col items-center justify-center gap-[45px] w-[100%]"
              key={key}
            >
              <div className="bg-[#F1F1F1] max-w-[350px]  w-[100%] py-[60px] flex itmes-center justify-center max-[800px]:py-[15px] max-[600px]:max-w-[100%] ">
                <Image
                  src={
                    item.name === "ZX9 Speaker"
                      ? FirstSpeakerImage
                      : item.name === "XX99 Mark I"
                      ? HeadphonesImage
                      : item.name === "ZX7 Speaker"
                      ? SecondSpeakersImage
                      : whiteHeadsetImage
                  }
                  alt={item.name}
                  width={500}
                  height={500}
                  className="max-w-[140px] w-[100%] h-[180px] max-[800px]:max-w-[60px] max-[800px]:h-[87px]"
                />
              </div>
              <h1 className="text-[24px] text-[#000000] font-bold tracking-[1.7px]">
                {item.name}
              </h1>
              <Link
                href={`${
                  item.name === "ZX7 Speaker"
                    ? "/SpeakersPage/5"
                    : "/SpeakersPage/6"
                }`}
                className="bg-[#D87D4A] text-[#fff] px-[29px] py-[15px] cursor-pointer font-bold text-[13px] tracking-[1px] hover:bg-[#FBAF85]"
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1180px] w-[100%] flex items-center justify-between mt-[260px] px-[20px] gap-[20px] max-[800px]:gap-[10px] max-[600px]:flex-col max-[600px]:gap-[55px] max-[800px]:mt-[160px] ">
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
      <div className="mt-[160px]">
        <AboutSection />
      </div>
    </div>
  );
}

export default SpeakersInnerPageComp;
