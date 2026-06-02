import type { Metadata } from "next";
import { Archivo, Newsreader } from "next/font/google";
import "./globals.css";

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
  title: "IMPACT — Digital Media Forum 2026 | inilah.com",
  description:
    "IMPACT — Digital Media Forum 2026. Dari informasi menuju pengaruh. Ruang kolaborasi media, kreator, platform, regulator, dan industri membangun ekosistem digital yang lebih kredibel.",
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
