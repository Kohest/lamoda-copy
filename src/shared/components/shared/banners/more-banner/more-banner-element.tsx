import Link from "next/link";

interface Props {
  link: string;
  image: string;
  title: string;
  subtitle: string;
}
const MoreBannerElement: React.FC<Props> = ({
  link,
  image,
  title,
  subtitle,
}) => {
  return (
    <div className="basis-[calc(25%-16px)]">
      <Link href={link} className="hover:text-[#888] duration-200">
        <div className="relative mb-2">
          <div
            className="pb-[100%] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 hover:opacity-40 duration-200" />
        </div>
        <div className="w-full">
          <div>{title}</div>
          <div className="text-[#888]">{subtitle}</div>
        </div>
      </Link>
    </div>
  );
};
export default MoreBannerElement;
