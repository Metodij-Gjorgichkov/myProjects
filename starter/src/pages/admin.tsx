import AddNewInspector from "@/components/AddNewInspector";
import AdminSideBar from "@/components/AdminSideBar";
import { NextPage } from "next";
import { useContext, useState } from "react";
import "leaflet/dist/leaflet.css";
import { LocationContext } from "@/context/ContextConstructor";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/MapWithoutAccount"), {
    ssr: false,
});

const Admin: NextPage = () => {
    const [togglePageContent, setTogglePageContent] = useState(true);
    const [toggleAside, setToggleAside] = useState(false);
    const [toggleAsideAddUser, setToggleAsideAddUser] = useState(false);

    const { location } = useContext(LocationContext);

    const handleToggleAside = () => {
        setToggleAside(!toggleAside);
    }

    const handleToggleAsideAddUser = () => {
        setToggleAsideAddUser(!toggleAsideAddUser);
    }

    const handleTogglePage = () => {
        setTogglePageContent(!togglePageContent);
    }

    return (
        <>
            <div className="admin-dashboard">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <img src="../images/viber_image_2023-10-22_18-08-15-736 2.svg" alt="" />
                        </div>
                        <div className="col-7">
                            <button onClick={handleToggleAside} className="button-reset btn-green btn-medium mr-2">Инспектори</button>
                            <button onClick={handleToggleAsideAddUser} className="button-reset btn-green btn-medium mr-2">Додај Корисник</button>
                            <button className="button-reset btn-green btn-medium mr-2">Календар</button>
                            <button onClick={handleTogglePage} className="button-reset btn-green btn-medium mr-2">Мапа</button>
                        </div>
                        <div className="col-3 admin-profile d-flex align-items-center">
                            <i className="fas fa-bell mr-3"></i>
                            <i className="fas fa-cog mr-3"></i>
                            <div className="profile-img">
                                <img src="https://picsum.photos/200/" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {togglePageContent ? <div className="admin-panel-wrapper">
                <div className="container mb-5">
                    <h2 className="text-light h5">Здраво, Админ</h2>

                    <div className="table-container row">
                        <div className="table-container">
                            <table className="table table-light admin-table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Види Пријава</th>
                                        <th scope="col">Пријава Број</th>
                                        <th scope="col">Приоритет на пријава</th>
                                        <th scope="col">Пријава во општина</th>
                                        <th scope="col">Инспектор</th>
                                        <th scope="col">Датум</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* TODO: Map, all the reports available */}
                                    <tr>
                                        <td scope="row"><a href="/">Види пријава</a></td>
                                        <td>45</td>
                                        <td>Средно</td>
                                        <td>Карпош</td>
                                        <td>
                                            <select value="" className="custom-select">
                                                <option value="" selected disabled>Назначи Инспектор</option>
                                                <option defaultValue="inspector1" selected>Инспектор 1</option>
                                                <option defaultValue="inspector2" selected>Инспектор 2</option>
                                                <option defaultValue="inspector3" selected>Инспектор 3</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-green btn-small">Назначи</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row"><a href="/">Види пријава</a></td>
                                        <td>45</td>
                                        <td>Средно</td>
                                        <td>Карпош</td>
                                        <td>
                                            <select value="" className="custom-select">
                                                <option value="" selected disabled>Назначи Инспектор</option>
                                                <option defaultValue="inspector1" selected>Инспектор 1</option>
                                                <option defaultValue="inspector2" selected>Инспектор 2</option>
                                                <option defaultValue="inspector3" selected>Инспектор 3</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-green btn-small">Назначи</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row"><a href="/">Види пријава</a></td>
                                        <td>45</td>
                                        <td>Средно</td>
                                        <td>Карпош</td>
                                        <td>
                                            <select value="" className="custom-select">
                                                <option value="" selected disabled>Назначи Инспектор</option>
                                                <option defaultValue="inspector1" selected>Инспектор 1</option>
                                                <option defaultValue="inspector2" selected>Инспектор 2</option>
                                                <option defaultValue="inspector3" selected>Инспектор 3</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-green btn-small">Назначи</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="table-container row">
                        <div className="table-container">
                            <table className="table table-light inspector-table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Пријава Број</th>
                                        <th scope="col">Инспектор</th>
                                        <th scope="col">Статус на пријава</th>
                                        <th scope="col">Доделена на</th>
                                        <th scope="col">Завршена на</th>
                                        <th scope="col">Извештај</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* TODO: Map, all the reports available */}
                                    <tr>
                                        <td scope="row"><a href="/">40</a></td>
                                        <td>Зоран Николовски</td>
                                        <td><p className="yellow-pill">во процес</p></td>
                                        <td>19.10.2023</td>
                                        <td>
                                            /
                                        </td>
                                        <td>
                                            <button className="button-reset btn-green btn-small">Генерирај Извештај</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row"><a href="/">39</a></td>
                                        <td>Љубомир Данилов</td>
                                        <td><p className="green-pill">комплетирана</p></td>
                                        <td>10.10.2023</td>
                                        <td>
                                            22.10.2023
                                        </td>
                                        <td>
                                            <button className="button-reset btn-green btn-small">Генерирај Извештај</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row"><a href="/">38</a></td>
                                        <td>Гордана Бошева</td>
                                        <td><p className="red-pill">одбиена</p></td>
                                        <td>16.10.2023</td>
                                        <td>
                                            22.10.2023
                                        </td>
                                        <td>
                                            <button className="button-reset btn-green btn-small">Генерирај Извештај</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> : <DynamicMap />}

            {toggleAside && <AdminSideBar />}
            {toggleAsideAddUser && <AddNewInspector isOpen={toggleAsideAddUser} />}
        </>
    )
}

export default Admin;