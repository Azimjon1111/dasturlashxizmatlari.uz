import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { SITE, SITE_URL } from "@/lib/constants";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/ui/primitives";
import { organizationSchema, webSiteSchema } from "@/lib/schema";
import "./globals.css";

// Taqdimotdagi og'ir siqilgan bosh harfli sarlavhalar — Anton eng yaqin mos keladi
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dasturlash xizmatlari O'zbekistonda — web sayt, bot, CRM, AI",
    template: "%s — Dasturlash xizmatlari",
  },
  description:
    "Dasturlash xizmatlari O'zbekistonda: web sayt yaratish, Telegram bot, CRM va ERP tizimlari, mobil ilova, sun'iy intellekt, SEO va integratsiyalar. 150+ loyiha, 12 oy kafolat.",
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.parentUrl }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE_URL,
    title: "Dasturlash xizmatlari O'zbekistonda — web sayt, bot, CRM, AI",
    description:
      "Biznesingiz uchun zamonaviy IT yechimlar: web sayt, Telegram bot, CRM, ERP, mobil ilova va sun'iy intellekt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dasturlash xizmatlari O'zbekistonda",
    description:
      "Web sayt, Telegram bot, CRM, ERP, mobil ilova va AI yechimlari. 150+ loyiha, 12 oy kafolat.",
  },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: true },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning — quyidagi skript gidratatsiyadan oldin
    // <html>'ga .js sinfini qo'shadi, bu server HTML'idan ataylab farq qiladi
    <html
      lang="uz"
      className={`${anton.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          Bo'yashdan oldin ishlaydi: .js sinfi bo'lgandagina reveal
          animatsiyasi kontentni yashiradi. JS o'chirilgan bo'lsa kontent
          shunchaki ko'rinib turadi — sakrash (flash) ham bo'lmaydi.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        <JsonLd data={[organizationSchema(), webSiteSchema()]} />
        {/* Taqdimotdagi o'ng tomondagi ingichka vertikal chiziq */}
        <div className="rail" aria-hidden="true" />
        <Header />
        <main id="asosiy">{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
