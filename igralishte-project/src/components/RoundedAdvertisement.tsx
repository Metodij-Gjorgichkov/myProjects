import React from "react";

interface Props {
  title: string;
  title1?: string;
  desc1: string;
  desc2: string;
  background: string;
  newItem?: string;
  starImg?: string;
}

const RoundedAdvertisement = ({
  title,
  title1,
  desc1,
  desc2,
  background,
  newItem,
  starImg,
}: Props) => {
  return (
    <div className="container rounded-adv-cont position-relative">
      <div className="row">
        <div className="col-12 text-center">
          <div className={`rounded-adv pt-3 px-3 ${background}`}>
            <img
              src="../icons/star1.png"
              alt="STAR"
              className="mb-2"
              style={{ borderRadius: "40px" }}
            />
            {newItem && starImg && (
              <div className="new">
                <img src={starImg} className="goldenStar" />
                <p className="jost-font font-weight-600 newItem red-alert">
                  {newItem}
                </p>
                <img src={starImg} className="goldenStar2" />
              </div>
            )}
            <h6 className="mb-1">
              {title} <br /> {title1}
            </h6>
            <small className="cormorant-garamond-font font-weight-400 darkgrey d-block mb-2">
              {desc1} <br /> {desc2}
            </small>
            <img src="../icons/leftArrow.png" alt="LEFT ARROW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundedAdvertisement;
