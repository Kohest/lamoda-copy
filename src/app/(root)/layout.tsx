import Footer from "@/shared/components/shared/footer/footer";
import Header from "@/shared/components/shared/header/Header";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Lamoda | Main",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Suspense>
        <Header />
      </Suspense>
      {children}
      <Footer />
    </main>
  );
}
