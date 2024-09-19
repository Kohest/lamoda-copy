"use client";
import useAddFavorite from "@/shared/hooks/use-add-favorite";
import ProductCard from "../sliders/product-slider/product-card";
import { Product, SessionType } from "@/@types/types";

interface Props {
  products: Product[];
  slug: string;
  session: SessionType | null;
}

const CategoryProducts: React.FC<Props> = ({ products, slug, session }) => {
  const { items, onSubmitFavorite } = useAddFavorite();

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "200px 200px 200px 200px" }}
    >
      {products.map((product) => (
        <ProductCard
          session={session}
          key={product.id}
          sliderItem={product}
          items={items}
          slug={slug}
          onSubmitFavorite={onSubmitFavorite}
        />
      ))}
    </div>
  );
};

export default CategoryProducts;
