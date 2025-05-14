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
      Upgrade your sound system with the all new ZX9 active <br /> speaker. It’s
      a bookshelf speaker system that offers truly <br /> wireless connectivity
      -- creating new possibilities for more <br /> pleasing and practical audio
      setups.
    </>
  );
  const p_2 = (
    <>
      Stream high quality sound wirelessly with minimal loss. The ZX7 <br />{" "}
      bookshelf speaker uses high-end audiophile components that <br />{" "}
      represents the top of the line powered speakers for home or <br /> studio
      use.
    </>
  );
  return (
    <div className="w-[100%] flex items-center justify-center flex-col">
      <div className="flex w-[100%] bg-[#000000] justify-center items-center py-[97px] text-[40px] text-[#FFFFFF] font-bold leading-[44px] tracking-[1.43px]">
        <p>SPEAKERS</p>
      </div>
      <SpeakersPageProducsSection
        h1={h1_1}
        classname="max-w-[1110px] w-[100%] mt-[160px] flex items-center justify-between"
        image={FirstSpeakerImage}
        p={p_1}
      />
      <SpeakersPageProducsSection
        h1={h1_2}
        classname="max-w-[1110px] w-[100%] mt-[160px] flex items-center justify-between flex-row-reverse"
        image={SecondSpeakersImage}
        p={p_2}
      />
      <div className="max-w-[1100px] w-[100%] flex items-center justify-between mt-[160px]">
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

export default SpeakersPageComp;
