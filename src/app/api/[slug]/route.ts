import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ message: "Slug is missing" }, { status: 400 });
  }

  try {
    const page = await prisma.page.findUnique({
      where: { slug },
      include: {
        sliders: {
          orderBy: { id: "asc" },
          include: {
            SliderLink: {
              orderBy: { id: "asc" },
            },
          },
        },
        advertisements: {
          orderBy: { id: "asc" },
        },
        journal: {
          include: {
            standaloneItem: true,
            items: true,
          },
        },
        categories: {
          orderBy: { id: "asc" },
          include: {
            types: {
              orderBy: { id: "asc" },
              include: {
                subcategories: { orderBy: { id: "asc" } },
              },
            },
          },
        },
        productSliders: {
          include: {
            items: {
              include: {
                product: {
                  include: {
                    categories: true,
                    images: true,
                    sizes: true,
                    subcategories: true,
                  },
                },
              },
            },
          },
        },
        mainBanners: {
          orderBy: { id: "asc" },
          include: {
            sliderElements: { orderBy: { id: "asc" } },
            items: true,
          },
        },
        relevantSection: {
          include: {
            sections: {
              orderBy: { id: "asc" },
            },
          },
        },
        adBanner: true,
      },
    });

    if (!page) {
      return NextResponse.json({ message: "Page not found" }, { status: 404 });
    }

    return NextResponse.json(page);
  } catch (error) {
    console.error("Error fetching page data:", error);
    return NextResponse.json(
      { message: "Failed to fetch page data" },
      { status: 500 }
    );
  }
}
