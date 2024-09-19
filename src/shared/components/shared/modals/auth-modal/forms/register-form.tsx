import { FormProvider, useForm } from "react-hook-form";
import { formRegisterSchema, TFormRegisterValues } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "./form-input";
import { Button } from "@/shared/components/ui/button";
import toast from "react-hot-toast";
import { registerUser } from "@/app/actions";
interface Props {
  onClose?: VoidFunction;
}
const RegisterForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.error("Регистрация успешна 📝. Подтвердите свою почту");

      onClose?.();
    } catch (error) {
      return toast.error("Неверный E-Mail или пароль");
    }
  };
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormInput name="email" label="Электронная почта" required />
        <FormInput name="fullName" label="Имя" required />
        <FormInput name="password" type="password" label="Пароль" required />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Повторите пароль"
          required
        />
        <Button
          loading={form.formState.isSubmitting}
          className="w-full mb-6 px-4 bg-black text-white h-[56px] rounded-none hover:bg-[#888] font-light"
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
