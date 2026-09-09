import Link from "next/link";
import { Container, Button } from "@/components/ui/primitives";
import { SERVICES } from "@/content/services";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-[70px]">
      <div className="glow-field" aria-hidden="true" />
      <Container className="relative z-10 py-20 text-center">
        <p className="display neon text-[clamp(5rem,10vw,10rem)] leading-none">
          404
        </p>
        <h1 className="display mt-6 text-2xl text-white sm:text-3xl">
          Bunday sahifa topilmadi
        </h1>
        <p className="lede mx-auto mt-5 max-w-md text-sm sm:text-base">
          Manzil o&apos;zgargan yoki sahifa o&apos;chirilgan bo&apos;lishi
          mumkin. Quyidagi bo&apos;limlardan birini tanlang.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Bosh sahifa</Button>
          <Button href="/aloqa" variant="ghost">
            Aloqa
          </Button>
        </div>

        <ul className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-2">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                className="block border border-edge px-3.5 py-2 text-xs text-muted transition-colors hover:border-neon-500/50 hover:text-neon-300"
              >
                {s.navTitle}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
