import { SITE } from "@/lib/constants";

/** Hero ostidagi tez belgilar — PDF strukturasidan */
export const HERO_BADGES = [
  "Web sayt",
  "Telegram Bot",
  "CRM",
  "Mobile App",
  "AI",
  "ERP",
] as const;

/** Texnologiyalar bloki */
export const TECH_STACK = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Python", "Go"] },
  { group: "Ma'lumotlar", items: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse"] },
  { group: "Mobil", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { group: "Infratuzilma", items: ["Docker", "Nginx", "AWS", "Kubernetes"] },
  { group: "Integratsiya", items: ["Click", "Payme", "1C", "SAP", "Didox"] },
] as const;

/** Raqamlar bloki */
export const STATS = [
  { value: SITE.stats.projects, suffix: "+", label: "Yakunlangan loyiha" },
  { value: SITE.stats.years, suffix: " yil", label: "Bozordagi tajriba" },
  { value: SITE.stats.developers, suffix: "+", label: "Muhandis jamoada" },
  { value: SITE.stats.warranty, suffix: " oy", label: "Bepul kafolat" },
] as const;

/** Ish jarayoni */
export const PROCESS = [
  {
    step: "01",
    title: "Brif va tahlil",
    text: "Vazifani, raqobatchilarni va muvaffaqiyat mezonlarini aniqlaymiz. Natija — texnik topshiriq va qat'iy smeta.",
  },
  {
    step: "02",
    title: "Dizayn va prototip",
    text: "Struktura, wireframe va UI. Siz kodlashdan oldin yakuniy ko'rinishni tasdiqlaysiz.",
  },
  {
    step: "03",
    title: "Ishlab chiqish",
    text: "Har hafta demo. Ishning borishini kuzatasiz va yo'nalishni istalgan bosqichda to'g'rilaysiz.",
  },
  {
    step: "04",
    title: "Test va ishga tushirish",
    text: "Funksional test, tezlik, xavfsizlik va SEO tekshiruvi. Keyin serverga chiqaramiz.",
  },
  {
    step: "05",
    title: "Qo'llab-quvvatlash",
    text: "12 oy bepul kafolat, monitoring va rivojlantirish bo'yicha hamrohlik.",
  },
] as const;

/** Nima uchun biz */
export const WHY_US = [
  {
    title: "Qat'iy narx va muddat",
    text: "Shartnomada aniq summa va sana. Ish jarayonida narx oshmaydi — o'zgarish faqat siz so'raganingizda va yozma kelishuv bilan bo'ladi.",
  },
  {
    title: "Kod sizga tegishli",
    text: "Loyiha tugagach barcha kod, kirish ma'lumotlari va hujjatlar sizga topshiriladi. Bizga bog'lanib qolmaysiz.",
  },
  {
    title: "Tezlik texnik talab sifatida",
    text: "Har bir sahifa Core Web Vitals talablarini bajarishi shart. Bu did masalasi emas, qabul qilish mezoni.",
  },
  {
    title: "SEO birinchi kundan",
    text: "Struktura, meta teglar, schema va sitemap saytni yozishdan oldin rejalashtiriladi — keyin qo'shilmaydi.",
  },
  {
    title: "Mahalliy integratsiyalar",
    text: "Click, Payme, 1C, Didox va Soliq portali bilan ishlash bo'yicha tayyor tajriba mavjud.",
  },
  {
    title: "Ishga tushgandan keyin ham",
    text: "12 oy bepul kafolat va SLA asosidagi texnik qo'llab-quvvatlash tariflari.",
  },
] as const;

/** Bosh sahifadagi umumiy FAQ — FAQPage schema uchun ham ishlatiladi */
export const HOME_FAQ = [
  {
    q: "Dasturlash xizmatlari qancha turadi?",
    a: "Landing sayt 4 000 000 so'mdan, Telegram bot 3 000 000 so'mdan, CRM tizimi 12 000 000 so'mdan, mobil ilova 25 000 000 so'mdan boshlanadi. Aniq narxni brifdan keyin qat'iy smeta ko'rinishida beramiz.",
  },
  {
    q: "Loyiha qancha vaqtda tayyor bo'ladi?",
    a: "Landing sayt 10 ish kuni, Telegram bot 7–20 kun, korporativ sayt 20–30 kun, CRM 30–90 kun, mobil ilova 2–6 oy. Muddat shartnomada qayd etiladi.",
  },
  {
    q: "Ishni bosqichma-bosqich to'lash mumkinmi?",
    a: "Ha. Standart sxema: 40 foiz avans, 40 foiz ishlab chiqish o'rtasida, 20 foiz topshirishda. Katta loyihalar oylik bosqichlarga bo'linadi.",
  },
  {
    q: "Loyiha tugagach kod kimga tegishli bo'ladi?",
    a: "Sizga. Yakuniy to'lovdan keyin kod, serverga kirish ma'lumotlari va texnik hujjatlar to'liq topshiriladi.",
  },
  {
    q: "Kafolat bormi?",
    a: "Ha, 12 oy. Bu davrda bizning tomonimizdan yo'l qo'yilgan barcha xatoliklar bepul tuzatiladi.",
  },
  {
    q: "Boshqa jamoa boshlagan loyihani davom ettirasizmi?",
    a: "Ha, avval texnik audit o'tkazamiz va holatni ochiq baholaymiz. Kod davom ettirishga yaroqsiz bo'lsa, buni to'g'ridan-to'g'ri aytamiz.",
  },
] as const;
