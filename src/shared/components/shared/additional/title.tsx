import { cn } from "@/lib/cnUtil";
import Link from "next/link";

interface Props {
  title: string;
  link: string;
  className?: string;
}
const Title: React.FC<Props> = ({ title, link, className }) => {
  return (
    <h3
      className={cn(
        "max-w-fit text-[22px]  hover:text-[#888] duration-300",
        className
      )}
    >
      <Link href={link} className="flex items-center gap-0">
        <span>{title}</span>
        <div className="w-6 h-6">
          <svg
            className="scale-75 origin-top-right"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.611 15.564l-10-14-1.22.872L21.079 16l-9.688 13.564 1.22.872 10-14 .312-.436-.312-.436z"
            ></path>
          </svg>
        </div>
      </Link>
    </h3>
  );
};

export default Title;
