"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({
  children,
}: Readonly<ClientLayoutProps>) {
  const pathname = usePathname();
  const router = useRouter();

  function handleNavigate(page: string) {
    if (page === "features") return router.push("/features");
    if (page === "clients") return router.push("/clients");
    if (page === "demo") return router.push("/demo-request");
    if (page === "about") return router.push("/about");
    if (page === "contact") return router.push("/contact")
    if (page === "find-preschool") return router.push("/find-preschool")  
    return router.push("/");
  }

  const currentPage = (() => {
    if (pathname === "/" || pathname === "") return "home";
    if (pathname.startsWith("/features")) return "features";
    if (pathname.startsWith("/clients")) return "clients";
    if (pathname.startsWith("/demo-request")) return "demo";
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/contact")) return "contact";
    if (pathname.startsWith("/find-preschool")) return "/find-preschool";
    return "";
  })();

  return (
    <>
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
