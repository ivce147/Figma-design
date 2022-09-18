import React,{useContext} from "react";
import CartItem from "../../Components/CartItem/CartItem";
import { CartContext } from "../../Contexts/CartContexProvider";
import "./CheckoutPage.css";

function CheckoutPage() {
  const { basket } = useContext(CartContext);
  
  const renderAllBaskets = () => {
    return basket.map((basket) => {
      return <CartItem key={basket.id} data={basket}/>
    });
  };

  return (
    <div className="checkout-page">
      <div className="checkout">
        <div className="left">
          <h2>PRODUCT</h2>
        </div>
        <div className="right">
          <h2>PRICE</h2>
          <h2>QTY</h2>
          <h2>UNIT PRICE</h2>
        </div>
      </div>
      <br />
      <div className="render">
        {renderAllBaskets()}
      </div>
      <div className="total">
        <div className="total-right">
          <p>Subtotal</p>
          <p>Shipping fee</p>
          <p>Coupon</p>
          <hr className="line" />
          <div>
            <h2>TOTAL</h2>
          </div>
          <button className="btn-blue" >Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
