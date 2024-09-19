import { CartInfo, CreateCartItemValues } from "@/@types/types";
import { axiosInstance } from "./instance";
import { Product } from "@prisma/client";

export const getCartInfo = async () => {
  return (await axiosInstance.get<CartInfo>("/cart")).data;
};
export const updateItemQuantity = async (itemId: number, quantity: number) => {
  return (
    await axiosInstance.patch("/cart/" + itemId, {
      quantity,
    })
  ).data;
};
export const removeCartItem = async (id: number) => {
  return (await axiosInstance.delete("/cart/" + id)).data;
};
export const addCartItem = async (values: CreateCartItemValues) => {
  return (await axiosInstance.post("/cart", values)).data;
};
