"use client";

import HomePage from "@/components/HomePage";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  function handleNavigate(page: string) {
    if (page === "features") return router.push("/features");
    if (page === "clients") return router.push("/clients");
    if (page === "demo") return router.push("/demo-request");
    if (page === "about") return router.push("/about");
    return router.push("/");
  }

  return <HomePage onNavigate={handleNavigate} />;
}
