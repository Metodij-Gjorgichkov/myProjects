import WhiteButton from "@/components/WhiteButton";
import { UserProfileContext } from "@/context/UserProfileContextConstructor";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleLogin, user } = useContext(UserProfileContext);
  const router = useRouter();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin(email, password);
  };

  if (user.email) {
    router.replace({
      pathname: "/myprofile",
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center pt-7 pb-5">
          <img src="../images/mainBigLogo.png" alt="LOGO" />
        </div>
        <div className="col-12 mb-4">
          <div className="px-4 inter-font font-weight-500">
            <form onSubmit={handleOnSubmit}>
              <label htmlFor="email" className="d-block mb-2 font-size-12">
                Email адреса
              </label>
              <input
                type="email"
                id="email"
                placeholder="exapmle@example.com"
                className="d-block mb-2 w-100 footer-radius-border height-40"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
              />
              <label htmlFor="password" className="mb-2 d-block font-size-12">
                Лозинка
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="d-block mb-2 w-100 footer-radius-border height-40"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(event.target.value)
                }
              />
              <span className="fancy-olive underline font-size-12">
                Ja заборави лозинката?
              </span>
              <br />
              <button
                type="submit"
                className="login-btn inter-font font-weight-700 text-white w-100 py-2 my-4"
              >
                Најави се
              </button>
            </form>
            <span className="text-center d-block mb-4">или</span>

            <WhiteButton
              title="Најави се преку Google"
              image="../icons/google.png"
            />
            <WhiteButton
              title="Најави се преку Facebook"
              image="../icons/fb.png"
            />
            <span className="text-center d-block mb-5 pb-2 no-profile-login">
              Немаш профил?
              <Link className="fancy-olive ml-1 underline" href={"/register1"}>
                Регистрирај се
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

export default Login;
