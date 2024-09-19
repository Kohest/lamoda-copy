"use client";
import { Categories } from "@/@types/types";
import HeaderCategoriesElements from "./header-categories-element";
import SearchInput from "./search-input";

interface Props {
  className?: string;
  categories: Categories[];
}
const HeaderCategories: React.FC<Props> = ({ className, categories }) => {
  return (
    <div className="flex py-2 items-center max-w-[1200px] mx-auto justify-between">
      <nav className="flex shrink-0 text-[15px] ">
        <HeaderCategoriesElements categories={categories} />
      </nav>
      <SearchInput />
    </div>
  );
};

export default HeaderCategories;
