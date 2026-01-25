import type { Metadata } from "next";
import { buildMetadata } from "../metadata";

export const metadata: Metadata = buildMetadata({
  title: "Request a Demo",
  description:
    "Schedule a personalized, no-obligation demo with our team. We'll show you how KleinZibuo can solve your specific challenges and help your school thrive.",
  path: "/demo-request",
});
