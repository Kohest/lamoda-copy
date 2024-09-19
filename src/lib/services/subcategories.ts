import { axiosInstance } from "./instance";

export const getSubcategoriesProducts = async (
  slug: string,
  subcategory: string
) => {
  return (await axiosInstance.get(`/${slug}/subcategories/${subcategory}`))
    .data;
};
