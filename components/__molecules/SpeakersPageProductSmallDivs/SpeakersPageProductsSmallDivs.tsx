import Image from "next/image";
import React from "react";
import RightArrowImage from "../../../public/assets/rightarrow.svg";

interface SpeakersPageProductsSmallDivsInterface {
  h3: string;
  image: string;
  alt: string;
}
function SpeakersPageProductsSmallDivs({
  h3,
  alt,
  image,
}: SpeakersPageProductsSmallDivsInterface) {
  return (
    <div className="max-w-[350px] w-[100%] flex items-center justify-center">
      <div className="bg-[#F1F1F1] w-[100%] flex items-center justify-center rounded-[8px] flex-col relative">
        <Image
          src={image}
          alt={alt}
          width={500}
          height={500}
          className="w-[122px] h-[160px] absolute top-[-80px]"
        />
        <div className="w-[122px] h-[18px] bg-[#000000] blur-[30px] absolute top-[60px]"></div>
        <div className="w-[100%] items-center justify-center flex flex-col pb-[30px] pt-[116px] ">
          <h3 className="text-[18px] text-[#000000] font-bold tracking-[1.4px]">
            {h3}
          </h3>
          <div className="flex items-center gap-[14px] ">
            <p>Shop</p>
            <Image
              src={RightArrowImage}
              alt="Right_arrow"
              width={500}
              height={500}
              className="w-[5px] h-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakersPageProductsSmallDivs;
