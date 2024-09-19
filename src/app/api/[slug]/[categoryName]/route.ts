import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(
  request: Request,
  { params }: { params: { slug: string; categoryName: string } }
) {
  const { slug: pageSlug, categoryName } = params;

  if (!pageSlug || !categoryName) {
    return NextResponse.json(
      { message: "Page slug or category is missing" },
      { status: 400 }
    );
  }

  try {
    const page = await prisma.page.findFirst({
      where: { slug: pageSlug },
    });

    if (!page) {
      return NextResponse.json(
        { message: `Page not found for slug: ${pageSlug}` },
        { status: 404 }
      );
    }

    const category = await prisma.productCategory.findFirst({
      where: { name: categoryName },
    });

    if (!category) {
      return NextResponse.json(
        { message: `Category not found for name: ${categoryName}` },
        { status: 404 }
      );
    }

    const products = await prisma.product.findMany({
      where: {
        pageId: page.id,
        categories: {
          some: {
            id: category.id,
          },
        },
      },
      include: {
        types: true,
        categories: true,
        images: true,
        sizes: true,
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products", error },
      { status: 500 }
    );
  }
}
