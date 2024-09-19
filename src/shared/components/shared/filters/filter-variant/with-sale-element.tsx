"use client";
import { useCallback } from "react";
import FilterButton from "../filter-button";
import { useFilters } from "@/shared/hooks/use-filters";

interface Props {
  filters: ReturnType<typeof useFilters>;
}

export const WithSaleElement: React.FC<Props> = ({ filters }) => {
  const handleFilterClick = useCallback(() => {
    if (filters.withSale === "1") {
      filters.setWithSale(undefined);
    } else {
      filters.setWithSale("1");
    }
  }, [filters.withSale]);

  return (
    <button onClick={handleFilterClick}>
      <FilterButton
        sortChanged={filters.withSale === "1"}
        setOpenModal={() => {}}
        selectedSort="Товары со скидкой"
      />
    </button>
  );
};
export default WithSaleElement;
