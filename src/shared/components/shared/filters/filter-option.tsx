const FilterOption = ({}) => {
  return (
    <div className="relative h-[36px] border border-[#e5e5e5] mr-2 mb-2 rounded-[4px] cursor-pointer">
      <div className="flex py-[6px] px-3 text-[16px] items-center">
        <div>Подобрали для вас</div>
        <div
          className="w-4 h-4 ml-2 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/icons/filter_arrow.svg')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FilterOption;
