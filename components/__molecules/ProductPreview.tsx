import Image from "next/image";
import Link from "next/link";

import XX99MarkIIImg from "../../public/assets/Group 3 (2).png";
import XX99MarkIImg from "../../public/assets/Group 3 (3).png";
import XX59Img from "../../public/assets/Group 3 (4).png";

const IMAGE_MAP: Record<string, any> = {
  "XX99 Mark II Headphones": XX99MarkIIImg,
  "XX99 Mark I Headphones": XX99MarkIImg,
  "XX59 Headphones": XX59Img,
};

export default function ProductPreview({
  product,
  reverse,
}: {
  product: any;
  reverse?: boolean;
}) {
  const image = IMAGE_MAP[product.name];

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-10 py-20`}
    >
      <div className="bg-gray-100 w-full md:w-1/2 p-10 flex justify-center">
        <Image
          src={image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full max-w-[300px] object-contain"
        />
      </div>

      <div className="text-center md:text-left md:w-1/2 px-6">
        {product.new && (
          <p className="text-orange-500 tracking-widest text-sm mb-4 uppercase">
            New Product
          </p>
        )}
        <h2 className="text-3xl font-bold uppercase mb-6">{product.name}</h2>
        <p className="text-gray-600 mb-6">{product.description}</p>
        <Link href={`/products/${product.slug}`}>
          <button className="bg-orange-500 text-white px-6 py-3 uppercase tracking-wider text-sm hover:bg-orange-400 transition">
            See Product
          </button>
        </Link>
      </div>
    </div>
  );
}
