import type { Metadata } from "next";
import { buildMetadata } from "../metadata";

export const metadata: Metadata = buildMetadata({
  title: "Demo Request",
  description:
    "Powerful preschool management features designed to simplify admin and strengthen parent communication.",
  path: "/demo-request",
});
