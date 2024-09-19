import React, { useCallback } from "react";
import { ReturnFiltersProps } from "@/shared/hooks/use-filters";
import SortTypeModalVariant from "./sort-type-modal-variant";
import { SortTypes } from "../../filters/filter-variant/filter-sort-element";
interface Props {
  handleFilterClick: (filterLabel: SortTypes) => void;
  selectedSort: string;
  filters: ReturnFiltersProps;
}
const SortTypeModal: React.FC<Props> = ({
  handleFilterClick,
  selectedSort,
  filters,
}) => {
  const handleSortClick = useCallback(
    (sortType: string, filterLabel: string) => {
      filters.setSortType(sortType);
      handleFilterClick(filterLabel as SortTypes);
    },
    [filters, handleFilterClick]
  );

  return (
    <div className="absolute z-20 mt-1 w-[292px] py-4 bg-white shadow-xl">
      {[
        { sortType: "default", label: "Подобрали для вас" },
        { sortType: "priceDesc", label: "Сначала дороже" },
        { sortType: "priceAsc", label: "Сначала дешевле" },
      ].map(({ sortType, label }) => (
        <div key={sortType} onClick={() => handleSortClick(sortType, label)}>
          <SortTypeModalVariant
            handleFilterClick={handleFilterClick}
            filter={label}
            selectedSort={selectedSort}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(SortTypeModal);
