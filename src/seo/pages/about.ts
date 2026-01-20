import type { Metadata } from "next";
import { buildMetadata } from "../metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Born in Durban and built for South African preschools. Learn how Klein Zibuo helps preschools manage smarter and keep parents connected—effortlessly.",
  path: "/about",
});
