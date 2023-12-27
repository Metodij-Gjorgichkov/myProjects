import Header from "@/components/Header";
import StraightNavigation from "@/components/StraightNavigation";
import { NextPage } from "next";
import React from "react";

const AnonymousReport: NextPage = () => {
  return (
    <div className="container">
      <div className="row py-3">
        <Header image={`images/viber_image_2023-10-22_18-08-15-736 2.svg`} />
      </div>
      <div className="row py-5">
        <div className="col-12 text-center ">
          <h6 className="text-uppercase">Анонимна пријава</h6>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-12">
          <p className="small">Избери извор на загадување</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
        <div className="col-6">
          <div className="small">
            <p>street Name</p>
            <p>type of polluter</p>
            <p>comment</p>
          </div>
        </div>
        <div className="col-6">
          <img src="IMG.jpg" alt="IMG" className="box-shadow" />
        </div>
        </div>
        
      </div>
      <hr />
      <div className="row pb-5 pt-3">
        <div className="col-12 text-center p-2">
          <h6 className="small">
            Дали сакаш да добиваш известувања за пријавата?
          </h6>
        </div>
        
        <div className="col-6 d-flex justify-content-center">
        <button className="bg-white border-0  p-2 px-5 box-shadow" style={{borderRadius:`10px`}}>Не сакам</button>
        </div>
        <div className="col-6  d-flex justify-content-center">
        <button className="bg-white border-0  p-2 px-5 box-shadow" style={{borderRadius:`10px`}}>Сакам</button>
        </div>
      </div>
      <div className="row py-5">
          <div className="col-8 offset-2 d-flex align-items-center justify-content-between">
            <div className="col-3">
            <button className="cancelBtn">X</button>
            </div>
            <div className="col-8 offset-1">
              <button className="btn-green border-0 rounded py-3 px-5">потврди</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1 d-flex justify-content-center pb-3">
            <p className="mr-3 small">немаш профил?</p>
            <p className="small">регистрирај се</p>
          </div>
        </div>
        <div className="row">
            <StraightNavigation/>
        </div>
    </div>
  );
};

export default AnonymousReport;
