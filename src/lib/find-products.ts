import { Product } from "@/@types/types";
import { ProductSize } from "@prisma/client";

export interface GetSearchParams {
  query?: string;
  sortBy?: string;
  sizes?: string;
  priceFrom?: string;
  priceTo?: string;
  withSale?: string;
}

const DEFAULT_MIN_PRICE = 0;
const DEFAULT_MAX_PRICE = 100000;

const parsePrice = (price: string): number => {
  return parseInt(price.replace(/\s|Р/g, ""), 10);
};

export const findProducts = (products: Product[], params: GetSearchParams) => {
  const filterSizes = params.sizes?.split(",") || [];
  const minPrice = Number(params.priceFrom) || DEFAULT_MIN_PRICE;
  const maxPrice = Number(params.priceTo) || DEFAULT_MAX_PRICE;
  const withSale = params.withSale === "1";

  const filteredProducts = products.filter((product) => {
    const numericPrice = parsePrice(product.price);
    const matchesSize =
      filterSizes.length > 0
        ? product.sizes.some((size: ProductSize) =>
            filterSizes.includes(size.size)
          )
        : true;

    const matchesPrice = numericPrice >= minPrice && numericPrice <= maxPrice;

    const hasDiscount = withSale
      ? product.discount != null && product.discount !== ""
      : true;

    return matchesSize && matchesPrice && hasDiscount;
  });

  if (params.sortBy === "priceAsc") {
    filteredProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (params.sortBy === "priceDesc") {
    filteredProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  return filteredProducts;
};
