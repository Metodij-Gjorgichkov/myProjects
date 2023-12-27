import React, { useContext, useEffect, useState } from "react";
import Map from "./Map";
import Header from "./Header";
import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import NavigationButton from "./NavigationButton";
import { LocationContext } from "@/context/ContextConstructor";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

const radiusInMeters = 500;

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 40],
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

const MapWithoutAccount = () => {
  const { location, streetCity, getAddressDetails } =
    useContext(LocationContext);
  const [toggleModal, setToggleModal] = useState<boolean>(false);

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

  useEffect(() => {
    getAddressDetails(location.latitude!, location.longitude!);
  }, []);

  return (
    <>
      <>
        {location.latitude && location.longitude && (
          <>
            <div className="position-relative">
              <Link href={"/"}>
                <Header
                  image={"/images/viber_image_2023-10-22_18-08-15-736 2.svg"}
                />
              </Link>
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
                  icon={customIcon}
                  position={[location.latitude!, location.longitude!]}
                  eventHandlers={{ dragend: handleMarkerDrag }}
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
              <div className="container">
                <div className="row">
                  <div
                    className="col-4 offset-4 text-center"
                    style={{ zIndex: "1000000000" }}
                  >
                    <div onClick={() => setToggleModal(!toggleModal)}>
                      <NavigationButton />
                    </div>
                  </div>
                </div>
              </div>
              {toggleModal && (
                <div
                  className="container popupModal"
                  style={{ zIndex: "1000000000" }}
                >
                  <div className="row ">
                    <div className="form">
                      <div className="col-12">
                        <div className="white-border mb-3"></div>
                      </div>
                      <div className="col-12 text-center text-white pb-3">
                        <p className="text-center text-white">
                          Дали е ова точната локација каде <br />
                          сакате да пријавите загадувања?
                        </p>
                        <span className="d-block">{streetCity.street} {streetCity.suburb} {streetCity.postcode}</span>
                        <span className="d-block mb-2">{streetCity.city}</span>

                        <span>
                          <i
                            className="fa-solid fa-xmark text-white p-2 border-white mr-2"
                            onClick={() => setToggleModal(!toggleModal)}
                          ></i>
                        </span>
                        <Link href={"/reportForm"}>
                          <button
                            type="submit"
                            className="submitFormWithoutAcc "
                          >
                            Потврди
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </>
    </>
  );
};

export default MapWithoutAccount;
