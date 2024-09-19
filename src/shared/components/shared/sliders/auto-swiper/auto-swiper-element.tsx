import { sliderLink } from "@/@types/types";
import Link from "next/link";

interface Props {
  link: string;
  image: string;
  title: string;
  subtitle: string;
  sliderLinks: sliderLink[];
}
const AutoSwiperElement: React.FC<Props> = ({
  link,
  image,
  title,
  sliderLinks,
  subtitle,
}) => {
  return (
    <div className="!w-full flex-shrink-0 h-full bg-[#f5f5f5] hover:text-[#888] duration-300">
      <div className="flex max-w-full">
        <Link
          href={link}
          className="w-auto relative grow h-[320px] after:absolute after:top-0 after:left-0 after:block after:w-full after:h-full after:opacity-0 after:bg-white hover:after:opacity-40 after:duration-300"
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center object-top"
          />
        </Link>
        <div className="pt-6 pr-6 pl-6 w-auto basis-[246px] h-[320px] text-[22px]">
          <div>{title}</div>
          <div className="mb-[10px] text-[#888]">
            {subtitle ? (
              <span>{subtitle}</span>
            ) : (
              sliderLinks.map((item) => (
                <Link
                  href={item.url}
                  key={item.id}
                  className="block w-[124px] h-10 bg-contain mt-2 bg-no-repeat"
                  style={{
                    backgroundImage: `url(${item.iconUrl})`,
                    backgroundPosition: "50% 50%",
                  }}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSwiperElement;
