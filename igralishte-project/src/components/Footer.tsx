import React, { useContext, useState } from "react";
import GoldButton from "./GoldButton";
import Link from "next/link";
import { UserProfileContext } from "@/context/UserProfileContextConstructor";
import TypeWriter from "typewriter-effect";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const { user } = useContext(UserProfileContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email) {
      setIsModalOpen(true);
      setEmail("");
    }
  };
  return (
    <div className="container pb-3 pink-gradient-3 footer">
      {isModalOpen && (
        <div className="modal-footer-form pink-gradient-1">
          <div className="modal-cont">
            <span className="close d-block" onClick={closeModal}>
              &times;
            </span>
            <div className="text-center">
              <img
                src="../icons/checked.png"
                alt="star"
                className="display-block mb-2 "
              />
              <p className="cormorant-infant-font mb-0 font-weight-400 ">
                Успешно се зачленивте!
              </p>
              <p className="cormorant-infant-font font-weight-400 ">
                Keep it shine
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-12 cormorant-garamond-font">
          <div className="px-2">
            <h5 className="mb-3 sledi-aktivnosti">
              <TypeWriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Следи ги нашите активности!"],
                }}
              />
            </h5>
            <span className="font-weight-400 dark-grey our-newsletter">
              Биди дел од нашиот newsletter и <br />
              дознавај прва за промоции, попусти <br /> и нови колекции.
            </span>
            <br />
            <br />
            <form onSubmit={handleOnSubmit}>
              <label
                htmlFor="email"
                className="dark-grey font-weight-400 email-footer"
              >
                E-mail адреса:
              </label>
              <br />
              <input
                type="email"
                id="email"
                value={email}
                className="w-100 footer-radius-border mb-3"
                style={{ height: "38px" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
              />
              <GoldButton
                type="submit"
                title="Зачлени се!"
                width="w-100"
                height="38px"
              />
            </form>
            <div className="footer-line my-4"></div>
            <ul className="mb-3">
              <li>
                <Link href={"/about"}>За нас</Link>
              </li>

              <li>
                <Link href={"/contact"}>Контакт</Link>
              </li>
              <li>
                <a href="#">Локатор на продавницата</a>
              </li>
              <li>
                <Link href={"/FAQ"}>Често поставувани прашања (FAQ)</Link>
              </li>
              <li>
                {user && user.email !== "" ? (
                  <Link href={"/myprofile"}>Мој профил</Link>
                ) : (
                  <>
                    <Link href={"/register1"}>Регистрирај се </Link>/
                    <Link href={"/login"}>Логирај се</Link>
                  </>
                )}
              </li>
            </ul>
            <span className="font-weight-600 fancy-olive cormorant-garamond-font-italic d-block ">
              Следи не на:
            </span>
            <ul className="mb-4">
              <li>
                <a href="#">
                  <img
                    src="../icons/instaVector.png"
                    className="mr-2"
                    alt="INSTAGRAM"
                  />
                  igralishte.sk
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="../icons/tiktokVector.png"
                    className="mr-2"
                    alt="TIKTOK"
                  />
                  igralishte.sk
                </a>
              </li>
            </ul>
            <small>Сите права задржани &copy; 2023 igralishtesk.mk</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
