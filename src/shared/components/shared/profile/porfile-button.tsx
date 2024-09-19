"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
interface Props {
  className?: string;
  onClickSignIn: () => void;
}
const ProfileButton: React.FC<Props> = ({ className, onClickSignIn }) => {
  const { data: session } = useSession();
  return (
    <div className={className}>
      {!session ? (
        <button
          className="w-[88px] h-8 rounded-[4px] text-[12px] border border-black hover:text-[#888] hover:border-[#888]"
          onClick={onClickSignIn}
        >
          Войти
        </button>
      ) : (
        <Link href={"/profile"}>
          <button className="flex items-center gap-2 text-[12px] hover:bg-[url('/icons/userACtive.svg')] bg-no-repeat hover:text-[#888] duration-100">
            <img src="/icons/user.svg" alt="user icon" />
            Профиль
          </button>
        </Link>
      )}
    </div>
  );
};

export default ProfileButton;
