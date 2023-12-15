import { UserProfileContext } from "@/context/UserProfileContextConstructor";
import Link from "next/link";
import React, { useContext, useState } from "react";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [isOldPasswordCorrect, setIsOldPasswordCorrect] =
    useState<boolean>(false);
  const {
    registerUser,
    selectedUserId,
    handleOnPasswordChange,
    handleOnChange,
  } = useContext(UserProfileContext);

  const oldestPassword = registerUser.find(
    (user) => user.email === selectedUserId
  );

  const handleCheckPassword = () => {
    if (oldPassword === oldestPassword?.password) {
      setIsOldPasswordCorrect(true);
      alert("old password match");
    } else {
      setIsOldPasswordCorrect(false);
      alert("incorrect old password, check you spellings");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center pt-7 pb-5">
          <img src="../images/mainBigLogo.png" alt="LOGO" />
        </div>

        <div className="col-12">
          <div className="px-3">
            <form onSubmit={handleOnPasswordChange}>
              <label
                htmlFor="old-password"
                className="mb-2 d-block font-size-12"
              >
                Стара лозинка
              </label>
              <input
                type="password"
                id="old-password"
                placeholder="*********"
                className="d-block mb-2 w-100 footer-radius-border height-40"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setOldPassword(event.target.value);
                }}
                onBlur={handleCheckPassword}
              />
              <label
                htmlFor="new-password"
                className="mb-2 d-block font-size-12"
              >
                Нова лозинка
              </label>
              <input
                type="password"
                name="password"
                id="new-password"
                placeholder="*********"
                className="d-block w-100 mb-2 footer-radius-border height-40"
                onChange={handleOnChange}
              />
              <label
                htmlFor="repeat-password"
                className="mb-2 d-block font-size-12"
              >
                Повтори нова лозинка
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="repeat-password"
                placeholder="*********"
                className="d-block mb-2 w-100 footer-radius-border height-40"
                onChange={handleOnChange}
              />
              <button
                type="submit"
                className="login-btn inter-font font-weight-700 text-white w-75 py-2 my-4"
              >
                Зачувај
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
