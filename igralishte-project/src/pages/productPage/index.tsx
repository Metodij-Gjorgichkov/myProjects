import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import { ProductsType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";
import ProductsCard from "@/components/ProductsCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HeaderContext } from "@/context/HeaderContextConstructor";
import { FilterContext } from "@/context/FilterContextConstructor";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/Pagination";

interface Props {
  productsData: ProductsType[];
}

const ProductPage: NextPage<Props> = ({ productsData }) => {
  const { categoryValue, handleOnSelectChange } = useContext(FilterContext);

  const productsPerPage = 12;
  const {
    currentPage,
    totalPages,
    currentProducts,
    prevPage,
    nextPage,
    changeCurrentPage,
    setCurrentPage,
  } = usePagination(productsData, productsPerPage);

  // used to return us to the top when choosing another slide
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // fn for sorting the products 2, 1, 4, 1, 4
  const return_col_count = (index: any) => {
    let pattern = ["col-12", "col-6", "col-6", "col-6", "col-6"];

    if (index === 0 || index === 1) {
      return "col-6";
    }

    let patternIndex = (index - 2) % pattern.length;
    return pattern[patternIndex];
  };

  return (
    <>
      <Header />
      <InfiniteAdvertisement />
      <Breadcrumbs title="Почетна" title1={categoryValue} />

      <div className="container">
        <div className="row mb-4">
          <div className="col-12 pt-2 pb-4">
            <div className="d-flex justify-content-around align-items-center">
              <div>
                <Link href={"/filterMenu"}>
                  <img
                    src="../icons/fluentSearch.png"
                    className="footer-radius-border px-2"
                  />
                </Link>
              </div>
              <div className="cormorant-garamond-font font-weight-400">
                <span className="mr-2">Подреди според</span>
                <select
                  value={categoryValue}
                  className="footer-radius-border"
                  style={{ width: "90px" }}
                  onChange={(event) => {
                    handleOnSelectChange(event);
                    setCurrentPage(1);
                  }}
                >
                  <option value="Најново">Најново</option>
                  <option value="Најстаро">Најстаро</option>
                </select>
              </div>
            </div>
          </div>

          {currentProducts.length === 0 ? (
            <div className="col-12 text-center cormorant-garamond-font font-weight-400 pt-4">
              <h5>No items were found from these filters</h5>
            </div>
          ) : (
            currentProducts.map((prod, index) => (
              <div key={prod.id} className={return_col_count(index)}>
                <ProductsCard {...prod} columnClass={return_col_count(index)} />
              </div>
            ))
          )}
        </div>
        <div className="row">
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
export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let apiUrl = "http://localhost:5001/products";

  const appendQueryParam = (paramName: any, paramValues: any) => {
    if (Array.isArray(paramValues)) {
      paramValues.forEach((value) => {
        apiUrl += apiUrl.includes("?") ? "&" : "?";
        apiUrl += `${paramName}=${value}`;
      });
    } else {
      apiUrl += apiUrl.includes("?") ? "&" : "?";
      apiUrl += `${paramName}=${paramValues}`;
    }
  };

  const appendQueryParamToPriceRange = (paramName: any, paramValues: any) => {
    if (Array.isArray(paramValues)) {
      paramValues.forEach((value) => {
        apiUrl += apiUrl.includes("?") ? "&" : "?";
        if (value === "discount") {
          apiUrl += `discount=20%`;
        } else if (value === "range500-1000") {
          apiUrl += `${paramName}_gte=500&price_lte=1000`;
        } else if (value === "range1500-2000") {
          apiUrl += `${paramName}_gte=1500&price_lte=2000`;
        } else if (value === "range2000-2500") {
          apiUrl += `${paramName}_gte=2000&price_lte=2500`;
        } else if (value === "range2500andUp") {
          apiUrl += `${paramName}_gte=2500&price_lte=50000`;
        }
      });
    } else {
      apiUrl += apiUrl.includes("?") ? "&" : "?";
      if (paramValues === "discount") {
        apiUrl += `discount=20%`;
      } else if (paramValues === "range500-1000") {
        apiUrl += `${paramName}_gte=500&price_lte=1000`;
      } else if (paramValues === "range1500-2000") {
        apiUrl += `${paramName}_gte=1500&price_lte=2000`;
      } else if (paramValues === "range2000-2500") {
        apiUrl += `${paramName}_gte=2000&price_lte=2500`;
      } else if (paramValues === "range2500andUp") {
        apiUrl += `${paramName}_gte=2500&price_lte=50000`;
      }
    }
  };

  const appendQueryCategoryParam = (paramName: any, paramValues: any) => {
    if (Array.isArray(paramValues)) {
      paramValues.forEach((value) => {
        apiUrl += apiUrl.includes("?") ? "&" : "?";
        apiUrl += `${paramName}_like=${value}`;
      });
    } else {
      apiUrl += apiUrl.includes("?") ? "&" : "?";
      apiUrl += `${paramName}_like=${paramValues}`;
    }
  };

  if (query.category) {
    const category = Array.isArray(query.category)
      ? query.category
      : query.category;
    appendQueryCategoryParam("category", category);
  }

  if (query.brand) {
    const brand = Array.isArray(query.brand) ? query.brand : query.brand;
    appendQueryParam("brand", brand);
  }

  if (query.size) {
    const size = Array.isArray(query.size) ? query.size : query.size;
    appendQueryParam("size", size);
  }

  if (query.type) {
    const type = Array.isArray(query.type) ? query.type : query.type;
    appendQueryParam("type", type);
  }

  if (query.color) {
    const color = Array.isArray(query.color) ? query.color : query.color;
    appendQueryParam("color", color);
  }

  if (query.price) {
    const price = Array.isArray(query.price) ? query.price : query.price;
    appendQueryParamToPriceRange("price", price);
  }

  if (query.sort) {
    appendQueryParam("sort", query.sort);

    if (query.sort === "Најново") {
      apiUrl += "&_sort=createdAt&_order=desc";
    } else if (query.sort === "Најстаро") {
      apiUrl += "&_sort=createdAt&_order=asc";
    }
  }

  let res = await fetch(apiUrl);
  let productsData: ProductsType[] = await res.json();

  return {
    props: {
      productsData,
    },
  };
};
