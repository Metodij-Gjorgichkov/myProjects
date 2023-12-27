import { ReportsTypes } from "@/types/types";
import { useEffect, useState } from "react";

const ReportCard: React.FC<ReportsTypes> = (res) => {
    const [toggleStatus, setToggleStatus] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);

    const handleStatusToggle = () => {
        setToggleStatus(!toggleStatus);
    }

    const handleToggleModal = () => {
        setToggleModal(!toggleModal);
    }

    return (
        <div className="row report-card mb-3 pb-3">
            {toggleModal && <div className="overlay"></div>}
            <div className="col-6">
                <img src={res.photo} className="rounded-lg" alt="" />
            </div>
            <div className="col-6">
                <h2 className="h6 report-street mb-2">{res.location}</h2>
                <p className="mb-2">{res.municipality}</p>
                <p>{res.assignment_date} <span className="ml-2">бр. {res.id}</span></p>

                <div className="d-flex justify-content-center status-clickable">
                    <p onClick={handleStatusToggle} className="mr-2 status-paragraph">Види статус</p>
                    <i className="fas fa-chevron-down align-middle"></i>

                    <i className="far fa-clock ml-auto status-icon"></i>
                </div>
                {toggleStatus &&
                    <>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam laudantium error iure, commodi odio.</p>
                        </div>
                        <button onClick={handleToggleModal} className="btn share-btn btn-green btn-small">Сподели <i className="fas fa-share"></i></button>
                        <p onClick={handleStatusToggle} className="mr-2 status-paragraph">Затвори статус</p>
                    </>
                }
            </div>

            {toggleModal && <div className="share-modal text-right">
                <button onClick={handleToggleModal} className="close-btn"><i className="fas fa-times"></i></button>
                <div className="content text-center">
                    <i className="fas fa-handshake"></i>
                    <h3 className="h6">Сподели и зголеми го импактот</h3>
                    <p>Повикај ги пријателите да ја поддржат твојата иницијатива за почист воздух</p>
                </div>
                <ul className="d-flex social-media-icons justify-content-around align-center">
                    <li><i className="fab fa-facebook"></i></li>
                    <li><i className="fab fa-instagram"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-linkedin-in"></i></li>
                </ul>
            </div>}
        </div>
    )
}

export default ReportCard;

