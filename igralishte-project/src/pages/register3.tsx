import { UserProfileContext } from "@/context/UserProfileContextConstructor";
import Link from "next/link";
import React, { useContext } from "react";

const Register3 = () => {
  const {
    image,
    registerNewUser,
    handleOnChange,
    handleFileSelect,
    findNewlyRegistredUser,
  } = useContext(UserProfileContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="col-12 text-center pt-6 pb-4">
            <img src="../images/mainBigLogo.png" alt="LOGO" />
          </div>

          {/* pick a photo */}
          <div className="col-12 text-center imagePicker mb-3">
            <img
              src={image}
              style={{ maxHeight: "140px", width: "140px" }}
              alt=""
              className="rounded-circle mb-3"
            />
            <br />
            <label htmlFor="file" style={{ fontSize: "12px" }}>
              Одбери слика
            </label>
            <input type="file" id="file" onChange={handleFileSelect} />
          </div>

          {/* validation */}
          <div className="col-12 mb-3">
            <div className="px-3">
              <form
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  findNewlyRegistredUser();
                }}
              >
                <label htmlFor="adress" className="d-block mb-2 font-size-12">
                  Aдреса
                </label>
                <input
                  type="text"
                  id="adress"
                  name="adress"
                  placeholder="exapmle@example.com"
                  className="d-block mb-2 w-100 footer-radius-border height-40"
                  onChange={handleOnChange}
                />
                <label htmlFor="password" className="mb-2 d-block font-size-12">
                  Лозинка
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="d-block mb-2 w-100 footer-radius-border height-40"
                  onChange={handleOnChange}
                  value={registerNewUser.password}
                />
                <label htmlFor="textarea" className="d-block mb-2 font-size-12">
                  Биографија
                </label>
                {/* @ts-ignore */}
                <input
                  className="d-block mb-2 w-100 footer-radius-border"
                  placeholder="exapmle@example.com"
                  name="biografy"
                  id="textarea"
                  style={{ height: "80px" }}
                  onChange={handleOnChange}
                />
                <button
                  type="submit"
                  className="login-btn inter-font font-weight-700 text-white w-75 py-2 my-4"
                >
                  Заврши
                </button>
                <Link className="color-black underline" href={"/myprofile"}>
                  Прескокни
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register3;
