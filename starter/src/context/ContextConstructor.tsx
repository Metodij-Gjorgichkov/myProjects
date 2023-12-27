import React from "react";
import { createContext, useEffect, useState } from "react";

interface Location {
  latitude?: number;
  longitude?: number;
}
interface StreetCityType {
  display_name: string;
  postcode?: string;
  suburb?: string;
  street: string;
  city: string;
}
interface LocationType {
  location: Location;
  streetCity: StreetCityType;
  getAddressDetails: (latitude: number, longitude: number) => void;
}
interface Props {
  children: React.ReactNode;
}
export const LocationContext = createContext<LocationType>({
  location: {},
  streetCity: {
    display_name: "",
    postcode: "",
    suburb: "",
    street: "",
    city: "",
  },
  getAddressDetails: (latitude: number, longitude: number) => {},
});

const ContextConstructor = ({ children }: Props) => {
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [streetCity, setStreetCity] = useState<StreetCityType>({
    display_name: "",
    postcode: "",
    suburb: "",
    street: "",
    city: "",
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  const getAddressDetails = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse.php?lat=${latitude}&lon=${longitude}&format=jsonv2`, 
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      // Extract street and city details from the response
      const address = data.address || {};
      const street = address.road;
      const city = address.city;

      console.log(address.suburb);

      setStreetCity({
        ...streetCity,
        suburb: address.suburb ? address.suburb : "",
        postcode: address.postcode ? address.postcode : "",
        street: street ? street : "",
        city: city ? city : "",
        display_name: data.display_name,
      })

      // setStreetCity(data.display_name);
    } catch (error) {
      console.error("Error during geocoding request:", error);
    }
  };

  return (
    <LocationContext.Provider
      value={{ location, streetCity, getAddressDetails }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default ContextConstructor;
