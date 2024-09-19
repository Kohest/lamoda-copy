import { Subcategory } from "@/@types/types";
import { useSlugStore } from "@/shared/store/use-slug";
import Link from "next/link";
interface Props {
  subcategory: Subcategory[];
}
const CategorySliderItemElement: React.FC<Props> = ({ subcategory }) => {
  const slug = useSlugStore((state) => state.slug);
  return subcategory.map((item) => (
    <div className="mr-6 w-auto shrink-0 relative" key={item.name}>
      <Link
        href={`${slug}/subcategories/${item.id}`}
        className="block w-[80px] pt-1 hover:text-[#888] hover:scale-110 duration-300 "
      >
        <div
          style={{ backgroundImage: `url(${item.imageUrl})` }}
          className="hover:before:block before:rounded-[100%] before:w-full before:h-full  before:bg-[#fff]/40 h-20 rounded-[100%] transform duration-300 mb-2 bg-cover"
        />
        <p className="text-[12px] text-center">{item.name}</p>
      </Link>
    </div>
  ));
};

export default CategorySliderItemElement;
