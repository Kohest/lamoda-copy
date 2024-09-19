"use client";
import { cn } from "@/lib/utils";
import { ProductSize } from "@prisma/client";
import { useState } from "react";
interface Props {
  sizes: ProductSize[];
  size: string;
  setSize: React.Dispatch<React.SetStateAction<string>>;
}
const SizesDropdown: React.FC<Props> = ({ sizes, size, setSize }) => {
  const [modalSize, setModalSize] = useState(false);
  return (
    <div className="mt-6 w-full">
      <div className="w-full h-[50px] relative">
        <div
          className={cn(
            "absolute top-0 h-full w-full border border-[1px] border-black/50 rounded-[4px]",
            sizes.length < 2 && "pointer-events-none border-[#d3d3d3]"
          )}
          onClick={() => setModalSize(!modalSize)}
        >
          <div className="h-8 py-3 pl-4 text-[16px] flex">
            <div className="w-[87%] text-[#888]">
              {sizes.length > 1 ? size : sizes[0].size}
            </div>
            <div
              className={cn(
                "absolute right-5 w-6 h-6",
                modalSize && "rotate-180"
              )}
              style={{
                backgroundImage: `url('/icons/arrow.svg')`,
              }}
            ></div>
          </div>
          {modalSize && (
            <div className="mt-5 text-[14px] w-full bg-white shadow-xl border border-[#888/50] rounded-[4px]">
              {sizes.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-2 hover:bg-[#f3f3f3]"
                  onClick={() => setSize(item.size)}
                >
                  {item.size}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SizesDropdown;
