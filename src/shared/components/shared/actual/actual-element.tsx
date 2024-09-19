import Link from "next/link";
interface Props {
  link: string;
  image: string;
  title: string;
  subtitle: string;
}
const ActualElement: React.FC<Props> = ({ link, image, title, subtitle }) => {
  return (
    <div className="mr-6 last:mr-0 basis-[33%] hover:text-[#888] duration-100">
      <div className="w-full h-full relative">
        <Link href={link}>
          <div className="relative">
            <div
              className="bg-no-repeat bg-cover pb-[112.4%] mb-2"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute w-full h-full  top-0 left-0 bg-white opacity-0 hover:opacity-40 duration-200"></div>
          </div>
          <div className="text-[22px]">
            <div className="truncate">
              <span>{title}</span>
            </div>
            <div className="text-[#888] truncate">{subtitle}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ActualElement;
