import Image from "next/image";
import Link from "next/link";
import Photo1 from "../../public/assets1/photo1.jpg";
import data from "../../data.json";

const heroProduct = data.find(
  (item) => item.slug === "xx99-mark-two-headphones"
);

export default function HeroSection() {
  if (!heroProduct) return null;

  return (
    <section className="w-full bg-[#141414] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          {heroProduct.new && (
            <p className="text-sm tracking-widest text-orange-400 uppercase mb-4">
              New Product
            </p>
          )}
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">
            {heroProduct.name}
          </h1>
          <p className="text-white/70 mb-8">{heroProduct.description}</p>
          <Link
            href={`/Headphones/4`}
            className="bg-orange-500 hover:bg-orange-400 text-white py-3 px-6 uppercase tracking-wider text-sm transition"
          >
            See Product
          </Link>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src={Photo1}
            alt="Hero Product"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
