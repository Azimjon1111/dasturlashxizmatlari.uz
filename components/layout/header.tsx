"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, CONTACT } from "@/lib/constants";
import { cn } from "@/components/ui/primitives";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobil menyu ochiq bo'lganda fon skroll qilinmasin
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        solid
          ? "border-b border-edge bg-black/85 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[70px] w-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="display text-lg leading-none tracking-tight text-white sm:text-xl"
          onClick={() => setOpen(false)}
        >
          Dasturlash<span className="text-neon-500">.</span>xizmatlari
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-neon-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="text-sm font-semibold text-white transition-colors hover:text-neon-300"
          >
            {CONTACT.phoneDisplay}
          </a>
          <Link href="/aloqa" className="btn-pill btn-neon !px-6 !py-2.5 !text-sm">
            Bepul konsultatsiya
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-white transition-transform duration-300",
              open && "translate-y-[6px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-white transition-opacity duration-300",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-white transition-transform duration-300",
              open && "-translate-y-[6px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* Mobil menyu */}
      <div
        className={cn(
          "overflow-hidden border-t border-edge bg-black/97 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden",
          open ? "max-h-[560px]" : "max-h-0 border-t-0"
        )}
      >
        <div className="px-5 py-7 sm:px-8">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display border-b border-edge py-3.5 text-2xl text-white transition-colors hover:text-neon-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-7 flex flex-col gap-3">
            <a
              href={CONTACT.phoneHref}
              className="text-lg font-semibold text-white"
            >
              {CONTACT.phoneDisplay}
            </a>
            <Link
              href="/aloqa"
              onClick={() => setOpen(false)}
              className="btn-pill btn-neon w-full"
            >
              Bepul konsultatsiya
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
