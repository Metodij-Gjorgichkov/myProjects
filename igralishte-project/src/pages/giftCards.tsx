import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import { HeaderContext } from "@/context/HeaderContextConstructor";
import { GiftCardsType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

interface Props {
  giftData: GiftCardsType;
}

interface FormType {
  image?: string;
  value?: string;
  brand?: string;
}

const GiftCards: NextPage<Props> = ({ giftData }) => {
  const [formDataArray, setFormDataArray] = useState<FormType[]>([]);
  const [formData, setFormData] = useState<FormType>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const lightGreyBtns = [
    { value: "500 ден.", id: "1" },
    { value: "1000 ден.", id: "2" },
    { value: "2000 ден.", id: "3" },
    { value: "2500 ден.", id: "4" },
    { value: "4000 ден.", id: "5" },
  ];

  useEffect(() => {
    if (formData.value && formData.image) {
      setIsModalOpen(true);
    }
  }, [formData]);

  const handleDataSubmit = () => {
    setFormDataArray([...formDataArray, formData]);

    router.push({
      pathname: "/formToOrder",
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({});
  };

  return (
    <>
      <Header />
      <InfiniteAdvertisement />

      <div className="container py-4">
        {isModalOpen && (
          <div className="modal-footer-form gift pink-gradient-1">
            <div className="modal-cont">
              <span className="close d-block" onClick={closeModal}>
                &times;
              </span>
              <div className="text-center">
                <p className="cormorant-infant-font pt-5 mb-3 font-weight-400 ">
                  Дали сакате да ја купите <br />
                  картичката од бренд {formData.brand} <br /> во износ од{" "}
                  {formData.value} ?
                </p>
                <button
                  type="submit"
                  className="gold-gradient-1 footer-radius-border mb-2 px-6 mr-3"
                  style={{ height: "45px" }}
                  onClick={handleDataSubmit}
                >
                  Продолжи
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="cormorant-garamond-font font-weight-400 pb-3 pt-2">
              {giftData.title}
            </h4>
          </div>
          {giftData.cards.map((card) => (
            <div key={`gift-card-${card.id}`} className="col-12 mb-3">
              <img
                className="d-block w-100"
                src={card.image}
                alt={`Gift Card ${card.id}`}
                onClick={() => {
                  setFormData({
                    ...formData,
                    image: card.image,
                    brand: card.brand,
                  });
                }}
                style={{
                  height: "440px",
                  cursor: "pointer",
                  border:
                    formData?.image === card.image ? "2px solid red" : "none",
                }}
              />
            </div>
          ))}
          <div className="col-12 pt-3 cormorant-garamond-font font-weight-400 text-center">
            <h4 className="mb-3">{giftData.gift_price}</h4>

            {lightGreyBtns.map((btn) => (
              <button
                key={btn.id}
                className="footer-radius-border border-20 light-grey-1 mb-3 w-75 font-weight-500"
                onClick={() => {
                  setFormData({ ...formData, value: btn.value });
                }}
                style={{
                  cursor: "pointer",
                  border:
                    formData?.value === btn.value ? "2px solid red" : "none",
                }}
              >
                {btn.value}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GiftCards;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://project-03-i2tr.onrender.com/gift_cards");
  const giftData: GiftCardsType = await res.json();

  return {
    props: {
      giftData,
    },
  };
};
