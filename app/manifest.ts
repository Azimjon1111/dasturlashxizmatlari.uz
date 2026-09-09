import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dasturlash xizmatlari O'zbekistonda",
    short_name: SITE.name,
    description:
      "Web sayt, Telegram bot, CRM, ERP, mobil ilova va sun'iy intellekt yechimlari.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "uz",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
