import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import Pagination from "@/components/Pagination";
import usePagination from "@/hooks/usePagination";
import { ProductsType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";

interface Props {
  brandData: ProductsType[];
}

const BrandPage: NextPage<Props> = ({ brandData }) => {
  const productsPerPage = 6;
  const {
    currentPage,
    totalPages,
    currentProducts,
    prevPage,
    nextPage,
    changeCurrentPage,
  } = usePagination(brandData, productsPerPage);

  return (
    <>
      <Header />
      <InfiniteAdvertisement />
      <Breadcrumbs
        title="Почетна"
        title1={brandData[0].brand_informations.world_wide_brand}
        title2={brandData[0].brand}
        fontsize="17px"
      />

      <div className="container my-2">
        <div className="row">
          <div className="col-12 mb-3">
            <img
              src={brandData[0].brand_informations.brand_logo_image}
              alt="brand logo image"
              style={{ width: "80px" }}
              className="mr-2"
            />
            <h5 className="d-inline cormont-faramond-font font-weight-500">
              {brandData[0].brand}
            </h5>
          </div>

          <div className="col-12 text-center mb-2">
            <img
              src={brandData[0].brand_informations.brand_advertise_image}
              alt="advertise image"
              className="w-100 d-block"
              style={{ height: "270px" }}
            />
          </div>

          <div className="col-12 cormont-faramond-font dark-grey font-weight-500 mb-3">
            <div className="product-concept">
              <small className="d-block mb-4">
                {brandData[0].brand_informations.brand_concept_text}:
              </small>
              <div className="px-4 mb-4">
                <nav>
                  <ul className="ul-circle">
                    <li>
                      <small>
                        {brandData[0].brand_informations.brand_question_one}
                      </small>
                    </li>
                    <li>
                      <small>
                        {brandData[0].brand_informations.brand_question_two}
                      </small>
                    </li>
                    <li>
                      <small>
                        {brandData[0].brand_informations.brand_question_three}
                      </small>
                    </li>
                    <li>
                      <small>
                        {brandData[0].brand_informations.brand_question_four}
                      </small>
                    </li>
                  </ul>
                </nav>
              </div>
              <small className="display-block mb-2">
                {brandData[0].brand_informations.brand_response}.
              </small>
              <br />
              <br />
              <small className="display-block">
                {brandData[0].brand_informations.brand_product_description}
              </small>
            </div>
          </div>

          <div className="col-12 cormont-faramond-font font-weight-500">
            <p className="mb-4 mt-3">Парчиња од брендот: </p>
          </div>

          {currentProducts.map((brand, index) => {
            return (
              <Card
                key={`brand-${index}`}
                {...brand}
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BrandPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let brandData: ProductsType[];
  let res: Response;

  try {
    if (query.brandName) {
      res = await fetch(
        `https://project-03-i2tr.onrender.com/products?brand_like=${query.brandName}`
      );
    } else {
      return {
        props: {
          brandData: [],
        },
      };
    }

    brandData = await res.json();

    return {
      props: {
        brandData,
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
