import ContextConstructor from "@/context/ContextConstructor";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextConstructor>
      <Component {...pageProps} />
    </ContextConstructor>
  );
}
