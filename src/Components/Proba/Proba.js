import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
import "./Proba.css";

export default function Products() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    currentPage: 0,
    total: null,
  });

  useEffect(() => {
    getProducts();
  }, [page]);

  const handlePage = (num) => {
    let copy = { ...page };
    copy.currentPage = num;
    return setPage(copy);
  };
  async function getProducts() {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=8&skip=${page.currentPage * 10}`
      );
      if (response?.data?.products.length) {
        if (!page.total) {
          let copy = { ...page };
          copy.total = response.data.total;
          setPage(copy);
        }
        setData(response.data.products);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const renderAllProducts = () => {
    return data.map((product) => {
      return <Product key={product.id} {...product} />;
    });
  };

  const handlePageNumbers = () => {
    let pages = [page.currentPage, page.currentPage + 1, page.currentPage + 2];
    if (page.currentPage === 0) {
      pages.shift();
    }
    console.log(
      page.currentPage * 10 >= page.total,
      page.currentPage,
      page.total
    );
    if (page.currentPage * 10 >= page.total - 10) {
      pages.pop();
    }
    return pages.map((item) => {
      return (
        <div
          style={item === page.currentPage + 1 ? { color: "red" } : {color:"#219ebc"}}
          onClick={() => handlePage(item - 1)}
        >
          {item}
        </div>
      );
    });
  };
  console.log(page);
  return (
    <>
      {data.length && (
        <>
          <div className="products">{renderAllProducts()}
          </div>{" "}
            <div 
              onClick={() => {
                if (page.currentPage > 0) {
                  return handlePage(0);
                }
                return null;
              }}
            >
              first page
            </div>
            <div className="page-numbers">
              {handlePageNumbers()}
            </div>
            <div
              onClick={() => {
                if (page.currentPage * 10 < page.total - 10) {
                  return handlePage(page.total / 10 - 1);
                }
                return null;
              }}
            >
              last page
            </div>
        </>
      )}
    </>
  );
}