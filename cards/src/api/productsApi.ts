import { ProductResponse } from "../models/IProduct";
import http from "./http";

export const productsApi = {
  getProducts() {
    return http.get<ProductResponse>("/products");
  },
};
