import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code");
    if (!code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    const verificationCode = await prisma.verificationCode.findFirst({
      where: { code },
    });

    if (!verificationCode) {
      return NextResponse.json({ error: "Code is invalid" }, { status: 400 });
    }

    await prisma.user.update({
      where: { id: verificationCode.userId },
      data: { verified: new Date() },
    });

    await prisma.verificationCode.delete({
      where: { id: verificationCode.id },
    });

    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
