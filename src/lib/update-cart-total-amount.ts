import { useDeterminePrice } from "@/shared/hooks/use-determine-price";
import { useCountSale } from "@/shared/hooks/useCountsSale";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const updateCartTotalAmount = async (token: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      items: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  });

  if (!userCart) {
    return;
  }

  const totalAmount = userCart.items.reduce((acc, item) => {
    const price = item.product.price;
    const discount = item.product.discount || "";
    const { determinePrice } = useDeterminePrice({ price, discount });
    const itemQuantity = item.quantity;
    return acc + determinePrice * itemQuantity;
  }, 0);

  return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmount,
    },
    include: {
      items: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          product: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  });
};
