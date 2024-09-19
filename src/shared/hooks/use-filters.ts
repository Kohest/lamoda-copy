import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import { useEffect, useMemo, useState } from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  sortBy: string;
  sizes: string;
  ingredients: string;
  withSale: string;
}

export interface Filters {
  sizes: Set<string>;
  prices: PriceProps;
  sortType: string | undefined;
  withSale: string | undefined;
}

export interface ReturnFiltersProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setSizes: (value: string) => void;
  setSortType: (value: string) => void;
  setWithSale: (value: string | undefined) => void;
}

export const useFilters = (): ReturnFiltersProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  const [prices, setPrices] = useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    if (searchParams.has("sortBy")) {
      setSortType(searchParams.get("sortBy") || "default");
    }
  }, [searchParams]);

  const [withSale, setWithSale] = useState<string | undefined>(
    searchParams.get("withSale") || undefined
  );

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return useMemo(
    () => ({
      sizes,
      prices,
      sortType,
      withSale,
      setSortType,
      setWithSale,
      setPrices: updatePrice,
      setSizes: toggleSizes,
    }),
    [prices, sizes, sortType, withSale]
  );
};
