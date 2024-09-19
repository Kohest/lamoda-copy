import { Subcategory } from "@/@types/types";
import { useSlugStore } from "@/shared/store/use-slug";
import Link from "next/link";
interface Props {
  subcategories: Subcategory[];
  type: string;
}
const HeaderModalCol: React.FC<Props> = ({ subcategories, type }) => {
  const { slug } = useSlugStore();
  return (
    <div className="w-[280px] mx-[15px] text-[12px]">
      <div className="pb-2 font-bold">{type}</div>
      <div className="flex flex-col ">
        {subcategories.map((subcategory) => (
          <Link
            href={`/${slug}/subcategories/${subcategory.id}`}
            className="pb-2"
            key={subcategory.id}
          >
            {subcategory.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderModalCol;
