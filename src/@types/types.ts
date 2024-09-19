import { UserRole } from "@prisma/client";

export type PageInfo = {
  id: number;
  name: string;
  slug: string;
  sliders: any;
  products: Product[];
  adBanner: TadBanner;
  promotions: any;
  relevantSection: TRelevantSection;
  advertisements: any;
  journal: any;
  categories: Categories[];
  productSliders: productSlider[];
  mainBanners: TMainBanner[];
};
export type productSlider = {
  id: number;
  title: string;
  link: string;
  pageId: number;
  items: productSliderItem[];
};
export type CartInfo = {
  id: number;
  token: number;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
  items: CartItem[];
  size: string;
};
export type CartItem = {
  id: number;
  cartId: number;
  productId: number;
  size: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  product: Product;
};
export type SessionType = {
  id: string;
  role: UserRole;
  name: string;
  image: string;
};
export interface CreateCartItemValues {
  productId: number;
  size: number;
}
export type productSliderItem = {
  id: number;
  productId: number;
  sliderId: number;
  product: Product;
};
export type FavoriteDTO = {
  id: number;
  userId: number;
  productId: number;
  product: Product;
};
export type ProfileLink = TFooterLink;
export interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  discount?: string;
  link: string;
  description?: string;
  pageId: number;
  composition?: string;
  modelSize?: string;
  modelParams?: string;
  modelHeight?: number;
  length?: number;
  sleeveLength?: number;
  season?: string;
  country?: string;
  color?: string;
  images: ProductImage[];
  sizes: ProductSize[];
  categories: Categories[];
}
export type ProductImage = {
  id: number;
  imageUrl: string;
  altText: string | null;
  productId: number;
};
export type ProductSize = {
  id: number;
  size: string;
  productId: number;
};
export type TadBanner = {
  id: number;
  imageUrl: string;
  link: string;
  pageId: number;
};
export type Categories = {
  id: number;
  name: string;
  pageId: number;
  linkUrl: string;
  imageUrl?: string;
  imageTitle: string;
  imageSubtitle: string;
  types: Type[];
};
export type Type = {
  id: number;
  name: string;
  categoryId: number;
  subcategories: Subcategory[];
};
export type Subcategory = {
  id: string;
  name: string;
  linkUrl: string;
  typeId: number;
  imageUrl: string;
};
export type SliderBody = {
  title: string;
  link: string;
  sliderItems: SliderItem[];
};
export type SliderItem = {
  id: number;
  title: string;
  subtitle: string;
  sizes?: string[];
  price: string;
  sale?: string;
  link: string;
  images: string[];
};
export type TMainBanner = {
  id: number;
  pageId: number;
  sliderElements: MainBannerSliderElement[];
  items: BannerItem[];
};
export type MainBannerSliderElement = {
  id: number;
  image: string;
  video?: string;
  title: string;
  subtitle: string;
  link: string;
  bannerId: number;
};
export type BannerItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  bannerId: number;
};
export type TJournal = {
  id: number;
  title: string;
  link: string;
  standaloneItem: StandaloneJournalItem;
  items: TJournalItem[];
};
export type StandaloneJournalItem = {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  badgeText: string;
  badgeColor: string;
};
export type TJournalItem = {
  id: number;
  title: string;
  link: string;
  image?: string;
  badgeText: string;
  badgeColor: string;
};
export type TRelevantSection = {
  id: number;
  name: string;
  pageId: string;
  sections: TRelevantSectionItems[];
};
export interface TRelevantSectionItems extends TMoreBanner {
  sectionId: number;
}
export interface TMoreBanner {
  id: number;
  title: string;
  subtitle: string;
  link: string;
  imageUrl: string;
}
export interface TAutoSwiperElement extends TMoreBanner {
  SliderLink: sliderLink[];
}
export type footerItem = {
  id: number;
  title: string;
  items: TFooterLink[];
};
export type TFooterLink = {
  id: number;
  title: string;
  link: string;
};
export type sliderLink = {
  id: number;
  url: string;
  iconUrl: string;
  sliderId: number;
};
