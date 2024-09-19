import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const findOrCreateCart = async (token: string) => {
  let userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
  });
  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        token,
      },
    });
  }
  return userCart;
};
