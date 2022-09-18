import React from "react";
import "./FavoriteItem.css";

function FavoriteItem({ data }) {

  return (
    <div className="favorites">
      <div className="cart-favorites">
        <div className="photo-favorite">
          <img src={data.thumbnail} alt="thumbnail" />
        </div>
        <div>
          <i style={{color: "red",fontSize: "30px"}} class="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
}

export default FavoriteItem;
