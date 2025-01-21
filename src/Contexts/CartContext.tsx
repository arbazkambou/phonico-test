"use client";

import { PlanCartType } from "@/types/PlanTypes";
import { createContext, useContext, useEffect, useState } from "react";

export interface PlanCartContextType {
  cartItems: PlanCartType | null;
  addToCart: (plan: PlanCartType) => void;
  clearCart: () => void;
  handleShowCart: (value: boolean) => void;
  showCart: boolean;
  isCartLoading: boolean;
}

const PlanCartContext = createContext<PlanCartContextType>({
  cartItems: null,
  addToCart: () => {},
  clearCart: () => {},
  handleShowCart: () => {},
  showCart: false,
  isCartLoading: false,
});

export default function PlanCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<PlanCartType | null>(null);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [isCartLoading, setIsCartLoading] = useState<boolean>(true);

  function addToCart(plan: PlanCartType) {
    setCartItems(plan);
    localStorage.setItem("cartDetail", JSON.stringify(plan));
  }

  function clearCart() {
    setCartItems(null);
    localStorage.removeItem("cartDetail");
  }

  function handleShowCart(value: boolean) {
    setShowCart(value);
  }

  useEffect(() => {
    setIsCartLoading(true);
    const cartItems = JSON.parse(localStorage.getItem("cartDetail") as string);
    if (cartItems) {
      setCartItems(cartItems);
    }
    setIsCartLoading(false);
  }, []);

  return (
    <PlanCartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        handleShowCart,
        showCart,
        isCartLoading,
      }}
    >
      {children}
    </PlanCartContext.Provider>
  );
}

export function useCart() {
  return useContext(PlanCartContext);
}
