import { Container, Button } from "@/components/ui/primitives";
import { HERO_BADGES } from "@/content/landing";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-[70px]">
      <div className="glow-field" aria-hidden="true" />

      {/* Nozik to'r — taqdimotdagi texnologik fon hissi */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(1,156,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(1,156,248,0.07) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(70% 60% at 50% 40%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 40%, #000 30%, transparent 100%)",
        }}
      />

      <Container className="relative z-10 py-20">
        <p
          className="text-center text-[11px] font-medium uppercase tracking-[0.42em] text-neon-300 sm:text-xs"
          data-reveal
        >
          Innosoft Systems taqdim etadi
        </p>

        <h1
          className="display h-hero neon mt-7 text-center"
          data-reveal
          style={{ ["--reveal-delay" as string]: "80ms" }}
        >
          {/* Bo'sh joy ataylab: <br /> matn tarkibiga probel qo'shmaydi,
              usiz H1 "Dasturlashxizmatlari" bo'lib o'qiladi va asosiy
              kalit so'z buziladi. */}
          Dasturlash{" "}
          <br />
          xizmatlari
        </h1>

        <p
          className="lede mx-auto mt-8 max-w-2xl text-center text-base sm:text-lg"
          data-reveal
          style={{ ["--reveal-delay" as string]: "160ms" }}
        >
          O&apos;zbekistonda biznesingiz uchun zamonaviy IT yechimlar — g&apos;oyadan
          ishga tushirishgacha. {SITE.stats.projects}+ loyiha, {SITE.stats.years}{" "}
          yillik tajriba va {SITE.stats.warranty} oy bepul kafolat.
        </p>

        <ul
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2.5"
          data-reveal
          style={{ ["--reveal-delay" as string]: "240ms" }}
        >
          {HERO_BADGES.map((badge) => (
            <li
              key={badge}
              className="border border-neon-500/30 bg-neon-500/[0.06] px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              <span className="mr-2 text-neon-400" aria-hidden="true">
                ✓
              </span>
              {badge}
            </li>
          ))}
        </ul>

        <div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          data-reveal
          style={{ ["--reveal-delay" as string]: "320ms" }}
        >
          <Button href="/aloqa">Bepul konsultatsiya</Button>
          <Button href="/#xizmatlar" variant="ghost">
            Xizmatlarni ko&apos;rish
          </Button>
        </div>
      </Container>
    </section>
  );
}
