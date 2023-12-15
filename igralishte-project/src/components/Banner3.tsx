import React from "react";
import RoundedAdvertisement from "./RoundedAdvertisement";

const Banner3 = () => {
  return (
    <div className="container-fluid pink-gradient py-3">
      <div className="row">
        <div className="col-12 text-right px-0">
          <img src="../images/img3.png" className="third-image" />
        </div>
      </div>
      <RoundedAdvertisement
        title="Self-care продукти"
        desc1="Нашите уникатни производи се"
        desc2="совршени кога станува збор за грижата за себе"
        background="light-ribbon"
      />
    </div>
  );
};

export default Banner3;
