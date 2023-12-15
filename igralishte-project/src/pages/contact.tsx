import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import GoldButton from "@/components/GoldButton";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import { HeaderContext } from "@/context/HeaderContextConstructor";
import { ContactPageType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

interface Props {
  contactPageData: ContactPageType;
}

const Contact: NextPage<Props> = ({ contactPageData }) => {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <Header />
      <InfiniteAdvertisement />
      <Breadcrumbs title="Почетна" title1="За нас" />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-3">
            <h4 className="d-inline">{contactPageData.first_title}</h4>
            <img
              src={contactPageData.first_image}
              alt=""
              style={{ width: "80px" }}
            />
          </div>

          <div className="col-12 pb-4 pt-2">
            <img
              src={contactPageData.second_image}
              alt=""
              className="w-100 d-block"
              style={{ height: "334px", borderRadius: "10px" }}
            />
          </div>

          <div className="col-12 text-center mb-3">
            <div className="contact-description mb-4">
              <h4 className="font-weight-400 mb-3">
                {contactPageData.second_title}
              </h4>
              <p className="cormorant-garamond-font font-weight-500 line-height-25 mb-3">
                {contactPageData.second_content1} <br />
                {contactPageData.second_content2} <br />
                {contactPageData.second_content3}
              </p>
            </div>
            <address className="line-height-25 mb-4 ">
              <h6 onClick={() => setIsMapOpen(!isMapOpen)}>
                {contactPageData.adress} <br />
                {contactPageData.city}
              </h6>
              {isMapOpen && (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d185.31529060658312!2d21.4226298!3d41.9993173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415d370780d7f%3A0x144a59c79c946d63!2sIgrali%C5%A1te!5e0!3m2!1sen!2smk!4v1701779581898!5m2!1sen!2smk"
                  style={{ border: "0", width: "100%", height: "300px" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              )}
            </address>
            <div className="contact cormorant-garamond-font font-weight-700 mb-4">
              <h4 className="mb-2">
                {contactPageData.number_contact} <br />
              </h4>
              <p style={{ fontSize: "20px" }}>
                <a
                  className="text-decoration-none color-black"
                  href={`tel:${contactPageData.phone_number}`}
                >
                  {contactPageData.phone_number}
                </a>
              </p>
            </div>
            <div className="working-hours cormorant-garamond-font font-weight-700 mb-4">
              <h4 className="mb-2">{contactPageData.working_hours}</h4>
              <p className=" line-height-25" style={{ fontSize: "20px" }}>
                {contactPageData.working_hours1}
                <br />
                {contactPageData.working_hours2}
              </p>
            </div>

            <div
              className="col-12 my-3"
              onClick={() => router.push({ pathname: "/productPage" })}
            >
              <GoldButton
                title="Кон продавницата"
                width="w-100"
                height="50px"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const contactPageRes = await fetch("http://localhost:5001/contact_page");
  const contactPageData: ContactPageType = await contactPageRes.json();
  return {
    props: {
      contactPageData,
    },
  };
};
