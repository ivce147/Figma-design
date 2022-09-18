import React from "react";
import "./DropDown.css"

function Dropdown({ data, handleIsOpen }) {
  return <div className="style" onClick={() => handleIsOpen(data.dropdownMenu)}>{data.name}</div>;
}
export default Dropdown;