import React from 'react'
import sneakers from "../../assets/Images/sneakers.png";
import "./Sneakers.css"

function Sneakers() {
  return (
    <div className="sneakers-color">
        <div className="sneakers-screen">
          <div className="sneakers-text">
            <h1>Adidas Men Running</h1>
            <h1>Sneakers</h1>
            <h3>Performance and design.Taken right to the edge</h3>
            <button className="sneakers-button">SHOP NOW</button>
          </div>
        </div>
        <div className="sneakers">
          <img src={sneakers} alt="sneakers" />
        </div>
      </div>
  )
}

export default Sneakers