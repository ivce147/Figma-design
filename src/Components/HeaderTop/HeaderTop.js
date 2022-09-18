import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Contexts/AppContextProvider";
import { CartContext } from "../../Contexts/CartContexProvider";
import Logo from "../../assets/Icons/search-icon.png";
import Profile from "../../assets/Icons/profile.png";
import cart from "../../assets/Icons/Cart.png";
import heart from "../../assets/Icons/heart.png";
import "./HeaderTop.css";

function HeaderTop() { 

  const { currency, updateCurrency,languages, updateLanguage } = useContext(AppContext);

  const { basket,favorites } = useContext(CartContext);

  const handleCurrencyChange = (e) => {
    updateCurrency(e.target.value);
  };
  const handleLanguage = (a) => {
    updateLanguage(a.target.value);
  };

  return (
    <div className="header-top">
      <div className="flex">
        <div>
          <select value={currency} onChange={(e) => handleCurrencyChange(e)}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
          <select
            className="space"
            value={languages}
            onChange={(a) => handleLanguage(a)}
          >
            <option value="en">EN</option>
            <option value="us">US</option>
          </select>
          <span>{languages === "en" ? "EN" : "US"}</span>
        </div>
      </div>
      <div className="flex">
        <Link to="profile" 
        className="profile">
          <img className="margin" src={Profile} alt="Profile"></img>
          <p>My Profile</p>
        </Link>
        <div className="together">
          <div className="basket">
            <Link to="/checkout">
              <img src={cart} alt="cart"></img>
              <span className="color">{basket.length}</span>
            </Link>
          </div>
          <div>
            <Link to="/favorites">
              <img src={heart} alt="cart"></img>
              <span className="color-favorite">{favorites.length}</span>
            </Link>
          </div>
          <div>
            <p>Items</p>
          </div>
        </div>
        <div className="together">
          <span>{currency === "eur" ? "€" : "$"}0.00</span>
          <img className="margin" src={Logo} alt="Logo"></img>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
