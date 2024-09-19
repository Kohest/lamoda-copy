"use client";
import { cn } from "@/lib/cnUtil";
import { useState } from "react";

interface Props {
  sliderImage: string;
  className?: string;
  index?: number;
}

const ProductCardImage: React.FC<Props> = ({
  sliderImage,
  className,
  index,
}) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={cn(
          index == 0 ? "absolute" : "hidden" && active ? "absolute" : "hidden",

          className
        )}
      >
        <img src={sliderImage} alt="image" />
      </div>
      <div
        className="flex-grow pl-1  z-30"
        onMouseOver={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <div
          className={cn(
            "relative w-full h-[3px] hidden -top-[10px] -left-[2px] bg-[#888] opacity-100",
            active && "inline-block opacity-100"
          )}
        />
      </div>
    </>
  );
};

export default ProductCardImage;
