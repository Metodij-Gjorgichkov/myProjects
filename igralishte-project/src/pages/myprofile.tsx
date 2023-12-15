import React, { useContext } from "react";
import { UserProfileContext } from "@/context/UserProfileContextConstructor";
import Link from "next/link";

const Myprofile = () => {
  const {
    registerUser,
    selectedUserId,
    handleFileSelect,
    handleOnChange,
    handleFinalChanges,
  } = useContext(UserProfileContext);

  // Finds the newest user based on selectedUserEmail
  const newestUser = registerUser.find((user) => user.email === selectedUserId);

  return (
    newestUser && (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-6 pb-4">
            <img src="../images/mainBigLogo.png" alt="LOGO" />
          </div>

          <div className="col-12 text-center imagePicker mb-3">
            <img
              src={newestUser.image}
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
          <div className="col-12">
            <div className="px-3">
              <form
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  handleFinalChanges();
                }}
              >
                <label htmlFor="name" className="d-block mb-2 font-size-12">
                  Име
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Методиј"
                  className="d-block mb-2 w-100 footer-radius-border height-40"
                  defaultValue={newestUser.name}
                  onChange={handleOnChange}
                />

                <label htmlFor="surname" className="mb-2 d-block font-size-12">
                  Презиме
                </label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Ѓоргичков"
                  className="d-block mb-2 w-100 footer-radius-border height-40"
                  defaultValue={newestUser.surname}
                  onChange={handleOnChange}
                />

                <label htmlFor="email" className="d-block mb-2 font-size-12">
                  Email адреса
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  className="d-block mb-2 w-100 footer-radius-border height-40"
                  defaultValue={newestUser.email}
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
                  className="d-block w-100 footer-radius-border height-40"
                  defaultValue={newestUser.password}
                  onChange={handleOnChange}
                />

                <Link
                  className="font-size-12 color-black underline"
                  href={"/changePassword"}
                >
                  Промени лозинка
                </Link>

                <label htmlFor="adress" className="my-2 d-block font-size-12">
                  Адреса
                </label>
                <input
                  type="text"
                  id="adress"
                  name="adress"
                  placeholder="8ми Октомври 22"
                  className="d-block mb-2 w-100 footer-radius-border height-40"
                  defaultValue={newestUser.adress || ""}
                  onChange={handleOnChange}
                />

                <label
                  htmlFor="telNumber"
                  className="mb-2 d-block font-size-12"
                >
                  Телефонски број
                </label>
                <input
                  type="number"
                  id="telNumber"
                  name="telNumber"
                  placeholder="077313022"
                  className="d-block mb-2 w-100 footer-radius-border height-40"
                  defaultValue={newestUser.telNumber || ""}
                  onChange={handleOnChange}
                />

                <label htmlFor="textarea" className="d-block mb-2 font-size-12">
                  Биографија
                </label>
                <input
                  className="d-block mb-2 w-100 footer-radius-border"
                  placeholder="example@example.com"
                  name="biografy"
                  id="textarea"
                  style={{ height: "80px" }}
                  defaultValue={newestUser.biografy || ""}
                  onChange={handleOnChange}
                />

                <div className="notifications mb-3">
                  <img src="../icons/register2Icon.png" />
                  <small className="ml-1">
                    Испраќај ми известувања за нови зделки и промоции.
                  </small>
                </div>

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
    )
  );
};

export default Myprofile;
