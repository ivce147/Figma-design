import { apiGet } from "./base";

/**
 * To query product use object { limit, skip, select }
 * example: https://dummyjson.com/products?limit=10&skip=10&select=title,price'
 * @param {*} query
 */
export const getProducts = async (query) => {
  return apiGet("products", query);
};

export const getProductById = async (id) => {
  return apiGet(`products/${id}`);
};
