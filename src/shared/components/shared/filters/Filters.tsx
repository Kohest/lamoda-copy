"use client";
import { useState } from "react";
import FilterSortElement from "./filter-variant/filter-sort-element";
import RangePriceElement from "./filter-variant/range-price-element";
import WithSaleElement from "./filter-variant/with-sale-element";
import { useFilters } from "@/shared/hooks/use-filters";
import { useQueryFilters } from "@/shared/hooks/use-query-filters";
import FilterSizeElement from "../actual/filter-size-element";
import { Product } from "@/@types/types";
interface Props {
  products: Product[];
}
const Filters: React.FC<Props> = ({ products }) => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const filters = useFilters();
  useQueryFilters(filters);

  const handleOpenModal = (modalType: string) => {
    setOpenModal((prevModal) => (prevModal === modalType ? null : modalType));
  };
  return (
    <div className="pb-2 flex items-center flex-wrap font-light">
      <FilterSortElement
        filters={filters}
        openModal={openModal === "sort"}
        setOpenModal={() => handleOpenModal("sort")}
      />
      <RangePriceElement
        filters={filters}
        openModal={openModal === "price"}
        setOpenModal={() => handleOpenModal("price")}
      />
      <FilterSizeElement
        filters={filters}
        openModal={openModal === "size"}
        setOpenModal={() => handleOpenModal("size")}
        products={products}
        onClickCheckbox={filters.setSizes}
      />
      <WithSaleElement filters={filters} />
    </div>
  );
};

export default Filters;
