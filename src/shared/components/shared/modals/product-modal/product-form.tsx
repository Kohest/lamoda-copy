"use client";
import { Product, SessionType } from "@/@types/types";
import { cn } from "@/lib/utils";
import { useCountSale } from "@/shared/hooks/useCountsSale";
import Badge from "../../journal/Badge";
import { useState } from "react";
import SizesDropdown from "./sizes-dropdown";
import { Button } from "@/shared/components/ui/button";
import toast from "react-hot-toast";
import { useCartStore } from "@/shared/store/useCart";
import useAddFavorite from "@/shared/hooks/use-add-favorite";
import AuthModal from "../auth-modal/auth-modal";
import useHandleFavorite from "@/shared/hooks/use-click-favorite";

interface Props {
  product: Product;
  className?: string;
  session: SessionType | null;
}
const ProductForm: React.FC<Props> = ({ className, product, session }) => {
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);
  const [size, setSize] = useState("Выберите размер");

  const { salePercent } = useCountSale(product.price, product.discount || "");
  const onSubmit = async (productId: number, size: number) => {
    try {
      if (!size) {
        toast.error("Пожалуйста, выберите размер");
        return;
      }
      await addCartItem({ productId, size });
      toast.success("Товар добавлен");
    } catch (error) {
      toast.error("Не удалось добавить товар в корзину");
      console.error(error);
    }
  };
  const { items, onSubmitFavorite } = useAddFavorite();
  const { handleFavoriteClick, openAuthModal, setOpenAuthModal } =
    useHandleFavorite({
      productId: product.id,
      session,
      items,
      onSubmitFavorite,
    });
  return (
    <div
      className={cn(
        "flex flex-wrap justify-between relative h-[660px]",
        className
      )}
    >
      <div className="w-[320px] h-full overflow-y-auto flex-shrink-0 pt-8 pr-8  pl-2">
        <h1>
          <div
            className="text-[24px] cursor-pointer hover:text-[#888]"
            onClick={() => {
              window.location.reload();
            }}
          >
            {product.title}
          </div>
          <div className="text-[16px] text-[#888] ">{product.subtitle}</div>
        </h1>
        <div className=" mt-4 justify-between">
          <div className="flex">
            <span className={cn(product.discount && "line-through")}>
              {product.price}
            </span>
            <span className="text-[#f93c00] ml-2">{product.discount}</span>
            {salePercent && product.discount && (
              <Badge
                color="#f93c00"
                title={`-${salePercent}%`}
                className="relative text-[12px] ml-2"
              />
            )}
          </div>
          <SizesDropdown sizes={product.sizes} size={size} setSize={setSize} />
        </div>
        <div className="mt-8 flex justify-between ">
          <Button
            loading={loading}
            className="p-[12px] text-[16px] h-[48px] w-[210px]  bg-black text-white rounded-[4px]"
            onClick={() =>
              onSubmit(
                product.id,
                product.sizes.length > 1 ? Number(size) : product.sizes[0].id
              )
            }
          >
            Добавить в корзину
          </Button>
          <div className="bg-white border border-[1px] border-black  rounded-[4px] h-12 w-12 cursor-pointer">
            <div
              onClick={() => handleFavoriteClick(product.id)}
              className={cn(
                "w-[44px] h-[44px] bg-auto bg-center bg-no-repeat",
                {
                  "bg-[url('/icons/heart-full.svg')]": items.some(
                    (item) => item.id === product.id
                  ),
                  "bg-[url('/icons/heart.svg')]": !items.some(
                    (item) => item.id === product.id
                  ),
                }
              )}
            ></div>
          </div>
        </div>
        <div className="my-8  px-4">
          <div className="mb-4 text-[18px]">О товаре</div>
          <div>{product.description}</div>
        </div>
      </div>
      <AuthModal onClose={() => setOpenAuthModal(false)} open={openAuthModal} />
    </div>
  );
};

export default ProductForm;
