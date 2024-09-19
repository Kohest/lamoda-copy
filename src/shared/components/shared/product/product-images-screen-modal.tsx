"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

interface Props {
  images: string[];
  subtitle: string;
}

const ProductImagesScreenModal: React.FC<Props> = ({ images, subtitle }) => {
  const [zoom, setZoom] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef<HTMLImageElement[]>([]);
  useEffect(() => {
    if (imageRefs.current[activeIndex]) {
      imageRefs.current[activeIndex].scrollIntoView({ behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <img src={images[0]} alt={subtitle} />
        </DialogTrigger>
        <DialogTitle />
        <DialogContent className="w-full h-full">
          <div
            className="w-full h-full cursor-zoom-in overflow-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={subtitle}
                className={cn(
                  "block m-auto",
                  zoom && "cursor-zoom-out h-screen"
                )}
                onClick={() => setZoom(!zoom)}
                ref={(el) => {
                  if (el) {
                    imageRefs.current[index] = el;
                  }
                }}
              />
            ))}
          </div>
          <div className="absolute left-[23px] top-[23px] bottom-[23px] overflow-auto">
            {images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={subtitle}
                className={cn(
                  "h-[calc(100px/.694)] w-[100px] mb-[18px] cursor-pointer border p-1",
                  activeIndex === index ? "border-black" : "border-transparent"
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductImagesScreenModal;
