"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Barcha [data-reveal] elementlarini darhol ko'rinadigan qilib qo'yadi */
function revealAll() {
  document
    .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)")
    .forEach((n) => n.classList.add("is-visible"));
}

/**
 * Sahifadagi barcha [data-reveal] elementlarini kuzatadi va ko'rinishga
 * kirganda .is-visible sinfini qo'shadi. Bitta observer butun sahifaga.
 *
 * Muhim: animatsiya faqat bezak. Agar IntersectionObserver mavjud
 * bo'lmasa yoki biror sababga ko'ra ishga tushmasa (masalan, sahifa
 * ko'rinmaydigan kontekstda render qilinsa), zaxira taymer butun
 * kontentni ochib yuboradi — hech qachon opacity: 0 holatida qolmaydi.
 */
export function Reveal() {
  // Layout navigatsiyada qayta mount bo'lmaydi, shuning uchun yo'l
  // o'zgarganda observer'ni qaytadan quramiz — aks holda yangi sahifa
  // elementlari umuman kuzatilmaydi va opacity: 0 holida qolib ketadi
  // (faqat sahifani reload qilgandagina ko'rinardi).
  const pathname = usePathname();

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    nodes.forEach((n) => observer.observe(n));

    // Zaxira: observer 3 soniyada hech narsa ochmasa, hammasini ko'rsatamiz
    const fallback = window.setTimeout(() => {
      if (!document.querySelector("[data-reveal].is-visible")) {
        observer.disconnect();
        revealAll();
      }
    }, 3000);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
