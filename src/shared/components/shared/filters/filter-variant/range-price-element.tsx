"use client";
import FilterButton from "../filter-button";
import { RangeSlider } from "@/shared/components/ui/range-slider";
import { Input } from "@/shared/components/ui/input";
import { useSearchParams } from "next/navigation";
import { ReturnFiltersProps } from "@/shared/hooks/use-filters";

interface Props {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  filters: ReturnFiltersProps;
}

export const RangePriceElement: React.FC<Props> = ({
  openModal,
  setOpenModal,
  filters,
}) => {
  const params = useSearchParams();
  const priceFrom = params.get("priceFrom");
  const priceTo = params.get("priceTo");
  const sortChanged =
    (priceFrom !== null && Number(priceFrom) !== 0) ||
    (priceTo !== null && Number(priceTo) !== 50000);

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div>
      <FilterButton
        openModal={openModal}
        setOpenModal={setOpenModal}
        sortChanged={sortChanged}
        selectedSort={"Цена"}
      />
      {openModal && (
        <div className="absolute z-20 mt-1 w-[392px] py-4 bg-white shadow-2xl">
          <div className="p-4">
            <div className="flex justify-between text-[12px] items-center">
              <div className="border-b border-black">
                <span>Мин. цена</span>
                <Input
                  className="border-none text-[16px]"
                  type="number"
                  placeholder="0"
                  min={0}
                  max={50000}
                  value={String(filters.prices.priceFrom || 0)}
                  onChange={(e) =>
                    filters.setPrices("priceFrom", Number(e.target.value))
                  }
                />
              </div>
              <span className="mx-4">—</span>
              <div className="border-b border-black">
                <span>Макс. цена</span>
                <Input
                  className="border-none text-[16px]"
                  type="number"
                  placeholder="50000"
                  min={100}
                  max={50000}
                  value={String(filters.prices.priceTo || 50000)}
                  onChange={(e) =>
                    filters.setPrices("priceTo", Number(e.target.value))
                  }
                />
              </div>
            </div>
            <RangeSlider
              className="mt-4 font-light"
              min={0}
              max={50000}
              step={10}
              value={[
                filters.prices.priceFrom || 0,
                filters.prices.priceTo || 50000,
              ]}
              onValueChange={updatePrices}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default RangePriceElement;
