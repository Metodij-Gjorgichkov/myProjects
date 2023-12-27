import Header from "@/components/Header";
import StraightNavigation from "@/components/StraightNavigation";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SignUpForm = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch("https://andjelo-shekerovski.eu-1.sharedwithexpose.com/api/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inputValues)
    }).then(res => res.json())
      .then(data => console.log(data));

    router.push({
      pathname: "/profile"
    })
  }

  return (
    <div className="container">
      <div className="row py-3">
        <Header
          leftIcon="<"
          image={`images/viber_image_2023-10-22_18-08-15-736 2.svg`}
        />
      </div>
      <div className="row py-5">
        <div className="col-12 text-center ">
          <h6 className="text-uppercase">креирај профил</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-10 offset-1 position-relative ">
          <form action="" className="d-flex flex-column" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Внеси име и презиме</label>
            <input className="form-control" onChange={handleOnChange} type="name" name="name" value={inputValues.name} placeholder="someone" />
            <label htmlFor="email">Внеси е-маил адреса</label>
            <input
              className="form-control"
              type="email"
              value={inputValues.email}
              onChange={handleOnChange}
              name="email"
              placeholder="example@email.com"
            />
            <label htmlFor="password" className="pt-3">
              Внеси лозинка
            </label>
            <input onChange={handleOnChange} type="password" className="form-control" value={inputValues.password} name="password" />
            <label htmlFor="password2" className="pt-3">
              Потврди лозинка
            </label>
            <input type="password2" className="form-control" name="confirmPass" />
            <div className="d-flex align-items-center py-3">
              <input type="checkbox" className="mr-1" />
              <label
                htmlFor="checkbox"
                className="small m-0"
                style={{ fontSize: `10px` }}
              >
                Запомни ме
              </label>
            </div>
            <div className="d-flex align-items-center pb-3">
              <input type="checkbox" className="mr-1" />
              <p className="small m-0" style={{ fontSize: `10px` }}>
                Се согласувам со условите и полисите за користење на
                апликацијата.
              </p>
            </div>
            <button
              className="btn-green border-0 rounded py-3 px-5"
              type="submit"
            >
              Регистирај се
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <StraightNavigation />
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

        </div>
        <div className="col-10 offset-1 d-flex justify-content-center pb-3">
          <p className="mr-3 small" style={{ fontSize: `10px` }}>
            Имаш профил?
          </p>
          <Link href={"/signIn"}>
            <p className="small" style={{ fontSize: `10px`, color: `#79B937` }}>
              Најави се!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
