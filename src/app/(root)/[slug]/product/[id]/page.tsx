import { Product, SessionType } from "@/@types/types";
import CartDeliveryInfoBlock from "@/shared/components/shared/cart/cart-delivery-info-block";
import CartOriginalCheckModal from "@/shared/components/shared/cart/cart-original-check-modal";
import { Container } from "@/shared/components/shared/additional/Container";
import ProductForm from "@/shared/components/shared/modals/product-modal/product-form";
import ProductPageAboutElement from "@/shared/components/shared/product/product-page-about-element";
import ProductPageImages from "@/shared/components/shared/product/product-page-images";
import { getUserSession } from "@/lib/get-user-session";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface ProductDetails {
  title: string;
  text: string;
}

const ProductPage = async ({ params: { id } }: { params: { id: string } }) => {
  const session: SessionType | null = await getUserSession();
  const product = await prisma.product.findUnique({
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
  const productDetails: ProductDetails[] = [
    { title: "Состав, %", text: product.composition ?? "" },
    { title: "Размер товара на модели", text: product.modelSize ?? "" },
    { title: "Параметры модели", text: product.modelParams ?? "" },
    {
      title: "Рост модели на фото",
      text: product.modelHeight ? `${product.modelHeight} м` : "",
    },
    { title: "Длина (см)", text: product.length ? `${product.length} см` : "" },
    {
      title: "Длина рукава (см)",
      text: product.sleeveLength ? `${product.sleeveLength} см` : "",
    },
    { title: "Сезон", text: product.season ?? "" },
    { title: "Страна", text: product.country ?? "" },
    { title: "Цвет", text: product.color ?? "" },
    { title: "Айди", text: String(product.id) },
  ];
  return (
    <Container>
      <div className="product_page_grid">
        <ProductPageImages images={product.images} className="mb-12 h-fit" />
        <div style={{ gridArea: "aside" }}>
          <ProductForm
            product={product as Product}
            className="h-auto"
            session={session}
          />
          <CartDeliveryInfoBlock />
        </div>
        <div style={{ gridArea: "content" }} className="mb-4">
          <div className="mb-4">
            <span className="pb-[6px] border-b border-b-black text-[24px]">
              О товаре
            </span>
          </div>
          <div className="pt-2 flex items-start justify-between">
            <div>
              {productDetails
                .filter((detail) => detail.text)
                .map((detail) => (
                  <ProductPageAboutElement
                    key={detail.title}
                    title={detail.title}
                    text={detail.text}
                  />
                ))}
            </div>
            {product.images.length > 0 && product.images[0].imageUrl && (
              <img
                src={product.images[0].imageUrl}
                alt={product.title || "Product Image"}
                className="w-[282px] h-[400px] ml-6 shrink-0"
              />
            )}
          </div>
        </div>
        <div style={{ gridArea: "recommendations" }}>
          <CartOriginalCheckModal />
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
