import React, { useEffect, useState } from "react";
import StraightNavigation from "../../components/StraightNavigation";
import { NextPage } from "next";
import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";

const SignInPage: NextPage = () => {
  const [messageType, setMessageType] = useState("")
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch("https://andjelo-shekerovski.eu-1.sharedwithexpose.com/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputValues)
    }).then(res => res.json())
      .then(data => {
        console.log(data);
        setMessageType(data);
      });

  }

  return (
    <div className="container">
      <div className="row py-3">
        <Link href={"/"}>
          <Header
            leftIcon="<"
            image={`images/viber_image_2023-10-22_18-08-15-736 2.svg`}
          />
        </Link>
      </div>
      <div className="row py-5">
        <div className="col-12 text-center ">
          <h6 className="text-uppercase">најави се</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 position-relative ">
          <form action="" className="d-flex flex-column" onSubmit={handleSubmitForm}>
            <label htmlFor="email">Е-маил адреса</label>
            <input
              className="email"
              type="text"
              name="email"
              value={inputValues.email}
              placeholder="example@email.com"
              onChange={handleOnChange}
            />
            <label htmlFor="password" className="pt-3">
              Лозинка
            </label>
            <input type="password" className="password" onChange={handleOnChange} value={inputValues.password} name="password" />
            <div
              className="position-absolute"
              style={{ bottom: `24%`, right: `10%` }}
            >
            </div>
            <div className="d-flex justify-content-between pt-3 align-items-center">
              <div>
                <input className="mr-3" type="checkbox" />
                <label htmlFor="checkbox" className="small m-0">
                  Запомни ме
                </label>
              </div>
              <p className="small">Заборавена лозинка?</p>
            </div>
            <button
              className="btn-green border-0 rounded py-3 px-5"
              type="submit"
            >
              најави се
            </button>
          </form>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-10 offset-1 text-center">
          <h6 className="text-uppercase">или преку</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-between align-items-center text-center pt-5 pb-3">
          <div className="col-4">
            <i className="fa-brands fa-facebook fa-2x box-shadow p-2 rounded"></i>
          </div>
          <div className="col-4 ">
            <i className="fa-brands fa-google-plus fa-2x box-shadow p-2 rounded"></i>
          </div>
          <div className="col-4 ">
            <i className="fa-brands fa-apple fa-2x box-shadow py-2 px-3 rounded"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 d-flex justify-content-center py-5">
          {/* <Link href={"/profile"}> */}

          {/* </Link> */}
        </div>
        <div className="col-10 offset-1 d-flex justify-content-center pb-3">
          <p className="mr-3 small">немаш профил?</p>
          <p className="small">регистрирај се</p>
        </div>
      </div>
      <div className="row">
        <StraightNavigation />
      </div>
    </div>
  );
};

export default SignInPage;
