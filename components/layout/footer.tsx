import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { SITE, CONTACT } from "@/lib/constants";
import { SERVICES } from "@/content/services";
import { BLOG_POSTS } from "@/content/blog";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-edge bg-abyss">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <p className="display text-xl text-white">
              Dasturlash<span className="text-neon-500">.</span>xizmatlari
            </p>
            <p className="lede mt-4 max-w-xs text-sm">
              O&apos;zbekistonda biznes uchun web sayt, Telegram bot, CRM, ERP,
              mobil ilova va sun&apos;iy intellekt yechimlari.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="display mt-6 block text-2xl text-white transition-colors hover:text-neon-300"
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.emailHref}
              className="mt-2 block text-sm text-muted transition-colors hover:text-neon-300"
            >
              {CONTACT.email}
            </a>
          </div>

          <nav aria-label="Xizmatlar">
            <p className="eyebrow">Xizmatlar</p>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-neon-300"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Yana xizmatlar">
            <p className="eyebrow">Yana</p>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.slice(6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-sm text-muted transition-colors hover:text-neon-300"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Blog">
            <p className="eyebrow">Blog</p>
            <ul className="mt-5 space-y-2.5">
              {BLOG_POSTS.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-sm text-muted transition-colors hover:text-neon-300"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-neon-300 transition-colors hover:text-white"
                >
                  Barcha maqolalar →
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-edge pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {year} {SITE.domain} — {CONTACT.address.full}
          </p>
          <p className="text-xs text-faint">
            Powered by{" "}
            <a
              href={SITE.parentUrl}
              target="_blank"
              rel="noopener"
              className="font-medium text-neon-300 transition-colors hover:text-white"
            >
              innosoft-systems.uz
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
