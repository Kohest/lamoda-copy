import { z } from "zod";
export const passwordSchema = z
  .string()
  .min(6, { message: "Пароль должен содержать не менее 6 символов" });
export const formLoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Пожалуйста, проверьте, правильно ли указан адрес" }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z
        .string()
        .min(2, { message: "Пожайлуста, проверьте, правильно ли указано имя" }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });
export const formProfilePageSchema = formRegisterSchema.and(
  z.object({
    avatar: z.string().optional(),
  })
);
export const formSubscriptionSchema = z.object({
  email: z
    .string()
    .email({ message: "Пожалуйста, проверьте, правильно ли указан адрес" }),
});
export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
export type TFormProfilePageValues = z.infer<typeof formProfilePageSchema>;
