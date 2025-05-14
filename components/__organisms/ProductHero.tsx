import Image from "next/image";

export default function ProductHero() {
  return (
    <section className="bg-cover bg-center bg-no-repeat text-white px-6 0  bg-[#141414]">
      <div className="w-auto   flex flex-col md:flex-row items-center justify-start gap-10 min-h-[400px]  md:px-45 ">
        <div className="text-center md:text-left md:max-w-md">
          <p className="text-sm tracking-[10px] text-white/50 uppercase mb-4">
            New Product
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide uppercase mb-6">
            XX99 Mark II <br className="hidden md:block" /> Headphones
          </h1>
          <p className="text-white/75 mb-8">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white py-3 px-6 uppercase tracking-widest text-sm font-semibold">
            See Product
          </button>
        </div>
        <Image
          src="/assets/photo1.jpg"
          alt=" Earphones"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
