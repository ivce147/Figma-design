import React, { useContext } from "react";
import FavoriteItem from "../../Components/FavoriteItem/FavoriteItem";
import { CartContext } from "../../Contexts/CartContexProvider";


function Favorites() {
  const { favorites } = useContext(CartContext);
  console.log(favorites)
  const renderAllFavorites = () => {
    return favorites.map((favorites) => {
      return <FavoriteItem key={favorites.id} data={favorites}/>
    });
  };

  return (
    <div className="checkout-page">
      <div className="checkout">
        <div className="left">
          <h2>PRODUCT</h2>
        </div>
        <div className="right">
          <h2>Favorite</h2>
        </div>
      </div>
      <br />
      <div className="render">
        {renderAllFavorites()}
      </div>
    </div>
  );
}

export default Favorites;