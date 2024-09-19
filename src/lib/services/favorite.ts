import { CartInfo, CreateCartItemValues } from "@/@types/types";
import { axiosInstance } from "./instance";
import { Product } from "@prisma/client";

export const getFavoriteInfo = async () => {
  return (await axiosInstance.get("/favorites")).data;
};

export const removeFavoriteItem = async (productId: number) => {
  return (await axiosInstance.delete("/favorites", { data: { productId } }))
    .data;
};
export const addFavoriteItem = async (productId: number) => {
  return (await axiosInstance.post("/favorites", { productId })).data;
};
