import { FavoritesAndBasketContext } from "@/context/FavoriteContextConstructor";
import { UserProfileContext } from "@/context/UserProfileContextConstructor";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

interface FormDataType {
  name?: string;
  surname?: string;
  adress?: string;
  telNumber?: string;
  email?: string;
}

const FormToOrder = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    surname: "",
    adress: "",
    telNumber: "",
    email: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserLoggedInModal, setIsUserLoggedIn] = useState<boolean>(false);
  const [areAllInputsFilledModal, setAreAllInputsFilledModal] =
    useState<boolean>(false);

  const { user, registerUser } = useContext(UserProfileContext);
  const { handleProductsDeletion } = useContext(FavoritesAndBasketContext);
  const router = useRouter();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isTheUserLoggedIn = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (user.email) {
      setIsChecked(true);
      setFormData({
        name: foundUser?.name,
        surname: foundUser?.surname,
        adress: foundUser?.adress,
        telNumber: foundUser?.telNumber,
        email: foundUser?.email,
      });
    } else {
      setIsUserLoggedIn(true);
    }
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      formData.name &&
      formData.surname &&
      formData.adress &&
      formData.email
    ) {
      setIsModalOpen(true);
      handleProductsDeletion();
    } else {
      setAreAllInputsFilledModal(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeIsUserLoggedInModal = () => {
    setIsUserLoggedIn(false);
  };
  const closeAreAllInputsFilledModal = () => {
    setAreAllInputsFilledModal(false);
  };

  const foundUser = registerUser.find((user) => user.email === user.email);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* modal for succesfull order */}
          {isModalOpen && (
            <div className="modal-order-form pink-gradient-1">
              <div className="modal-cont">
                <span className="close d-block" onClick={closeModal}>
                  &times;
                </span>
                <div className="text-center">
                  <img
                    src="../icons/star1.png"
                    alt="star"
                    className="display-block mb-2 order-star-image"
                  />
                  <p className="cormorant-infant-font font-weight-400 ">
                    Вашата нарачка е успешна!
                  </p>
                  <p className="cormorant-garamond-font font-weight-500 dark-grey">
                    Очекувајте потврда за вашата <br /> нарачка на вашата емаил
                    адреса. <br /> Keep on shining{" "}
                  </p>
                  <button
                    type="submit"
                    className="gold-gradient-1 footer-radius-border mb-2 px-6 mr-3"
                    style={{ height: "50px" }}
                    onClick={() => {
                      router.push({
                        pathname: "/",
                      });
                    }}
                  >
                    Продолжи
                  </button>
                  <Link href={"/"} className="color-black">
                    <p className="cormorant-garamond-font font-weight-400 underline">
                      Кон почетна
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* modal is user logged in */}
          {isUserLoggedInModal && (
            <div className="modal-footer-form user-logged-in-modal pink-gradient-1">
              <div className="modal-cont">
                <span
                  className="close d-block"
                  onClick={closeIsUserLoggedInModal}
                >
                  &times;
                </span>
                <div className="text-center">
                  <p className="cormorant-infant-font pt-5 mb-3 font-weight-400 ">
                    Не сте најавени за <br /> да се пополнат полињата
                    автоматски!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* modal are all inputs filled */}
          {areAllInputsFilledModal && (
            <div className="modal-footer-form are-all-inputs-filled pink-gradient-1">
              <div className="modal-cont">
                <span
                  className="close d-block"
                  onClick={closeAreAllInputsFilledModal}
                >
                  &times;
                </span>
                <div className="text-center">
                  <p className="cormorant-infant-font pt-5 mb-3 font-weight-400 ">
                    Пополни ги сите полињата <br /> за нарачката да биде
                    успешна!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* close image */}
          <img
            src="../icons/closeButton.png"
            alt="close button"
            className="close-btn-order-page"
            onClick={() => router.back()}
          />
          <div className="col-12 text-center mb-4">
            <img
              src="../icons/star1.png"
              alt="star"
              className="display-block mb-2"
            />
            <h5 className="cormorant-infant-font font-weight-400">
              Ве молиме внесете ги <br /> потребните информации
            </h5>
          </div>

          <div className="col-12 d-flex align-items-center justify-content-center mb-4">
            <input
              type="checkbox"
              id="userInfo"
              checked={isChecked}
              onChange={isTheUserLoggedIn}
            />
            <label
              htmlFor="userInfo"
              className="dark-grey font-weight-400 ml-2 mb-0 user-order-checkbox"
              style={{ fontSize: "15px" }}
            >
              вметни ги информациите од мојот профил
            </label>
          </div>

          <div className="col-12 cormorant-garamond-font font-weight-400">
            <form onSubmit={handleOnSubmit}>
              {/* name */}
              <label htmlFor="name" className="d-block mb-2 position-relative">
                Име{" "}
                <img
                  src="../icons/redStar.png"
                  alt="redStar"
                  className="red-star"
                />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="d-block mb-3 w-100 footer-radius-border height-40"
                onChange={handleOnChange}
                value={formData.name}
              />
              {/* surname */}
              <label
                htmlFor="surname"
                className="d-block mb-2 position-relative"
              >
                Презиме
                <img
                  src="../icons/redStar.png"
                  alt="redStar"
                  className="red-star"
                />
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="d-block mb-3 w-100 footer-radius-border height-40"
                onChange={handleOnChange}
                value={formData.surname}
              />
              {/* adress */}
              <label
                htmlFor="adress"
                className="d-block mb-2 position-relative"
              >
                Адреса на живеење
                <img
                  src="../icons/redStar.png"
                  alt="redStar"
                  className="red-star"
                />
              </label>
              <input
                type="text"
                id="adress"
                name="adress"
                className="d-block mb-3 w-100 footer-radius-border height-40"
                onChange={handleOnChange}
                value={formData.adress}
              />
              {/* number */}
              <label
                htmlFor="number"
                className="d-block mb-2 position-relative"
              >
                Телефонски број
                <img
                  src="../icons/redStar.png"
                  alt="redStar"
                  className="red-star"
                />
              </label>
              <input
                type="text"
                id="number"
                name="telNumber"
                className="d-block mb-3 w-100 footer-radius-border height-40"
                onChange={handleOnChange}
                value={formData.telNumber}
              />
              {/* email adress */}
              <label htmlFor="email" className="d-block mb-2 position-relative">
                Емаил адреса
                <img
                  src="../icons/redStar.png"
                  alt="redStar"
                  className="red-star"
                />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="d-block mb-3 w-100 footer-radius-border height-40"
                onChange={handleOnChange}
                value={formData.email}
              />

              {/* recieve newsletter */}
              <div className="d-flex mb-4 pt-2">
                <input
                  type="checkbox"
                  id="recieveNewsletter"
                  className="align-self-start"
                />
                <label
                  htmlFor="recieveNewsletter"
                  className="dark-grey font-weight-400 mb-0 ml-2 user-order-checkbox"
                  style={{ fontSize: "15px" }}
                >
                  сакам да добивам новости за идни попусти, <br />
                  нови колекции и промоции на <br /> мојата емаил адреса.
                </label>
              </div>

              <div className="d-flex align-items-center mb-4">
                <button
                  type="submit"
                  className="gold-gradient-1 footer-radius-border px-6 mr-3"
                  style={{ height: "40px" }}
                >
                  Нарачај
                </button>
                <p className="underline mb-0" onClick={() => router.back()}>
                  Откажи
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormToOrder;
