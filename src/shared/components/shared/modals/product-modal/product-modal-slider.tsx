import { ProductImage } from "@prisma/client";
import SliderDots from "./slider-dots";
import { useState } from "react";

interface Props {
  images: ProductImage[];
}
const ProductModalSlider: React.FC<Props> = ({ images }) => {
  const [translate, setTranslate] = useState(0);
  const handleClickRight = () => {
    if (-images.length * 413 < translate - 413) {
      setTranslate(translate - 413);
    }
  };
  const handleClickLeft = () => {
    if (translate < 0) {
      setTranslate(translate + 413);
    }
  };
  return (
    <div className="relative w-[417px] flex flex-col items-center overflow-hidden">
      <div className="relative">
        <div
          className="w-full h-full flex duration-300"
          style={{ transform: `translateX(${translate}px)` }}
        >
          {images.map((item) => (
            <img
              src={item.imageUrl}
              alt={item.altText || "image"}
              key={item.id}
            />
          ))}
        </div>
        <div className="absolute items-center justify-center w-full h-10 flex -bottom-[3px]">
          <div className="w-auto h-full flex items-center justify-center bg-white/20">
            <div
              className="min-w-[18px] cursor-pointer"
              onClick={handleClickLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path d="M10 2.5l-7 9 7 9M21 11.5H3" stroke="#000"></path>
              </svg>
            </div>
            {images.map((item) => (
              <SliderDots key={item.id} />
            ))}
            <div
              className="min-w-[18px] cursor-pointer"
              onClick={handleClickRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path d="M14 2.5l7 9-7 9M3 11.5h18" stroke="#000"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModalSlider;
