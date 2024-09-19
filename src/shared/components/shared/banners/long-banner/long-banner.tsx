import { TadBanner } from "@/@types/types";
import { cn } from "@/lib/cnUtil";
import Link from "next/link";

interface Props {
  adBanner: TadBanner;
  className?: string;
}
const LongBanner: React.FC<Props> = ({ adBanner, className }) => {
  return (
    <div className={cn("h-[175px]", className)}>
      <div className="relative w-full h-full">
        <Link
          href={adBanner.link}
          className="flex w-[1200px] h-[175px]
              bg-cover bg-no-repeat after:absolute after:w-full after:h-full after:bg-white after:opacity-0 hover:after:opacity-40 after:duration-300"
          style={{ backgroundImage: `url(${adBanner.imageUrl})` }}
        ></Link>
      </div>
    </div>
  );
};

export default LongBanner;
