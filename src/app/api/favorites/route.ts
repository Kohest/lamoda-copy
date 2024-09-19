import { getUserSession } from "@/lib/get-user-session";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      return NextResponse.json(
        { message: "[FAVORITES_GET] Auth Error" },
        { status: 401 }
      );
    }

    const favorites = await prisma.favorite.findMany({
      where: { userId: Number(currentUser.id) },
      include: { product: { include: { images: true, sizes: true } } },
    });

    return NextResponse.json(favorites);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "[FAVORITES] Server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      return NextResponse.json(
        { message: "[FAVORITES_POST] Auth Error" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { productId } = body;
    if (!productId || isNaN(Number(productId))) {
      return NextResponse.json(
        { message: "[FAVORITES_POST] ProductId Error" },
        { status: 400 }
      );
    }

    await prisma.favorite.create({
      data: {
        userId: Number(currentUser.id),
        productId: Number(productId),
      },
    });
    const favorites = await prisma.favorite.findMany({
      where: { userId: Number(currentUser.id) },
      include: { product: { include: { images: true, sizes: true } } },
    });
    return NextResponse.json(favorites);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "[FAVORITES] Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      return NextResponse.json(
        { message: "[FAVORITES_DELETE] Auth Error" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { productId } = body;

    if (!productId || isNaN(Number(productId))) {
      return NextResponse.json(
        { message: "[FAVORITES_DELETE] ProductId Error" },
        { status: 400 }
      );
    }

    await prisma.favorite.deleteMany({
      where: {
        userId: Number(currentUser.id),
        productId: Number(productId),
      },
    });
    const favorites = await prisma.favorite.findMany({
      where: { userId: Number(currentUser.id) },
      include: { product: { include: { images: true, sizes: true } } },
    });
    return NextResponse.json(favorites);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "[FAVORITES] Server error" },
      { status: 500 }
    );
  }
}
