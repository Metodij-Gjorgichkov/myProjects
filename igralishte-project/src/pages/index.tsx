import Banner1 from "@/components/Banner1";
import Banner3 from "@/components/Banner3";
import Banner4 from "@/components/Banner4";
import Banner5 from "@/components/Banner5";
import CarouselCards from "@/components/CarouselCards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfiniteAdvertisement from "@/components/InfiniteAdvertisement";
import { HeaderContext } from "@/context/HeaderContextConstructor";
import { ProductsType } from "@/types/types";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext } from "react";

interface Props {
  productsData: ProductsType[];
}

export default function Home({ productsData }: Props) {
  const { isHamburgerMenuOpen } = useContext(HeaderContext);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <>
        <Header />
        <InfiniteAdvertisement />
        <Banner1 />
        <CarouselCards productsData={productsData} />
        <Banner3 />
        <Banner4 />
        <Banner5 />
        <Footer />
      </>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  let res = await fetch("http://localhost:5001/products");
  let productsData: ProductsType[] = await res.json();

  return {
    props: {
      productsData,
    },
  };
};
