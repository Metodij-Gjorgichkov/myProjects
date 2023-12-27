import Header from "@/components/Header";
import HorizontalScrollCarousel from "@/components/HorizontalCarouselScroll";
import InspectorCard from "@/components/InspectorCard";
import { InspectorData, InspectorTypes } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";

interface DashboardTypes {
    inspectorData: InspectorTypes[];
}

const Dashboard: NextPage<DashboardTypes> = ({ inspectorData }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="inspector-dashboard-container container">
            <Header
                image={"/images/viber_image_2023-10-22_18-08-15-736 2.svg"}
                leftIcon="fas fa-chevron-left"
                rightIcon="fas fa-bell"
            />

            <h2 className="h6">Инспектор <span className="font-weight-bold">Горан Николовски</span></h2>

            <div className="dropdown mb-3">
                <p className="mb-0">Вторник,</p>
                <button className="button-reset" onClick={toggleDropdown}>24 Oktomvri 2023 <i className="fas fa-chevron-down"></i></button>
                {isOpen && (
                    <div className="dropdownContent">
                        <a href="#">25 Октомври 2023</a>
                        <a href="#">26 Октомври 2023</a>
                        <a href="#">27 Октомври 2023</a>
                    </div>
                )}
            </div>

            <div className="mb-3 d-flex justify-content-center">
                <button className="button-reset btn-green btn-medium">Старт на Работно Време</button>
            </div>

            <div className="d-flex align-items-center mb-3">
                <h2 className="h5 mb-0 font-weight-bold">Доделени пријави</h2>
                <div className="filters d-flex align-items-center ml-auto">
                    <i className="fas fa-sliders-h mr-2"></i>
                    <p className="mb-0">Филтрирај</p>
                </div>
            </div>

            <HorizontalScrollCarousel>
                <div className="carouselItem active-carousel-item">
                    Вто <br /> 24 окт
                </div>
                <div className="carouselItem">
                    Сре <br /> 25 окт
                </div>
                <div className="carouselItem">
                    Чет <br /> 26 окт
                </div>
                <div className="carouselItem">
                    Пет <br /> 27 окт
                </div>
                <div className="carouselItem">
                    Саб <br /> 28 окт
                </div>
            </HorizontalScrollCarousel>

            {/* {inspectorData.map(inspector => {
                return (
                    <InspectorCard key={inspector.id} inspector={inspector} />
                )
            })} */}
            <InspectorCard />

        </div >
    )
}

export default Dashboard;