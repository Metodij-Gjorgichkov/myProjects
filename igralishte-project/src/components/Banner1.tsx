import React from "react";
import RoundedAdvertisement from "./RoundedAdvertisement";
import Link from "next/link";

const Banner1 = () => {
  return (
    <Link className="color-black" href={"/productPage"}>
      <div
        className="container pink-gradient position-relative"
        style={{ zIndex: "-1" }}
      >
        <div className="row">
          <div className="col-12 pt-4 pr-0 pl-4 ">
            <img
              src="../images/img1.png"
              alt="FIRST IMAGE"
              className="float-right first-image"
            />
          </div>
        </div>

        <RoundedAdvertisement
          title="Valentines gal"
          title1="Колекција"
          desc1="погледни ги свежите"
          desc2="љубовни парчиња"
          background="pink-gradient"
          newItem="Ново"
          starImg="../icons/goldenStar.png"
        />
      </div>
    </Link>
  );
};

export default Banner1;
