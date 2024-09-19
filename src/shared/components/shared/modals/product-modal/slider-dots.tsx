"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  className?: string;
}
const SliderDots: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex items-center justify-center min-w-[18px]">
      <div
        className={cn(
          "w-1 h-1 duration-100 rounded-[50%] bg-black active:scale-125",
          className
        )}
      />
    </div>
  );
};

export default SliderDots;
