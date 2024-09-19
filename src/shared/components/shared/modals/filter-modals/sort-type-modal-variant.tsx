import React from "react";
import { SortTypes } from "../../filters/filter-variant/filter-sort-element";

interface Props {
  filter: string;
  handleFilterClick: (filter: SortTypes) => void;
  selectedSort: string;
}

const SortTypeModalVariant: React.FC<Props> = React.memo(
  ({ filter, handleFilterClick, selectedSort }) => (
    <div
      className="py-[6px] px-4 flex items-center cursor-pointer hover:text-[#888] duration-200"
      onClick={() => handleFilterClick(filter as SortTypes)}
    >
      <div
        className="mr-2 w-6 h-6 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/icons/${
            selectedSort === filter
              ? "filter_active_icon.svg"
              : "filter_not_active_icon.svg"
          }')`,
        }}
      />
      <span>{filter}</span>
    </div>
  )
);
SortTypeModalVariant.displayName = "SortTypeModalVariant";

export default SortTypeModalVariant;