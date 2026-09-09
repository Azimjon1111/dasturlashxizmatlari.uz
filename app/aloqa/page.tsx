import type { Metadata } from "next";
import { Container, Section, JsonLd } from "@/components/ui/primitives";
import { LeadForm } from "@/components/sections/lead-form";
import { CONTACT, SITE, SITE_URL } from "@/lib/constants";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Aloqa — bepul konsultatsiya va narx hisobi",
  description:
    "Dasturlash xizmatlari bo'yicha bepul konsultatsiya. Toshkent, U-ENTER innovatsion markazi. Telefon: +998 91 055 55 11, Telegram va email orqali murojaat qiling.",
  keywords: ["aloqa", "dasturlash xizmatlari aloqa", "IT kompaniya Toshkent"],
  alternates: { canonical: "/aloqa" },
  openGraph: {
    type: "website",
    title: "Aloqa — bepul konsultatsiya va narx hisobi",
    description:
      "Vazifangizni tinglaymiz va 1 ish kuni ichida taxminiy narx hamda muddatni aytamiz.",
    url: "/aloqa",
    siteName: SITE.name,
    locale: SITE.locale,
  },
};

const CHANNELS = [
  {
    label: "Telefon",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
    note: CONTACT.hours,
  },
  {
    label: "Telegram",
    value: "@azimjon_bekmurodov",
    href: CONTACT.telegram,
    note: "Odatda 15 daqiqada javob beramiz",
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    note: "Texnik topshiriq va hujjatlar uchun",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Bosh sahifa", path: "/" },
            { name: "Aloqa", path: "/aloqa" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: `${SITE_URL}/aloqa`,
            inLanguage: "uz-UZ",
            name: "Aloqa",
          },
        ]}
      />

      <section className="relative overflow-hidden pt-[70px]">
        <div className="glow-field" aria-hidden="true" />
        <Container className="relative z-10 py-20 sm:py-24">
          <p className="eyebrow" data-reveal>
            Aloqa
          </p>
          <h1 className="display h-section neon mt-4 max-w-2xl" data-reveal>
            Keling, gaplashamiz
          </h1>
          <p className="lede mt-6 max-w-2xl text-base sm:text-lg" data-reveal>
            Vazifangizni tinglaymiz, mos yechimni taklif qilamiz va 1 ish kuni
            ichida taxminiy narx hamda muddatni aytamiz. Konsultatsiya bepul va
            hech qanday majburiyat yuklamaydi.
          </p>
        </Container>
      </section>

      <Section className="!pt-6">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="space-y-5">
              {CHANNELS.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="plate group block p-7"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                >
                  <p className="eyebrow">{c.label}</p>
                  <p className="display mt-3 text-2xl text-white transition-colors group-hover:text-neon-300 sm:text-3xl">
                    {c.value}
                  </p>
                  <p className="mt-2 text-xs text-faint">{c.note}</p>
                </a>
              ))}

              <div className="plate p-7" data-reveal>
                <p className="eyebrow">Manzil</p>
                <p className="mt-3 text-base text-white">
                  {CONTACT.address.full}
                </p>
                <p className="lede mt-3 text-sm">
                  Uchrashuv oldindan kelishilgan holda o&apos;tkaziladi — avval
                  qo&apos;ng&apos;iroq qiling yoki Telegramga yozing.
                </p>
              </div>
            </div>

            <div data-reveal style={{ ["--reveal-delay" as string]: "100ms" }}>
              <LeadForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
