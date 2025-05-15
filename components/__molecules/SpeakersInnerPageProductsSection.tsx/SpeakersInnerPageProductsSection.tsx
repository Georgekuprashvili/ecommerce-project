import Image from "next/image";
import React from "react";
import minusImg from "../../../public/assets/-.svg";
import PlusImg from "../../../public/assets/+.svg";
interface SpeakersPageProducsSectionInterface {
  image: string;
  classname: string;
  h1: React.ReactNode;
  p: React.ReactNode;
  link?: number;
  price?: number;
}
function SpeakersInnerPageProductsSection({
  image,
  classname,
  h1,
  p,
  price,
}: SpeakersPageProducsSectionInterface) {
  return (
    <div className={classname}>
      <div className="flex items-center justify-center bg-[#F1F1F1] max-w-[540px] w-[100%] py-[100px] max-[800px]:max-w-[100%] max-[600px]:py-[40px]">
        <Image
          src={image}
          alt="Speaker"
          width={500}
          height={500}
          className="max-w-[290px] w-[100%] h-[350px] "
        />
      </div>
      <div className="flex flex-col max-[800px]:items-center">
        <h3 className="text-[#D87D4A] text-[14px] tracking-[10px] font-normal">
          NEW PRODUCT
        </h3>
        <h1 className="mt-[16px] text-[#000000] text-[40px] leading-[44px] tracking-[1.43px] font-bold max-[800px]:text-center max-[600px]:text-[28px]">
          {h1}
        </h1>
        <p className="text-[15px] text-[#000000] leading-[25px] mt-[32px] min-w-[300px] w-[450px] max-[1000]:w-[350px] max-[800px]:text-center max-[800]:w-[100%]">
          {p}
        </p>
        <h3 className="text-[#000000] text-[18px] font-bold tracking-[1.3px] mt-[32px]">
          $ {price}
        </h3>
        <div className="max-w-[300px] w-[100%] flex items-center justify-between mt-[50px] gap-[16px]">
          <div className="bg-[#F1F1F1] p-[15px] flex  max-w-[120px] w-[100%] justify-between items-center">
            <Image
              src={minusImg}
              alt="minus_img"
              width={500}
              height={500}
              className="w-[10px] h-[6px] cursor-pointer"
            />
            <p className="text-[#000000] text-[13px] font-bold">0</p>
            <Image
              src={PlusImg}
              alt="minus_img"
              width={500}
              height={500}
              className="w-[10px] h-[10px] cursor-pointer"
            />
          </div>
          <button className="bg-[#D87D4A]  w-[100%] px-[32px] py-[15px] text-[#FFFFFF] text-[13px] font-bold cursor-pointer">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpeakersInnerPageProductsSection;
