import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("query")?.trim() || ``;

  if (!query) {
    return NextResponse.json(
      { message: "Query parameter is missing" },
      { status: 400 }
    );
  }
  const searchTerms = query.split(" ").filter((term) => term.length > 0);
  const searchConditions = searchTerms.map((term) => ({
    OR: [
      {
        title: {
          contains: term,
          mode: "insensitive",
        },
      },
      {
        subtitle: {
          contains: term,
          mode: "insensitive",
        },
      },
    ],
  }));
  const products = await prisma.product.findMany({
    where: {
      AND: searchConditions,
    },
    include: {
      images: true,
      sizes: true,
      categories: true,
      types: true,
    },
    take: 10,
  });

  return NextResponse.json(products);
}
