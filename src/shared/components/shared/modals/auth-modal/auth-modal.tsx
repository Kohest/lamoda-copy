"use client";
import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { useState } from "react";
import LoginForm from "./forms/login-form";
import RegisterForm from "./forms/register-form";
import { SocialMediaPopover } from "./social-media-popover";
import { DialogTitle } from "@radix-ui/react-dialog";

interface Props {
  open: boolean;
  onClose: () => void;
}
const AuthModal: React.FC<Props> = ({ open, onClose }) => {
  const [type, setType] = useState<"login" | "register">("login");
  const switchType = () => {
    setType(type === "login" ? "register" : "login");
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[516px] max-h-full flex flex-col p-4 font-light">
        <DialogTitle />
        <div className="text-[22px] font-normal">Добро пожаловать в Lamoda</div>
        <div className="mb-4">
          {type === "login" ? (
            <div className="flex gap-1 text-[14px]">
              <span>Впервые здесь?</span>
              <button
                onClick={switchType}
                type="button"
                className="left-[150px] absolute border-b border-black/50 hover:text-[#888] duration-300"
              >
                Зарегистрироваться
              </button>
            </div>
          ) : (
            <div className="flex gap-1 text-[14px]">
              <span>Уже есть аккаунт?</span>
              <button
                onClick={switchType}
                type="button"
                className="left-[150px] absolute border-b border-black/50 hover:text-[#888] duration-300"
              >
                Войти
              </button>
            </div>
          )}
        </div>
        {type === "login" ? (
          <LoginForm onClose={onClose} />
        ) : (
          <RegisterForm onClose={onClose} />
        )}
        <SocialMediaPopover />
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
