import CategoryCard from "../__molecules/CategoryCard";

export default function CategoryGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-25">
        <CategoryCard
          title="Headphones"
          image="/assets/image-xx99-mark-one-headphones.jpg"
          href="/headphones"
        />
        <CategoryCard
          title="Speakers"
          image="/assets/image-zx9-speaker.jpg"
          href="/speakers"
        />
        <CategoryCard
          title="Earphones"
          image="/assets/image-yx1-earphones.jpg"
          href="/earphones"
        />
      </div>
    </div>
  );
}
