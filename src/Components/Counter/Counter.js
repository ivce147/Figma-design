import React,{useContext} from 'react'
import { CartContext } from "../../Contexts/CartContexProvider";
import "./Counter.css"

export default function Counter({qty,id}) {
    
    const { changeQuantity } = useContext(CartContext);

    
  return (
    <div className='button-border'>
        <button onClick={() => changeQuantity(id,"decrease")}>-</button>
          <span>{qty}</span>
          <button onClick={() => changeQuantity(id,"increase")}>+</button>
    </div>
  )
}
