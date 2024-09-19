"use client";
import { cn } from "@/lib/utils";
import { ProductImage } from "@prisma/client";
import { useState } from "react";
interface Props {
  images: ProductImage[];
  className?: string;
}
const ProductPageImages: React.FC<Props> = ({ images, className }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const displayedImages = showAllImages ? images : images.slice(0, 2);

  return (
    <div className={cn("", className)} style={{ gridArea: "gallery" }}>
      <div className="flex flex-wrap gap-6 relative">
        {displayedImages.map((image, index) => (
          <div key={index} className="w-[calc(50%-12px)]">
            <img src={image.imageUrl} alt={image.altText || ""} />
          </div>
        ))}
        {images.length > 2 && !showAllImages && (
          <button
            className="absolute bottom-2 left-[65%] bg-white rounded-3xl py-[10px] px-4"
            onClick={() => setShowAllImages(true)}
          >
            Показать еще фото
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductPageImages;
