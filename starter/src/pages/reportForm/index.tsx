import CameraComponent from "@/components/CameraComponent";
import Header from "@/components/Header";
import StraightNavigation from "@/components/StraightNavigation";
import { LocationContext } from "@/context/ContextConstructor";
import Link from "next/link";
import React, { useContext, useState } from "react";

const ReportForm = () => {
  const [togglSubSource, setToggleSubSource] = useState(false);
  const [toggleCamera, setToggleCamera] = useState(false);
  const [imageUrlString, setImageUrlString] = useState("");
  const [inputValues, setInputValues] = useState({
    mainSource: "",
    subSource: "",
  });
  const { location, streetCity } = useContext(LocationContext);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setToggleSubSource(true);

    if (name === "mainGroup") {
      setInputValues({
        ...inputValues,
        mainSource: value,
      })
    } else {
      setInputValues({
        ...inputValues,
        subSource: value,
      })
    }
  }

  const handleToggleCamera = () => {
    setToggleCamera(!toggleCamera);
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(inputValues);
    console.log(imageUrlString);
    console.log(streetCity);

    const newObject = {
      // user_id: 1,
      latitude: location.latitude?.toString(),
      longitude: location.longitude?.toString(),
      pollution_type: inputValues.mainSource,
      location: streetCity.display_name,
      // photo: imageUrlString,
      // postcode: streetCity.postcode,
      // suburb: streetCity.suburb,
      // city: streetCity.city,
    }

    // fetch("https://icbolxm5sf.sharedwithexpose.com/api/reports", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   body: JSON.stringify(newObject)
    // }).then(res => res.json())
    //   .then(data => console.log(data))
  }

  const getImageUrl = (image: string) => {
    setImageUrlString(image);
  }

  return (
    <>
      <div className="container">
        <div className="row py-3">
          <Link href={"/"}>
            <Header
              leftIcon="fas fa-chevron-left"
              image={`images/viber_image_2023-10-22_18-08-15-736 2.svg`}
            />
          </Link>
        </div>

        <div className="row py-5">
          <div className="col-12 text-center ">
            <h6 className="text-uppercase font-weight-bold">пријави загадување</h6>
          </div>
        </div>

        <div className="row pb-5">
          <div className="col-12">
            <p className="h6 font-weight-bold">Избери извор на загадување</p>
          </div>
        </div>

        <div className="container">
          <form action="/" className="report-form" onSubmit={handleSubmitForm}>
            <div className="row justify-content-around">
              <div className="col4">
                <label className={`d-flex flex-column box-shadow cards-costume align-items-center report-labels ${inputValues.mainSource === "factory" && "selected"}`} htmlFor="factory">
                  <i
                    className="fa-solid fa-house-chimney fa-2x d-block"
                    style={{ color: `#EAEAEA` }}
                  ></i>
                  <input id="factory" type="radio"
                    style={{ appearance: "none" }}
                    name="mainGroup"
                    checked={inputValues.mainSource === "factory"}
                    value="factory"
                    onChange={handleRadioChange}
                  />
                  Фабрика
                </label>
              </div>

              <div className="col4">
                <label className={`d-flex flex-column box-shadow cards-costume align-items-center report-labels ${inputValues.mainSource === "household" && "selected"}`} htmlFor="household">
                  <i
                    className="fa-solid fa-house-chimney fa-2x d-block"
                    style={{ color: `#EAEAEA` }}
                  ></i>
                  <input id="household" type="radio"
                    style={{ appearance: "none" }}
                    name="mainGroup"
                    checked={inputValues.mainSource === "household"}
                    value="household"
                    onChange={handleRadioChange}
                  />
                  Домаќинство
                </label>
              </div>

              <div className="col4">
                <label className={`d-flex flex-column box-shadow cards-costume align-items-center report-labels ${inputValues.mainSource === "other" && "selected"}`} htmlFor="other">
                  <i
                    className="fa-solid fa-house-chimney fa-2x d-block"
                    style={{ color: `#EAEAEA` }}
                  ></i>
                  <input id="other" type="radio"
                    style={{ appearance: "none" }}
                    name="mainGroup"
                    checked={inputValues.mainSource === "other"}
                    value="other"
                    onChange={handleRadioChange}
                  />
                  Друго
                </label>
              </div>
            </div>

            {togglSubSource && <div className="row ml-2">
              <div className="col4 mr-2">
                <label className={`d-flex flex-column box-shadow cards-costume align-items-center report-labels ${inputValues.subSource === "smoke" && "sub-selected"}`} htmlFor="smoke">
                  <input id="smoke" type="radio"
                    style={{ appearance: "none" }}
                    name="subGroup"
                    checked={inputValues.subSource === "smoke"}
                    value="smoke"
                    onChange={handleRadioChange}
                  />
                  Чад
                </label>
              </div>

              <div className="col4 mr-2">
                <label className={`d-flex flex-column box-shadow cards-costume align-items-center report-labels ${inputValues.subSource === "smell" && "sub-selected"}`} htmlFor="smell">
                  <input id="smell" type="radio"
                    style={{ appearance: "none" }}
                    name="subGroup"
                    checked={inputValues.subSource === "smell"}
                    value="smell"
                    onChange={handleRadioChange}
                  />
                  Миризба
                </label>
              </div>

              <div className="col4">
                <label className={`d-flex flex-column box-shadow cards-costume align-items-center report-labels ${inputValues.subSource === "subOther" && "sub-selected"}`} htmlFor="subOther">
                  <input id="subOther" type="radio"
                    style={{ appearance: "none" }}
                    name="subGroup"
                    checked={inputValues.subSource === "subOther"}
                    value="subOther"
                    onChange={handleRadioChange}
                  />
                  Друго
                </label>
              </div>
            </div>}

            <div className="row py-5">
              <div className="col-12  pb-5">
                <p className="font-weight-bold">
                  прикачи фотографија <span className="small">(*задолжително)</span>
                </p>
              </div>
              <div className="col-10 offset-1 d-flex flex-column justify-content-center align-items-center text-center" onClick={handleToggleCamera}>
                <div className="photoField box-shadow">
                  <i
                    className="fa-solid fa-camera fa-5x"
                    style={{ color: `#EAEAEA` }}
                  ></i>
                  <p className="small" style={{ color: `#343A40` }}>
                    Take a photo
                  </p>
                </div>
              </div>
            </div>
            {toggleCamera && <CameraComponent getImageUrl={getImageUrl} />}

            <div className="d-flex justify-content-center py-5">
              <button type="button" className="button-reset cancelBtn mr-5">X</button>
              <button type="submit" className="button-reset btn-green btn-medium">Потврди</button>
            </div>
          </form>
        </div>
        <StraightNavigation />
      </div>
    </>
  );
};

export default ReportForm;
