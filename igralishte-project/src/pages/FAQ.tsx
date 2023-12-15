import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import { FaqPageType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";

interface Props {
  faqPageData: FaqPageType;
}

const FAQ: NextPage<Props> = ({ faqPageData }) => {
  return (
    <>
      <Header />
      <InfiniteAdvertisement />
      <Breadcrumbs
        title={"Почетна"}
        title1={"Често поставувани прашања"}
        fontsize="17px"
      />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-3">
            <h4 className="d-inline">{faqPageData.first_title}</h4>
            <img
              src={faqPageData.first_image}
              alt=""
              style={{ width: "80px" }}
            />
          </div>
        </div>

        <div className="row pb-5">
          <div className="col-10 offset-1 faq px-0">
            {Array(4)
              .fill(faqPageData)
              .map((faq, index) => (
                <div
                  key={index}
                  className={`first-section ${
                    index % 2 !== 0 ? "light-ribbon" : ""
                  }`}
                >
                  <div className="faq-cont">
                    <div className="faq-question px-1 pt-2">
                      <p className="cormorant-infant-font font-weight-600 fancy-olive line-height-30 question1">
                        {faqPageData.question}
                      </p>
                    </div>
                    <p className="cormorant-garamond-font font-weight-500 line-height-30">
                      {faq.content}
                    </p>
                    <div className="faq-line"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;

export const getStaticProps: GetStaticProps = async () => {
  const faqPageRes = await fetch(
    "https://project-03-i2tr.onrender.com/faq_page"
  );
  const faqPageData: FaqPageType = await faqPageRes.json();
  return {
    props: {
      faqPageData,
    },
  };
};
