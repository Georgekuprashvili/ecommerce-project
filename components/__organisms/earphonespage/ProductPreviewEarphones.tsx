"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductPreview({
  product,
  reverse,
  image,
}: {
  product: {
    name: string;
    description: string;
    slug: string;
    new?: boolean;
  };
  reverse?: boolean;
  image: string;
}) {
  return (
    <section
      className={`mt-20 flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } justify-between items-center bg-white gap-10`}
    >
      <div className="bg-gray-100 w-full md:w-1/2 p-10 flex justify-center">
        <Image
          src={image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full max-w-[400px] object-contain"
        />
      </div>

      <div className="text-center md:text-left md:w-1/2 px-6">
        {product.new && (
          <p className="text-[#D87D4A] tracking-[10px]  text-sm mb-4 uppercase">
            New Product
          </p>
        )}
        <h2 className="text-[32px] md:text-[48px] leading-[48px] font-bold uppercase mb-6 text-black">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-6 text-[16px] md:text-[18px] max-w-[480px] mx-auto md:mx-0">
          {product.description}
        </p>
        <Link href={`/products/${product.slug}`}>
          <button className="bg-[#D87D4A] text-white px-6 py-3 uppercase tracking-wider text-sm hover:bg-[#fbaf85] transition">
            See Product
          </button>
        </Link>
      </div>
    </section>
  );
}
