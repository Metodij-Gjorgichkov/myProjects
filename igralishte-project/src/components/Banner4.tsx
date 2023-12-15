import React from "react";
import RoundedAdvertisement from "./RoundedAdvertisement";
import Link from "next/link";

const Banner4 = () => {
  return (
    <Link
      className="color-black"
      href={"/productPage?type=accessories&sort=Најново"}
    >
      <div className="container pink-gradient-2 py-3">
        <div className="row">
          <div className="col-12 pl-0">
            <img src="../images/img4.png" alt="fourth image" />
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9 text-center px-0 ml-auto">
            <RoundedAdvertisement
              title="Козметика"
              title1="& аксесоари"
              desc1="погледни ги свежите"
              desc2="љубовни парчиња"
              background="pink-gradient"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Banner4;
