import Image from "next/image";
import React from "react";

const FeaturedProducts = () => {
  return (
    <section className=" pt-[200px] w-full bg-white px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12 rounded-lg">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/assets/Group 3 (2).png"
          alt="XX99 Mark II Headphones"
          width={400}
          height={400}
          className="rounded-md object-contain drop-shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-sm tracking-[10px] text-orange-600 uppercase mb-4">
          New Product
        </p>
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
          XX99 Mark II <br className="hidden md:block" /> Headphones
        </h2>
        <p className="text-gray-600 mb-8 max-w-[500px]">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <button className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold py-4 px-8 uppercase tracking-wider">
          See Product
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;
