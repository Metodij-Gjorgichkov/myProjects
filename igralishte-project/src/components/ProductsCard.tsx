import { ProductsType } from "@/types/types";
import Link from "next/link";
import React from "react";

interface CardProps extends ProductsType {
  columnClass?: string;
}

const ProductsCard = ({
  id,
  images,
  name,
  discount,
  price,
  columnClass,
}: CardProps) => {
  const imageSize = columnClass === "col-12" ? "large" : "small";

  return (
    <>
      <Link
        className="color-black position-relative"
        href={`/productPage/${id}`}
      >
        {discount ? (
          <span className="discount discount-1">-{discount}</span>
        ) : (
          ""
        )}
        <div className="px-1 mb-3">
          <img
            src={images?.main}
            alt={name}
            className={`mb-2 ${
              imageSize === "large" ? "large-image" : "small-image"
            }`}
          />
          <div className="content-card text-left cormorant-garamond-font font-weight-500">
            <small className="mb-0 d-block">{name}</small>
            <small className="mb-1 d-block">{price} ден</small>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductsCard;
