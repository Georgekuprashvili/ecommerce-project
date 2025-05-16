import HeroSection from "./HeroSection";
import ProductPromos from "./ProductPromos";
import SpeakersPageProductsSmallDivs from "../__molecules/SpeakersPageProductSmallDivs/SpeakersPageProductsSmallDivs";
import AboutSection from "./AboutSection";
import HeadphonesImage from "../../public/assets/headphones.svg";
import FirstSpeakerImage from "../../public/assets/image-removebg-preview(38).svg";
import EarphoneImg from "../../public/assets/earphones.svg";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="w-full py-20 px-6">
        <div className="mt-[100px] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 max-md:gap-[70px]">
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
      </section>

      <ProductPromos />
      <AboutSection />
    </main>
  );
}
