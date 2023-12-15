import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import { ProductsType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

interface Props {
  brandsData: any;
}

const AllBrands: NextPage<Props> = ({ brandsData }) => {
  const router = useRouter();

  const handleOnBrandClick = (text: string) => {
    router.push({
      pathname: "/brandPage",
      query: {
        brandName: text,
      },
    });
  };

  return (
    <>
      <Header />
      <InfiniteAdvertisement />
      <Breadcrumbs title="Почетна" title1="Сите брендови" fontsize="17px" />

      <div className="container cormorant-garamond-font font-weight-500 mb-4">
        <div className="row">
          <div className="col-12">
            <h5 className="mt-3 mb-4 px-3 all-brand-in-our-site">
              Сите брендови на нашата страна:
            </h5>
          </div>
          {brandsData.map((brand: any, index: any) => (
            <div
              className="col-12 text-center px-4"
              key={index}
              onClick={() => handleOnBrandClick(brand.name)}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="brand-image w-100 d-block"
                style={{ height: "280px" }}
              />
              <h5 className="mb-3 py-3 all-brands">{brand.name}</h5>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AllBrands;

export const getStaticProps: GetStaticProps = async () => {
  let productsResponse = await fetch("http://localhost:5001/products");
  let productsData: ProductsType[] = await productsResponse.json();

  let brandsDataMap: Map<string, { name: string; image: string }> = new Map();

  productsData.forEach((prod) => {
    const brandName = prod.brand;
    const brandImage = prod.brand_informations.brand_advertise_image;

    if (!brandsDataMap.has(brandName)) {
      brandsDataMap.set(brandName, { name: brandName, image: brandImage });
    }
  });

  let brandsData = Array.from(brandsDataMap.values());

  return {
    props: {
      brandsData,
    },
  };
};
