import WhiteButton from "@/components/WhiteButton";
import Link from "next/link";
import React from "react";

const Register1 = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center pt-7 pb-5">
          <img src="../images/mainBigLogo.png" alt="LOGO" />
        </div>

        <div className="col-12">
          <div className="px-4 inter-font font-weight-500">
            <button className="google-btn inter-font font-weight-500 text-center w-100 py-2 mb-4 footer-radius-border">
              <Link className="text-dark" href={"/register2"}>
                Регистрирај се со емаил адреса
              </Link>
            </button>
            <span className="text-center d-block mb-4">или</span>
            <WhiteButton
              title="Регистрирај се преку Google"
              image="../icons/google.png"
            />
            <WhiteButton
              title="Регистрирај се преку Facebook"
              image="../icons/fb.png"
            />
            <span className="text-center d-block pb-7 pb-2 no-profile-login mb-1">
              Веќе имаш профил?
              <Link className="fancy-olive ml-1 underline" href={"/login"}>
                Логирај се
              </Link>
            </span>
            <small
              className="d-block text-center inter-font font-weight-500"
              style={{ fontSize: "10px" }}
            >
              Сите права задржани @ Игралиште Скопје
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register1;
