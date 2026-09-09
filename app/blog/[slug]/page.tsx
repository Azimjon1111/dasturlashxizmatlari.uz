import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, JsonLd } from "@/components/ui/primitives";
import { FinalCta } from "@/components/sections/home";
import { BLOG_POSTS, getPost } from "@/content/blog";
import { getService } from "@/content/services";
import { SITE } from "@/lib/constants";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [...post.keywords],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      siteName: SITE.name,
      locale: SITE.locale,
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

const fmtDate = (iso: string) =>
  new Intl.DateTimeFormat("uz-UZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedServices = post.related
    .map((s) => getService(s))
    .filter((s) => s !== undefined);

  const morePosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Bosh sahifa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article>
        <section className="relative overflow-hidden pt-[70px]">
          <div className="glow-field" aria-hidden="true" />
          <Container className="relative z-10 py-16 sm:py-20">
            <nav aria-label="Yo'nalish" className="mb-8 text-xs text-faint">
              <Link href="/" className="transition-colors hover:text-neon-300">
                Bosh sahifa
              </Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="transition-colors hover:text-neon-300">
                Blog
              </Link>
            </nav>

            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-faint">
                <span className="text-neon-400">{post.category}</span>
                <time dateTime={post.date}>{fmtDate(post.date)}</time>
                <span>{post.readingMinutes} daqiqa o&apos;qish</span>
              </div>

              <h1 className="display neon mt-5 text-[clamp(2rem,1.2rem+3.4vw,3.5rem)] leading-[1.02]">
                {post.title}
              </h1>

              <p className="lede mt-6 text-base sm:text-lg">{post.intro}</p>
            </div>
          </Container>
        </section>

        <Section className="border-t border-edge !pt-14">
          <Container>
            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
              <div className="prose-neon max-w-3xl">
                {post.sections.map((sec) => (
                  <div key={sec.h2} data-reveal>
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

                {post.updated !== post.date && (
                  <p className="mt-12 border-t border-edge pt-6 text-xs text-faint">
                    Oxirgi yangilanish:{" "}
                    <time dateTime={post.updated}>{fmtDate(post.updated)}</time>
                  </p>
                )}
              </div>

              {/* Tegishli xizmatlar — ichki havolalar */}
              {relatedServices.length > 0 && (
                <aside className="lg:sticky lg:top-24" data-reveal>
                  <p className="eyebrow">Tegishli xizmatlar</p>
                  <ul className="mt-5 space-y-3">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}`}
                          className="plate group block p-5"
                        >
                          <p className="text-sm font-bold text-white transition-colors group-hover:text-neon-300">
                            {s.navTitle}
                          </p>
                          <p className="mt-1.5 text-xs text-muted">
                            {new Intl.NumberFormat("uz-UZ").format(s.priceFrom)}{" "}
                            so&apos;mdan · {s.duration}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </div>
          </Container>
        </Section>
      </article>

      <Section className="border-t border-edge bg-abyss !py-16">
        <Container>
          <p className="eyebrow" data-reveal>
            Boshqa maqolalar
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {morePosts.map((p, i) => (
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
                <h2 className="mt-3 text-base font-bold leading-snug text-white transition-colors group-hover:text-neon-300">
                  {p.title}
                </h2>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
