export interface OtherProduct {
  slug: string;
  name: string;
  image: ResponsiveImage;
}
type ResponsiveImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};
type Gallery = {
  first: ResponsiveImage;
  second: ResponsiveImage;
  third: ResponsiveImage;
};
export interface SpeakersInnerPageCompInterface {
  product: {
    name: string;
    id: number;
    slug: string;
    description: string;
    price?: number;
    features: string;
    image: ResponsiveImage;
    includes: {
      quantity: number;
      item: string;
    }[];
    others: OtherProduct[];
    gallery: Gallery;
  };
}
import { UseFormRegisterReturn } from "react-hook-form";

export interface SignUpInputsMinorDivInterface {
  LabelName: string;
  type: string;
  htmlFor: string;
  id: string;
  toggleShowPassword?: () => void;
  register: UseFormRegisterReturn;
  ErrorText?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface PasswordToggleTypes {
  showPassword: boolean;
  toggleShowPassword: () => void;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}
