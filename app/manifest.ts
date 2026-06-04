import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description:
      "Forum digital media terkurasi: 17 Juni 2026, PIK2 Signature Gallery. Dari informasi menuju pengaruh.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0C1226",
    theme_color: "#DD1B3C",
    lang: "id-ID",
    dir: "ltr",
    categories: ["news", "business", "events"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
