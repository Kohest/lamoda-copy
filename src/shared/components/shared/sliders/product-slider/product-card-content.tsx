import { useCountSale } from "@/shared/hooks/useCountsSale";
import Badge from "../../journal/Badge";
import ProductCardImage from "./product-card-image";
import { Product, ProductImage, SessionType } from "@/@types/types";
import { cn } from "@/lib/utils";
import AuthModal from "../../modals/auth-modal/auth-modal";
import useHandleFavorite from "@/shared/hooks/use-click-favorite";

interface Props {
  sliderImages: ProductImage[];
  sale?: string;
  price: string;
  productId: number;
  items: Product[];
  session: SessionType | null;
  onSubmitFavorite: (productId: number) => void;
}

const ProductCardContent: React.FC<Props> = ({
  sliderImages,
  sale = "",
  price,
  session,
  productId,
  items,
  onSubmitFavorite,
}) => {
  const { salePercent } = useCountSale(price, sale);

  const { handleFavoriteClick, openAuthModal, setOpenAuthModal } =
    useHandleFavorite({
      productId,
      session,
      items,
      onSubmitFavorite,
    });
  return (
    <div className="min-h-[259px] relative flex flex-col">
      <div className="w-full h-full z-20 absolute flex">
        <div
          className={cn(
            "absolute top-2 w-6 h-6 bg-cover bg-no-repeat right-2 p-[10px] bg-[url('/favorite.svg')] hover:scale-[115%] duration-100 z-40",
            {
              "bg-[url('/icons/heart-full.svg')]": items.some(
                (item) => item.id === productId
              ),
              "bg-[url('/favorite.svg')] hover:bg-[url('/icons/heart-hover.svg')]":
                !items.some((item) => item.id === productId),
            }
          )}
          onClick={(event) => {
            event.preventDefault();
            handleFavoriteClick(event);
          }}
        ></div>
        {sliderImages.map((item, index) => (
          <ProductCardImage
            className="z-20"
            sliderImage={item.imageUrl}
            index={index}
            key={index}
          />
        ))}
        {salePercent && sale && (
          <Badge
            color="#f93c00"
            title={`${salePercent}%`}
            className="left-0 bottom-0 text-[10px] z-30"
          />
        )}
      </div>
      <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
    </div>
  );
};

export default ProductCardContent;
