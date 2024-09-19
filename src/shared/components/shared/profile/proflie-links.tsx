"use client";
import { ProfileLink } from "@/@types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  profileLinks: ProfileLink[];
}
const ProfileLinks: React.FC<Props> = ({ profileLinks }) => {
  const currentPathname = usePathname();
  return (
    <div>
      {profileLinks.map((item) => (
        <Link
          href={item.link}
          key={item.id}
          className={`block hover:text-[#888] duration-100 mt-2 mb-4 ${
            currentPathname === item.link ? "text-[#888]" : ""
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
export default ProfileLinks;
