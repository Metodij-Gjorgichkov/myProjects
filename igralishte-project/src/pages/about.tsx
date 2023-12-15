import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import { AboutPageType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import TypeWriter from "typewriter-effect";
import React, { useContext, useState } from "react";

interface Props {
  aboutPageData: AboutPageType;
}

const About: NextPage<Props> = ({ aboutPageData }) => {
  const [isOurStoryActive, setIsOurStoryActive] = useState<boolean>(true);
  const [isOurWorkActive, setIsOurWorkActive] = useState<boolean>(false);

  const handleOurStoryClick = () => {
    setIsOurWorkActive(false);
    setIsOurStoryActive(true);
  };
  const handleOurWorkClick = () => {
    setIsOurStoryActive(false);
    setIsOurWorkActive(true);
  };

  return (
    <>
      <Header />
      <InfiniteAdvertisement />
      <Breadcrumbs title="Почетна" title1="За нас" />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-3">
            <img
              src={aboutPageData.first_image}
              alt=""
              style={{ width: "80px" }}
            />
            <h4 className="d-inline">{aboutPageData.first_title}</h4>
          </div>

          <div className="col-12 text-center py-2 cormorant-garamond-font-italic ">
            <div className="about-us light-grey-bg py-1">
              <div className="d-flex justify-content-center align-items-center text-center">
                <p
                  className={`mb-0 px-2  border-right ${
                    aboutPageData.our_story ? "font-weight-bold" : ""
                  }`}
                  onClick={handleOurStoryClick}
                >
                  {aboutPageData.our_story}
                </p>
                <p
                  className={`mb-0 px-2 ${
                    aboutPageData.our_work ? "font-weight-bold" : ""
                  }`}
                  onClick={handleOurWorkClick}
                >
                  {aboutPageData.our_work}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 py-4">
            <img
              src={
                isOurStoryActive
                  ? aboutPageData.second_image
                  : aboutPageData.third_image
              }
              className="w-100 d-block"
              style={{ height: "334px", borderRadius: "10px" }}
            />
          </div>

          <div className="col-12 mb-4">
            <div className="px-2">
              <h3 className="mb-3">
                {isOurStoryActive ? (
                  <TypeWriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings: [`${aboutPageData.first_content_story}`],
                    }}
                  />
                ) : (
                  <TypeWriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 80,
                      strings: [`${aboutPageData.first_content_work}`],
                    }}
                  />
                )}
              </h3>
              <p
                className="cormorant-garamond-font font-weight-500 mb-5"
                style={{ lineHeight: "30px" }}
              >
                {aboutPageData.second_content}
              </p>
              <p
                className="cormorant-garamond-font font-weight-500"
                style={{ lineHeight: "30px" }}
              >
                {aboutPageData.third_content}
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const aboutPageRes = await fetch("http://localhost:5001/about_page");
  const aboutPageData: AboutPageType = await aboutPageRes.json();
  return {
    props: {
      aboutPageData,
    },
  };
};
