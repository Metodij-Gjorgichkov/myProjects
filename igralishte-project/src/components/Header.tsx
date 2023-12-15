import { FilterContext } from "@/context/FilterContextConstructor";
import { HeaderContext } from "@/context/HeaderContextConstructor";
import { UserProfileContext } from "@/context/UserProfileContextConstructor";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const Header = () => {
  const [vintageClothes, setVintageClothes] = useState<boolean>(false);
  const [brands, setBrands] = useState<boolean>(false);
  const [acesories, setAcesories] = useState<boolean>(false);
  const { user, handleLogOut } = useContext(UserProfileContext);
  const { categoryValue, handleOnSelectChangeFromHamburgerMenu } =
    useContext(FilterContext);
  const router = useRouter();

  const {
    isHamburgerMenuOpen,
    handleHamburgerMenuClick,
    handleSearchIconClick,
    handleOnLogoClick,
    closeTheHamburgerMenu,
  } = useContext(HeaderContext);

  const handleOnCategoryClick = (text: string) => {
    closeTheHamburgerMenu();
    router.push({
      pathname: "/productPage",
      query: {
        category: text,
        sort: categoryValue,
      },
    });
  };

  const handleAllClick = (text: string) => {
    closeTheHamburgerMenu();
    router.push({
      pathname: "/productPage",
      query: {
        type: text,
        sort: categoryValue,
      },
    });
  };
  const handleOnBrandClick = (text: string) => {
    closeTheHamburgerMenu();
    router.push({
      pathname: "/brandPage",
      query: {
        brandName: text,
      },
    });
  };

  const menuVars = {
    initial: {
      x: 600,
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.7,
      },
    },
    exit: {
      x: 600,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <>
      <div className={`container fixed-header`}>
        <div className="row py-2 text-center align-items-center">
          <div className="col-3" onClick={handleHamburgerMenuClick}>
            <img src="../icons/hamburgerMenu.png" alt="HAMBUGER MENU" />
          </div>
          <div className="col-6" onClick={handleOnLogoClick}>
            <Link href={"/"}>
              <img
                src="../icons/logoFinal.png"
                className="object-cover"
                alt="LOGO"
              />
            </Link>
          </div>
          <div className="col-3" onClick={handleSearchIconClick}>
            <Link href={"/search"}>
              <img src="../icons/searchIcon.png" alt="SEARCH ICON" />
            </Link>
          </div>
        </div>
      </div>

      {/* hamburger menu */}
      <AnimatePresence>
        {isHamburgerMenuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`container pt-5 pb-4 color-white border-top hamburger-menu-container`}
            style={{ overflow: "auto" }}
          >
            <div className="row">
              <div className="col-12 cormorant-garamond-font">
                <div className="px-4 ">
                  <h4
                    className="cormorant-garamond-font-italic font-weight-700 border-bottom d-inline"
                    style={{ fontSize: "22px" }}
                    onClick={() => {
                      closeTheHamburgerMenu();
                      handleOnSelectChangeFromHamburgerMenu("Најново");
                    }}
                  >
                    Ново
                  </h4>

                  <nav className="mt-4 line-height-30 mb-10">
                    <div
                      className="d-flex justify-content-between align-items-center"
                      onClick={() => {
                        setBrands(false);
                        setAcesories(false);
                        setVintageClothes(!vintageClothes);
                      }}
                    >
                      <h5 className="line-height-30">Vintage Облека</h5>
                      {vintageClothes ? (
                        <img src="../icons/arrowUp.png" />
                      ) : (
                        <img src="../icons/arrowDown.png" />
                      )}
                    </div>
                    {vintageClothes && (
                      <ul className="cormont-faramond-font line-height-30">
                        <li>
                          <img
                            src="../icons/star1.png"
                            alt="star"
                            style={{ fontSize: "20px" }}
                          />
                          <span
                            className="cormorant-garamond-font-italic fancy-olive"
                            style={{ fontSize: "20px" }}
                            onClick={() => {
                              handleAllClick("vintage");
                            }}
                          >
                            Види ги сите
                          </span>
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnCategoryClick("блузи")}
                        >
                          Блузи
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnCategoryClick("панталони")}
                        >
                          Панталони
                        </li>
                        <li
                          className="pl-5"
                          onClick={() =>
                            handleOnCategoryClick("здолништа / шорцеви")
                          }
                        >
                          Здолништа / шорцеви
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnCategoryClick("фустани")}
                        >
                          Фустани
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnCategoryClick("палта и јакни")}
                        >
                          Палта и јакни
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnCategoryClick("долна облека")}
                        >
                          Долна облека
                        </li>
                      </ul>
                    )}

                    <div
                      className="d-flex justify-content-between align-items-center"
                      onClick={() => {
                        setAcesories(false);
                        setVintageClothes(false);
                        setBrands(!brands);
                      }}
                    >
                      <h5 className="line-height-30">Брендови</h5>
                      {brands ? (
                        <img src="../icons/arrowUp.png" />
                      ) : (
                        <img src="../icons/arrowDown.png" />
                      )}
                    </div>
                    {brands && (
                      <ul className="cormont-faramond-font line-height-30">
                        <li>
                          <img
                            src="../icons/star1.png"
                            alt="star"
                            style={{ fontSize: "20px" }}
                          />
                          <span
                            className="cormorant-garamond-font-italic fancy-olive"
                            style={{ fontSize: "20px" }}
                            onClick={() => {
                              closeTheHamburgerMenu();
                              router.push({
                                pathname: "/allBrands",
                              });
                            }}
                          >
                            Види ги сите
                          </span>
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnBrandClick("Pink Partywear")}
                        >
                          Pinc Partywear
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnBrandClick("Factory Girl")}
                        >
                          Factory Girl
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnBrandClick("Main Days")}
                        >
                          Main Days
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnBrandClick("Fraeil")}
                        >
                          Fraeil
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnBrandClick("Urma")}
                        >
                          Urma
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnBrandClick("Candle Nest")}
                        >
                          Candle Nest
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnBrandClick("Beyond Green")}
                        >
                          Beyond Green
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnBrandClick("Gatta")}
                        >
                          Gatta
                        </li>
                      </ul>
                    )}

                    <div
                      className="d-flex justify-content-between align-items-center"
                      onClick={() => {
                        setBrands(false);
                        setVintageClothes(false);
                        setAcesories(!acesories);
                      }}
                    >
                      <h5 className="line-height-30">Аксесоари</h5>
                      {acesories ? (
                        <img src="../icons/arrowUp.png" />
                      ) : (
                        <img src="../icons/arrowDown.png" />
                      )}
                    </div>
                    {acesories && (
                      <ul className="cormont-faramond-font line-height-30">
                        <li>
                          <img
                            src="../icons/star1.png"
                            alt="star"
                            style={{ fontSize: "20px" }}
                          />
                          <span
                            className="cormorant-garamond-font-italic fancy-olive"
                            style={{ fontSize: "20px" }}
                            onClick={() => {
                              handleAllClick("accessories");
                            }}
                          >
                            Види ги сите
                          </span>
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnCategoryClick("ташни")}
                        >
                          Ташни
                        </li>
                        <li
                          className="pl-5"
                          onClick={() => handleOnCategoryClick("накит")}
                        >
                          Накит
                        </li>
                      </ul>
                    )}
                    <h5 className="line-height-30">Lifestyle</h5>
                    <h5
                      className="line-height-30"
                      onClick={() => {
                        closeTheHamburgerMenu();
                        router.push({
                          pathname: "/giftCards",
                        });
                      }}
                    >
                      Подари картичка
                    </h5>
                    <h5
                      className="cormorant-garamond-font-italic red-alert"
                      onClick={() => {
                        closeTheHamburgerMenu();
                        router.push({
                          pathname: "/discountPage",
                        });
                      }}
                    >
                      Попуст
                    </h5>
                  </nav>

                  <nav className="pb-5">
                    <ul className="cormorant-garamond-font-italic font-weight-400">
                      <li className="mb-2">
                        <img
                          src="../icons/basket1.png"
                          alt=""
                          className="border-ham-form"
                        />
                        <span
                          className="font-size-18"
                          onClick={() => {
                            closeTheHamburgerMenu();
                            router.push({
                              pathname: "/order",
                            });
                          }}
                        >
                          Кошничка
                        </span>
                      </li>
                      <li className="mb-2">
                        <img
                          src="../icons/heart.png"
                          alt=""
                          className="border-ham-form"
                        />
                        <span
                          className="font-size-18"
                          onClick={() => {
                            closeTheHamburgerMenu();
                            router.push({
                              pathname: "/favorites",
                            });
                          }}
                        >
                          Омилени
                        </span>
                      </li>
                      <li className="mb-2">
                        <img
                          src="../icons/user.png"
                          alt=""
                          className="border-ham-form"
                        />
                        {user.email ? (
                          <>
                            <Link
                              className="color-black"
                              href={"/myprofile"}
                              onClick={handleHamburgerMenuClick}
                            >
                              Мој профил /
                            </Link>
                            <span
                              className="color-black ml-2"
                              onClick={handleLogOut}
                            >
                              Одјави се
                            </span>
                          </>
                        ) : (
                          <span className="font-size-18">
                            <Link
                              className="color-black"
                              href={"/register1"}
                              onClick={handleHamburgerMenuClick}
                            >
                              Регистрирај
                            </Link>{" "}
                            се /{" "}
                            <Link
                              className="color-black"
                              href={"/login"}
                              onClick={handleHamburgerMenuClick}
                            >
                              Логирај се
                            </Link>
                          </span>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
