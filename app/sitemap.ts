import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const SECTION_ANCHORS = [
  "shift",
  "why",
  "speakers",
  "agenda",
  "activations",
  "sponsor",
  "register",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...SECTION_ANCHORS.map((anchor) => ({
      url: `${SITE_URL}/#${anchor}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
