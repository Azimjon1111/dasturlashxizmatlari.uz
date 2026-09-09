"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";
import { SERVICES } from "@/content/services";

/**
 * Backend hali ulanmagan — forma to'ldirilgan brifni Telegram xabariga
 * yig'adi va chatni ochadi. Server tomonidagi qabul nuqtasi paydo bo'lgach
 * handleSubmit ichini fetch("/api/lead") bilan almashtirish yetarli.
 */
export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(SERVICES[0].navTitle);
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "Yangi ariza — dasturlashxizmatlari.uz",
      `Ism: ${name}`,
      `Telefon: ${phone}`,
      `Xizmat: ${service}`,
      note && `Izoh: ${note}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${CONTACT.telegram}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const field =
    "w-full border border-edge bg-black/50 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-faint focus:border-neon-500";

  return (
    <form onSubmit={handleSubmit} className="plate p-7 sm:p-8">
      <p className="eyebrow">Brif</p>
      <h2 className="display h-card mt-3 text-white">Arizani qoldiring</h2>
      <p className="lede mt-3 text-sm">
        1 ish kuni ichida bog&apos;lanamiz va taxminiy narx hamda muddatni
        aytamiz.
      </p>

      <div className="mt-7 space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs text-muted">
            Ismingiz
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={field}
            placeholder="Azizbek"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-xs text-muted">
            Telefon raqamingiz
          </label>
          <input
            id="phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={field}
            placeholder="+998 90 123 45 67"
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-xs text-muted">
            Qaysi xizmat qiziqtiradi
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={field}
          >
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.navTitle} className="bg-black">
                {s.navTitle}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="note" className="mb-2 block text-xs text-muted">
            Loyiha haqida qisqacha
          </label>
          <textarea
            id="note"
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className={`${field} resize-none`}
            placeholder="Vazifa, muddat, taxminiy byudjet"
          />
        </div>
      </div>

      <button type="submit" className="btn-pill btn-neon mt-7 w-full">
        Telegram orqali yuborish
      </button>

      <p className="mt-4 text-center text-xs text-faint">
        Yuborish tugmasi Telegram chatini tayyor xabar bilan ochadi.
      </p>
    </form>
  );
}
