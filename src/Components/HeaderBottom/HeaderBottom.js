import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navMenu } from "./Constants";
import Dropdown from "../DropDown/DropDown";
import Logo from "../../assets/Icons/FOOTER.png";
import "./HeaderBottom.css";

function HeaderBottom () {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleIsOpen = (data) => {
    setSelectedItem(data);
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-bottom ">
         <Link to="/home">
          <img className="e-comm" src={Logo} alt="Logo" />
          </Link>
      <div className="logo">
        <nav>
          {navMenu.map((menuItem) => {
            if (!menuItem.url) {
              return (
                <Dropdown
                data={menuItem}
                handleIsOpen={handleIsOpen}
                />
                );
              }
              return (
                <NavLink
                style={({ isActive }) => {
                  return {
                    textDecoration: "none",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                className="nav-link"
                to={menuItem.url}
                key={menuItem.value}
                >
                {menuItem.name}
              </NavLink>
            );
          })}
        </nav>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            {selectedItem.map((item) => {
              return (
                <NavLink
                  className="vertical-menu"
                  onClick={() => handleIsOpen()}
                  to={item.url}
                >
                  {item.name}
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    
  );
};

export default HeaderBottom;