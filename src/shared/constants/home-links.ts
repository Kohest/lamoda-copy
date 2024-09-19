import { Categories } from "@/@types/types";
import { kidsCategories } from "./kids-home/kids-categories";
import { menCategories } from "./men-home/men-categories";
import { womenCategories } from "./women-home/women-categories";
export type homeLinksType = {
  title: string;
  link: string;
};
export const homeLinks: homeLinksType[] = [
  { title: "Женщинам", link: "/women-home" },
  { title: "Мужчинам", link: "/men-home" },
  { title: "Детям", link: "/kids-home" },
];
