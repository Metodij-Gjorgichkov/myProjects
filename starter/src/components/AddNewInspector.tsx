import { useState } from "react";

interface AddNewInspectorProps {
    isOpen: boolean;
}

interface InputValuesTypes {
    nameLastname: string;
    position: string;
    email: string;
    password: string;
    confirmPass: string;
    phoneNum: string;
}

const AddNewInspector: React.FC<AddNewInspectorProps> = ({ isOpen }) => {
    const [inputValue, setInputValue] = useState<InputValuesTypes>({
        nameLastname: "",
        position: "Инспектор",
        email: "",
        password: "",
        confirmPass: "",
        phoneNum: "",
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        })
    };

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // console.log(inputValue);
        setInputValue({
            nameLastname: "",
            position: "Инспектор",
            email: "",
            password: "",
            confirmPass: "",
            phoneNum: "",
        })
    }

    return (
        <>
            <aside className={`newUserSidebar ${isOpen ? 'open' : ''}`}>
                <h2>Додај нов корисник</h2>
                <form action="/" onSubmit={handleSubmitForm} className="addNewUser">
                    <label htmlFor="nameLastname">Име и Презиме</label>
                    <input name="nameLastname" id="nameLastname" type="text" className="form-control" onChange={handleOnChange} value={inputValue.nameLastname} />

                    <label htmlFor="position">Позиција</label>
                    <input name="position" disabled id="position" type="text" className="form-control" onChange={handleOnChange} value={inputValue.position} />

                    <label htmlFor="email">Е-пошта</label>
                    <input name="email" id="email" type="text" className="form-control" onChange={handleOnChange} value={inputValue.email} />

                    <label htmlFor="password">Лозинка</label>
                    <input name="password" id="password" type="password" className="form-control" onChange={handleOnChange} value={inputValue.password} />

                    <label htmlFor="confirmPass">Потврди лозинка</label>
                    <input name="confirmPass" id="confirmPass" type="password" className="form-control" onChange={handleOnChange} value={inputValue.confirmPass} />

                    <label htmlFor="phoneNum">Телефон</label>
                    <input name="phoneNum" id="phoneNum" type="phoneNum" className="form-control" onChange={handleOnChange} value={inputValue.phoneNum} />

                    <button type="submit" className="button-reset btn-green btn-medium">+Додај Корисник</button>
                </form>
            </aside>
        </>
    )
}

export default AddNewInspector;