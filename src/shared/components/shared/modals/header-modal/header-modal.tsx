import { Type } from "@/@types/types";
import { cn } from "@/lib/cnUtil";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import HeaderModalCol from "./header-modal-col";
interface Props {
  className?: string;
  banner?: string;
  imageTitle: string;
  imageSubtitle: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  types: Type[];
}
const HeaderModal: React.FC<Props> = ({
  className,
  banner,
  imageTitle,
  imageSubtitle,
  setShowModal,
  types,
}) => {
  return (
    <div
      className={cn(
        "absolute top-[50px] right-0 left-0  pl-[15px] pr-4 pt-[30px] pb-[30px] shadow-xl z-30 bg-white w-full",
        className
      )}
      onMouseLeave={() => setShowModal(false)}
    >
      <div className="m-auto max-w-[1200px] flex">
        <div className="pt-[10px] flex justify-start w-full">
          {types.map((item) => (
            <HeaderModalCol
              subcategories={item.subcategories}
              key={item.id}
              type={item.name}
            />
          ))}
          {banner && (
            <div>
              <Link href={"/"}>
                <div className="w-[284px] flex flex-col justify-center items-center">
                  <div className="relative flex items-center justify-center">
                    <img src={banner} alt="image" />
                    <div className="opacity-0 hover:opacity-100 w-full h-full absolute hover:bg-black/40 duration-300">
                      <div className="bg-white w-[150px] h-10 absolute flex text-center justify-center items-center top-[45%] left-[25%]">
                        Купить
                      </div>
                    </div>
                  </div>
                  <div className="font-bold mt-1">{imageSubtitle}</div>
                  <div className="text-[12px]">{imageTitle}</div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;
