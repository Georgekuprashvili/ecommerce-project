import Image from "next/image";
import React from "react";

interface SpeakersPageProducsSectionInterface {
  image: string;
  classname: string;
  h1: React.ReactNode;
  p: React.ReactNode;
}
function SpeakersPageProducsSection({
  image,
  classname,
  h1,
  p,
}: SpeakersPageProducsSectionInterface) {
  return (
    <div className={classname}>
      <div className="flex items-center justify-center bg-[#F1F1F1] max-w-[540px] w-[100%] py-[100px]">
        <Image
          src={image}
          alt="Speaker"
          width={500}
          height={500}
          className="w-[290px] h-[350px]"
        />
      </div>
      <div>
        <h3 className="text-[#D87D4A] text-[14px] tracking-[10px] font-normal">
          NEW PRODUCT
        </h3>
        <h1 className="mt-[16px] text-[#000000] text-[40px] leading-[44px] tracking-[1.43px] font-bold">
          {h1}
        </h1>
        <p className="text-[15px] text-[#000000] leading-[25px] mt-[32px]">
          {p}
        </p>
        <button className="bg-[#D87D4A] px-[29px] py-[15px] mt-[40px] text-[#FFFFFF] text-[13px] font-bold cursor-pointer">
          See Product
        </button>
      </div>
    </div>
  );
}

export default SpeakersPageProducsSection;
