import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";
import {
  SITE,
  SITE_URL,
  SEO_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  ORGANIZER,
} from "@/lib/seo";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_TITLE,
    template: "%s — IMPACT 2026 | inilah.com",
  },
  description: SEO_DESCRIPTION,
  applicationName: SITE.name,
  generator: "Next.js",
  keywords: SEO_KEYWORDS,
  authors: [{ name: ORGANIZER.name, url: ORGANIZER.url }],
  creator: ORGANIZER.name,
  publisher: ORGANIZER.name,
  category: "Media & Communications",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: { "id-ID": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: SITE_URL,
    locale: SITE.locale,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "IMPACT — Digital Media Forum 2026 · 17 Juni 2026, PIK2 Signature Gallery",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any", rel: "icon" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: SITE.shortName,
    statusBarStyle: "black-translucent",
  },
  other: {
    "geo.region": "ID-JK",
    "geo.placename": "Jakarta",
    "og:locality": "Jakarta",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3F4F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0C1226" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${archivo.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
