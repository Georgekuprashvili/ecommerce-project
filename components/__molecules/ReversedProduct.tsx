import Image from "next/image";
import React from "react";

const ReversedProduct = () => {
  return (
    <section className="w-full bg-white px-6 py-12 flex flex-col md:flex-row-reverse items-center justify-center gap-15 rounded-lg">
      <div className="max-w-[700px] flex justify-center">
        <Image
          src="/assets/Group 3.png"
          alt="XX99 Mark I Headphones"
          width={400}
          height={400}
          className="rounded-md object-contain drop-shadow-md"
        />
      </div>

      <div className="max-w-[800px] md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
          XX99 Mark I <br className="hidden md:block" /> Headphones
        </h2>
        <p className="text-gray-600 mb-8 max-w-[500px]">
          As the gold standard for headphones, the classic XX99 Mark I offers
          detailed and accurate audio reproduction for audiophiles, mixing
          engineers, and music aficionados alike in studios and on the go.
        </p>
        <button className="bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold py-4 px-8 uppercase tracking-wider">
          See Product
        </button>
      </div>
    </section>
  );
};

export default ReversedProduct;
