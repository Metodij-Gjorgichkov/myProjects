import Card from "@/components/Card";
import CompanyPolicies from "@/components/CompanyPolicies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import Pagination from "@/components/Pagination";
import { FavoritesAndBasketContext } from "@/context/FavoriteContextConstructor";
import { HeaderContext } from "@/context/HeaderContextConstructor";
import usePagination from "@/hooks/usePagination";
import { CompanyPoliciesType, ProductsType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React, { useContext, useState } from "react";
import TypeWriter from "typewriter-effect";

interface Props {
  companyPoliciesData: CompanyPoliciesType;
  productsData: ProductsType[];
}

const Order: NextPage<Props> = ({ companyPoliciesData, productsData }) => {
  const { favorites, basket, handleProductsDeletion } = useContext(
    FavoritesAndBasketContext
  );

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

      <div className="container px-4">
        <div className="row">
          <div className="col-12 mt-4">
            <div className="row cormorant-garamond-font-italic font-weight-400 text-center align-items-center mb-3">
              <div className="col-6 ">
                <img src="../icons/basket1.png" alt="basket" />
                <p className="d-inline ml-2">Кошничка ({basket?.length})</p>
              </div>
              <div className="col-6">
                <Link className="light-grey" href={"/favorites"}>
                  <img src="../icons/heart.png" alt="heart" />
                  <p className="d-inline ml-2">Омилени ({favorites?.length})</p>
                </Link>
              </div>
            </div>

            <div className="border-bottom-gold-gradient fav"></div>
          </div>
        </div>

        {/* listing the cards added to the basket */}
        <div className="row mt-3 mb-4">
          {basket.length > 0 ? (
            basket?.map((prod, index) => {
              return (
                <Card
                  key={`basket-${index}`}
                  {...prod}
                  column="col-12"
                  imageHeight="large-image"
                  fontSize="card-text-size"
                />
              );
            })
          ) : (
            <div className="mt-4 px-4">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 20,
                  strings: [
                    " There are currently no items added in your basket!",
                  ],
                }}
              />
            </div>
          )}
        </div>

        {/* LISTING THE PRODUCT NAMES, QUANTITY AND PRICE */}
        <div className="row">
          <div className="col-12">
            {/* logic when only one product is added to the basket */}
            {basket.length === 1 ? (
              <>
                <div className="d-flex justify-content-between align-items-center">
                  <p>
                    {basket[0].name} {basket[0].prodQuantity}x
                  </p>
                  <p>{basket[0].prodQuantity * basket[0].price} ден.</p>
                </div>
                <div className="d-flex justify-content-between align-items-center fancy-olive">
                  <p>+ достава до адреса </p>
                  <p>150 ден.</p>
                </div>
                {basket[0].discount ? (
                  <div className="d-flex justify-content-between align-items-center red-alert ">
                    <p>{basket[0].prodQuantity}x -20% попуст!</p>
                    <p>
                      {basket
                        .filter((prod) => prod.discount)
                        .map((prod) => prod.prodQuantity * prod.price * 0.2)
                        .reduce(
                          (total, discountedPrice) => total + discountedPrice,
                          0
                        )}
                      ден.
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <div className="border-bottom-gold-gradient order my-4"></div>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">Вкупно:</h4>
                  <div>
                    <h4 className="d-inline mr-2">
                      {basket[0].prodQuantity *
                        (+basket[0].price -
                          (basket[0].discount ? 0.2 * basket[0].price : 0)) +
                        150}
                    </h4>
                    <h4 className="mb-0 d-inline">ден.</h4>
                  </div>
                </div>
                <div className="border-bottom-gold-gradient order my-4"></div>
              </>
            ) : (
              <>
                {/* logic when there are multiple products in the basket */}
                {basket.map((prod) => (
                  <div key={prod.id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <p>
                        {prod.name} {prod.prodQuantity}x
                      </p>
                      <p>{prod.prodQuantity * prod.price} ден.</p>
                    </div>
                  </div>
                ))}

                {/* guard for delivery */}
                {basket.length === 0 ? (
                  ""
                ) : (
                  <>
                    <div className="d-flex justify-content-between align-items-center fancy-olive">
                      <p>+ достава до адреса </p>
                      <p>150 ден.</p>
                    </div>
                  </>
                )}

                {/* checks if there are discounts and add them to the price collected */}
                {basket.some((prod) => prod.discount) && (
                  <div className="d-flex justify-content-between align-items-center red-alert">
                    <p>
                      {basket
                        .filter((prod) => prod.discount)
                        .reduce(
                          (totalQuantity, prod) =>
                            totalQuantity + prod.prodQuantity,
                          0
                        )}
                      x -20% попуст!
                    </p>

                    <p>
                      -
                      {basket
                        .filter((prod) => prod.discount)
                        .map((prod) => prod.prodQuantity * prod.price * 0.2)
                        .reduce(
                          (total, discountedPrice) => total + discountedPrice,
                          0
                        )}
                      ден.
                    </p>
                  </div>
                )}

                {/* calculates the whole price of products with discounts and delivery */}
                {basket.length === 0 ? (
                  ""
                ) : (
                  <>
                    <div className="border-bottom-gold-gradient order my-4"></div>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">Вкупно:</h4>
                      <div>
                        <h4 className="d-inline mr-2">
                          {basket.reduce((total, prod) => {
                            const productPrice =
                              prod.prodQuantity * prod.price -
                              (prod.discount
                                ? 0.2 * prod.prodQuantity * prod.price
                                : 0);
                            return total + productPrice;
                          }, 0) + 150}{" "}
                        </h4>
                        <h4 className="mb-0 d-inline">ден.</h4>
                      </div>
                    </div>
                    <div className="border-bottom-gold-gradient order my-4"></div>
                  </>
                )}
              </>
            )}
          </div>

          {/* checks if there are products in the basket  */}
          {basket.length >= 1 ? (
            <div className="col-12 mb-5">
              <Link href={"/formToOrder"}>
                <button
                  type="submit"
                  className="gold-gradient-1 footer-radius-border px-6 mr-3"
                  style={{ height: "50px" }}
                >
                  Продолжи
                </button>
              </Link>
              <img
                src="../icons/delete.png"
                alt="delete"
                onClick={() => handleProductsDeletion()}
              />
            </div>
          ) : (
            ""
          )}

          <CompanyPolicies companyPoliciesData={companyPoliciesData} />

          <div className="col-12">
            <div className="other-similar-products">
              <h4 className="mb-4 mr-3">Други парчиња:</h4>
            </div>
          </div>

          {currentProducts.map((prod) => {
            return (
              <Card
                key={prod.id}
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

export default Order;

export const getStaticProps: GetStaticProps = async () => {
  const companyPoliciesResponse = await fetch(
    "https://project-03-i2tr.onrender.com/companyPolicies"
  );
  const companyPoliciesData = await companyPoliciesResponse.json();

  const productsResponse = await fetch(
    "https://project-03-i2tr.onrender.com/products"
  );
  const productsData: ProductsType[] = await productsResponse.json();

  return {
    props: {
      companyPoliciesData,
      productsData,
    },
  };
};
