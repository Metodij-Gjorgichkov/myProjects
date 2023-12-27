import React, { useContext, useEffect, useState } from "react";
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Header from "./Header";
import CurlyNavigation from "./CurlyNavigation";
import HomePageFooter from "./HomePageFooter";
import L, { Draggable } from "leaflet";
import { LocationContext } from "@/context/ContextConstructor";
import NavigationButton from "./NavigationButton";

interface Location {
  latitude?: number;
  longitude?: number;
}
const radiusInMeters = 800;

export const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 40],
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

const Map = () => {
  const { location, streetCity } = useContext(LocationContext);

  const handleMarkerDrag = (e: any) => {
    const marker = e.target;
    const newPosition = marker.getLatLng();
    const distance = marker
      .getLatLng()
      .distanceTo([location.latitude, location.longitude]);

    if (distance <= radiusInMeters) {
      marker.setLatLng(newPosition);
    } else {
      marker.setLatLng([location.latitude, location.longitude]);
    }
  };
  // console.log(streetCity);
  return (
    <>
      {location.latitude && location.longitude && (
        <>
          <div className="position-relative">
            <Header
              image={"/images/viber_image_2023-10-22_18-08-15-736 2.svg"}
            />
            <MapContainer
              style={{ height: "100vh", width: "100wv" }}
              center={[location.latitude!, location.longitude!]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                eventHandlers={{ dragend: handleMarkerDrag }}
                icon={customIcon}
                position={[location.latitude!, location.longitude!]}
                draggable={true}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              <Circle
                center={[location.latitude!, location.longitude!]}
                radius={radiusInMeters}
              />
            </MapContainer>
            <CurlyNavigation />
            <HomePageFooter />
          </div>
        </>
      )}
    </>
  );
};

export default Map;
