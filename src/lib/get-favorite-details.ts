import { FavoriteDTO, Product } from "@/@types/types";
import { ProductImage, ProductSize } from "@prisma/client";

interface ReturnProps {
  items: Product[];
}

export const getFavoriteDetails = (data: FavoriteDTO[]): ReturnProps => {
  const items = data.map((item) => ({
    id: item.product.id,
    title: item.product.title,
    subtitle: item.product.subtitle,
    images: item.product.images.map((image) => ({
      ...image,
      altText: image.altText ?? "",
    })),
    price: item.product.price,
    discount: item.product.discount ?? "",
    link: item.product.link,
    pageId: item.product.pageId,
    categories: item.product.categories,
    sizes: item.product.sizes,
  }));

  return {
    items,
  };
};
