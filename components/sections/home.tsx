import Link from "next/link";
import {
  Container,
  Section,
  SectionHeading,
  Button,
  Tag,
} from "@/components/ui/primitives";
import { SERVICES } from "@/content/services";
import { BLOG_POSTS } from "@/content/blog";
import { TECH_STACK, STATS, PROCESS, WHY_US, HOME_FAQ } from "@/content/landing";
import { CONTACT } from "@/lib/constants";

const fmtPrice = (n: number) => new Intl.NumberFormat("uz-UZ").format(n);

/* ------------------------------------------------------------- Xizmatlar */

export function ServicesGrid() {
  return (
    <Section id="xizmatlar" glow>
      <Container>
        <SectionHeading
          eyebrow="Xizmatlar"
          title="Nima quramiz"
          lede="Har bir yo'nalish bo'yicha alohida jamoa va tayyor tajriba. Bitta loyihada bir nechta yo'nalishni birlashtirish mumkin."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="plate group flex flex-col p-7"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
            >
              <h3 className="display h-card text-white transition-colors group-hover:text-neon-300">
                {s.navTitle}
              </h3>
              <p className="lede mt-3.5 flex-1 text-sm">{s.summary}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-6 flex items-end justify-between border-t border-edge pt-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-faint">
                    Narxi
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {`${fmtPrice(s.priceFrom)} so'mdan`}
                  </p>
                </div>
                <span className="text-xs text-muted">{s.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------------- Raqamlar */

export function Stats() {
  return (
    <Section id="portfolio" className="border-y border-edge bg-abyss !py-16 sm:!py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="text-center"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <p className="display neon text-4xl sm:text-5xl lg:text-6xl">
                {s.value}
                {s.suffix}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------------- Ish jarayoni */

export function Process() {
  return (
    <Section id="jarayon">
      <Container>
        <SectionHeading
          eyebrow="Jarayon"
          title="Qanday ishlaymiz"
          lede="Har bosqichda natija ko'rinadi. Siz yo'nalishni istalgan vaqtda to'g'rilay olasiz — oxirida syurpriz bo'lmaydi."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <li
              key={p.step}
              className="plate p-6"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            >
              <span className="display text-3xl text-neon-500/45">{p.step}</span>
              <h3 className="mt-3 text-base font-bold text-white">{p.title}</h3>
              <p className="lede mt-2.5 text-sm">{p.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------- Nima uchun biz */

export function WhyUs() {
  return (
    <Section glow>
      <Container>
        <SectionHeading
          eyebrow="Nima uchun biz"
          title="Ishonch texnik shartlar bilan"
          lede="Va'da emas, shartnomada qayd etilgan aniq majburiyatlar."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <div
              key={w.title}
              className="plate h-full p-7"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
            >
              <h3 className="text-base font-bold text-white">{w.title}</h3>
              <p className="lede mt-3 text-sm">{w.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------- Texnologiyalar */

export function TechStack() {
  return (
    <Section id="texnologiyalar" className="border-y border-edge bg-abyss">
      <Container>
        <SectionHeading
          eyebrow="Texnologiyalar"
          title="Stack"
          lede="Modaga emas, loyiha vazifasiga qarab tanlaymiz. Har bir texnologiya uchun jamoada tajribali muhandis bor."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((group, i) => (
            <div
              key={group.group}
              className="plate p-6"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${(i % 3) * 70}ms` }}
            >
              <p className="eyebrow">{group.group}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-edge px-3 py-1.5 text-sm text-white transition-colors hover:border-neon-500/50 hover:text-neon-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------ Blog blok */

export function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <Section id="blog">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Blog"
            title="Foydali maqolalar"
            lede="Texnologiya haqida sotuvsiz — nima qanday ishlaydi va qancha turadi."
          />
          <Link
            href="/blog"
            className="btn-pill btn-ghost !py-2.5 !text-sm"
            data-reveal
          >
            Barcha maqolalar
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="plate group flex flex-col p-7"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-faint">
                <span className="text-neon-400">{p.category}</span>
                <span>{p.readingMinutes} daqiqa</span>
              </div>
              <h3 className="mt-4 flex-1 text-lg font-bold leading-snug text-white transition-colors group-hover:text-neon-300">
                {p.title}
              </h3>
              <p className="lede mt-3 text-sm">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------------ FAQ */

export function Faq({
  items = HOME_FAQ,
  title = "Ko'p so'raladigan savollar",
}: {
  items?: readonly { q: string; a: string }[];
  title?: string;
}) {
  return (
    <Section className="border-t border-edge bg-abyss">
      <Container>
        <SectionHeading eyebrow="Savol-javob" title={title} />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-edge border-y border-edge">
          {items.map((item) => (
            <details key={item.q} className="group py-5" data-reveal>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-semibold text-white transition-colors hover:text-neon-300">
                {item.q}
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-neon-500 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="lede mt-3.5 pr-10 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ------------------------------------------------------------- Yakuniy CTA */

export function FinalCta({
  title = "Loyihangizni boshlaymizmi?",
  text = "Brifni to'ldiring yoki shunchaki qo'ng'iroq qiling — 1 ish kuni ichida taxminiy narx va muddatni aytamiz. Konsultatsiya bepul.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section glow className="overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <h2 className="display h-section neon">{title}</h2>
          <p className="lede mx-auto mt-6 max-w-xl text-base sm:text-lg">{text}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</Button>
            <Button href={CONTACT.telegram} variant="ghost">
              Telegram orqali yozish
            </Button>
          </div>

          <p className="mt-7 text-xs text-faint">
            {CONTACT.hours} · {CONTACT.address.full}
          </p>
        </div>
      </Container>
    </Section>
  );
}
