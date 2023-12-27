import Link from "next/link";
import React from "react";

const StraightNavigation = () => {
  return (
    <footer className="bg-dark w-100 navigation" style={{ position: `static`, left: `0`, right: `0` }}>
      <div className="col-12 d-flex justify-content-between p-4">
        <Link href={"/"}>
          <div style={{ color: `#fff` }}>
            <i className="fa-solid fa-house"></i>
          </div>
        </Link>
        <Link href={"/profile"}>
          <div style={{ color: `#fff` }}>
            <i className="fa-regular fa-user"></i>
          </div>
        </Link>
      </div>

    </footer>
  );
};

export default StraightNavigation;
