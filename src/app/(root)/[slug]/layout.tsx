import { Categories } from "@/@types/types";
import { Api } from "@/lib/services/api-client";
import HeaderCategories from "@/shared/components/shared/header/header-categories";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Lamoda | Men Home",
};

export default async function HomeLayout({
  children,
  params: { slug },
  modal,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string };
  modal: React.ReactNode;
}>) {
  const data = await Api.page.getPageInfo(slug);
  if (!data) {
    notFound();
  }
  return (
    <div className="relative">
      <HeaderCategories categories={data.categories as Categories[]} />
      {children}
      {modal}
    </div>
  );
}
