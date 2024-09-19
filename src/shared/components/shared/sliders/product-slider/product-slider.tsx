"use client";
import { productSlider, SessionType } from "@/@types/types";
import ProductCard from "./product-card";
import { useEffect, useState } from "react";
import Title from "../../additional/title";
import useAddFavorite from "@/shared/hooks/use-add-favorite";
import { useSlugStore } from "@/shared/store/use-slug";

interface Props {
  sliderBody: productSlider;
  className?: string;
  slug: string;
  session: SessionType | null;
}
const ProductSlider: React.FC<Props> = ({
  sliderBody,
  className,
  slug,
  session,
}) => {
  const { setSlug } = useSlugStore();
  useEffect(() => {
    setSlug(slug);
  }, [slug, setSlug]); // Выполняется только при изменении slug
  const { items, onSubmitFavorite } = useAddFavorite();
  const [translate, setTranslate] = useState(0);
  const handleClickRight = () => {
    if (-sliderBody.items.length * 80 < translate) {
      setTranslate(translate - 204);
    }
  };

  const handleClickLeft = () => {
    if (translate < 0) {
      setTranslate(translate + 204);
    }
  };
  return (
    <section className={className}>
      <Title title={sliderBody.title} link={sliderBody.link} />
      <div className="relative">
        <div className="mt-2 w-auto  overflow-hidden">
          <div
            className="duration-300"
            style={{ transform: `translateX(${translate}px)` }}
          >
            <div className="flex">
              {sliderBody.items.map((item) => (
                <ProductCard
                  session={session}
                  items={items}
                  onSubmitFavorite={onSubmitFavorite}
                  sliderItem={item.product}
                  key={item.id}
                  slug={slug}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-[140px] w-full">
          <div
            className="arrow -left-6 -scale-x-[1] hover:shadow-xl duration-300"
            onClick={handleClickLeft}
          />
          <div
            className="arrow -right-6 hover:shadow-xl duration-300"
            onClick={handleClickRight}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
