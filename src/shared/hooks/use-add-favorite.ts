import { useCallback } from "react";
import { useFavorite } from "./use-favorite";

const useAddFavorite = () => {
  const { items, favoriteAddItem, removeFavoriteItem, loading } = useFavorite();

  const onSubmitFavorite = useCallback(
    (productId: number) => {
      const isFavorite = items.some((item) => item.id === productId);
      if (isFavorite) {
        removeFavoriteItem(productId);
      } else {
        favoriteAddItem(productId);
      }
    },
    [items, favoriteAddItem, removeFavoriteItem, loading]
  );
  return { onSubmitFavorite, items, loading };
};

export default useAddFavorite;
