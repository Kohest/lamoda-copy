"use client";
import { Button } from "@/shared/components/ui/button";
import { CartStateItem } from "@/lib/get-cart-details";
import { cn } from "@/lib/utils";
import ProductImagesScreenModal from "../product/product-images-screen-modal";
import CartProductSkeleton from "../skeletons/cart-product-skeleton";
import AuthModal from "../modals/auth-modal/auth-modal";
import useHandleFavorite from "@/shared/hooks/use-click-favorite";
import { Product, SessionType } from "@/@types/types";

interface Props {
  item: CartStateItem;
  session: SessionType | null;
  className?: string;
  favoriteLoading?: boolean;
  favoriteItems: Product[];
  onSubmitFavorite: (productId: number) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
}
const CartProductCard: React.FC<Props> = ({
  item,
  favoriteItems,
  session,
  favoriteLoading,
  onSubmitFavorite,
  className,
  updateItemQuantity,
  removeCartItem,
}) => {
  const { isFavorite, handleFavoriteClick, openAuthModal, setOpenAuthModal } =
    useHandleFavorite({
      productId: item.productId,
      session,
      items: favoriteItems,
      onSubmitFavorite,
    });

  return (
    <div key={item.id} className={className}>
      {favoriteLoading ? (
        <CartProductSkeleton />
      ) : (
        <div className="flex flex-grow gap-6">
          <div className="w-[116px] h-[168px] shrink-0 relative cursor-pointer">
            <ProductImagesScreenModal
              images={item.images}
              subtitle={item.subtitle}
            />
            <div className="absolute top-0 right-0 px-1 font-extralight bg-white/80">
              x{item.quantity}
            </div>
          </div>
          <div className="flex flex-col justify-between flex-grow text-[16px]">
            <div className="w-full flex gap-6">
              <div className="flex flex-col flex-grow flex-shrink">
                <span>
                  {item.subtitle} {item.title}
                </span>
                <span>{item.size} размер</span>
              </div>
              <div className="mb-6 flex flex-col items-end shrink-0">
                <div>
                  <span className={cn(item.discount && "line-through")}>
                    {item.price}
                  </span>
                  <span className="text-[#f93c00] ml-2">{item.discount}</span>
                </div>
                <div className="mt-6">
                  <div className="h-8 w-[104px] p-[3px] flex items-center justify-around border border-[#888]/50 rounded-[3px]">
                    <Button
                      size={"sm"}
                      variant="ghost"
                      className={cn(
                        "hover:bg-transparent",
                        item.quantity < 2 && "pointer-events-none"
                      )}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <div
                        className={cn(
                          "w-6 h-6 bg-[url('/icons/minus.svg')]",
                          item.quantity < 2 &&
                            "bg-[url('/icons/minus-disabled.svg')]"
                        )}
                      />
                    </Button>
                    <div>{item.quantity}</div>
                    <Button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      size={"sm"}
                      variant="ghost"
                      className="hover:bg-transparent"
                    >
                      <div
                        className="w-6 h-6"
                        style={{
                          backgroundImage: 'url("/icons/plus.svg")',
                        }}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-6 text-[#888] text-[13px]">
              <div
                className="flex cursor-pointer gap-2 items-center hover:text-black"
                onClick={handleFavoriteClick}
              >
                {isFavorite ? (
                  <>
                    <img
                      src="/icons/favorite-cart-icon-active.svg"
                      alt="heart"
                      className="h-6 w-6"
                    />
                    <span>В избранном</span>
                  </>
                ) : (
                  <>
                    <img
                      src="/icons/favorite-cart-icon.svg"
                      alt="heart"
                      className="h-6 w-6"
                    />
                    <span>В избранное</span>
                  </>
                )}
              </div>
              <div
                className="flex cursor-pointer gap-2 items-center hover:text-black"
                onClick={() => removeCartItem(item.id)}
              >
                <span className="w-6 h-6">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 7.5h9.5m0 0l-.5 13H6l-.5-13h-1v-3H9m9.5 3h1v-3H15m-6 0l1.5-2h3l1.5 2m-6 0h6M9 11l6 6m-6 0l6-6"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>Удалить</span>
              </div>
            </div>
          </div>
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />
        </div>
      )}
    </div>
  );
};

export default CartProductCard;
