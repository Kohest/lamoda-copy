"use client";
import { useState, useCallback } from "react";
import FilterButton from "../filter-button";
import SortTypeModal from "../../modals/filter-modals/sort-type-modal";
import { ReturnFiltersProps } from "@/shared/hooks/use-filters";
export enum SortTypes {
  DEFAULT = "Подобрали для вас",
  PRICE_DESC = "Сначала дороже",
  PRICE_ASC = "Сначала дешевле",
}
interface Props {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  filters: ReturnFiltersProps;
}
export const FilterSortElement: React.FC<Props> = ({
  openModal,
  setOpenModal,
  filters,
}) => {
  const [sortState, setSortState] = useState({
    selectedSort: SortTypes.DEFAULT,
    sortChanged: false,
  });

  const handleFilterClick = useCallback(
    (filterLabel: SortTypes) => {
      const isDefaultSort = filterLabel === SortTypes.DEFAULT;

      setSortState({
        selectedSort: filterLabel,
        sortChanged: !isDefaultSort,
      });

      setOpenModal(false);
    },
    [setOpenModal]
  );
  return (
    <div>
      <FilterButton
        openModal={openModal}
        setOpenModal={setOpenModal}
        sortChanged={sortState.sortChanged}
        selectedSort={sortState.selectedSort}
      />
      {openModal && (
        <SortTypeModal
          filters={filters}
          selectedSort={sortState.selectedSort}
          handleFilterClick={handleFilterClick}
        />
      )}
    </div>
  );
};
export default FilterSortElement;
