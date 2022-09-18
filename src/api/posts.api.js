import { apiGet } from "./base";

/**
 * To query product use object { limit, skip, select }
 * example: https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId
 * @param {*} query
 */
export const getPosts = async (query) => {
  return apiGet("posts", query);
};
