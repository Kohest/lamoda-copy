"use client";
import Link from "next/link";
import { Container } from "../additional/Container";
import FooterItem from "./footer-item";
import { footerItems } from "@/shared/constants/footer-content/footer";
import { footerItem } from "@/@types/types";
import FooterBottom from "./footer-bottom";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "../modals/auth-modal/forms/form-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSubscriptionSchema } from "../modals/auth-modal/forms/schemas";
import toast from "react-hot-toast";
import { Button } from "@/shared/components/ui/button";
import { subscribeUser } from "@/app/actions";
import FooterForm from "./footer-form";
const Footer: React.FC = () => {
  return (
    <footer className="pb-8 overflow-hidden text-[13px] leading-4 bg-[#1c1c1e] text-white">
      <Container>
        <div className="w-[1200px] pt-10 flex justify-between">
          <div className="w-1/2 flex flex-col justify-between">
            <div className="pb-[56px] min-h-[174px] pr-10 ">
              <div className="text-[22px]">
                <div className="py-4">Скидка 10% за подписку</div>
                <div>на новинки и акции</div>
              </div>
              <FooterForm />
            </div>
            <div className="flex">
              <img
                src="https://a.lmcdn.ru/static/24.08.12/assets/phone.D9BL4zMG.svg"
                alt="phone"
              />
              <div className="ml-6">
                <div className="w-[100px] h-[100px] mt-1 bg-[url('https://a.lmcdn.ru/static/24.08.12/assets/qr_ru.BbaN39Ll.svg')] bg-cover bg-no-repeat" />
                <div className="max-w-[175px] mt-4 text-[12px]">
                  Скидка 10% на первый заказ в приложении Lamoda
                </div>
              </div>
            </div>
          </div>
          {footerItems.map((item: footerItem) => (
            <FooterItem key={item.id} footerItem={item} />
          ))}
        </div>
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
