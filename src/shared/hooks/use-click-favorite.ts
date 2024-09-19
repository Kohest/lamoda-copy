import { useState } from "react";
import { Product, SessionType } from "@/@types/types";

interface UseHandleFavoriteProps {
  productId: number;
  session: SessionType | null;
  items: Product[];
  onSubmitFavorite: (productId: number) => void;
}

const useHandleFavorite = ({
  productId,
  session,
  items,
  onSubmitFavorite,
}: UseHandleFavoriteProps) => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const isFavorite = items.some((item) => item.id === productId);

  const handleFavoriteClick = (
    event: React.MouseEvent<HTMLDivElement> | number
  ) => {
    if (!session) {
      setOpenAuthModal(true);
    } else {
      onSubmitFavorite(productId);
    }
  };

  return {
    isFavorite,
    handleFavoriteClick,
    openAuthModal,
    setOpenAuthModal,
  };
};

export default useHandleFavorite;
