import { CreateCartItemValues } from "@/@types/types";
import { CartStateItem } from "@/lib/get-cart-details";
import { useCartStore } from "../store/useCart";
import { useEffect } from "react";

type ReturnProps = {
  totalAmount: number;
  loading: boolean;
  addCartItem: (values: CreateCartItemValues) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  items: CartStateItem[];
  removeCartItem: (id: number) => void;
};
export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);
  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
