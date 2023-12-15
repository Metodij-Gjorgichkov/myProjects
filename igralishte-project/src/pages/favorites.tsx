import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import Pagination from "@/components/Pagination";
import { FavoritesAndBasketContext } from "@/context/FavoriteContextConstructor";
import { HeaderContext } from "@/context/HeaderContextConstructor";
import usePagination from "@/hooks/usePagination";
import { ProductsType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React, { useContext, useState } from "react";
import TypeWriter from "typewriter-effect";

interface Props {
  productsData: ProductsType[];
}

const Favorites: NextPage<Props> = ({ productsData }) => {
  const { favorites, basket } = useContext(FavoritesAndBasketContext);
  const { isHamburgerMenuOpen } = useContext(HeaderContext);

  const productsPerPage = 6;
  const {
    currentPage,
    totalPages,
    currentProducts,
    prevPage,
    nextPage,
    changeCurrentPage,
  } = usePagination(productsData, productsPerPage);

  return (
    <>
      <Header />
      <InfiniteAdvertisement />

      <div className="container">
        <div className="row">
          <div className="col-12 mt-4">
            <div className="px-3">
              <div className="row cormorant-garamond-font-italic font-weight-400 text-center align-items-center mb-3">
                <div className="col-6">
                  <Link className="light-grey" href={"/order"}>
                    <img src="../icons/basket1.png" alt="basket" />
                    <p className="d-inline ml-2">Кошничка ({basket.length})</p>
                  </Link>
                </div>
                <div className="col-6 color-black">
                  <img src="../icons/heart.png" alt="heart" />
                  <p className="d-inline ml-2">Омилени ({favorites?.length})</p>
                </div>
              </div>
            </div>
            <div className="border-bottom-gold-gradient fav"></div>
          </div>
        </div>

        <div className="row mt-3">
          {favorites.length > 0 ? (
            favorites?.map((fav) => {
              return (
                <Card
                  key={`favorites-${fav.id}`}
                  {...fav}
                  column="col-12"
                  imageHeight="large-image"
                  fontSize="card-text-size"
                />
              );
            })
          ) : (
            <div className="col-12 mt-4">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 20,
                  strings: [
                    "There are currently no items added to your favorites!",
                  ],
                }}
              />
            </div>
          )}
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <div className="other-similar-products">
              <h5 className="mb-4 mr-3">Други парчиња:</h5>
            </div>
          </div>

          {currentProducts.map((prod) => {
            return (
              <Card
                key={`fav-${prod.id}`}
                {...prod}
                column="col-6"
                imageHeight="small-image"
              />
            );
          })}

          <Pagination
            currentProducts={currentProducts}
            currentPage={currentPage}
            totalPages={totalPages}
            prevPage={prevPage}
            nextPage={nextPage}
            changeCurrentPage={changeCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;

export const getStaticProps: GetStaticProps = async () => {
  const productsResponse = await fetch(
    "https://project-03-i2tr.onrender.com/products"
  );
  const productsData: ProductsType[] = await productsResponse.json();

  return {
    props: {
      productsData,
    },
  };
};
