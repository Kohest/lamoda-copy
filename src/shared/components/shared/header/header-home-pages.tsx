"use client";
import { homeLinks } from "@/shared/constants/home-links";
import { cn } from "@/lib/cnUtil";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface Props {
  className?: string;
}
const HeaderHomePages: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();
  return (
    <>
      {homeLinks.map((link) => (
        <Link
          key={link.title}
          href={link.link}
          className={cn(
            className,
            pathname.includes(link.link)
              ? "text-black border-black border-b-2 duration-0"
              : ""
          )}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default HeaderHomePages;
