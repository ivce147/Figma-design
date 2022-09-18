import React, { useContext } from "react";
import { CartContext } from "../../Contexts/CartContexProvider";
import { FAVORITE_REMOVE_PRODUCT } from "../../Contexts/constants";

export const FavoritePage = () => {
  const [favorites, dispatch] = useContext(CartContext);
  return (
    <div>
      {favorites.map((product) => {
        return (
          <div>
            <div>Product : {product.title}</div>
            <button
              onClick={() => {
                dispatch({
                  type: FAVORITE_REMOVE_PRODUCT,
                  payload: { id: product.id },
                });
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
