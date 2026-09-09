import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Container,
  Section,
  Button,
  JsonLd,
  Tag,
} from "@/components/ui/primitives";
import { Faq, FinalCta } from "@/components/sections/home";
import { SERVICES, getService } from "@/content/services";
import { BLOG_POSTS } from "@/content/blog";
import { SITE } from "@/lib/constants";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ service: string }> };

/** Faqat ro'yxatdagi slug'lar — qolgani 404 */
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [...service.keywords],
    alternates: { canonical: `/${service.slug}` },
    openGraph: {
      type: "article",
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/${service.slug}`,
      siteName: SITE.name,
      locale: SITE.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

const fmtPrice = (n: number) => new Intl.NumberFormat("uz-UZ").format(n);

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const relatedPosts = BLOG_POSTS.filter((p) =>
    p.related.includes(service.slug)
  ).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          faqSchema(service.faq),
          breadcrumbSchema([
            { name: "Bosh sahifa", path: "/" },
            { name: service.navTitle, path: `/${service.slug}` },
          ]),
        ]}
      />

      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-[70px]">
        <div className="glow-field" aria-hidden="true" />
        <Container className="relative z-10 py-20 sm:py-28">
          <nav aria-label="Yo'nalish" className="mb-8 text-xs text-faint">
            <Link href="/" className="transition-colors hover:text-neon-300">
              Bosh sahifa
            </Link>
            <span className="mx-2">/</span>
            <span className="text-muted">{service.navTitle}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start">
            <div>
              <h1 className="display h-section neon" data-reveal>
                {service.h1}
              </h1>
              <p
                className="lede mt-7 max-w-2xl text-base sm:text-lg"
                data-reveal
                style={{ ["--reveal-delay" as string]: "90ms" }}
              >
                {service.intro}
              </p>

              <div
                className="mt-8 flex flex-wrap gap-1.5"
                data-reveal
                style={{ ["--reveal-delay" as string]: "150ms" }}
              >
                {service.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div
                className="mt-10 flex flex-col gap-4 sm:flex-row"
                data-reveal
                style={{ ["--reveal-delay" as string]: "210ms" }}
              >
                <Button href="/aloqa">Narxni hisoblash</Button>
                <Button href="/#xizmatlar" variant="ghost">
                  Boshqa xizmatlar
                </Button>
              </div>
            </div>

            {/* Narx va muddat kartasi */}
            <aside
              className="plate p-7 lg:sticky lg:top-24"
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
            >
              <p className="eyebrow">Qisqacha</p>
              <dl className="mt-6 space-y-5">
                <div className="flex items-baseline justify-between gap-4 border-b border-edge pb-5">
                  <dt className="text-sm text-muted">Narxi</dt>
                  <dd className="display text-xl text-white">
                    {`${fmtPrice(service.priceFrom)} so'mdan`}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-edge pb-5">
                  <dt className="text-sm text-muted">Muddati</dt>
                  <dd className="text-sm font-semibold text-white">
                    {service.duration}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-sm text-muted">Kafolat</dt>
                  <dd className="text-sm font-semibold text-white">
                    {SITE.stats.warranty} oy
                  </dd>
                </div>
              </dl>

              <p className="eyebrow mt-8">Natijada olasiz</p>
              {/* prose-neon o'rash div'da: uslublar `.prose-neon ul li`
                  selektori bilan yozilgan, ya'ni ul avlod bo'lishi shart */}
              <div className="prose-neon mt-4">
                <ul>
                  {service.deliverables.map((d) => (
                    <li key={d} className="text-sm">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------- Kontent */}
      <Section className="border-t border-edge !pt-16">
        <Container>
          <div className="max-w-3xl">
            {service.sections.map((sec) => (
              <div key={sec.h2} data-reveal className="prose-neon">
                <h2>{sec.h2}</h2>
                {sec.body?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {sec.list && (
                  <ul>
                    {sec.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------- Tegishli maqolalar */}
      {relatedPosts.length > 0 && (
        <Section className="border-t border-edge bg-abyss !py-16">
          <Container>
            <p className="eyebrow" data-reveal>
              Shu mavzuda
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedPosts.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="plate group p-6"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                >
                  <p className="text-[11px] uppercase tracking-[0.14em] text-neon-400">
                    {p.category}
                  </p>
                  <h3 className="mt-3 text-base font-bold leading-snug text-white transition-colors group-hover:text-neon-300">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Faq items={service.faq} title={`${service.navTitle} — savol-javob`} />

      {/* ------------------------------------------------ Boshqa xizmatlar */}
      <Section>
        <Container>
          <p className="eyebrow" data-reveal>
            Boshqa yo&apos;nalishlar
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {otherServices.map((s, i) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="plate group p-6"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <h3 className="display h-card text-white transition-colors group-hover:text-neon-300">
                  {s.navTitle}
                </h3>
                <p className="lede mt-3 text-sm">{s.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta
        title={`${service.navTitle} kerakmi?`}
        text="Vazifangizni tinglaymiz va 1 ish kuni ichida taxminiy narx hamda muddatni aytamiz. Konsultatsiya bepul."
      />
    </>
  );
}
