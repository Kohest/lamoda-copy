import React, { useMemo } from "react";
import FilterButton from "../filters/filter-button";
import { FilterCheckbox } from "../filters/filter-checkbox";
import { Product } from "@/@types/types";

interface Props {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  filters: any;
  products: Product[];
  onClickCheckbox: (size: string) => void;
}

const FilterSizeElement: React.FC<Props> = ({
  openModal,
  setOpenModal,
  filters,
  products,
  onClickCheckbox,
}) => {
  const sizeCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    products.forEach((product: Product) => {
      product.sizes.forEach((sizeObj) => {
        const size: string = sizeObj.size;
        if (counts[size]) {
          counts[size]++;
        } else {
          counts[size] = 1;
        }
      });
    });

    return counts;
  }, [products]);

  const uniqueSizes = useMemo(() => {
    return Object.entries(sizeCounts).map(([size, count]) => ({
      size,
      count,
    }));
  }, [sizeCounts]);

  const isAnySizeSelected = useMemo(() => {
    return uniqueSizes.some(({ size }) => filters.sizes?.has(size));
  }, [filters.sizes, uniqueSizes]);

  return (
    <div>
      <FilterButton
        sortChanged={isAnySizeSelected}
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedSort="Размер"
      />
      {openModal && (
        <div className="absolute z-20 w-[292px] h-[320px] overflow-y-auto bg-white shadow-lg p-4">
          {uniqueSizes.map(({ size, count }) => (
            <div key={size} className="flex justify-between items-center mb-4">
              <FilterCheckbox
                checked={filters.sizes?.has(size)}
                text={`${size}`}
                value={size}
                onCheckedChange={() => onClickCheckbox?.(size)}
              />
              <span className="text-[#888]">{count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSizeElement;
