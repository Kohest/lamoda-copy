import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prisma-client";

export async function GET(
  request: Request,
  { params }: { params: { slug: string; subcategoryName: number } }
) {
  const { slug: pageSlug, subcategoryName } = params;

  if (!pageSlug || !subcategoryName) {
    return NextResponse.json(
      { message: "Page slug or subcategory is missing" },
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

    const subcategory = await prisma.subcategory.findFirst({
      where: {
        id: Number(subcategoryName),
      },
    });

    if (!subcategory) {
      return NextResponse.json(
        { message: `Subcategory not found for id: ${subcategoryName}` },
        { status: 404 }
      );
    }

    const products = await prisma.product.findMany({
      where: {
        pageId: page.id,
        subcategories: {
          some: {
            subcategoryId: subcategory.id,
          },
        },
      },
      include: {
        types: true,
        categories: true,
        subcategories: true,
        images: true,
        sizes: true,
      },
    });

    return NextResponse.json({
      subcategoryName: subcategory.name,
      products,
    });
  } catch (error) {
    console.error("Error fetching products by subcategory:", error);
    return NextResponse.json(
      { message: "Failed to fetch products", error },
      { status: 500 }
    );
  }
}
