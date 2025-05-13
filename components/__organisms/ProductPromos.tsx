import Image from "next/image";
import Link from "next/link";

export default function ProductPromos() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-10">
      <div className="bg-orange-600 rounded-lg p-10 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
        <Image
          src="/assets/image-speaker-zx9.png"
          alt="ZX9 Speaker"
          width={300}
          height={300}
          className="mb-10 lg:mb-0"
        />
        <div className="text-center lg:text-left text-white max-w-md">
          <h2 className="text-4xl font-bold uppercase mb-6">ZX9 Speaker</h2>
          <p className="text-white/80 mb-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href="/products/zx9"
            className="bg-black text-white py-3 px-6 text-sm uppercase tracking-widest hover:bg-neutral-800 transition"
          >
            See Product
          </Link>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden bg-[url('/assets/image-speaker-zx7.jpg')] bg-cover bg-center flex items-start gap-5 flex-col px-10 py-20">
        <h3 className="text-2xl font-bold uppercase text-black">ZX7 Speaker</h3>
        <Link
          href="/products/zx7"
          className="border border-black py-2 px-6 text-sm uppercase hover:bg-black hover:text-white transition"
        >
          See Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assets/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gray-100 rounded-lg flex flex-col justify-center px-8 py-10">
          <h3 className="text-2xl font-bold uppercase mb-6">YX1 Earphones</h3>
          <Link
            href="/products/yx1"
            className="border border-black py-2 px-6 text-sm uppercase hover:bg-black hover:text-white transition w-fit"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
}
