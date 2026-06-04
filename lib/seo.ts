import { EVENT } from "@/lib/content";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://impact.inilah.com"
).replace(/\/$/, "");

export const SITE = {
  url: SITE_URL,
  name: "IMPACT — Digital Media Forum 2026",
  shortName: "IMPACT 2026",
  publisher: "inilah.com",
  locale: "id_ID",
  twitterHandle: "@inilahcom",
} as const;

export const SEO_TITLE = `${SITE.name} | ${EVENT.shortDate} · ${EVENT.venue}`;

export const SEO_DESCRIPTION =
  "IMPACT Digital Media Forum 2026 — forum terkurasi 17 Juni 2026 di PIK2 Signature Gallery. Pertemuan ±350 pemimpin media, kreator, brand, regulator, dan platform untuk membahas evolusi dari informasi menuju pengaruh: kepercayaan, kredibilitas, dan algoritme jurnalisme di era digital.";

export const SEO_KEYWORDS = [
  "IMPACT 2026",
  "Digital Media Forum 2026",
  "Digital Media Forum Indonesia",
  "forum media digital",
  "inilah.com",
  "konferensi media digital 2026",
  "jurnalisme algoritme",
  "media kreator regulator",
  "PIK2 Signature Gallery",
  "event media digital Jakarta",
  "Visionary Voices",
  "TikTok 1 miliar likes",
  "kredibilitas media",
  "ekosistem digital Indonesia",
  "Meutya Hafid Komdigi",
  "transformasi media Indonesia",
];

export const ORGANIZER = {
  name: "inilah.com",
  url: "https://www.inilah.com",
  logo: `${SITE.url}/favicon.ico`,
  email: "partnership@inilah.com",
  sameAs: [
    "https://www.inilah.com",
    "https://www.instagram.com/inilah.com",
    "https://www.tiktok.com/@inilah.com",
  ],
} as const;

export const VENUE = {
  name: EVENT.venue,
  street: "PIK 2, Pantai Indah Kapuk 2",
  city: "Jakarta Utara",
  region: "DKI Jakarta",
  postalCode: "14470",
  country: "ID",
} as const;
