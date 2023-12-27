import CurlyNavigation from "@/components/CurlyNavigation";
import Header from "@/components/Header";
import { NextPage } from "next";
import { useState } from "react";

const Settings: NextPage = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    const [toogleDeactivate, setToggleDeactivate] = useState(false);

    const [toggleNewPassword, setToggleNewPassword] = useState(false);
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

    const [togglePictureChange, setTogglePictureChange] = useState(false);

    const handlePasswordChangeToggle = () => {
        setTogglePassword(!togglePassword);
    }

    const handleDeactivateAccountToggle = () => {
        setToggleDeactivate(!toogleDeactivate);
    }

    const handleTogglePictureChange = () => {
        setTogglePictureChange(!togglePictureChange);
    }

    const handleEyeClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.id === "newPass") {
            setToggleNewPassword(!toggleNewPassword);
        } else if (e.currentTarget.id === "confirmPass") {
            setToggleConfirmPassword(!toggleConfirmPassword);
        }
    }

    return (
        <>
            <div className="settings-wrapper container">
                {/* {togglePictureChange && <div className="overlay"></div>} */}
                <div className="row">
                    <div className="col-12">
                        <div className="position-relative">
                            <Header
                                image={"/images/viber_image_2023-10-22_18-08-15-736 2.svg"}
                                leftIcon="fas fa-chevron-left"
                                rightIcon="fas fa-bell"
                            />
                        </div>

                        <div className="container settings-container" style={{ paddingTop: "70px" }}>
                            <h2 className="text-center ">Поставки</h2>

                            <div className="profile-container d-flex mb-5">
                                <div className="profile-img-container mr-4">
                                    {/* TODO: need to change the src to a valid picture */}
                                    <img src="https://picsum.photos/200/300" alt="" />
                                </div>
                                {/* TODO, this needs to be dynamic based on the signed in user */}
                                <h2 className="h5 user-name">Иван Ивановски <span onClick={handleTogglePictureChange} className="d-block changePhotoSpan">Промени фотографија<i className="fas fa-pen h6"></i></span></h2>
                            </div>


                            <ul className="profile-settings">
                                <li onClick={handlePasswordChangeToggle} className="h6 d-flex align-items-center mb-3"><i className="fas fa-lock mr-3 h6"></i> Промени лозинка <i className="fas fa-chevron-right ml-auto"></i></li>
                                {togglePassword &&
                                    <form action="/">
                                        <div className="position-relative">
                                            <input className="input-styles" type="text" placeholder="Внеси постоечка лозинка" />
                                        </div>
                                        <div className="position-relative">
                                            <input className="input-styles" type={`${toggleNewPassword ? "text" : "password"}`} placeholder="Нова лозинка" /><div id="newPass" onClick={handleEyeClick} style={{ display: "inline-block" }}><i className={`fas ${toggleNewPassword ? "fas fa-eye-slash" : "fas fa-eye"} posEye`}></i></div>
                                        </div>
                                        <div className="position-relative">
                                            <input className="input-styles" type={`${toggleConfirmPassword ? "text" : "password"}`} placeholder="Потврди нова лозинка" /><div id="confirmPass" onClick={handleEyeClick} style={{ display: "inline-block" }}><i className={`fas ${toggleConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"} posEye`}></i></div>
                                        </div>
                                    </form>
                                }
                                <li onClick={handleDeactivateAccountToggle} className="d-flex align-items-center mb-3 h6"><i className="fas fa-user mr-3 h6"></i> Деактивирај го профилот <i className="fas fa-chevron-right ml-auto"></i></li>
                                {toogleDeactivate &&
                                    <div className="deactivate-account">
                                        <form action="/">
                                            <input type="text" placeholder="Внеси е-пошта" className="input-styles" />
                                            <button className="btn btn-green btn-medium">Деактивирај</button>
                                        </form>
                                    </div>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {!togglePictureChange && <CurlyNavigation />}
            </div>
            {togglePictureChange && <div className="changePictureContainer">
                <div className="d-flex flex-column">
                    <button className="button-reset btn-green btn-medium style-btn">Фотографирај се</button>
                    <button className="button-reset btn-green btn-medium style-btn">Прикачи слика од галерија</button>
                    <button onClick={handleTogglePictureChange} className="button-reset dark-btn btn-medium style-btn">Откажи</button>
                </div>
            </div>}
        </>
    )
}

export default Settings;