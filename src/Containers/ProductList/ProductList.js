import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const products = [
  {
    name: "Adidas",
    id: 1,
  },
  {
    name: "Nike",
    id: 2,
  },
  {
    name: "UnderArmor",
    id: 3,
  },
  {
    name: "Rebook",
    id: 4,
  },
  {
    name: "Kappa",
    id: 5,
  },
];

export const ProductList = () => {
  return (
    <div className="product-list">
      <h1>ProductList</h1>
      <ul className="text">
        {products.map((product) => {
          return (
            <li key={product.name}>
              <Link style={{textDecoration: "none"}} to={`/product/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
