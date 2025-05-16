import SpeakersInnerPageComp from "../../../../components/__organisms/SpeakersInnerPageComp/SpeakersInnerPageComp";
import data from "../../../../data.json";
interface ParamsInterface {
  params: any;
}

function page({ params }: ParamsInterface) {
  const product = data.find((item) => item.id === Number(params.id));
  if (!product) return <div>Product not found</div>;
  return <SpeakersInnerPageComp product={product} />;
}
export default page;
