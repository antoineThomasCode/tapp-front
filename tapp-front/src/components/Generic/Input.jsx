import React from "react";

function GenericInput ({htmlFor, type, id, label, placeholder, valueInput, handleChangeFunction}) {
    return (
        <div className="input-wrapper">
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={valueInput ? (valueInput) : undefined} onChange={handleChangeFunction} />
        </div>
)
}
export default GenericInput