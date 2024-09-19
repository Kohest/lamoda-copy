import Link from "next/link";
interface Props {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}
const MainBannerItem: React.FC<Props> = ({ title, subtitle, image, link }) => {
  return (
    <div>
      <Link href={link}>
        <div className="relative mb-2">
          <img src={image} alt={title} />
          <div className="absolute bottom-0 left-0 right-0 h-full w-full duration-300 hover:bg-white/40"></div>
        </div>
        <div className="relative">
          <div>
            <span>{title}</span>
          </div>
          <div className="text-[#888]">{subtitle}</div>
        </div>
      </Link>
    </div>
  );
};

export default MainBannerItem;
