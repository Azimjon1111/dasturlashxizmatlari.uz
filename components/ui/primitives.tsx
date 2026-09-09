import Link from "next/link";
import type { ReactNode } from "react";

export function cn(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* ---------------------------------------------------------------- Layout */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  glow = false,
  id,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28 lg:py-32", className)}
    >
      {glow && <div className="glow-field" aria-hidden="true" />}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------ Typography */

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
      data-reveal
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="display h-section neon mt-4">{title}</Tag>
      {lede && <p className="lede mt-6 text-base sm:text-lg">{lede}</p>}
    </div>
  );
}

/* --------------------------------------------------------------- Buttons */

function Arrow() {
  return (
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 5h18M13.5 1 18 5l-4.5 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "neon" | "ghost";
  arrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "neon",
  arrow = true,
  className,
}: ButtonProps) {
  const classes = cn(
    "btn-pill",
    variant === "neon" ? "btn-neon" : "btn-ghost",
    className
  );

  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/* ----------------------------------------------------------------- Cards */

export function Plate({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("plate p-7", className)}>{children}</div>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border border-neon-500/35 bg-neon-500/8 px-2.5 py-1 text-[11px] font-medium tracking-wide text-neon-300">
      {children}
    </span>
  );
}

/* ------------------------------------------------------------- Structured */

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Statik kontentdan quriladi — foydalanuvchi kiritmasi yo'q
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
