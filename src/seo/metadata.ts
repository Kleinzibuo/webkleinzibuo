import type { Metadata } from "next";
import { SITE } from "./site";

type PageSEO = {
  title: string;
  description: string;
  path?: string; // e.g. "/about"
  ogImage?: string; // e.g. "/og-about.png"
};

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
}: PageSEO): Metadata {
  const url = new URL(path, SITE.url).toString();
  const image = ogImage ?? SITE.defaultOgImage;

  return {
    metadataBase: new URL(SITE.url),
    title: `${title} | ${SITE.name}`,
    description,
    alternates: { canonical: url },

    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: `${title} | ${SITE.name}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [image],
      // site: SITE.twitterHandle, // uncomment if you have it
    },
  };
}
