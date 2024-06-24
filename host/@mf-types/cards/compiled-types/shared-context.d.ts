import React from "react";
import { Product } from "./models/IProduct";
interface SharedContextType {
    cartItems: Product[];
    addToCart: (item: Product) => void;
    removeFromCart: (id: number) => void;
}
export declare function SharedContextProvider({ children, }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare const useSharedContext: () => SharedContextType;
export {};
