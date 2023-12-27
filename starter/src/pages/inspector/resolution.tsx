import Header from "@/components/Header";
import { NextPage } from "next";
import { useState } from "react";

const Resolution: NextPage = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [checkboxValues, setCheckboxValues] = useState({
        foundCulprit: false,
        unknownCulprit: false,
        ticket: false,
        warning: false,
    });

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setCheckboxValues({
            ...checkboxValues,
            [name]: checked,
        });
    }

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(selectedOption);
        console.log(checkboxValues);
    }

    return (
        <>
            <Header image="../images/viber_image_2023-10-22_18-08-15-736 2.svg" leftIcon="fas fa-chevron-left" />

            <div className="container resolution-container">
                <h2 className="text-center mb-0 h5 font-weight-bold text-uppercase">Пријава бр.44</h2>

                <form action="/" className="mt-4 inspector-form text-center" onSubmit={handleSubmitForm}>
                    <h2 className="h5 font-weight-bold text-left">Состојба</h2>
                    <div className="radioButton d-flex justify-content-around">
                        <input type="radio" name="field" id="field" value="field" checked={selectedOption === "field"} onChange={handleOptionChange} />
                        <label htmlFor="field">На терен</label>
                    </div>
                    <div className="radioButton">
                        <input type="radio" name="closedCase" id="closedCase" value="closedCase" checked={selectedOption === "closedCase"} onChange={handleOptionChange} />
                        <label htmlFor="closedCase">Затворен случај</label>
                    </div>

                    <div className="reports mb-3">
                        <h2 className="h5 font-weight-bold text-left">Извештај</h2>
                        <div className="radioButton">
                            <input type="checkbox" name="foundCulprit" id="foundCulprit" onChange={handleCheckboxChange} />
                            <label htmlFor="foundCulprit">Лоциран Сторител</label>
                        </div>

                        <div className="radioButton">
                            <input type="checkbox" name="unknownCulprit" id="unknownCulprit" onChange={handleCheckboxChange} />
                            <label htmlFor="unknownCulprit">Непознат Сторител</label>
                        </div>

                        <div className="radioButton">
                            <input type="checkbox" name="ticket" id="ticket" onChange={handleCheckboxChange} />
                            <label htmlFor="ticket">Изречена е казна</label>
                        </div>

                        <div className="radioButton">
                            <input type="checkbox" name="warning" id="warning" onChange={handleCheckboxChange} />
                            <label htmlFor="warning">Издадена е опомена</label>
                        </div>
                    </div>

                    <textarea name="report" id="report" placeholder="Извештај за сработеното..." className="w-100" rows={4}></textarea>

                    <button type="submit" className="button-reset btn-green btn-medium">Потврди измена</button>
                </form>
            </div>
        </>
    )
}

export default Resolution;