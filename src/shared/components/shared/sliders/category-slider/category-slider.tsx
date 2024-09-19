"use client";
import { Categories } from "@/@types/types";
import CategorySliderItem from "./category-slider-item";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cnUtil";

interface Props {
  categories: Categories[];
  className?: string;
}
const CategorySlider: React.FC<Props> = ({ categories, className }) => {
  const [translate, setTranslate] = useState(0);
  const [hoverDirection, setHoverDirection] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      const direction = hoverDirection === "right" ? 1 : -1;
      const speed = 10;
      const maxTranslate = categories.length * 100;
      const interval = setInterval(() => {
        setTranslate((prev) => {
          const newTranslateX = prev + (width * direction) / (speed * 100);
          if (hoverDirection === "" || newTranslateX > maxTranslate) {
            clearInterval(interval);
          }
          return newTranslateX;
        });
      }, 100 / speed);
      return () => clearInterval(interval);
    }
  }, [hoverDirection, ref]);
  return (
    <div className={cn("relative w-[1200px]  overflow-hidden", className)}>
      <div
        className="absolute cursor-pointer h-full z-30 w-[50px] bg-gradient-to-r from-white opacity-100"
        onMouseEnter={() => setHoverDirection("left")}
        onMouseLeave={() => setHoverDirection("")}
      />
      <div
        className="absolute right-0 cursor-pointer z-30 h-full  w-[50px] bg-gradient-to-l from-white  opacity-100"
        onMouseEnter={() => setHoverDirection("right")}
        onMouseLeave={() => setHoverDirection("")}
      />

      <div
        className="relative w-full flex duration-100"
        ref={ref}
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((item) => (
          <CategorySliderItem category={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
