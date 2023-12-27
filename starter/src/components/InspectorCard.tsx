import { useRouter } from "next/router";
import { useState } from "react";

const InspectorCard: React.FC = () => {
    const [toggleReport, setToggleReport] = useState(false);

    const router = useRouter();

    const handleToggleReport = () => {
        setToggleReport(!toggleReport);
    }

    const redirectToResolution = () => {
        router.push({
            pathname: "/inspector/resolution"
        })
    }

    return (
        <>
            <div className="inspectorCard container mb-3">
                {toggleReport && <div className="overlay"></div>}
                <div className="row">
                    <div className="col-6 card-info">
                        <h3>Ул. Васил Ѓорѓов бр.19</h3>
                        <p>07.10.23 br.44</p>
                        <div className="row">
                            <div className="col6 mr-3 ml-3">
                                <p className="hazard-level">168</p>
                            </div>
                            <div className="col6">
                                <p>PM10 <br /> µg/m3</p>
                            </div>
                            <h3 className="ml-3">Многу Високо ниво</h3>
                        </div>
                    </div>
                    <div className="col-6 img-container">
                        <img src="https://picsum.photos/200/" alt="" className="mb-2" />
                        ~80метри
                    </div>
                </div>
                <div className="text-center reportPopUp">
                    <p className="mb-0" onClick={handleToggleReport}>Види пријава</p>
                </div>
            </div>

            {toggleReport && <div className="reportMoreInfo">
                <h2 className="text-center mb-3 h4">Пријава број: 44</h2>
                <div className="row mb-3">
                    <div className="col-6">
                        <p>Локација на пријава:</p>
                    </div>
                    <div className="col-6 d-flex">
                        <i className="fas fa-map-marker mr-2"></i>
                        <p className="mb-0">Ул. Васил Ѓорѓов бр.19 Капиштец, Скопје 1000</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-6">
                        <h3 className="h6">Ниво на загаденост:</h3>
                        <div className="d-flex">
                            <div className="col6 mr-3 ml-3">
                                <p className="hazard-level mb-0">168</p>
                            </div>
                            <div className="col6">
                                <p className="mb-0">PM10 <br /> µg/m3</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h3 className="h5 font-weight-bold accentedText">Многу високо ниво</h3>
                        <p className="mb-0">Фабрика; Чад; Миризба;</p>
                        <p className="mb-0">Коментар; Загадувањето се чувствува 10 дена</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-4">
                    <div className="img-container">
                        <img src="https://picsum.photos/200/" alt="" />
                    </div>
                </div>

                <div className="buttons-div d-flex justify-around">
                    <button type="button" onClick={handleToggleReport} className="button-reset btn-close mr-5">X</button>
                    <button type="button" className="button-reset btn-green btn-medium w-50" onClick={redirectToResolution}>Разреши случај</button>
                </div>
            </div>}
        </>
    )
}

export default InspectorCard;