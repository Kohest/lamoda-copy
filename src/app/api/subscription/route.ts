import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get("code");
    if (!code) {
      return NextResponse.json({ error: "Code is required" }, { status: 400 });
    }

    const subscriptionCode = await prisma.subscriptionCode.findFirst({
      where: { code },
    });

    if (!subscriptionCode) {
      return NextResponse.json({ error: "Code is invalid" }, { status: 400 });
    }

    await prisma.user.update({
      where: { id: subscriptionCode.userId },
      data: { subscribed: new Date() },
    });

    await prisma.subscriptionCode.delete({
      where: { id: subscriptionCode.id },
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
