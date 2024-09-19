"use client";
import { cn } from "@/lib/cnUtil";
import AutoSwiperElement from "./auto-swiper-element";
import { TAutoSwiperElement } from "@/@types/types";
import { useEffect, useState } from "react";
interface Props {
  className?: string;
  swiperElements: TAutoSwiperElement[];
}
const AutoSwiper: React.FC<Props> = ({ className, swiperElements }) => {
  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTranslate((prevTranslate) => {
        if (prevTranslate === 0) {
          return prevTranslate - 1200;
        } else {
          return prevTranslate + 1200;
        }
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={cn("touch-pan-y", className)}>
      <div className="overflow-hidden">
        <div
          className="flex duration-500"
          style={{ transform: `translateX(${translate}px)` }}
        >
          {swiperElements.map((item) => (
            <AutoSwiperElement
              title={item.title}
              subtitle={item.subtitle}
              image={item.imageUrl}
              link={item.link}
              sliderLinks={item.SliderLink}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoSwiper;
