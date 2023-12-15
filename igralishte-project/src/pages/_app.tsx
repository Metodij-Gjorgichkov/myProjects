import SpacingsBody from "@/components/SpacingsBody";
import FavoriteContextConstructor from "@/context/FavoriteContextConstructor";
import FilterContextConstructor from "@/context/FilterContextConstructor";
import HeaderContextConstructor from "@/context/HeaderContextConstructor";
import UserProfileContextConstructor from "@/context/UserProfileContextConstructor";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpacingsBody>
        <UserProfileContextConstructor>
          <HeaderContextConstructor>
            <FilterContextConstructor>
              <FavoriteContextConstructor>
                <Component {...pageProps} />
              </FavoriteContextConstructor>
            </FilterContextConstructor>
          </HeaderContextConstructor>
        </UserProfileContextConstructor>
      </SpacingsBody>
    </>
  );
}
