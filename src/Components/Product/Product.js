import React, { useContext,useState } from "react";
import ReactStars from "react-rating-stars-component";
import { CartContext } from "../../Contexts/CartContexProvider";
import basket from "../../assets/Icons/baskets.png";
import heart from "../../assets/Icons/heart.png";
import { CART_ADD_PRODUCT, FAVORITE_ADD_PRODUCT } from "../../Contexts/constants";
import "./Product.css";

function Product({ thumbnail, brand, discountPercentage, rating, price,title,id }) {
  const [isActive, setIsActive] = useState(false);
  const {dispatch} = useContext(CartContext);
  const handleClick = () => {
    setIsActive(current => !current);
  };
  return (
    <div className="product">
      <div className="product-menu-cover">
        <div
          onClick={() => {
            dispatch({
              type: CART_ADD_PRODUCT,
              payload: {
              thumbnail,
              brand,
              discountPercentage,
              rating,
              price,
              id,
              },
            })
          }}
        >
          <img src={basket} alt="basket" />
        </div>
        <div onClick={() => {
            dispatch({
              type: FAVORITE_ADD_PRODUCT,
              payload: {
              thumbnail,
              brand,
              discountPercentage,
              rating,
              price,
              id,
              },
            })
          }}>
          <img style={{
            backgroundColor: isActive ? 'salmon' : '',
            borderRadius: isActive ? '50%' : '',
          }}
          onClick={handleClick} src={heart} alt="heart" />
        </div>
      </div>
      <div className="absolute hot">
        <h3 className="text">HOT</h3>
      </div>
      <img src={thumbnail} alt="thumbnail" />
        <h3>{title}</h3>
      <div className="flex">
        <ReactStars
          count={5}
          size={26}
          edit={true}
          value={0}
          activeColor="#FFD700"
        />
      </div>
      <div className="price">
        <h1>{price}</h1>
        <h4>{discountPercentage}</h4>
      </div>
    </div>
  );
}

export default Product;
