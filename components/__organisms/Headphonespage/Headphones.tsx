import data from "../../../data.json";

import HeadphonesImage from "../../../public/assets/headphones.svg";
import FirstSpeakerImage from "../../../public/assets/image-removebg-preview(38).svg";
import EarphoneImg from "../../../public/assets/earphones.svg";
import SpeakersPageProductsSmallDivs from "../../__molecules/SpeakersPageProductSmallDivs/SpeakersPageProductsSmallDivs";
import AboutSection from "../AboutSection";
import ProductPreview from "../../__molecules/ProductPreview";

export default function HeadphonesPageComp() {
  const headphones = data.filter((item) => item.category === "headphones");
  const sorted = [...headphones].sort((a, b) => {
    const order = [
      "XX99 Mark II Headphones",
      "XX99 Mark I Headphones",
      "XX59 Headphones",
    ];
    return order.indexOf(a.name) - order.indexOf(b.name);
  });
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[238px] bg-black py-24">
        <h1 className="text-white text-4xl font-bold uppercase text-center">
          Headphones
        </h1>
      </div>

      <div className="max-w-6xl w-full px-4">
        {sorted.map((item, idx) => (
          <ProductPreview
            key={item.id}
            product={item}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl w-full mt-32 px-4 max-md:gap-[70px] ">
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

      <div className="mt-32 w-full">
        <AboutSection />
      </div>
    </div>
  );
}
