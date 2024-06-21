import React, { createContext, useContext, useState } from "react";
import { Product } from "./models/IProduct";

interface SharedContextType {
  cartItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: number) => void;
}

const SharedContext = createContext<SharedContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export function SharedContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <SharedContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </SharedContext.Provider>
  );
}

export const useSharedContext = () => useContext(SharedContext);
