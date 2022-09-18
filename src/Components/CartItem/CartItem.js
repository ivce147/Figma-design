import React,{useContext} from "react";
import Counter from "../Counter/Counter";
import {CartContext} from "../../Contexts/CartContexProvider"
import "./CartItem.css";

function CartItem({ data }) {
  const { changeQuantity } = useContext(CartContext);
  
  return (
    <div className="cart-item">
      <div className="items">
        <button onClick={() => changeQuantity(data.id,"remove")}>X</button>
        <div className="flex photo">
          <img src={data.thumbnail} alt="thumbnail" />
        </div>
        <p>${data.price * data.quantity}</p>
        <div className="button-color">
          <Counter qty={data.quantity} id={data.id} />
        </div>
        <p>${data.price}</p>
      </div>
    </div>
  );
}

export default CartItem;
