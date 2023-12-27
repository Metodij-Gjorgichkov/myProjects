import React from "react";
import NavigationButton from "./NavigationButton";
import Link from "next/link";

const CurlyNavigation = () => {
  return (
    <div className="curlyNavigation">
      <div className="container">
        <div className="row justify-content-center aling-items-center">
          <Link href={"/"}>
            <div className="col-4 text-center">
              <i className="fa-solid fa-house white-icon"></i>
            </div>
          </Link>
          <div className="col-4 text-center">
            <Link href={"/testMapWithoutUser"}>
              <NavigationButton />
            </Link>
          </div>
          <Link href={"/profile"}>
            <div className="col-4 text-center">
              <i className="fa-solid fa-user white-icon"></i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CurlyNavigation;
