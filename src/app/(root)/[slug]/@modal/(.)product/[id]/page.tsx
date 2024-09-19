import ProductModal from "@/shared/components/shared/modals/product-modal/product-modal";
import { prisma } from "../../../../../../../prisma/prisma-client";
import { getUserSession } from "@/lib/get-user-session";
import { notFound } from "next/navigation";
import { Product } from "@/@types/types";

const ProductModalPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const session = await getUserSession();
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      images: true,
      sizes: true,
      categories: true,
    },
  });
  if (!product) {
    return notFound();
  }
  return <ProductModal product={product as Product} session={session} />;
};

export default ProductModalPage;
