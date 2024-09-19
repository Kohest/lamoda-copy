import { CartStateItem } from "@/lib/get-cart-details";
import { useEffect } from "react";
import { useFavoriteStore } from "../store/use-favorite";
import { Product } from "@/@types/types";

type ReturnProps = {
  loading: boolean;
  favoriteAddItem: (productId: number) => void;
  items: Product[];
  removeFavoriteItem: (productId: number) => void;
};
export const useFavorite = (): ReturnProps => {
  const favoriteState = useFavoriteStore((state) => state);
  useEffect(() => {
    favoriteState.fetchFavoriteItems();
  }, []);

  return favoriteState;
};
