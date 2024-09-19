import { cn } from "@/lib/cnUtil";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
interface Props {
  title: string;
  subtitle: string;
  image: string;
  link: Url;
  activeElement: number;
  video?: string;
}
const SliderElement: React.FC<Props> = ({
  title,
  activeElement,
  subtitle,
  image,
  video,
  link,
}) => {
  const count = (activeElement - 1) * 100;
  return (
    <Link
      href={link}
      className={cn("flex-shrink-0 w-full h-full duration-500 ease-in-out")}
      style={{ transform: `translateX(-${count}%)` }}
    >
      <div className="relative mb-2">
        {video ? (
          <video autoPlay muted loop poster={image} preload="metadata">
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img src={image} alt="image" />
        )}
        <div className="absolute bottom-0 left-0 right-0 h-full w-full duration-300 hover:bg-white/40"></div>
      </div>
      <div className="relative">
        <div>
          <span>{title}</span>
        </div>
        <div className="text-[#888]">{subtitle}</div>
      </div>
    </Link>
  );
};

export default SliderElement;
