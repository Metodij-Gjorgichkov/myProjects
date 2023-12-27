import CurlyNavigation from "@/components/CurlyNavigation";
import Header from "@/components/Header";
import PopUpLanguage from "@/components/PopUpLanguage";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const ProfileHome: NextPage = () => {
  const [toggleLanguage, setToggleLanguage] = useState(false);

  const handleToggleLanguage = () => {
    setToggleLanguage(!toggleLanguage);
  };

  return (
    <>
      <div className="container profileHome">
        <div className="row">
          <div className="col-12">
            <Header
              image={"/images/viber_image_2023-10-22_18-08-15-736 2.svg"}
              leftIcon="fas fa-chevron-left"
              rightIcon="fas fa-bell"
            />
            <div className="profile-wrapper">
              <div className="profile-container d-flex mb-5">
                <div className="profile-img-container mr-4">
                  {/* TODO: need to change the src to a valid picture */}
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                {/* TODO, this needs to be dynamic based on the signed in user */}
                <h2 className="h4">Иван Ивановски</h2>
              </div>

              <ul className="profile-settings">
                <Link href={"/profile/reports"}>
                  <li className="d-flex align-items-center mb-3 h6">
                    <i className="fas fa-chart-line mr-3"></i> Мои Пријави{" "}
                    <i className="fas fa-chevron-right ml-auto"></i>
                  </li>
                </Link>
                <li
                  onClick={handleToggleLanguage}
                  className="d-flex align-items-center mb-3 h6"
                >
                  <i className="fas fa-globe mr-3"></i> Јазик{" "}
                  <i className="fas fa-chevron-right ml-auto"></i>
                </li>
                <Link href={"/about"}>
                  <li className="d-flex align-items-center mb-3 h6">
                    <i className="fas fa-info-circle mr-3"></i> За нас{" "}
                    <i className="fas fa-chevron-right ml-auto"></i>
                  </li>
                </Link>
                <Link href={"/profile/settings"}>
                  <li className="d-flex align-items-center mb-3 h6">
                    <i className="fas fa-cog mr-3"></i> Поставки{" "}
                    <i className="fas fa-chevron-right ml-auto"></i>
                  </li>
                </Link>
                <Link href={"/signUp"}>
                  <li className="d-flex align-items-center mb-3 h6">
                    <i className="fas fa-sign-out-alt mr-3"></i> Одјава{" "}
                    <i className="fas fa-chevron-right ml-auto"></i>
                  </li>
                </Link>
              </ul>
            </div>
            {/* TODO: Only show this when button Jazik is clicked */}
            {!toggleLanguage && <CurlyNavigation />}
          </div>
        </div>
      </div>
      {toggleLanguage && <PopUpLanguage />}
    </>
  );
};

export default ProfileHome;
