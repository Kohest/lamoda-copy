"use client";
import { Categories } from "@/@types/types";
import { cn } from "@/lib/cnUtil";
import Link from "next/link";
import HeaderModal from "../modals/header-modal/header-modal";
import { useState } from "react";
import { useSlugStore } from "@/shared/store/use-slug";
interface Props {
  className?: string;
  categories: Categories[];
}
const HeaderCategoriesElements: React.FC<Props> = ({
  className,
  categories,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [categoryEl, setCategoryEl] = useState<Categories>({} as Categories);
  const { slug } = useSlugStore();
  return (
    <>
      <div className="hover:!text-[#888888] duration-100 flex">
        {categories.map((link) => (
          <Link
            onMouseOver={() => {
              setShowModal(true);
              setCategoryEl(link);
            }}
            href={`/${slug}/${link.linkUrl}`}
            key={link.name}
            className={cn(
              "text-[15px] font-[400] mr-3 last:mr-0 hover:text-black duration-300",
              link.name === "Sale%" || link.name === "Школа"
                ? "text-red-500"
                : "",
              className
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
      {showModal && categoryEl.types.length > 0 && (
        <HeaderModal
          imageTitle={categoryEl.imageTitle}
          imageSubtitle={categoryEl.imageSubtitle}
          banner={categoryEl.imageUrl}
          setShowModal={setShowModal}
          types={categoryEl.types}
        />
      )}
    </>
  );
};

export default HeaderCategoriesElements;
