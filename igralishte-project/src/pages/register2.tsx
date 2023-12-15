import React, { useContext, useState } from "react";
import { UserProfileContext } from "@/context/UserProfileContextConstructor";

const Register2 = () => {
  const { handleUserOnSubmit, handleOnChange, closeModal, isModalOpen } =
    useContext(UserProfileContext);

  return (
    <div className="container">
      {isModalOpen && (
        <div className="modal-footer-form register-2 pink-gradient-1">
          <div className="modal-cont">
            <span className="close d-block" onClick={closeModal}>
              &times;
            </span>
            <div className="text-center">
              <p className="cormorant-infant-font pt-3 mb-3 font-weight-400 ">
                Неточна повтори лозинка <br />
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-12 text-center pt-7 pb-5">
          <img src="../images/mainBigLogo.png" alt="LOGO" />
        </div>

        <div className="col-12 mb-4">
          <div className="px-4">
            <form onSubmit={handleUserOnSubmit}>
              <label htmlFor="name" className="d-block mb-2 font-size-12">
                Име
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Методиј"
                className="d-block mb-2 w-100 footer-radius-border height-40"
                onChange={handleOnChange}
              />
              <label htmlFor="surname" className="mb-2 d-block font-size-12">
                Презиме
              </label>
              <input
                type="text"
                id="surname"
                placeholder="Ѓоргичков"
                className="d-block mb-2 w-100 footer-radius-border height-40"
                name="surname"
                onChange={handleOnChange}
              />
              <label htmlFor="email" className="d-block mb-2 font-size-12">
                Email адреса
              </label>
              <input
                type="email"
                id="email"
                placeholder="exapmle@example.com"
                className="d-block mb-2 w-100 footer-radius-border height-40"
                name="email"
                onChange={handleOnChange}
              />
              <label htmlFor="password" className="mb-2 d-block font-size-12">
                Лозинка
              </label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                className="d-block mb-2 w-100 footer-radius-border height-40"
                name="password"
                onChange={handleOnChange}
              />
              <label
                htmlFor="confirmPassword"
                className="mb-2 d-block font-size-12"
              >
                Повтори лозинка
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="*********"
                className="d-block mb-2 w-100 footer-radius-border height-40"
                name="confirmPassword"
                onChange={handleOnChange}
              />

              <div className="notifications mb-3 d-flex align-items-center">
                <input type="checkbox" id="newsletterBox" className="mr-2" />
                <label htmlFor="newsletterBox" className="mb-0">
                  Испраќај ми известувања за нови зделки и промоции.
                </label>
              </div>

              <button
                type="submit"
                className="login-btn inter-font font-weight-700 text-white w-75 py-2 my-4"
              >
                Регистрирај се
              </button>
              <small className="d-block rules">
                Со вашата регистрација, се согласувате со
                <span className="underline mx-1">Правилата и Условите</span>
                за кориснички сајтови.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register2;
