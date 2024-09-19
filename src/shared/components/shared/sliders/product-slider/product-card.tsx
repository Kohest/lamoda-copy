"use client";
import { Product, SessionType } from "@/@types/types";
import Link from "next/link";
import ProductCardContent from "./product-card-content";
import { cn } from "@/lib/cnUtil";
import { useState } from "react";
interface Props {
  sliderItem: Product;
  slug: string;
  items: Product[];
  session: SessionType | null;
  onSubmitFavorite: (productId: number) => void;
}
const ProductCard: React.FC<Props> = ({
  sliderItem,
  slug,
  items,
  session,
  onSubmitFavorite,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col z-10">
      <div className="w-[180px] mr-6 mb-10 relative">
        <Link
          href={`/${slug}/product/${sliderItem.id}?sortBy=default`}
          onClick={() => setHover(false)}
          className="z-10"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <ProductCardContent
            session={session}
            items={items}
            onSubmitFavorite={onSubmitFavorite}
            sliderImages={sliderItem.images}
            price={sliderItem.price}
            sale={sliderItem.discount}
            productId={sliderItem.id}
          />
          <div className="text-[13px] pt-[10px]">
            <div className="flex">
              <span className={cn(sliderItem.discount && "line-through")}>
                {sliderItem.price}
              </span>
              <span className="text-[#f93c00] ml-1">{sliderItem.discount}</span>
            </div>
            <div className="mt-2">
              <div>{sliderItem.title}</div>
              <div>{sliderItem.subtitle}</div>
            </div>
          </div>
          {sliderItem.sizes && (
            <div
              className={cn(
                hover
                  ? "w-full absolute -bottom-[30px] left-0 flex text-[14px] text-[#888] truncate  z-50"
                  : "hidden"
              )}
            >
              {sliderItem.sizes.map((item, index) => (
                <p className="mr-1" key={index}>
                  {item.size}
                </p>
              ))}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
