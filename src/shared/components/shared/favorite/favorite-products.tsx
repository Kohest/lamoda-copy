"use client";
import ProductCard from "../sliders/product-slider/product-card";
import useAddFavorite from "@/shared/hooks/use-add-favorite";
import { useSlugStore } from "@/shared/store/use-slug";
import Link from "next/link";
import { SessionType } from "@/@types/types";
interface Props {
  session: SessionType;
}
const FavoriteProducts: React.FC<Props> = ({ session }) => {
  const { items, onSubmitFavorite } = useAddFavorite();
  const { slug } = useSlugStore();
  return (
    <div>
      <div className="text-[20px] mr-4 mb-6 font-light"> Избранное</div>
      <div
        className="grid"
        style={{ gridTemplateColumns: "200px 200px 200px 200px" }}
      >
        {items.map((item) => (
          <ProductCard
            session={session}
            slug={slug}
            sliderItem={item}
            key={item.id}
            items={items}
            onSubmitFavorite={onSubmitFavorite}
          />
        ))}
      </div>
      {items.length < 1 && (
        <div className="flex justify-center items-center mt-10">
          <div className="w-[240px] h-[240px] bg-[url('/favorite-empty.svg')]" />
          <div className="w-[410px]">
            <div className="text-[20px] mb-2">В избранном нет товаров</div>
            <div className="mb-6 text-[14px]">
              Для выбора вещей перейдите в каталог
            </div>
            <Link
              href={`/${slug}/clothes`}
              className="block px-4 text-[16px] h-8 bg-black text-white w-fit py-1 rounded-sm"
            >
              Перейти в каталог
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoriteProducts;
