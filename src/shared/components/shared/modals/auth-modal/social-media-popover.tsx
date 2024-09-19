import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { signIn } from "next-auth/react";

export function SocialMediaPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="text-center">
          <p>
            Войти через
            <span className="hover:text-[#888] hover:border-none border-b border-black cursor-pointer ml-1">
              Соцсети
            </span>
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="shadow-2xl w-[272px]">
        <div className="flex justify-between h-full">
          <span
            className="h-12 cursor-pointer"
            onClick={() => signIn("vk", { redirect: true, callbackUrl: "/" })}
          >
            <img src="/icons/vkauth.svg" alt="vk" className="w-12 h-12" />
          </span>
          <span
            className="h-12 cursor-pointer"
            onClick={() =>
              signIn("apple", { redirect: true, callbackUrl: "/" })
            }
          >
            <img src="/icons/apple.svg" alt="apple" className="w-12 h-12" />
          </span>
          <span
            className="h-12 cursor-pointer"
            onClick={() =>
              signIn("google", { redirect: true, callbackUrl: "/" })
            }
          >
            <img src="/icons/google.svg" alt="google" className="w-12 h-12" />
          </span>
          <span
            className="h-12 cursor-pointer"
            onClick={() =>
              signIn("mailru", { redirect: true, callbackUrl: "/" })
            }
          >
            <img src="/icons/mailru.svg" alt="google" className="w-12 h-12" />
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
