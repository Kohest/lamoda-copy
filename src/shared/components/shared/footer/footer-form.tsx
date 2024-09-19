import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { formSubscriptionSchema } from "../modals/auth-modal/forms/schemas";
import { subscribeUser } from "@/app/actions";
import toast from "react-hot-toast";
import { FormInput } from "../modals/auth-modal/forms/form-input";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";

const FooterForm = () => {
  const form = useForm({
    resolver: zodResolver(formSubscriptionSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (data: { email: string }) => {
    try {
      await subscribeUser({
        email: data.email,
      });
      toast.success("Письмо отправлено", {
        icon: "✅",
      });
    } catch (error) {
      return toast.error("Ошибка при отправке письма", {
        icon: "❌",
      });
    }
  };
  return (
    <FormProvider {...form}>
      <form
        className="flex items-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="w-[288px] mt-[14px] mb-6">
          <div className="flex flex-wrap h-[56px]">
            <div className="bg-[#1c1c1e] pb-[1px] flex flex-grow border-b border-b-[#888]">
              <div className="text-[16px] text-[#888] w-full">
                <FormInput
                  name="email"
                  placeholder="Email"
                  type="text"
                  className="py-4 px-2 w-full"
                />
              </div>
            </div>
            <Link href={"/"} className="text-[12px] mt-1 underline">
              Условия акции
            </Link>
          </div>
        </div>
        <div className="mt-[14px] max-w-[203px]">
          <Button
            type="submit"
            className="text-[14px] ml-4 w-[127px] p-2 min-w-[102px] border border-white rounded-[5px]"
          >
            Подписаться
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FooterForm;
