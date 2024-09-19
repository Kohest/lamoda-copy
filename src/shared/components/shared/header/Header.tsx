"use client";
import { cn } from "@/lib/cnUtil";
import { Container } from "../additional/Container";
import Link from "next/link";
import HeaderHomePages from "./header-home-pages";
import CartButton from "../cart/cart-button";
import ProfileButton from "../profile/porfile-button";
import AuthModal from "../modals/auth-modal/auth-modal";
import { useState } from "react";
import FavoritesButton from "../favorite/favorites-button";
interface Props {
  className?: string;
}
const Header: React.FC<Props> = ({ className }) => {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);
  return (
    <header className={cn("flex flex-col", className)}>
      <div className=" bg-black text-white flex flex-col items-center h-[40px]  text-[12px] font-light -tracking-tight">
        <div className="flex justify-between w-[1200px]">
          <Link href={"/"} className="block">
            <div className="flex gap-4  items-center hover:bg-[#888888] py-[8px]  p-[18px] -ml-[14px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
              >
                <path
                  stroke="#F7F7F7"
                  d="M21 3.5l-.5-.5-17 6.5v1l8 2 2 8h1l6.5-17z"
                ></path>
              </svg>
              <span>г. Ярославль</span>
            </div>
          </Link>
          <div className="flex -mr-[15px]">
            <Link href={"/"} className="block">
              <div className="flex gap-4  items-center  px-[15px] hover:bg-[#444444] py-[8px]">
                <img
                  src="https://a.lmcdn.ru/bs2/2/06/24-px-usp-delivery.svg"
                  alt="lamodda-delivery"
                  className=" filter brightness-0 invert"
                />
                <span>Больше способов доставки</span>
              </div>
            </Link>
            <Link href={"/"} className="block">
              <div className="flex gap-4 items-center px-[15px] hover:bg-[#444444] py-[8px]">
                <img
                  src="https://a.lmcdn.ru/bs2/2/15/any-pay-m.svg"
                  alt="lamoda-pay"
                  className=" filter brightness-0 invert"
                />
                <span>Платите когда хотите </span>
              </div>
            </Link>
            <Link href={"/"} className="block">
              <div className="flex gap-4 items-center px-[15px] hover:bg-[#444444] py-[8px]">
                <img
                  src="https://a.lmcdn.ru/bs2/5/67/lamoda-sport-m.svg"
                  className=" filter brightness-0 invert"
                />
                <span>Магазины Lamoda Sport</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Container className="flex justify-between items-center w-full ">
        <div className="w-full flex justify-between  min-h-[90px]  m-auto p-5 relative">
          <div className="absolute left-0 top-9">
            <nav className="flex gap-5 text-[#888] text-[15px]">
              <HeaderHomePages className="hover:text-black duration-300 font-light" />
            </nav>
          </div>
          <Link
            href={"/"}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-8 min-w-[160px]"
          >
            <img src="/logo.svg" alt="Logo" />
          </Link>
          <div className="flex items-center absolute right-0 top-[34px] gap-6">
            <AuthModal
              open={openAuthModal}
              onClose={() => setOpenAuthModal(false)}
            />
            <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />
            <FavoritesButton />
            <CartButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
