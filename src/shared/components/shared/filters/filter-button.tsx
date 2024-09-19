import { cn } from "@/lib/utils";
interface Props {
  setOpenModal: (openModal: boolean) => void;
  openModal?: boolean;
  sortChanged?: boolean;
  selectedSort?: string;
}
const FilterButton: React.FC<Props> = ({
  setOpenModal,
  openModal,
  sortChanged,
  selectedSort,
}) => {
  return (
    <div
      className={cn(
        "relative h-[36px] border border-[#e5e5e5] mr-2 mb-2 rounded-[4px] cursor-pointer hover:border-black duration-200",
        openModal && "border-black"
      )}
      onClick={() => setOpenModal(!openModal)}
    >
      <div
        className={`flex py-[6px] px-3 text-[16px] items-center ${
          sortChanged && "bg-black text-white"
        }`}
      >
        <div>{selectedSort}</div>
        <div
          className={cn(
            "w-4 h-4 ml-2 bg-cover bg-no-repeat bg-[url('/icons/filter_arrow.svg')]",
            sortChanged && "bg-[url('/icons/filter_active_arrow.svg')]"
          )}
        />
      </div>
    </div>
  );
};

export default FilterButton;
