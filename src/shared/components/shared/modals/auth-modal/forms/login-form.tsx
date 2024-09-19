import { FormProvider, useForm } from "react-hook-form";
import { formLoginSchema, TFormLoginValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "./form-input";
import { Button } from "@/shared/components/ui/button";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
interface Props {
  onClose?: VoidFunction;
}
const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (!resp?.ok) {
        throw Error();
      }
      toast.success("Вы вошли в аккаунт", {
        icon: "✅",
      });
      onClose?.();
    } catch (error) {
      console.error("ERROR LOGIN", error);
      toast.error("Не удалось войти в аккаунт", {
        icon: "❌",
      });
    }
  };
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 font-light"
      >
        <FormInput
          name="email"
          label="Электронная почта"
          required
          className=""
        />
        <FormInput
          name="password"
          type="password"
          label="Пароль"
          required
          className=""
        />
        <Button
          loading={form.formState.isSubmitting}
          className="w-full  px-4 bg-black text-white h-[56px] rounded-none hover:bg-[#888] font-light"
          type="submit"
        >
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
