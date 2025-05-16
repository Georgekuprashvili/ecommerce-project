import SpeakersInnerPageComp from "../../../components/__organisms/SpeakersInnerPageComp/SpeakersInnerPageComp";
import data from "../../../data.json";

interface ParamsInterface {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ParamsInterface) {
  const product = data.find((item) => item.slug === params.slug);

  if (!product) return <div>Product not found</div>;

  return <SpeakersInnerPageComp product={product} />;
}
