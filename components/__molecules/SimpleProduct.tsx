import Image from "next/image";
import React from "react";

const SimpleProduct = () => {
  return (
    <section className="w-full bg-white px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12 rounded-lg">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/assets/Group 3 (1).png"
          alt="XX59 Headphones"
          width={400}
          height={400}
          className="rounded-md object-contain drop-shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
          XX59 <br className="hidden md:block" /> Headphones
        </h2>
        <p className="text-gray-600 mb-8 max-w-[500px]">
          Enjoy your audio almost anywhere and customize it to your specific
          tastes with the XX59 headphones. The stylish yet durable versatile
          wireless headset is a brilliant companion at home or on the move.
        </p>
        <button className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold py-4 px-8 uppercase tracking-wider">
          See Product
        </button>
      </div>
    </section>
  );
};

export default SimpleProduct;
