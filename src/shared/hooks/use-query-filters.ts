import qs from "qs";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Filters } from "./use-filters";
import { useDeepCompareEffect } from "react-use";

export const useQueryFilters = (filters: Filters) => {
  const isMounted = useRef(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useDeepCompareEffect(() => {
    if (isMounted.current) {
      const existingParams = Object.fromEntries(searchParams.entries());

      const newParams: Record<string, string | number | string[]> = {
        ...existingParams,
        ...filters.prices,
        sizes: Array.from(filters.sizes),
        sortBy: filters.sortType || "default",
      };

      if (filters.withSale) {
        newParams.withSale = filters.withSale;
      } else {
        delete newParams.withSale;
      }
      const query = qs.stringify(newParams, {
        arrayFormat: "comma",
        skipNulls: true,
      });

      router.push(`?${query}`, { scroll: false });
    } else {
      isMounted.current = true;
    }
  }, [filters, searchParams, router]);
};
