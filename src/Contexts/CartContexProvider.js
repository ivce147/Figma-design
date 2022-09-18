import React, { createContext, useReducer } from "react";
import { CART_ADD_PRODUCT,
CART_INCREMENT_PRODUCT_QUANTITY,
CART_DECREMENT_PRODUCT_QUANTITY,
FAVORITE_ADD_PRODUCT,
FAVORITE_REMOVE_PRODUCT,
}from "./constants";

const INIT_DATA = {
  basket: [],
  favorites: [],
};
console.log(INIT_DATA)

const reducer = (state,{type,payload}) => {
  // eslint-disable-next-line default-case
  switch (type){
    case CART_ADD_PRODUCT:
      console.log("add",{type,payload});
      const basket = [...state.basket];
      const foundProduct = basket.find((product)=> product.id === payload.id);
      debugger;
      if(foundProduct){
        foundProduct.quantity ++;
        return {...state, basket: [...basket] };
      }
      return {...state,basket:[...basket,{...payload,quantity: 1}]};

    case CART_INCREMENT_PRODUCT_QUANTITY: 
      const basketList = [...state.basket];
      const productToIncrement = basketList.find((product) => product.id === payload.id
      );
      if(productToIncrement){
        productToIncrement.quantity++;
        return {...state, basket:[...basketList] }
      }
      return {...state};
      case CART_DECREMENT_PRODUCT_QUANTITY:
      const newBasketList = [...state.basket];
      const productToDecrement = newBasketList.find((product) => product.id === payload.id
      );
      if(productToDecrement){
        productToDecrement.quantity--;
        return {...state, basket: [...newBasketList] };
      }
      return {...state};
      
      case FAVORITE_ADD_PRODUCT:
        console.log(FAVORITE_ADD_PRODUCT,{type,payload});
        const newFavoriteList = [...state.favorites]
        const foundFavoriteProduct = newFavoriteList.find(product => product.id === payload.id);
      if(foundFavoriteProduct){
        return state;
      }
        return {...state,favorites: [...newFavoriteList, {...payload}] };
        case FAVORITE_REMOVE_PRODUCT:
          const newfavorites = state.favorites.filter((product) => product.id !== payload.id);
          return {...state, favorites: [...newfavorites]};
      default:
      return state;
  }
};
export const CartContext = createContext(INIT_DATA);

export function CartProvider ({children}){
  const [cartData,dispatch] = useReducer(reducer,INIT_DATA);
      
  return (
    <CartContext.Provider value={{ ...cartData, dispatch}}>
      {children}
    </CartContext.Provider>
  );
}
