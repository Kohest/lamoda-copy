"use client";
import { Product, SessionType } from "@/@types/types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { useRouter } from "next/navigation";
import ProductForm from "./product-form";
import ProductModalSlider from "./product-modal-slider";
import { useEffect } from "react";
import { Session } from "next-auth";
interface Props {
  product: Product;
  session: SessionType | null;
}
const ProductModal: React.FC<Props> = ({ product, session }) => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle />
      <DialogContent className="max-w-[754px] max-h-[660px] p-0 m-0 flex">
        <ProductModalSlider images={product.images} />
        <ProductForm product={product} session={session} />
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
