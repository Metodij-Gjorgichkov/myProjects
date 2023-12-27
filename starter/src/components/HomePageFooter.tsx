import Link from "next/link";
import React from "react";

const HomePageFooter = () => {
  return (
    <div
      className="container homePageFooter py-3  "
      style={{ marginBottom: "60px" }}
    >
      <div className="row">
        <div className="col-5 text-white px-3 border-right">
          <ul>
            <li>За нас</li>
            <li>Блог</li>
            <li>
              Полиса на <br />
              приватност
            </li>
            <li>Легални аспекти</li>
            <li>Контакт</li>
          </ul>
        </div>
        <div className="col-7 text-center ">
          <p className="text-center text-white">
            Ти велат дека <br />
            не можеш ништо? <br />
            Те лажат. <br />
            Диши слободно.
          </p>
          <Link href={"/signIn"} className="homePageButton color-white">
            Регистрирај се
          </Link>
          <br />
          <div className="d-flex justify-content-between align-items-center pt-2 my-2">
            <div className="image-setter mr-3">
              <img className="mr-3" src={"/images/iconHp.png"} alt="iconHP" />
            </div>
            <div className="mr-3">
              <img src={"/images/airCare.png"} alt="AIRCARE" />
            </div>
            <div>
              <img src={"/images/earthCare.png"} alt="EARTH CARE" />
            </div>
          </div>
        </div>
        <div className="col-12 text-center mt-3 mb-5">
          <p className="text-white border-top pt-2">
            Следи не на социјални мрежи
          </p>
          <div className="d-flex justify-content-around align-items-center text-center iconBorderRadius">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageFooter;
