import Pagination from "@/components/Pagination";
import ProductsCard from "@/components/ProductsCard";
import usePagination from "@/hooks/usePagination";
import { ProductsType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

interface Props {
  productsData: ProductsType[];
}

const Search: NextPage<Props> = ({ productsData }) => {
  const [isSearched, setIsSearched] = useState<boolean>(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const productsPerPage = 4;
  const {
    currentPage,
    totalPages,
    currentProducts,
    prevPage,
    nextPage,
    changeCurrentPage,
  } = usePagination(productsData, productsPerPage);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        searchTerm: inputRef?.current?.value,
      },
    });
    setIsSearched(true);
  };

  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-2 text-center px-0">
          <img
            src="../icons/leftBracket.png"
            alt="LEFT BRACKET"
            style={{ width: "6.55px", height: "11.44px" }}
            onClick={() => router.back()}
          />
        </div>
        <div className="col-10 position-relative pl-0">
          <form onSubmit={handleOnSubmit}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Пребарувај..."
              className="light-grey cormorant-garamond-font font-weight-500 footer-radius-border w-100"
            />
            {isSearched ? (
              <i
                className="fa-solid fa-x search-icon clear-input-icon"
                onClick={() => {
                  // @ts-ignore
                  inputRef.current.value = "";
                  setIsSearched(false);
                  const { searchTerm, ...rest } = router.query;
                  router.push({
                    pathname: "search",
                    query: {
                      ...rest,
                    },
                  });
                }}
              />
            ) : (
              <img
                src="../icons/searchIcon.png"
                alt="SEARCH ICON"
                className="search-icon"
              />
            )}
          </form>
        </div>

        {currentProducts.map((product) => {
          return (
            <div key={`search-${product.id}`} className="col-6 mt-3">
              <ProductsCard {...product} />
            </div>
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
  );
};

export default Search;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let res: Response;
  let productsData: ProductsType[];

  try {
    if (query.searchTerm) {
      res = await fetch(
        `https://project-03-i2tr.onrender.com/products?category_like=${query.searchTerm}`
      );
    } else {
      return {
        props: {
          productsData: [],
        },
      };
    }

    productsData = await res.json();

    return {
      props: {
        productsData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        productsData: [],
      },
    };
  }
};
