import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

export const ProductPage = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params.id);
  }, [params]);

  return <div className="padding">This is product num {params.id}</div>;
};
