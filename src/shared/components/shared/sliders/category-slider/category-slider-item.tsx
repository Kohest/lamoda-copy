import { Categories } from "@/@types/types";
import CategorySliderItemElement from "./category-slider-item-element";

interface Props {
  category: Categories;
}
const CategorySliderItem: React.FC<Props> = ({ category }) => {
  return category.types.map((item) => (
    <CategorySliderItemElement
      subcategory={item.subcategories.filter((item) => item.imageUrl)}
      key={item.name}
    />
  ));
};

export default CategorySliderItem;
