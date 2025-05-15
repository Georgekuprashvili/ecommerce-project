export interface SpeakersInnerPageCompInterface {
  product: {
    name: string;
    id: number;
    description: string;
    price?: number;
    features: string;
    includes: {
      quantity: number;
      item: string;
    }[];
  };
}
