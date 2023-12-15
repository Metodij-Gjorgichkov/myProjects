import { ProductsType } from "@/types/types";
import Link from "next/link";
import React, { useState } from "react";
import TypeWriter from "typewriter-effect";

interface Props {
  productsData: ProductsType[];
}

const CarouselCards = ({ productsData }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? productsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === productsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="container pink-gradient-2 pb-3">
        <div className="row">
          <div className="col-12 text-center my-4">
            <h4 className="cormorant-infant-font font-weight-400">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Trendy парчиња во моментот"],
                }}
              />
            </h4>
          </div>
          <div className="col-12 mb-2 text-center position-relative">
            <Link
              className="color-black"
              href={`/productPage/${productsData[currentIndex].id}`}
            >
              {productsData[currentIndex].discount ? (
                <span className="discount carousel-img">
                  -{productsData[currentIndex].discount}
                </span>
              ) : (
                ""
              )}
              <img
                src={productsData[currentIndex].images.main}
                alt=""
                style={{ height: "400px", objectFit: "cover" }}
                className="mb-2 d-block w-100"
              />
            </Link>
            <div className="content-card text-left cormorant-garamond-font font-weight-500">
              <h5 className="mb-1">{productsData[currentIndex].name}</h5>
              <h5 className="mb-1">{productsData[currentIndex].price} ден</h5>
            </div>
          </div>
          <div className="col-12 text-center pt-3">
            <img
              src="../icons/leftBracket.png"
              className="mr-5"
              onClick={goToPrevious}
            />
            <img src="../icons/rightBracket.png" onClick={goToNext} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCards;
