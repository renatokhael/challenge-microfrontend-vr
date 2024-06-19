import { ProductResponse } from "../models/IProduct";
export declare const productsApi: {
    getProducts(): Promise<import("axios").AxiosResponse<ProductResponse, any>>;
};
