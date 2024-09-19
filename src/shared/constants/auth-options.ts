import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../prisma/prisma-client";
import { compare, hashSync } from "bcrypt";
import { AuthOptions } from "next-auth";
import MailRuProvider from "next-auth/providers/mailru";
import VkProvider from "next-auth/providers/vk";
import AppleProvider from "next-auth/providers/apple";
import { getRandomAvatar } from "@/lib/get-random-avatar";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    MailRuProvider({
      clientId: process.env.MAILRU_CLIENT_ID,
      clientSecret: process.env.MAILRU_CLIENT_SECRET,
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID || "",
      clientSecret: process.env.VK_CLIENT_SECRET || "",
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID || "",
      clientSecret: process.env.APPLE_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        const values = {
          email: credentials.email,
        };
        const findUser = await prisma.user.findFirst({
          where: values,
        });
        if (!findUser) {
          return null;
        }
        const isPasswordValid = await compare(
          credentials.password,
          findUser.password
        );
        if (!isPasswordValid) {
          return null;
        }
        if (!findUser.verified) {
          return null;
        }
        return {
          id: findUser.id,
          name: findUser.fullName,
          email: findUser.email,
          role: findUser.role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        if (account?.provider === "credentials") {
          return true;
        }
        if (!user.email) {
          return false;
        }

        const findUser = await prisma.user.findFirst({
          where: {
            OR: [
              {
                provider: account?.provider,
                providerId: account?.providerAccountId,
              },
              { email: user.email },
            ],
          },
        });

        if (findUser) {
          await prisma.user.update({
            where: {
              id: findUser.id,
            },
            data: {
              provider: account?.provider,
              providerId: account?.providerAccountId,
            },
          });
          return true;
        }
        const avatar = await getRandomAvatar(user.email);
        await prisma.user.create({
          data: {
            email: user.email,
            fullName: user.name || "User #" + user.id,
            avatar,
            password: hashSync(user.id.toString(), 10),
            verified: new Date(),
            provider: account?.provider,
            providerId: account?.providerAccountId,
          },
        });
        return true;
      } catch (error) {
        console.error("Error [SIGNIN]", error);
        return false;
      }
    },
    async jwt({ token }) {
      if (!token.email) {
        return token;
      }
      const findUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });
      if (findUser) {
        token.id = String(findUser.id);
        token.email = findUser.email;
        token.name = findUser.fullName;
        token.role = findUser.role;
        token.picture = findUser.avatar;
      }
      return token;
    },
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
