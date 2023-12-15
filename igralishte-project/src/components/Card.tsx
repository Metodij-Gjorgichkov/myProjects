import React from "react";
import { ProductsType } from "@/types/types";
import Link from "next/link";

interface Props extends ProductsType {
  column?: "col-12" | "col-6";
  imageHeight?: "small-image" | "large-image";
  fontSize?: "card-text-size";
}

const Card = ({
  id,
  name,
  images,
  price,
  discount,
  column,
  imageHeight,
  fontSize,
}: Props) => {
  return (
    <div className={`${column} mb-3 position-relative`}>
      <Link className="color-black" href={`/productPage/${id}`}>
        <img src={images.main} alt={name} className={imageHeight} />
        {discount ? <span className="discount">-{discount}</span> : ""}
        <div className="content-card text-left cormorant-garamond-font font-weight-500">
          <small className={`mb-0 d-block ${fontSize}`}>{name}</small>
          <small className={`mb-0 d-block ${fontSize}`}>{price} ден</small>
        </div>
      </Link>
    </div>
  );
};

export default Card;
