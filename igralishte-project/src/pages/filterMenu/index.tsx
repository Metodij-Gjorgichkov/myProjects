import GoldButton from "@/components/GoldButton";
import Header from "@/components/Header";
import { HeaderContext } from "@/context/HeaderContextConstructor";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useContext, useRef, useState } from "react";

interface Props {
  shirts: number;
  trousers: number;
  shorts: number;
  dresses: number;
  jackets: number;
  underPants: number;
  jewelery: number;
  bags: number;
}

const FilterMenu: NextPage<Props> = ({
  shirts,
  trousers,
  shorts,
  dresses,
  jackets,
  underPants,
  jewelery,
  bags,
}) => {
  const [category, setCategory] = useState({
    блузи: false,
    панталони: false,
    "здолништа / шорцеви": false,
    фустани: false,
    "палта и јакни": false,
    "долна облека": false,
    ташни: false,
    накит: false,
  });
  const [brand, setBrand] = useState({
    "Pink Partywear": false,
    "Factory Girl": false,
    "Main Days": false,
    Fraeil: false,
    Urma: false,
    "Candle Nest": false,
    "Beyond Green": false,
    Gatta: false,
  });

  const [size, setSize] = useState({
    XL: false,
    L: false,
    M: false,
    S: false,
    XS: false,
  });

  const [color, setColor] = useState({
    orange: false,
    yellow: false,
    yellowBrightColor: false,
    green: false,
    blue: false,
    ribbonPink: false,
    lightGray: false,
    white: false,
    black: false,
  });

  const [price, setPrice] = useState({
    discount: false,
    "range500-1000": false,
    "range1500-2000": false,
    "range2000-2500": false,
    range2500andUp: false,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const { isHamburgerMenuOpen } = useContext(HeaderContext);
  const router = useRouter();

  const handleOnCategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;

    setCategory({
      ...category,
      [name]: checked,
    });
  };

  const handleOnBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setBrand({
      ...brand,
      [name]: checked,
    });
  };

  const handleOnSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setSize({
      ...size,
      [name]: checked,
    });
  };

  const handleOnColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setColor({
      ...color,
      [name]: checked,
    });
  };

  const handleOnPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setPrice({
      ...price,
      [name]: checked,
    });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // takes the selected categories
    let selectedCategories;
    if (category) {
      selectedCategories = Object.entries(category)
        .filter(([_, isSelected]) => isSelected)
        .map(([categoryName, _]) => categoryName);
    }

    // takes the selected brands
    let selectedBrands;
    if (brand) {
      selectedBrands = Object.entries(brand)
        .filter(([_, isSelected]) => isSelected)
        .map(([brandName, _]) => brandName);
    }

    // takes the selected sizes
    let selectedSizes;
    if (size) {
      selectedSizes = Object.entries(size)
        .filter(([_, isSelected]) => isSelected)
        .map(([sizeName, _]) => sizeName);
    }

    // takes the selected colors
    let selectedColors;
    if (color) {
      selectedColors = Object.entries(color)
        .filter(([_, isSelected]) => isSelected)
        .map(([colorName, _]) => colorName);
    }

    // takes the selected price
    let selectedPrices;
    if (price) {
      selectedPrices = Object.entries(price)
        .filter(([_, isSelected]) => isSelected)
        .map(([priceName, _]) => priceName);
    }

    // creates the dynamic query object
    const queryObject: { [key: string]: string | string[] } = {};
    if (selectedCategories) {
      queryObject.category = selectedCategories;
    }
    if (selectedBrands) {
      queryObject.brand = selectedBrands;
    }
    if (selectedSizes) {
      queryObject.size = selectedSizes;
    }
    if (selectedColors) {
      queryObject.color = selectedColors;
    }
    if (selectedPrices) {
      queryObject.price = selectedPrices;
    }

    // pushes the queries which exist
    router.push({
      pathname: "/productPage",
      query: queryObject,
    });
  };

  return (
    <>
      {isHamburgerMenuOpen ? (
        <Header />
      ) : (
        <>
          <Header />
          <div className="container">
            <div className="row">
              <div className="col-12 position-relative pt-3 pb-4">
                <div className="px-2">
                  <input
                    type="text"
                    ref={inputRef}
                    placeholder="Пребарувај..."
                    className="w-100 footer-radius-border cormorant-garamond-font font-weight-500"
                    style={{ height: "32px" }}
                    onKeyDown={(
                      event: React.KeyboardEvent<HTMLInputElement>
                    ) => {
                      if (event.key === "Enter") {
                        router.push({
                          pathname: "/productPage",
                          query: {
                            category: inputRef?.current?.value,
                          },
                        });
                        // @ts-ignore
                        inputRef.current.value = "";
                      }
                    }}
                  />
                  <img
                    src="../icons/filterMenuSearch.png"
                    className="filter-search"
                    alt="filter search"
                  />
                </div>
              </div>

              <div className="col-12 pb-5">
                <div className="px-2">
                  <h5 className="cormorant-infant-font font-weight-400 d-inline">
                    Категорија
                  </h5>
                  <div className="border-bottom-gold-gradient mt-2 mb-3"></div>

                  <form
                    onSubmit={handleFormSubmit}
                    className="cormorant-garamond-font font-weight-500 dark-grey"
                  >
                    {/* categories */}
                    <input
                      type="checkbox"
                      name="блузи"
                      value={"блузи"}
                      id="bluzi"
                      className="mr-2"
                      onChange={handleOnCategoryChange}
                    />
                    <label htmlFor="bluzi">Блузи ({shirts})</label>
                    <br />
                    <input
                      type="checkbox"
                      name="панталони"
                      value={"панталони"}
                      id="pantaloni"
                      className="mr-2"
                      onChange={handleOnCategoryChange}
                    />
                    <label htmlFor="pantaloni">Панталони ({trousers})</label>
                    <br />
                    <input
                      type="checkbox"
                      name="здолништа / шорцеви"
                      value={"здолништа / шорцеви"}
                      id="zdolnista"
                      className="mr-2"
                      onChange={handleOnCategoryChange}
                    />
                    <label htmlFor="zdolnista">
                      Здолништа / шорцеви ({shorts})
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      name="фустани"
                      value={"фустани"}
                      id="fustani"
                      className="mr-2"
                      onChange={handleOnCategoryChange}
                    />
                    <label htmlFor="fustani">Фустани ({dresses})</label>
                    <br />
                    <input
                      type="checkbox"
                      name="палта и јакни"
                      value={"палта и јакни"}
                      id="palta"
                      className="mr-2"
                      onChange={handleOnCategoryChange}
                    />
                    <label htmlFor="palta">Палта и јакни ({jackets})</label>
                    <br />
                    <input
                      type="checkbox"
                      name="долна облека"
                      value={"долна облека"}
                      id="obleka"
                      className="mr-2"
                      onChange={handleOnCategoryChange}
                    />
                    <label htmlFor="obleka">Долна облека ({underPants})</label>
                    <br />
                    <br />

                    {/* brands */}
                    <h5 className="cormorant-infant-font font-weight-400 d-inline">
                      Брендови
                    </h5>
                    <div className="border-bottom-gold-gradient mt-2 mb-3"></div>
                    <input
                      type="checkbox"
                      id="pinkPartywear"
                      className="mr-2"
                      name="Pink Partywear"
                      value={"Pink Partywear"}
                      onChange={handleOnBrandChange}
                    />
                    <label htmlFor="pinkPartywear">Pink Partywear</label>
                    <br />
                    <input
                      type="checkbox"
                      name="Factory Girl"
                      value={"Factory Girl"}
                      id="factoryGirl"
                      className="mr-2"
                      onChange={handleOnBrandChange}
                    />
                    <label htmlFor="factoryGirl">Factory Girl</label>
                    <br />
                    <input
                      type="checkbox"
                      name="Main Days"
                      value={"Main Days"}
                      id="mainDays"
                      className="mr-2"
                      onChange={handleOnBrandChange}
                    />
                    <label htmlFor="mainDays">Main Days</label>
                    <div className="py-4 text-center">
                      <GoldButton
                        title="Филтрирај"
                        type="submit"
                        width="w-100"
                        height="50px"
                      />
                      <p className="underline" onClick={() => router.back()}>
                        откажи
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      name="Fraeil"
                      value={"Fraeil"}
                      id="fraeil"
                      className="mr-2"
                      onChange={handleOnBrandChange}
                    />
                    <label htmlFor="fraeil">Fraeil</label>
                    <br />
                    <input
                      type="checkbox"
                      name="Urma"
                      value={"Urma"}
                      id="urma"
                      className="mr-2"
                      onChange={handleOnBrandChange}
                    />
                    <label htmlFor="urma">Urma</label>
                    <br />
                    <input
                      type="checkbox"
                      name="Candle Nest"
                      value={"Candle Nest"}
                      id="candleNest"
                      className="mr-2"
                      onChange={handleOnBrandChange}
                    />
                    <label htmlFor="candleNest">Candle Nest</label>
                    <br />
                    <input
                      type="checkbox"
                      name="Beyond Green"
                      value={"Beyond Green"}
                      id="beyondGreen"
                      className="mr-2"
                      onChange={handleOnBrandChange}
                    />
                    <label htmlFor="beyondGreen">Beyond Green</label>
                    <br />
                    <input
                      type="checkbox"
                      name="Gatta"
                      value={"Gatta"}
                      id="gatta"
                      className="mr-2"
                      onChange={handleOnBrandChange}
                    />
                    <label htmlFor="gatta">Gatta</label>
                    <br />
                    <br />

                    {/* accesories */}
                    <h5 className="cormorant-infant-font font-weight-400 d-inline">
                      Аксесоари
                    </h5>
                    <div className="border-bottom-gold-gradient mt-2 mb-3"></div>
                    <input
                      type="checkbox"
                      name="накит"
                      value={"накит"}
                      id="nakit"
                      className="mr-2"
                      onChange={handleOnCategoryChange}
                    />
                    <label htmlFor="nakit">Накит ({jewelery})</label>
                    <br />
                    <input
                      type="checkbox"
                      name="ташни"
                      value={"ташни"}
                      id="tasni"
                      className="mr-2"
                      onChange={handleOnCategoryChange}
                    />
                    <label htmlFor="tasni">Ташни ({bags})</label>
                    <br />
                    <br />

                    {/* sizes */}
                    <h5 className="cormorant-infant-font font-weight-400 d-inline">
                      Величина
                    </h5>
                    <div className="border-bottom-gold-gradient size mt-2 mb-3"></div>
                    <input
                      type="checkbox"
                      name="XL"
                      value={"XL"}
                      id="sizeXL"
                      className="mr-2"
                      onChange={handleOnSizeChange}
                    />
                    <label htmlFor="sizeXL">XL</label>
                    <br />
                    <input
                      type="checkbox"
                      name="L"
                      value={"L"}
                      id="sizeL"
                      className="mr-2"
                      onChange={handleOnSizeChange}
                    />
                    <label htmlFor="sizeL">L</label>
                    <br />
                    <input
                      type="checkbox"
                      name="M"
                      value={"M"}
                      id="sizeM"
                      className="mr-2"
                      onChange={handleOnSizeChange}
                    />
                    <label htmlFor="sizeM">M</label>
                    <br />
                    <input
                      type="checkbox"
                      name="S"
                      value={"S"}
                      id="sizeS"
                      className="mr-2"
                      onChange={handleOnSizeChange}
                    />
                    <label htmlFor="sizeS">S</label>
                    <br />
                    <input
                      type="checkbox"
                      name="XS"
                      value={"XS"}
                      id="sizeXS"
                      className="mr-2"
                      onChange={handleOnSizeChange}
                    />
                    <label htmlFor="sizeXS">XS</label>
                    <br />
                    <br />

                    {/* colors */}
                    <h5 className="cormorant-infant-font font-weight-400 d-inline">
                      Боја
                    </h5>
                    <div className="border-bottom-gold-gradient color mt-2 mb-3"></div>
                    <input
                      type="checkbox"
                      id="orangeColor"
                      className="mr-2"
                      style={{ display: "none" }}
                      name="orange"
                      value={"orange"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="orangeColor">
                      <img
                        src="../icons/colors/orange.png"
                        alt="orange"
                        className={`mr-2 ${color.orange ? "active-color" : ""}`}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="yellowColor"
                      className="mr-2 "
                      style={{ display: "none" }}
                      name="yellow"
                      value={"yellow"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="yellowColor">
                      <img
                        src="../icons/colors/yellow.png"
                        alt="yellow"
                        className={`mr-2 ${color.yellow ? "active-color" : ""}`}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="yellowBrightColor"
                      className="mr-2 "
                      style={{ display: "none" }}
                      name="yellowBrightColor"
                      value={"yellowBrightColor"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="yellowBrightColor">
                      <img
                        src="../icons/colors/yellow.png"
                        alt="yellowBright"
                        className={`mr-2 ${
                          color.yellowBrightColor ? "active-color" : ""
                        }`}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="greenColor"
                      className="mr-2 "
                      style={{ display: "none" }}
                      name="green"
                      value={"green"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="greenColor">
                      <img
                        src="../icons/colors/green.png"
                        alt="green"
                        className={`mr-2 ${color.green ? "active-color" : ""}`}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="blueColor"
                      className="mr-2"
                      style={{ display: "none" }}
                      name="blue"
                      value={"blue"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="blueColor">
                      <img
                        src="../icons/colors/blue.png"
                        alt="blue"
                        className={`mr-2 ${color.blue ? "active-color" : ""}`}
                      />
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="ribbonPink"
                      className="mr-2 "
                      style={{ display: "none" }}
                      name="ribbonPink"
                      value={"ribbonPink"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="ribbonPink">
                      <img
                        src="../icons/colors/ribbonPink.png"
                        alt="ribbonPink"
                        className={`mr-2 ${
                          color.ribbonPink ? "active-color" : ""
                        }`}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="violetColor"
                      className="mr-2 "
                      style={{ display: "none" }}
                      name="blue"
                      value={"blue"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="violetColor">
                      <img
                        src="../icons/colors/violet.png"
                        alt="violet"
                        className={`mr-2 ${color.blue ? "active-color" : ""}`}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="lightGrayColor"
                      className="mr-2"
                      style={{ display: "none" }}
                      name="lightGray"
                      value={"lightGray"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="lightGrayColor">
                      <img
                        src="../icons/colors/lightGray.png"
                        alt="lightGray"
                        className={`mr-2 ${
                          color.lightGray ? "active-color" : ""
                        }`}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="whiteColor"
                      className="mr-2 "
                      style={{ display: "none" }}
                      name="white"
                      value={"white"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="whiteColor">
                      <img
                        src="../icons/colors/white.png"
                        alt="white"
                        className={`mr-2 ${color.white ? "active-color" : ""}`}
                      />
                    </label>
                    <input
                      type="checkbox"
                      id="blackColor"
                      className="mr-2 "
                      style={{ display: "none" }}
                      name="black"
                      value={"black"}
                      onChange={handleOnColorChange}
                    />
                    <label htmlFor="blackColor">
                      <img
                        src="../icons/colors/black.png"
                        alt="black"
                        className={`${color.black ? "active-color" : ""}`}
                      />
                    </label>
                    <br />
                    <br />

                    {/* prices */}
                    <h5 className="cormorant-infant-font font-weight-400 d-inline">
                      Цена
                    </h5>
                    <div className="border-bottom-gold-gradient price mt-2 mb-3"></div>
                    <input
                      type="checkbox"
                      name="discount"
                      id="red-alert"
                      className="mr-2"
                      onChange={handleOnPriceChange}
                    />
                    <label
                      htmlFor="onSale"
                      className="on-sale position-relative red-alert"
                    >
                      На попуст
                      <img
                        src="../icons/only1product.png"
                        alt="star"
                        style={{
                          width: "10px",
                          position: "absolute",
                          top: "4px",
                        }}
                      />
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="range500-1000"
                      className="mr-2"
                      name="range500-1000"
                      value={"range500-1000"}
                      onChange={handleOnPriceChange}
                    />
                    <label htmlFor="range500-1000">500 - 1000 ден.</label>
                    <br />
                    <input
                      type="checkbox"
                      id="range1500-2000"
                      className="mr-2"
                      name="range1500-2000"
                      value={"range1500-2000"}
                      onChange={handleOnPriceChange}
                    />
                    <label htmlFor="range1500-2000">1500 - 2000 ден.</label>
                    <br />
                    <input
                      type="checkbox"
                      id="range2000-2500"
                      className="mr-2"
                      name="range2000-2500"
                      value={"range2000-2500"}
                      onChange={handleOnPriceChange}
                    />
                    <label htmlFor="range2000-2500">2000 - 2500 ден.</label>
                    <br />
                    <input
                      type="checkbox"
                      id="range2500andUp"
                      className="mr-2"
                      name="range2500andUp"
                      value={"range2500andUp"}
                      onChange={handleOnPriceChange}
                    />
                    <label htmlFor="range2500andUp">Над 2500 ден.</label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FilterMenu;

export const getServerSideProps: GetServerSideProps = async () => {
  const resShirts = await fetch(
    "https://project-03-i2tr.onrender.com/products?category=блузи"
  );
  const shirts = await resShirts.json();

  const resTrousers = await fetch(
    "https://project-03-i2tr.onrender.com?category=панталони"
  );
  const trousers = await resTrousers.json();

  const resShorts = await fetch(
    "https://project-03-i2tr.onrender.com/products?category=здолништа+%2F+шорцеви"
  );
  const shorts = await resShorts.json();

  const resDresses = await fetch(
    "https://project-03-i2tr.onrender.com/products?category=фустани"
  );
  const dresses = await resDresses.json();

  const resJackets = await fetch(
    "https://project-03-i2tr.onrender.com/products?category=палта+и+јакни"
  );
  const jackets = await resJackets.json();

  const resUnderPants = await fetch(
    "https://project-03-i2tr.onrender.com/products?category=долна+облека"
  );
  const underPants = await resUnderPants.json();

  const resJewelery = await fetch(
    "https://project-03-i2tr.onrender.com/products?category=накит"
  );
  const jewelery = await resJewelery.json();

  const resBags = await fetch(
    "https://project-03-i2tr.onrender.com/products?category=ташни"
  );
  const bags = await resBags.json();

  return {
    props: {
      shirts: shirts.length,
      trousers: trousers.length,
      shorts: shorts.length,
      dresses: dresses.length,
      jackets: jackets.length,
      underPants: underPants.length,
      jewelery: jewelery.length,
      bags: bags.length,
    },
  };
};
