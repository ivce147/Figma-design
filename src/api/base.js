import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const apiGet = async (urlPath, params) => {
  return axios.get(`${BASE_URL}/${urlPath}`, params);
};

export const apiPost = async (urlPath, data) => {
  return axios.post(`${BASE_URL}/${urlPath}`, data);
};

export const apiPut = async (urlPath, body) => {
  return axios.put(`${BASE_URL}/${urlPath}`, body);
};

export const apiDelete = async (urlPath, body) => {
  return axios.delete(`${BASE_URL}/${urlPath}`, body);
};
