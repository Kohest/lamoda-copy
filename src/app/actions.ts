"use server";

import { getUserSession } from "@/lib/get-user-session";
import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma/prisma-client";
import { hashSync } from "bcrypt";
import EmailVerificationCodeTemplate from "@/shared/components/shared/email-template/email-verification-code";
import { sendEmail } from "@/lib/send-email";
import { getRandomAvatar } from "@/lib/get-random-avatar";
import EmailSubscriptionTemplate from "@/shared/components/shared/email-template/email-subscription-template";
export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();
    if (!currentUser) {
      throw new Error("Пользователь не найден");
    }
    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        avatar: body.avatar,
        password: body.password
          ? hashSync(body.password as string, 10)
          : findUser?.password,
      },
    });
  } catch (error) {
    console.error("Error UPDATE_USER", error);
    throw error;
  }
}
export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    const avatar = await getRandomAvatar(body.email);
    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        avatar,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });
    if (user) {
      if (!user.verified) {
        throw new Error("Почта не подтверждена");
      }

      throw new Error("Пользователь уже существует");
    }
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });
    await sendEmail(
      createdUser.email,
      "Подтверждение регистрации",
      EmailVerificationCodeTemplate({
        code,
      })
    );
  } catch (error) {
    console.error("Error [CREATE_USER]", error);
    throw error;
  }
}
export async function subscribeUser(body: { email: string }) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    if (user) {
      await prisma.subscriptionCode.create({
        data: {
          code,
          userId: user.id,
        },
      });
      await sendEmail(
        user.email,
        "Подтверждение подписки на обновления",
        EmailSubscriptionTemplate({
          code,
        })
      );
    }
  } catch (error) {
    console.error("Error [CREATE_USER]", error);
    throw error;
  }
}
