export interface OtherProduct {
  slug: string;
  name: string;
}

export interface SpeakersInnerPageCompInterface {
  product: {
    name: string;
    id: number;
    slug: string; 
    description: string;
    price?: number;
    features: string;
    includes: {
      quantity: number;
      item: string;
    }[];
    others: OtherProduct[];
  };
}