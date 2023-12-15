import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import CompanyPolicies from "@/components/CompanyPolicies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import { FavoritesAndBasketContext } from "@/context/FavoriteContextConstructor";
import { HeaderContext } from "@/context/HeaderContextConstructor";
import { CompanyPoliciesType, ProductsType } from "@/types/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

interface Props {
  product: ProductsType;
  companyPoliciesData: CompanyPoliciesType;
}

const ProductsDetail = ({ product, companyPoliciesData }: Props) => {
  const [mainImage, setMainImage] = useState<string>(product.images.main);
  const [filteredData, setFilteredData] = useState<ProductsType[]>([]);
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(filteredData.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredData.slice(startIndex, endIndex);

  const { isHamburgerMenuOpen } = useContext(HeaderContext);

  const {
    favorites,
    basket,
    handleAddFavorite,
    handleRemoveFavorite,
    handleAddToBasket,
  } = useContext(FavoritesAndBasketContext);

  const isFavorite = favorites?.find((fav) => fav.id === product.id);
  const isAddedToBasket = basket?.find((item) => item.id === product.id);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => {
        const productsData = data.filter((prod: ProductsType) => {
          if (prod.category === product.category) {
            return true;
          }
          return false;
        });
        setFilteredData(productsData);
      })
      .catch((err) => console.log(err, "error fetching the data"));
  }, []);

  const handleMainImage = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const clickedImageSrc = event.currentTarget.src;
    setMainImage(clickedImageSrc);
  };

  const handlePlusProductQuantity = (product: ProductsType) => {
    if (productQuantity < +product.leftOnly) {
      setProductQuantity(productQuantity + 1);
    }
  };

  const handleMinusProductQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    } else {
      setProductQuantity(1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const changeCurrentPage = (id: number) => {
    setCurrentPage(id);
  };

  return (
    <>
      <Header />
      <InfiniteAdvertisement />
      <Breadcrumbs
        title="Почетна"
        title1={product.brand}
        title2={product.name}
        fontsize="17px"
      />
      <div className="container">
        <div className="row cormorant-garamond-font px-3">
          <div className="col-12 pt-3 pb-3 ">
            <div>
              <h5 className="cormorant-garamond-font">{product.name}</h5>
            </div>
          </div>
          <div className="col-12 position-relative">
            {/* main picture */}
            <div>
              {product.discount ? (
                <span className="discount main-img">-{product.discount}</span>
              ) : (
                ""
              )}
              <img
                src={mainImage}
                alt=""
                style={{ height: "330px", width: "100%" }}
                className="mb-3"
              />
              {/* favorite and basket fixed images */}
              <div className="basket-heart">
                <div
                  className="favorite"
                  onClick={() =>
                    isFavorite
                      ? handleRemoveFavorite(product)
                      : handleAddFavorite(product)
                  }
                >
                  {isFavorite ? (
                    <img
                      src="../icons/full-heart.png"
                      alt="empty"
                      className="heart-product-detail"
                    />
                  ) : (
                    <>
                      <img
                        src="../icons/emptyHeart.png"
                        alt="empty"
                        className="heart-product-detail"
                      />
                    </>
                  )}
                </div>
                <div className="basket">
                  <Link href={"/order"}>
                    <img src="../icons/basket-detail.png" alt="basket-detail" />
                  </Link>
                </div>
              </div>

              {/* small images */}
              <div className="d-flex justify-content-around align-items-center position-relative small-images-detail">
                {product.images.small.map((image, index) => {
                  return (
                    <div className="w-20" key={`small-image-${index}`}>
                      <img
                        src={image}
                        style={{
                          height: "60px",
                        }}
                        onClick={handleMainImage}
                        className="w-100 d-block"
                      />
                    </div>
                  );
                })}
              </div>
              <h3 className="mb-3 cormorant-garamond-font">
                {product.price} ден.
              </h3>
              <p className="mb-3">{product.description}</p>

              {/* choose quantity */}
              <div className="d-flex align-items-center pt-3 pb-4">
                <h4 className="mr-3 mb-0">Количина:</h4>
                <div className="minus-product-detail mr-3 position-relative">
                  <img
                    src="../icons/minus.png"
                    alt="minus"
                    onClick={() => handleMinusProductQuantity()}
                  />
                </div>
                <h5 className="mr-3 jost-font mb-0">{productQuantity}</h5>
                <div className="plus-product-detail position-relative">
                  <img
                    src="../icons/plus.png"
                    alt="plus"
                    onClick={() => handlePlusProductQuantity(product)}
                  />
                </div>
              </div>

              {/* add to basket or favorites */}
              <div className="add-to-card-or-favorite ">
                <div className="d-inline">
                  {isAddedToBasket ? (
                    <Link href={"/order"}>
                      <img
                        src="../icons/added.png"
                        alt="added"
                        className="added-to-basket mr-2"
                      />
                    </Link>
                  ) : (
                    <button
                      className="w-75 pink-gradient-1 footer-radius-border mr-2"
                      style={{ height: "40px" }}
                      onClick={() =>
                        handleAddToBasket({
                          ...product,
                          prodQuantity: productQuantity,
                        })
                      }
                    >
                      Додај во кошничка
                    </button>
                  )}
                </div>
                <div
                  className="favorite d-inline"
                  onClick={() =>
                    isFavorite
                      ? handleRemoveFavorite(product)
                      : handleAddFavorite(product)
                  }
                >
                  {isFavorite ? (
                    <img
                      src="../icons/dark-heart.png"
                      alt="favorite-empty-heart"
                      style={{ color: "black" }}
                    />
                  ) : (
                    <img src="../icons/heart.png" alt="favorite-full-heart" />
                  )}
                </div>
                <div className="border-bottom-gold-gradient order mt-4 mb-3"></div>
              </div>

              {/* choose size */}
              <div className="d-flex align-items-center justify-content-evenly pt-2 pb-3">
                <h4 className="mb-0 mr-3">Величина:</h4>
                <p className="mb-0 mr-3 product-size pink-gradient-1">
                  {product.size}
                </p>
                <p className="position-relative dark-grey mb-0">
                  <img
                    src="../icons/only1product.png"
                    className="product-detail-star"
                  />
                  <span>{`само ${product.leftOnly} ${
                    +product.leftOnly > 1 ? "парчиња " : "парче"
                  } `}</span>
                </p>
              </div>

              {/* advise for size */}
              <div className="advise-for-size">
                <p>{product.adviceForSize}</p>
                <h6 className="mb-0">види ги димензиите</h6>
                <div className="black-line"></div>
                <div className="border-bottom-gold-gradient order mt-4 mb-3"></div>
              </div>

              {/* color */}
              <div className="color d-flex align-items-center justify-content-evenly pb-3">
                <h4 className="mb-0 mr-3">Боја:</h4>
                <img
                  src={`../icons/colors/${product.color}.png`}
                  alt={product.color}
                  className="mr-3"
                />
                <span className="dark-grey">{product.color}</span>
              </div>

              {/* material */}
              <div className="material pb-3">
                <h4 className="mb-3 mr-3">Материјал:</h4>
                <h5 className="dark-grey mb-3">{product.material}</h5>
                <div className="d-flex align-items-center justify-content-evenly mb-3">
                  <h4 className="mb-0 mr-3">Состојба:</h4>
                  <h6 className="mb-0 mr-3 dark-grey">{product.state}</h6>
                  <div>
                    <h6 className="mb-0 read-more-paragraph">
                      прочитај повеќе
                    </h6>
                    <div className="black-line read-more"></div>
                  </div>
                </div>
                <h6 className="mb-3 mr-3 dark-grey">{product.maintence}</h6>
                <div className="border-bottom-gold-gradient order"></div>
              </div>

              {/* signs */}
              <div className="signs pb-4">
                <h4 className="mb-3 mr-3">Ознаки:</h4>
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <span className="footer-radius-border px-1">
                    {product.signs.new}
                  </span>
                  <span className="footer-radius-border px-1">
                    {product.signs.shirts}
                  </span>
                  <span className="footer-radius-border px-1">
                    {product.signs.vintage}
                  </span>
                  <span className="footer-radius-border px-1">
                    {product.signs.wardrobe}
                  </span>
                </div>
                <CompanyPolicies companyPoliciesData={companyPoliciesData} />
              </div>
            </div>
          </div>

          {/* similar products from the chosen product (same category) */}
          <div className="col-12">
            <div className="other-similar-products">
              <h4 className="mb-4 mr-3">Други парчиња:</h4>
            </div>
          </div>
          {currentProducts &&
            currentProducts.map((prod) => {
              return (
                <Card
                  key={`filteredProd-${prod.id}`}
                  {...prod}
                  imageHeight="small-image"
                  column="col-6"
                />
              );
            })}
          <div
            className="col-12 text-center py-3 font-size-30"
            style={{ fontSize: "25px" }}
          >
            <ul className="cormorant-garamond-font font-weight-400 d-flex justify-content-center align-items-center">
              <li className="mr-2" onClick={prevPage}>
                &lt;
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item  mr-2 ${
                    currentPage === index + 1 ? "activePagePagination" : ""
                  }`}
                  onClick={() => changeCurrentPage(index + 1)}
                >
                  {index + 1}{" "}
                  {index !== totalPages - 1 && (
                    <img
                      src="../icons/circle.png"
                      alt="circle"
                      className="circle"
                    />
                  )}
                </li>
              ))}
              <li onClick={nextPage}>&gt;</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const productsResponse = await fetch("http://localhost:5001/products");
  const productsData: ProductsType[] = await productsResponse.json();

  const paths = productsData.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let product: ProductsType | undefined = undefined;
  const companyPoliciesResponse = await fetch(
    "http://localhost:5001/companyPolicies"
  );
  const companyPoliciesData = await companyPoliciesResponse.json();

  if (params?.id) {
    const productsResponse = await fetch(
      `http://localhost:5001/products/${params.id}`
    );
    product = await productsResponse.json();
  }

  return {
    props: {
      product,
      companyPoliciesData,
    },
  };
};
