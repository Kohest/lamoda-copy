import { axiosInstance } from "./instance";
import { PageInfo } from "@/@types/types";

export const getPageInfo = async (slug: string) => {
  return (await axiosInstance.get<PageInfo>("/" + slug)).data;
};
export const getPageProducts = async (slug: string, categoryName: string) => {
  return (await axiosInstance.get(`/${slug}/${categoryName}`)).data;
};
