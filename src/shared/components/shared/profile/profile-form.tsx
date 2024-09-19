"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { FormProvider, useForm } from "react-hook-form";
import {
  formProfilePageSchema,
  TFormProfilePageValues,
} from "../modals/auth-modal/forms/schemas";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";
import { FormInput } from "../modals/auth-modal/forms/form-input";
import { Button } from "@/shared/components/ui/button";
import { updateUserInfo } from "@/app/actions";
import { Input } from "@/shared/components/ui/input";

interface Props {
  data: User;
}
const ProfileForm: React.FC<Props> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formProfilePageSchema),
    defaultValues: {
      fullName: data.fullName,
      avatar: data.avatar || "",
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (data: TFormProfilePageValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        avatar: data.avatar,
        password: data.password,
      });
      toast.success("Данные обновлены", {
        icon: "✅",
      });
    } catch (error) {
      return toast.error("Ошибка при обновлении данных", {
        icon: "❌",
      });
    }
  };
  const onClickSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <div>
      <div className="text-[24px] mb-10">Мои данные</div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-[888px] flex flex-col gap-5">
            <div className="relative w-fit">
              <img
                src={data.avatar || ""}
                alt="avatar"
                className="w-[160px] h-[160px] rounded-[30%] border"
              />
              <label className="absolute w-10 h-10 -bottom-2 -right-3">
                <Input
                  type="file"
                  name="avatar"
                  className="absolute -z-10 border-none opacity-0 w-0 h-0 block"
                />
                <div className=" w-10 h-10 bg-[url('/icons/plusAvatar.svg')] after:block after:h-full after:rounded-full after:duration-200 hover:after:opacity-40 after:bg-white after:w-full after:opacity-0" />
              </label>
            </div>
            <div className="border p-2 rounded-sm w-[272px] text-center">
              Подписка на обновления: {data.subscribed ? "✅" : "❌"}
            </div>
            <FormInput
              name="fullName"
              className="w-[272px] border-b"
              label="Имя"
              required
            />
            <FormInput
              name="email"
              label="E-mail"
              required
              className="w-[272px]"
            />
            <FormInput
              name="password"
              label="Новый пароль"
              type="password"
              required
              className="w-[272px]"
            />
            <FormInput
              name="confirmPassword"
              label="Повторите пароль"
              type="password"
              required
              className="w-[272px]"
            />
          </div>

          <div className="mt-10">
            <Button
              type="submit"
              variant={"outline"}
              className="hover:bg-black hover:text-white mr-5"
              disabled={form.formState.isSubmitting}
            >
              Сохранить
            </Button>
            <Button
              onClick={onClickSignOut}
              disabled={form.formState.isSubmitting}
              type="button"
              className=" hover:bg-black hover:text-white"
            >
              Выйти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProfileForm;
