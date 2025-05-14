import React from "react";
import FirstSpeakerImage from "../../../public/assets/image-removebg-preview(38).svg";
import SpeakersPageProducsSection from "@/components/__molecules/SpeakersPageProductsSection/SpeakersPageProducsSection";
import SecondSpeakersImage from "../../../public/assets/image-removebg-preview(49).svg";
import SpeakersPageProductsSmallDivs from "@/components/__molecules/SpeakersPageProductSmallDivs/SpeakersPageProductsSmallDivs";
import HeadphonesImage from "../../../public/assets/headphones.svg";
import EarphoneImg from "../../../public/assets/earphones.svg";
import AboutSection from "../AboutSection";
function SpeakersPageComp() {
  const h1_1 = (
    <>
      ZX9 <br /> SPEAKER
    </>
  );
  const h1_2 = (
    <>
      ZX7 <br /> SPEAKER
    </>
  );
  const p_1 = (
    <>
      Upgrade your sound system with the
      <br className="min-[1000px]:hidden max-[800px]:hidden " />
      all new ZX9 active
      <br className="max-[1000px]:hidden" /> speaker. It’s a
      <br className="min-[1000px]:hidden max-[800px]:hidden " /> bookshelf
      speaker system that offers truly <br className="max-[800px]:hidden " />{" "}
      wireless connectivity -- creating new
      <br className="min-[1000px]:hidden max-[800px]:hidden " /> possibilities
      for more
      <br className="max-[1000px]:hidden" /> pleasing and practical
      <br className="min-[1000px]:hidden max-[800px]:hidden " /> audio setups.
    </>
  );
  const p_2 = (
    <>
      Stream high quality sound wirelessly
      <br className="min-[1040px]:hidden max-[800px]:hidden " /> with minimal
      loss. The ZX7
      <br className="max-[1040px]:hidden " />
      bookshelf <br className="min-[1040px]:hidden max-[800px]:hidden " />
      speaker uses high-end audiophile{" "}
      <br className="min-[1040px]:hidden max-[800px]:hidden " /> components that
      <br className="max-[1040px]:hidden" />
      represents the top of the line powered speakers for home or
      <br className="max-[1040px]:hidden" /> studio use.
    </>
  );
  return (
    <div className="w-[100%] flex items-center justify-center flex-col ">
      <p className="flex w-[100%] bg-[#000000] justify-center items-center py-[97px] text-[40px] text-[#FFFFFF] font-bold leading-[44px] tracking-[1.43px] max-[600px]:text-[28px]">
        SPEAKERS
      </p>

      <SpeakersPageProducsSection
        h1={h1_1}
        classname="max-w-[1180px] w-[100%] mt-[160px] flex items-center justify-between px-[20px] gap-[20px] max-[800px]:flex-col max-[800px]:mt-[120px] max-[800px]:gap-[55px]"
        image={FirstSpeakerImage}
        p={p_1}
      />
      <SpeakersPageProducsSection
        h1={h1_2}
        classname="max-w-[1180px] w-[100%] mt-[160px] flex items-center justify-between flex-row-reverse px-[20px] gap-[20px]  max-[800px]:flex-col max-[800px]:mt-[120px] max-[800px]:gap-[55px]"
        image={SecondSpeakersImage}
        p={p_2}
      />
      <div className="max-w-[1180px] w-[100%] flex items-center justify-between mt-[160px] px-[20px] gap-[20px] max-[800px]:gap-[10px] max-[600px]:flex-col max-[600px]:gap-[55px] ">
        <SpeakersPageProductsSmallDivs
          alt="HEADPHONES"
          image={HeadphonesImage}
          h3="HEADPHONES"
        />
        <SpeakersPageProductsSmallDivs
          image={FirstSpeakerImage}
          h3="SPEAKERS"
          alt="SPEAKERS"
        />
        <SpeakersPageProductsSmallDivs
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

export default SpeakersPageComp;
