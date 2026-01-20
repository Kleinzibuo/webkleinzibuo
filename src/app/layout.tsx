import "./globals.css";
import { Baloo_2 } from "next/font/google";
import type { Metadata } from "next";
import { buildMetadata } from "@/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Smarter Preschool Management & Parent Communication",
  description:
    "Klein Zibuo builds preschool websites and communication tools that help South African preschools manage smarter and keep parents connected—effortlessly.",
  path: "/",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className={baloo.variable}>
      <body className="bg-white">{children}</body>
    </html>
  );
}
