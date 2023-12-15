import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  title1?: string;
  title2?: string;
  fontsize?: "17px";
}

const Breadcrumbs = ({ title, title1, title2, fontsize }: Props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 py-3 cormorant-garamond-font ">
          <div className="d-flex align-items-center px-3 ">
            <div>
              <Link href={"/"} className="link-resets">
                <h5
                  className="mr-2 breadcrumbs-fsize mb-0"
                  style={{ fontSize: fontsize }}
                >
                  {title}
                  <img
                    src="../icons/rightArrow.png"
                    alt="RIGHT ARROW"
                    className="ml-2"
                  />
                </h5>
              </Link>
            </div>
            <div>
              <h5
                className="breadcrumbs-fsize mb-0 "
                style={{ fontSize: fontsize }}
              >
                {title1}
              </h5>
            </div>
            <div>
              {title2 && (
                <>
                  <img
                    src="../icons/rightArrow.png"
                    alt="RIGHT ARROW"
                    className="mr-2 ml-2"
                  />
                  <h5
                    className="breadcrumbs-fsize d-inline mb-0"
                    style={{ fontSize: fontsize }}
                  >
                    {title2}
                  </h5>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
