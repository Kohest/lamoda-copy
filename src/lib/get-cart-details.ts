import { CartInfo } from "@/@types/types";

export type CartStateItem = {
  id: number;
  title: string;
  subtitle: string;
  images: string[];
  price: string;
  discount?: string;
  disabled?: boolean;
  quantity: number;
  productId: number;
  size: number;
};

interface ReturnProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartInfo): ReturnProps => {
  const items = data.items.map((item) => ({
    id: item.id,
    title: item.product.title,
    subtitle: item.product.subtitle,
    images: item.product.images.map((img) => img.imageUrl),
    price: item.product.price,
    discount: item.product.discount,
    quantity: item.quantity,
    size: item.size,
    cartId: item.cartId,
    productId: item.productId,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

  return {
    items,
    totalAmount: data.totalAmount,
  };
};
