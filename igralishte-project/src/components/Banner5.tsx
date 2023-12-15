import React from "react";
import RoundedAdvertisement from "./RoundedAdvertisement";
import Link from "next/link";

const Banner5 = () => {
  return (
    <Link className="color-black" href={"/giftCards"}>
      <div
        className="container-fluid pink-gradient py-3"
        style={{ marginBottom: "70px" }}
      >
        <div className="row">
          <div className="col-12 text-right px-0 ">
            <img src="../images/img5.png" className="fifth-image" />
          </div>
        </div>
        <RoundedAdvertisement
          title="GIFT CARDS"
          desc1="Избери уникатен подарок за"
          desc2="твоите најблиски со нашиот избор на ultra fancy картички за подарок"
          background="color-white"
        />
      </div>
    </Link>
  );
};

export default Banner5;
