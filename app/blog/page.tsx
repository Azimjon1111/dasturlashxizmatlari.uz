import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, JsonLd } from "@/components/ui/primitives";
import { FinalCta } from "@/components/sections/home";
import { BLOG_POSTS } from "@/content/blog";
import { SITE, SITE_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog — dasturlash va biznesni avtomatlashtirish haqida",
  description:
    "Web sayt, Telegram bot, CRM, ERP, mobil ilova, sun'iy intellekt va SEO haqida amaliy maqolalar. Narxlar, muddatlar va aniq misollar.",
  keywords: [
    "dasturlash blog",
    "IT maqolalar",
    "biznesni avtomatlashtirish",
    "CRM maqola",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Blog — dasturlash va biznesni avtomatlashtirish haqida",
    description:
      "Web sayt, Telegram bot, CRM, ERP va AI haqida amaliy maqolalar — narx va muddatlar bilan.",
    url: "/blog",
    siteName: SITE.name,
    locale: SITE.locale,
  },
};

const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat("uz-UZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

export default function BlogIndexPage() {
  const [lead, ...rest] = BLOG_POSTS;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Bosh sahifa", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Blog",
            url: `${SITE_URL}/blog`,
            inLanguage: "uz-UZ",
            hasPart: BLOG_POSTS.map((p) => ({
              "@type": "Article",
              headline: p.title,
              url: `${SITE_URL}/blog/${p.slug}`,
              datePublished: p.date,
            })),
          },
        ]}
      />

      <section className="relative overflow-hidden pt-[70px]">
        <div className="glow-field" aria-hidden="true" />
        <Container className="relative z-10 py-20 sm:py-24">
          <p className="eyebrow" data-reveal>
            Blog
          </p>
          <h1 className="display h-section neon mt-4 max-w-3xl" data-reveal>
            Texnologiya haqida sotuvsiz
          </h1>
          <p className="lede mt-6 max-w-2xl text-base sm:text-lg" data-reveal>
            Nima qanday ishlaydi, qancha turadi va qachon kerak bo&apos;ladi —
            amaliy tajribadan yozilgan maqolalar.
          </p>
        </Container>
      </section>

      <Section className="!pt-8">
        <Container>
          {/* Asosiy maqola */}
          <Link
            href={`/blog/${lead.slug}`}
            className="plate group block p-8 sm:p-12"
            data-reveal
          >
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-faint">
              <span className="text-neon-400">{lead.category}</span>
              <span>{fmtDate(lead.date)}</span>
              <span>{lead.readingMinutes} daqiqa o&apos;qish</span>
            </div>
            <h2 className="display mt-5 max-w-3xl text-3xl leading-[1.02] text-white transition-colors group-hover:text-neon-300 sm:text-4xl lg:text-5xl">
              {lead.title}
            </h2>
            <p className="lede mt-5 max-w-2xl text-base">{lead.excerpt}</p>
            <span className="mt-7 inline-block text-sm font-semibold text-neon-300">
              O&apos;qish →
            </span>
          </Link>

          {/* Qolgan maqolalar */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="plate group flex flex-col p-7"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
              >
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-faint">
                  <span className="text-neon-400">{p.category}</span>
                  <span>{p.readingMinutes} daq.</span>
                </div>
                <h2 className="mt-4 flex-1 text-lg font-bold leading-snug text-white transition-colors group-hover:text-neon-300">
                  {p.title}
                </h2>
                <p className="lede mt-3 text-sm">{p.excerpt}</p>
                <time
                  dateTime={p.date}
                  className="mt-5 block border-t border-edge pt-4 text-xs text-faint"
                >
                  {fmtDate(p.date)}
                </time>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
