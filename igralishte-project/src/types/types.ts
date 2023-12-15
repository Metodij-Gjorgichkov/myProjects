export interface AboutPageType {
  first_image: string;
  first_title: string;
  our_story: string;
  our_work: string;
  second_image: string;
  third_image: string;
  first_content_story: string;
  first_content_work: string;
  second_content: string;
  third_content: string;
}
export interface ContactPageType {
  first_image: string;
  first_title: string;
  second_image: string;
  second_title: string;
  second_content1: string;
  second_content2: string;
  second_content3: string;
  adress: string;
  city: string;
  number_contact: string;
  phone_number: string;
  working_hours: string;
  working_hours1: string;
  working_hours2: string;
}
export interface FaqPageType {
  first_image: string;
  first_title: string;
  question: string;
  content: string;
}
export interface BasketType extends ProductsType {
  prodQuantity: number;
}
export interface ProductsType {
  id: string;
  type: string;
  category: string;
  name: string;
  brand: string;
  brand_informations: {
    world_wide_brand: string;
    brand_logo_image: string;
    brand_advertise_image: string;
    brand_concept_text: string;
    brand_question_one: string;
    brand_question_two: string;
    brand_question_three: string;
    brand_question_four: string;
    brand_response: string;
    brand_product_description: string;
  };
  images: {
    main: string;
    small: [];
  };
  description: string;
  price: number;
  size: string;
  leftOnly: string;
  discount?: string;
  color: string;
  createdAt: string;
  adviceForSize: string;
  material: string;
  state: string;
  maintence: string;
  signs: {
    new: string;
    vintage: string;
    shirts: string;
    wardrobe: string;
  };
}
export interface CompanyPoliciesType {
  quality_inspection: "Контрола на квалитет";
  quality_inspection_image: "/icons/control.png";
  return_policies: "Политика на враќање";
  return_policies_image: "/icons/return.png";
  delivery: "Достава";
  delivery_image: "/icons/delivery.png";
  help: "Помош";
  help_image: "/icons/help.png";
}
export interface GiftCardsType {
  title: string;
  gift_price: string;
  cards: {
    id: string;
    image: string;
    brand: string;
  }[];
}
