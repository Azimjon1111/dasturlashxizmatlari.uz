import { SITE, SITE_URL, CONTACT } from "@/lib/constants";
import type { Service } from "@/content/services";
import type { BlogPost } from "@/content/blog";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    description:
      "O'zbekistonda dasturlash xizmatlari: web sayt, Telegram bot, CRM, ERP, mobil ilova, sun'iy intellekt va integratsiyalar.",
    foundingDate: SITE.founded,
    telephone: CONTACT.phoneRaw,
    email: CONTACT.email,
    priceRange: "UZS 3000000+",
    areaServed: { "@type": "Country", name: "O'zbekiston" },
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.region,
      postalCode: CONTACT.address.postal,
      addressCountry: CONTACT.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.geo.lat,
      longitude: CONTACT.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      SITE.parentUrl,
      CONTACT.telegram,
      CONTACT.instagram,
      CONTACT.linkedin,
    ],
    parentOrganization: {
      "@type": "Organization",
      name: SITE.brand,
      url: SITE.parentUrl,
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: SITE.name,
    inLanguage: "uz-UZ",
    publisher: { "@id": ORG_ID },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/${service.slug}#service`,
    name: service.h1,
    serviceType: service.navTitle,
    description: service.metaDescription,
    url: `${SITE_URL}/${service.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "O'zbekiston" },
    offers: {
      "@type": "Offer",
      price: service.priceFrom,
      priceCurrency: SITE.currency,
      url: `${SITE_URL}/${service.slug}`,
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.updated,
    inLanguage: "uz-UZ",
    keywords: post.keywords.join(", "),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
