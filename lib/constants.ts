export const SITE_URL = "https://dasturlashxizmatlari.uz";

export const SITE = {
  domain: "dasturlashxizmatlari.uz",
  url: SITE_URL,
  name: "Dasturlash xizmatlari",
  legalName: "Innosoft Systems",
  brand: "Innosoft Systems",
  parentUrl: "https://innosoft-systems.uz",
  tagline: "Biznesingiz uchun zamonaviy IT yechimlar",
  founded: "2019",
  locale: "uz_UZ",
  currency: "UZS",
  priceFrom: 4_000_000,
  stats: {
    projects: 150,
    developers: 10,
    years: 7,
    warranty: 12,
  },
} as const;

/** NAP — butun sayt va schema bo'ylab bir xil bo'lishi shart */
export const CONTACT = {
  phoneDisplay: "+998 91 055 55 11",
  phoneRaw: "+998910555511",
  phoneHref: "tel:+998910555511",
  email: "info@innosoft-systems.uz",
  emailHref: "mailto:info@innosoft-systems.uz",
  telegram: "https://t.me/azimjon_bekmurodov",
  instagram: "https://instagram.com/innosoft_systems",
  linkedin: "https://linkedin.com/company/innosoft-systems",
  address: {
    street: "U-ENTER innovatsion markazi, Shahrisabz ko'chasi",
    city: "Toshkent",
    region: "Toshkent shahri",
    postal: "700093",
    country: "UZ",
    full: "U-ENTER innovatsion markazi, Shahrisabz ko'chasi, Toshkent 700093",
  },
  geo: { lat: 41.311081, lng: 69.240562 },
  hours: "Du–Ju 09:00–18:00",
} as const;

export const NAV = [
  { label: "Xizmatlar", href: "/#xizmatlar" },
  { label: "Texnologiyalar", href: "/#texnologiyalar" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Aloqa", href: "/aloqa" },
] as const;
