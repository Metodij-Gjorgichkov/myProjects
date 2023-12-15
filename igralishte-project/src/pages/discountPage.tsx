import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import Pagination from "@/components/Pagination";
import usePagination from "@/hooks/usePagination";
import { ProductsType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import React, { useContext, useState } from "react";

interface Props {
  productsData: ProductsType[];
}

const DiscountPage: NextPage<Props> = ({ productsData }) => {
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
      <Breadcrumbs title="Почетна" title1="Попуст" />
      <div className="container mb-5 cormorant-garamond-font font-weight-500">
        <div className="row">
          <div className="col-12">
            <h5 className="mt-3 mb-4">Парчиња на попуст:</h5>
          </div>
          {productsData.map((disc, index) => {
            return (
              <Card
                key={`disc-prods-${index}`}
                {...disc}
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

export default DiscountPage;

export const getServerSideProps: GetServerSideProps = async () => {
  let res = await fetch("http://localhost:5001/products?discount=20%");
  let productsData: ProductsType[] = await res.json();

  return {
    props: {
      productsData,
    },
  };
};
