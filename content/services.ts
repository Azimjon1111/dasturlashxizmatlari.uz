export type FaqItem = { q: string; a: string };

export type ServiceSection = {
  h2: string;
  body?: string[];
  list?: string[];
};

export type Service = {
  slug: string;
  /** Kartadagi qisqa nom */
  navTitle: string;
  /** Sahifadagi H1 */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Landing kartasidagi bir qatorli tavsif */
  summary: string;
  /** Kartadagi teglar — PDF strukturasidan */
  tags: string[];
  priceFrom: number;
  duration: string;
  /** H1 ostidagi kirish paragrafi */
  intro: string;
  deliverables: string[];
  sections: ServiceSection[];
  faq: FaqItem[];
};

export const SERVICES: Service[] = [
  /* ---------------------------------------------------------------- 1 */
  {
    slug: "web-sayt-yaratish",
    navTitle: "Web sayt yaratish",
    h1: "Web sayt yaratish",
    metaTitle: "Web sayt yaratish Toshkentda — narxi va muddati",
    metaDescription:
      "Web sayt yaratish xizmati: landing, korporativ sayt va internet do'kon. Next.js'da tez, SEO'ga tayyor saytlar. Narxi 4 000 000 so'mdan, 10 kunda topshiramiz.",
    keywords: [
      "web sayt yaratish",
      "sayt yaratish narxi",
      "landing page yaratish",
      "korporativ sayt",
      "internet do'kon yaratish",
      "veb sayt Toshkent",
    ],
    summary:
      "Landing, korporativ sayt va internet do'kon — Core Web Vitals talablariga javob beradigan, qidiruvda topiladigan saytlar.",
    tags: ["Landing", "Corporate", "E-commerce"],
    priceFrom: 4_000_000,
    duration: "10–45 kun",
    intro:
      "Web sayt — bu biznesingizning eng arzon va eng uzoq ishlaydigan sotuvchisi. Biz sayt yaratishda dizaynni emas, natijani birinchi o'ringa qo'yamiz: sahifa 1,5 soniyada ochilishi, Google'da topilishi va tashrif buyuruvchini arizaga aylantirishi kerak.",
    deliverables: [
      "Moslashuvchan (responsive) dizayn — telefon, planshet, kompyuter",
      "Boshqaruv paneli — matn va rasmlarni o'zingiz tahrirlaysiz",
      "Texnik SEO: meta teglar, sitemap.xml, robots.txt, JSON-LD schema",
      "Google Analytics 4 va Yandex Metrika ulanishi",
      "SSL sertifikat va hosting sozlamalari",
      "12 oy bepul texnik kafolat",
    ],
    sections: [
      {
        h2: "Qanday saytlar yaratamiz",
        list: [
          "Landing page — bitta mahsulot yoki xizmat uchun, reklama trafigini arizaga aylantiradi",
          "Vizitka sayt — kichik biznes uchun 3–5 sahifali ishonch sahifasi",
          "Korporativ sayt — kompaniya, xizmatlar, portfolio, blog va vakansiyalar bo'limi bilan",
          "Internet do'kon — katalog, savat, Click va Payme to'lovlari, buyurtma boshqaruvi",
          "Veb-ilova — shaxsiy kabinet, hisob-kitoblar, foydalanuvchi rollari bilan",
        ],
      },
      {
        h2: "Nima uchun Next.js",
        body: [
          "Ko'pchilik O'zbekistondagi saytlar WordPress'da qurilgan va 4–7 soniyada ochiladi. Google esa 2,5 soniyadan sekin ochiladigan sahifani qidiruv natijalarida pastga tushiradi.",
          "Biz Next.js'da server tomonida render qilamiz: foydalanuvchi tayyor HTML oladi, qidiruv roboti kontentni to'liq ko'radi. Natijada PageSpeed ballari 90+ va indeksatsiya bir necha kunda o'tadi.",
        ],
      },
      {
        h2: "Ish bosqichlari",
        list: [
          "Brif va raqobatchilar tahlili — 2 kun",
          "Struktura va prototip — 3 kun",
          "UI dizayn va tasdiqlash — 5 kun",
          "Dasturlash va kontent joylash — 10–20 kun",
          "Test, SEO sozlash va ishga tushirish — 3 kun",
        ],
      },
    ],
    faq: [
      {
        q: "Web sayt yaratish qancha turadi?",
        a: "Landing page 4 000 000 so'mdan, korporativ sayt 9 000 000 so'mdan, internet do'kon 18 000 000 so'mdan boshlanadi. Aniq narx sahifalar soni, integratsiyalar va kontent hajmiga bog'liq — brifdan keyin qat'iy smeta beramiz.",
      },
      {
        q: "Sayt necha kunda tayyor bo'ladi?",
        a: "Landing page — 10 ish kuni, korporativ sayt — 20–30 kun, internet do'kon — 35–45 kun. Muddat shartnomada qayd etiladi.",
      },
      {
        q: "Saytni o'zim tahrirlay olamanmi?",
        a: "Ha. Har bir saytda boshqaruv paneli bo'ladi — matn, rasm, yangilik va mahsulotlarni dasturchisiz o'zgartirasiz. Topshirishda 1 soatlik o'quv qo'llanma va video yozib beramiz.",
      },
      {
        q: "Domen va hosting narxga kiradimi?",
        a: "Birinchi yil uchun .uz domen va hosting narxga kiritilgan. Keyingi yillarda uzaytirish taxminan 700 000 so'm atrofida bo'ladi.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 2 */
  {
    slug: "telegram-bot-yaratish",
    navTitle: "Telegram bot yaratish",
    h1: "Telegram bot yaratish",
    metaTitle: "Telegram bot yaratish — buyurtma, to'lov va CRM integratsiyasi",
    metaDescription:
      "Telegram bot yaratish xizmati: buyurtma qabul qilish, Click va Payme to'lovlari, CRM integratsiyasi, admin panel. Narxi 3 000 000 so'mdan, 7 kunda.",
    keywords: [
      "telegram bot yaratish",
      "telegram bot narxi",
      "telegram bot dasturlash",
      "telegram bot buyurtma",
      "telegram automation",
    ],
    summary:
      "Buyurtma qabul qiladigan, to'lov oladigan va CRM'ga ma'lumot yozadigan botlar — mijozingiz allaqachon Telegramda.",
    tags: ["Buyurtma", "Click", "Payme", "CRM"],
    priceFrom: 3_000_000,
    duration: "7–20 kun",
    intro:
      "O'zbekistonda Telegram auditoriyasi 30 milliondan oshdi. Bot — bu ilova yuklab olishni talab qilmaydigan, push bildirishnomasi bepul bo'lgan va mijoz allaqachon kunlik ishlatadigan kanal. To'g'ri qurilgan bot operator ishining 70 foizini o'z zimmasiga oladi.",
    deliverables: [
      "Bot mantiqi va menyu strukturasi",
      "Admin panel — buyurtmalar, mijozlar, statistika",
      "Click, Payme yoki Uzum orqali to'lov qabul qilish",
      "CRM yoki Google Sheets'ga avtomatik yozuv",
      "Ommaviy xabar yuborish (rassilka) moduli",
      "Serverga o'rnatish va 12 oy texnik kafolat",
    ],
    sections: [
      {
        h2: "Qanday botlar quramiz",
        list: [
          "Buyurtma boti — katalog, savat, yetkazib berish manzili va to'lov",
          "Bron qilish boti — stol, xona, navbat yoki qabul vaqti",
          "Yordam boti — tez-tez so'raladigan savollar va operatorga ulash",
          "Ichki bot — xodimlar uchun hisobot, davomat, ariza tasdiqlash",
          "AI bot — ChatGPT asosida jonli tilda javob beradigan maslahatchi",
        ],
      },
      {
        h2: "Bot biznesga nima beradi",
        body: [
          "Bir restoran mijozimizda bot ishga tushgandan keyin telefon orqali qabul qilinadigan buyurtmalar ulushi 80 foizdan 25 foizga tushdi — qolgani botda avtomatik rasmiylashtiriladi. Operator soni o'zgarmagan holda buyurtmalar hajmi 2,3 barobar oshdi.",
          "Bot 24 soat ishlaydi, kasal bo'lmaydi va har bir mijoz ma'lumotini bazaga yozadi. Bu keyinchalik qayta sotuv uchun tayyor auditoriya demakdir.",
        ],
      },
      {
        h2: "Integratsiyalar",
        list: [
          "To'lov: Click, Payme, Uzum Bank, Octo",
          "CRM: Bitrix24, amoCRM yoki o'z tizimingiz",
          "Yetkazib berish: Yandex Delivery, kuryer xizmatlari API",
          "Buxgalteriya: 1C, Didox, Soliq portali",
          "Ombor: mahsulot qoldig'i real vaqtda tekshiriladi",
        ],
      },
    ],
    faq: [
      {
        q: "Telegram bot yaratish qancha turadi?",
        a: "Oddiy ma'lumot boti 3 000 000 so'mdan, to'lovli buyurtma boti 7 000 000 so'mdan, AI yoki CRM integratsiyali murakkab bot 15 000 000 so'mdan boshlanadi.",
      },
      {
        q: "Botni yuritish uchun oylik to'lov bormi?",
        a: "Bot server ijarasi oyiga 150 000–400 000 so'm atrofida — yuklamaga bog'liq. Boshqa majburiy oylik to'lov yo'q, bot kodi sizga tegishli bo'ladi.",
      },
      {
        q: "Bot to'lovni qanday qabul qiladi?",
        a: "Click yoki Payme merchant hisobingizga to'g'ridan-to'g'ri. Pul bizning hisobimizdan o'tmaydi — bot faqat to'lov havolasini yaratadi va tasdiqni tekshiradi.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 3 */
  {
    slug: "crm-tizimi",
    navTitle: "CRM tizimi",
    h1: "CRM tizimi joriy qilish",
    metaTitle: "CRM tizimi joriy qilish — sotuv, ombor, HR va moliya",
    metaDescription:
      "CRM tizimi ishlab chiqish va joriy qilish: sotuv voronkasi, mijozlar bazasi, ombor, HR va moliya modullari. Telegram va 1C integratsiyasi bilan.",
    keywords: [
      "CRM tizimi",
      "CRM joriy qilish",
      "CRM dasturi",
      "sotuv avtomatlashtirish",
      "mijozlar bazasi dasturi",
    ],
    summary:
      "Sotuv voronkasi, mijozlar tarixi, vazifalar va hisobotlar — bitta oynada. Excel va daftardan chiqish vaqti keldi.",
    tags: ["Sales", "Warehouse", "HR", "Finance"],
    priceFrom: 12_000_000,
    duration: "30–90 kun",
    intro:
      "CRM — bu dastur emas, sotuv jarayonining yozma qoidasi. Mijozlar bazasi menejerning telefonida saqlangan bo'lsa, u ishdan ketganda baza ham u bilan ketadi. CRM esa har bir qo'ng'iroq, xat va shartnomani kompaniya mulkiga aylantiradi.",
    deliverables: [
      "Sotuv voronkasi va bosqichlari sozlangan holda",
      "Mijozlar bazasi — aloqa tarixi, hujjatlar, eslatmalar",
      "Vazifalar va menejer yuklamasi nazorati",
      "Rahbar uchun hisobot paneli (dashboard)",
      "Telegram, telefoniya va saytdagi forma integratsiyasi",
      "Xodimlarni o'qitish va 3 oy hamrohlik",
    ],
    sections: [
      {
        h2: "CRM modullari",
        list: [
          "Sotuv — lidlar, voronka, kelishuvlar, savdo rejasi va fakt",
          "Ombor — qoldiq, kirim-chiqim, inventarizatsiya, ko'p ombor",
          "HR — xodimlar, davomat, KPI, ta'til va arizalar",
          "Moliya — kassa, qarzdorlik, to'lov kalendari, foyda hisoboti",
          "Hujjatlar — shartnoma va hisob-fakturani bir tugmada shakllantirish",
        ],
      },
      {
        h2: "Tayyor CRM yoki o'z tizimingizmi",
        body: [
          "Agar jarayoningiz standart bo'lsa — Bitrix24 yoki amoCRM'ni sozlab beramiz, bu tezroq va arzonroq. Ammo O'zbekistondagi ko'p biznesda jarayon o'ziga xos: 1C bilan bog'lanish, Didox orqali hujjat almashish, bir nechta valyutada hisob-kitob.",
          "Shunday hollarda o'z CRM'ingizni quramiz — faqat sizga kerak modullar bilan, oylik abonent to'lovisiz va ma'lumotlar o'z serveringizda saqlanadi.",
        ],
      },
      {
        h2: "Joriy qilish bosqichlari",
        list: [
          "Jarayonlarni suratga olish — hozir qanday ishlayapti",
          "Voronka va rollarni loyihalash",
          "Tizimni sozlash yoki ishlab chiqish",
          "Ma'lumotlarni ko'chirish (Excel, eski baza)",
          "Xodimlarni o'qitish va sinov rejimi — 2 hafta",
          "To'liq ishga tushirish va nazorat",
        ],
      },
    ],
    faq: [
      {
        q: "CRM'ni qachon joriy qilish kerak?",
        a: "Sotuv bo'yicha 2 va undan ortiq xodim bo'lsa, oyiga 50 dan ortiq lid kelsa yoki mijoz ma'lumoti Excel va telefon daftarida tarqoq bo'lsa — CRM allaqachon kerak.",
      },
      {
        q: "CRM narxi qancha?",
        a: "Bitrix24 yoki amoCRM sozlash 6 000 000 so'mdan. O'z CRM tizimingizni ishlab chiqish 12 000 000 so'mdan boshlanadi va modullar soniga qarab o'zgaradi.",
      },
      {
        q: "Xodimlar CRM'da ishlashni istamasa-chi?",
        a: "Bu eng ko'p uchraydigan muammo. Shuning uchun biz joriy qilishni o'qitish va 3 oylik hamrohlik bilan birga topshiramiz — rahbar uchun kim tizimga ma'lumot kiritmayotganini ko'rsatuvchi hisobot ham sozlanadi.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 4 */
  {
    slug: "erp-tizimi",
    navTitle: "ERP tizimi",
    h1: "ERP tizimi ishlab chiqish",
    metaTitle: "ERP tizimi ishlab chiqish — ishlab chiqarish, ombor, moliya",
    metaDescription:
      "ERP tizimi ishlab chiqish va joriy qilish: ishlab chiqarish, ombor, xarid, moliya va HR bitta bazada. 1C va SAP integratsiyasi bilan.",
    keywords: [
      "ERP tizimi",
      "ERP joriy qilish",
      "ERP dasturi",
      "ishlab chiqarish avtomatlashtirish",
      "ERP va CRM farqi",
    ],
    summary:
      "Ishlab chiqarish, ombor, xarid, moliya va HR — bitta bazada, real vaqtda. Rahbar uchun bitta haqiqat manbasi.",
    tags: ["Production", "Warehouse", "Finance", "HR"],
    priceFrom: 45_000_000,
    duration: "3–9 oy",
    intro:
      "CRM tashqariga — mijozga qaraydi, ERP esa ichkariga — kompaniya resurslariga. Agar ombor bir raqam, buxgalteriya boshqa raqam va ishlab chiqarish uchinchi raqamni aytayotgan bo'lsa, muammo odamlarda emas, bitta umumiy bazaning yo'qligida.",
    deliverables: [
      "Yagona ma'lumotlar bazasi va rollar tizimi",
      "Ishlab chiqarish rejasi, kalkulyatsiya va tannarx hisobi",
      "Ombor va logistika moduli",
      "Xarid va yetkazib beruvchilar bilan ishlash",
      "Moliya: byudjet, kassa, qarzdorlik, P&L",
      "1C, Didox va Soliq portali bilan integratsiya",
    ],
    sections: [
      {
        h2: "ERP kimga kerak",
        list: [
          "Ishlab chiqarish korxonalari — tannarxni aniq bilish kerak bo'lganda",
          "Distribyutorlar — bir nechta ombor va yuzlab SKU bilan ishlaganda",
          "Qurilish kompaniyalari — obyekt bo'yicha smeta va sarf nazorati uchun",
          "Ko'p filialli tarmoqlar — filiallar bo'yicha yagona hisobot kerak bo'lganda",
          "50 dan ortiq xodimli kompaniyalar — jarayonlar Excel'ga sig'may qolganda",
        ],
      },
      {
        h2: "ERP va CRM o'rtasidagi farq",
        body: [
          "CRM savolga javob beradi: mijoz qayerda, kelishuv qaysi bosqichda, menejer nima qilyapti. ERP boshqa savolga javob beradi: bu mahsulotning haqiqiy tannarxi qancha, omborda qancha xomashyo qoldi, keyingi oy pul yetadimi.",
          "Amalda ko'p kompaniyalar ikkalasini ham ishlatadi — CRM sotuv bo'limida, ERP esa ishlab chiqarish va moliyada. Biz ularni bitta integratsiyalangan konturga birlashtiramiz.",
        ],
      },
      {
        h2: "Bosqichma-bosqich joriy qilish",
        body: [
          "ERP'ni bir zumda to'liq yoqish — eng keng tarqalgan xato. Biz modul-modul boramiz: avval ombor, keyin xarid, so'ng ishlab chiqarish va moliya. Har bir modul 4–8 haftada ishga tushadi va oldingi ish jarayoni to'xtamaydi.",
        ],
      },
    ],
    faq: [
      {
        q: "ERP tizimi qancha turadi?",
        a: "Bitta modul (masalan, ombor) 45 000 000 so'mdan. To'liq ERP kontur 150 000 000 so'mdan boshlanadi. Aniq narx auditdan keyin, modullar ro'yxati asosida hisoblanadi.",
      },
      {
        q: "1C bilan ishlayotgan edik, ERP kerakmi?",
        a: "1C — asosan buxgalteriya hisobi. Agar sizga ishlab chiqarish rejasi, real vaqtdagi tannarx va operativ boshqaruv kerak bo'lsa, ERP 1C ustiga qo'shiladi va u bilan integratsiya qilinadi — almashtirmaydi.",
      },
      {
        q: "Joriy qilish qancha davom etadi?",
        a: "Birinchi modul 4–8 hafta. To'liq kontur odatda 6–9 oy — bu kompaniya hajmi va jarayonlar murakkabligiga bog'liq.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 5 */
  {
    slug: "mobil-ilova-yaratish",
    navTitle: "Mobil ilova yaratish",
    h1: "Mobil ilova yaratish",
    metaTitle: "Mobil ilova yaratish narxi — Android va iOS ilovalar",
    metaDescription:
      "Mobil ilova yaratish: Android va iOS uchun React Native va Flutter ilovalar. Play Market va App Store'ga joylash. Narxi 25 000 000 so'mdan.",
    keywords: [
      "mobil ilova yaratish",
      "mobil ilova narxi",
      "android ilova yaratish",
      "ios ilova",
      "flutter dasturchi",
    ],
    summary:
      "Android va iOS uchun bitta koddan ikkita ilova — React Native yoki Flutter'da. Do'konlarga joylashgacha to'liq xizmat.",
    tags: ["Android", "iOS", "React Native", "Flutter"],
    priceFrom: 25_000_000,
    duration: "2–6 oy",
    intro:
      "Mobil ilova saytning kichraytirilgan nusxasi emas. U push bildirishnoma yubora oladi, oflayn ishlaydi, kamera va geolokatsiyadan foydalanadi va telefon ekranida doimiy o'rin egallaydi. Shuning uchun ilova kerakmi degan savolga javob har doim bitta: takroriy foydalanish bormi yoki yo'q.",
    deliverables: [
      "UI/UX dizayn — Android va iOS talablariga muvofiq",
      "React Native yoki Flutter'da ishlab chiqish",
      "Backend API va admin panel",
      "Push bildirishnomalar tizimi",
      "Play Market va App Store'ga joylash",
      "Analitika ulanishi va 12 oy kafolat",
    ],
    sections: [
      {
        h2: "Qaysi texnologiyani tanlash kerak",
        body: [
          "React Native va Flutter — bitta koddan ikkala platforma uchun ilova. Bu native ishlab chiqishga qaraganda 40 foizga arzon va tezroq. Biznes ilovalarining 90 foizi uchun bu yetarli.",
          "Native (Swift, Kotlin) faqat og'ir grafika, murakkab kamera ishlovi yoki juda yuqori unumdorlik talab qilinganda kerak bo'ladi.",
        ],
      },
      {
        h2: "Mobil ilova narxi nimadan tashkil topadi",
        list: [
          "Dizayn — 15–20 ta ekran, taxminan 20 foiz byudjet",
          "Frontend ishlab chiqish — ekranlar va mantiq, 40 foiz",
          "Backend va API — 25 foiz",
          "Test va do'konlarga joylash — 15 foiz",
          "Apple Developer yillik to'lovi — 99 dollar, Google — bir martalik 25 dollar",
        ],
      },
      {
        h2: "MVP'dan boshlang",
        body: [
          "Birinchi versiyaga barcha g'oyalarni tiqishtirish byudjetni 3 barobar oshiradi va ishga tushirishni yarim yilga kechiktiradi. Biz MVP taklif qilamiz: 5–7 ta asosiy ekran, 6–8 haftada bozorga chiqish, keyin haqiqiy foydalanuvchi ma'lumotiga qarab rivojlantirish.",
        ],
      },
    ],
    faq: [
      {
        q: "Mobil ilova yaratish qancha turadi?",
        a: "Oddiy MVP 25 000 000 so'mdan, to'lov va kabinetli o'rtacha ilova 60 000 000 so'mdan, marketplace darajasidagi ilova 150 000 000 so'mdan boshlanadi.",
      },
      {
        q: "Android va iOS alohida to'lanadimi?",
        a: "Yo'q. React Native yoki Flutter'da bitta kod bazasi yoziladi va ikkala platformaga chiqariladi. Narx faqat do'konlarga joylash va test bosqichida biroz oshadi.",
      },
      {
        q: "Ilovani do'konga siz joylaysizmi?",
        a: "Ha, Play Market va App Store'ga joylash narxga kiritilgan — ikonka, skrinshotlar, tavsif va moderatsiyadan o'tkazishgacha.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 6 */
  {
    slug: "seo-xizmatlari",
    navTitle: "SEO xizmatlari",
    h1: "SEO xizmatlari",
    metaTitle: "SEO xizmatlari Toshkentda — Google'da birinchi sahifaga chiqish",
    metaDescription:
      "SEO xizmatlari: texnik audit, kontent strategiyasi, tashqi havolalar. Google va Yandex'da organik trafikni oshirish. Oyiga 5 000 000 so'mdan.",
    keywords: [
      "SEO xizmatlari",
      "SEO optimizatsiya",
      "saytni Google'da ko'tarish",
      "SEO audit",
      "organik trafik",
    ],
    summary:
      "Texnik SEO, kontent va havolalar — organik trafikni reklamasiz o'stiradigan uch ustun.",
    tags: ["Technical SEO", "Content SEO", "Backlink"],
    priceFrom: 5_000_000,
    duration: "Oylik, 6 oydan",
    intro:
      "Kontekst reklamada siz har bir bosish uchun to'laysiz — to'lashni to'xtatsangiz, trafik ham to'xtaydi. SEO boshqacha ishlaydi: bir marta qurilgan sahifa yillar davomida bepul mijoz olib keladi. Faqat natija birinchi oyda emas, 4–6 oyda ko'rinadi.",
    deliverables: [
      "Texnik audit — indeksatsiya, tezlik, mobil moslik, xatoliklar",
      "Semantik yadro va kalit so'zlar klasterlari",
      "Kontent rejasi va maqolalarni yozish",
      "Ichki havolalar strukturasi",
      "Schema.org mikro-belgilash",
      "Oylik hisobot — pozitsiya, trafik, konversiya",
    ],
    sections: [
      {
        h2: "SEO ish yo'nalishlari",
        list: [
          "Texnik SEO — sayt tezligi, Core Web Vitals, mobil versiya, robots.txt va sitemap",
          "On-page — sarlavhalar, meta teglar, kontent strukturasi, rasmlar alt matni",
          "Kontent SEO — foydalanuvchi so'roviga to'liq javob beradigan maqolalar va xizmat sahifalari",
          "Tashqi optimizatsiya — sifatli havolalar, katalog va sharhlar",
          "Lokal SEO — Google Business Profile, xaritalarda ko'rinish",
        ],
      },
      {
        h2: "O'zbek tilidagi SEO nima uchun alohida",
        body: [
          "O'zbek tilida raqobat rus tiliga qaraganda ancha past — bu imkoniyat. Ammo lotin va kirill yozuvi, o' va g' harflarining turlicha yozilishi, so'z shakllarining ko'pligi kalit so'zlar bilan ishlashni murakkablashtiradi.",
          "Biz semantikani ikkala yozuvda va so'zning barcha shakllarida yig'amiz, keyin ularni bitta sahifaga to'g'ri taqsimlaymiz.",
        ],
      },
      {
        h2: "Natija qachon ko'rinadi",
        body: [
          "1–2 oy: texnik xatolar tuzatiladi, indeksatsiya yaxshilanadi. 3–4 oy: past chastotali so'roylar bo'yicha birinchi pozitsiyalar. 5–6 oy: asosiy so'roylar bo'yicha o'sish va barqaror organik trafik. Shuning uchun SEO shartnomasi kamida 6 oyga tuziladi.",
        ],
      },
    ],
    faq: [
      {
        q: "SEO xizmati qancha turadi?",
        a: "Bir martalik texnik audit 3 000 000 so'm. Doimiy SEO yuritish oyiga 5 000 000 so'mdan boshlanadi — hajm sayt kattaligi va raqobat darajasiga bog'liq.",
      },
      {
        q: "Birinchi o'rinni kafolatlaysizmi?",
        a: "Yo'q — hech bir halol agentlik buni kafolatlay olmaydi, chunki Google algoritmi bizga bo'ysunmaydi. Biz aniq ish hajmini va oylik o'lchanadigan ko'rsatkichlarni kafolatlaymiz.",
      },
      {
        q: "SEO va kontekst reklama — qaysi biri?",
        a: "Boshida ikkalasi. Reklama birinchi kundan ariza beradi, SEO 4–6 oydan keyin arzon trafik olib keladi. Barqaror organik oqim shakllangach, reklama byudjetini kamaytirish mumkin.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 7 */
  {
    slug: "ui-ux-dizayn",
    navTitle: "UI/UX dizayn",
    h1: "UI/UX dizayn xizmatlari",
    metaTitle: "UI/UX dizayn xizmatlari — sayt va ilova interfeysi",
    metaDescription:
      "UI/UX dizayn: foydalanuvchi tadqiqoti, prototip, interfeys dizayni va dizayn tizimi. Figma'da, dasturlashga tayyor maketlar.",
    keywords: [
      "UI UX dizayn",
      "veb dizayn",
      "interfeys dizayni",
      "Figma dizayn",
      "prototip yaratish",
    ],
    summary:
      "Tadqiqotdan dizayn tizimigacha — chiroyli emas, tushunarli va sotadigan interfeyslar.",
    tags: ["Research", "Prototype", "UI Kit", "Design System"],
    priceFrom: 6_000_000,
    duration: "2–8 hafta",
    intro:
      "Yaxshi dizayn — bu foydalanuvchi o'ylab o'tirmasligi. Agar mijoz sizning saytingizda buyurtma tugmasini qidirishga majbur bo'lsa, u tugmani emas, raqobatchini topadi. Biz dizaynni did masalasi sifatida emas, konversiya masalasi sifatida ko'ramiz.",
    deliverables: [
      "Foydalanuvchi va raqobatchilar tadqiqoti",
      "Foydalanuvchi yo'li (user flow) va bosqichlar xaritasi",
      "Wireframe va interaktiv prototip",
      "UI dizayn — barcha ekranlar, mobil va desktop",
      "Dizayn tizimi va komponentlar kutubxonasi",
      "Dasturchi uchun texnik spetsifikatsiya",
    ],
    sections: [
      {
        h2: "Ish jarayoni",
        list: [
          "Tadqiqot — kim foydalanadi, qanday muammoni hal qiladi",
          "Struktura — sahifalar va ekranlar xaritasi",
          "Wireframe — rangsiz, faqat mantiq va ierarxiya",
          "Prototip — bosiladigan, testga tayyor versiya",
          "UI — ranglar, tipografika, ikonka va animatsiyalar",
          "Handoff — Figma fayli, dizayn tizimi va spetsifikatsiya",
        ],
      },
      {
        h2: "Dizayn tizimi nima uchun kerak",
        body: [
          "Bitta sahifa uchun dizayn — bu rasm. Yigirmata sahifa uchun dizayn — bu tizim. Agar tugmalar, shriftlar va oraliqlar qoidasi yozilmagan bo'lsa, uchinchi oyda sayt bir-biriga o'xshamaydigan sahifalar to'plamiga aylanadi.",
          "Biz har bir loyihada dizayn tizimi topshiramiz — bu keyingi sahifalarni 3 barobar tez va arzon qo'shish imkonini beradi.",
        ],
      },
    ],
    faq: [
      {
        q: "UI/UX dizayn qancha turadi?",
        a: "Landing dizayni 6 000 000 so'mdan, korporativ sayt 12 000 000 so'mdan, mobil ilova yoki murakkab veb-ilova 20 000 000 so'mdan boshlanadi.",
      },
      {
        q: "Faqat dizayn buyurtma qilsam bo'ladimi?",
        a: "Ha. Figma fayli, dizayn tizimi va spetsifikatsiyani topshiramiz — istalgan dasturchi jamoasi shu bilan ishlay oladi.",
      },
      {
        q: "Necha marta tuzatish kiritish mumkin?",
        a: "Har bir bosqichda 2 ta bepul tuzatish davri. Amalda tadqiqot va prototip bosqichi to'g'ri o'tsa, UI bosqichida jiddiy o'zgartirish kamdan-kam kerak bo'ladi.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 8 */
  {
    slug: "api-integratsiya",
    navTitle: "API integratsiya",
    h1: "API integratsiya xizmatlari",
    metaTitle: "API integratsiya — Click, Payme, 1C, Didox, Soliq va SAP",
    metaDescription:
      "API integratsiya xizmatlari: Click va Payme to'lovlari, 1C, Didox, Soliq portali, SAP va CRM tizimlari o'rtasida ma'lumot almashinuvi.",
    keywords: [
      "API integratsiya",
      "Click integratsiya",
      "Payme integratsiya",
      "1C integratsiya",
      "Didox integratsiya",
      "SAP integratsiya",
    ],
    summary:
      "To'lov tizimlari, 1C, Didox, Soliq va SAP — tizimlaringiz bir-biri bilan gaplashishi kerak.",
    tags: ["Click", "Payme", "Didox", "Soliq", "1C", "SAP"],
    priceFrom: 5_000_000,
    duration: "1–8 hafta",
    intro:
      "Kompaniyada 5 ta dastur bo'lishi muammo emas. Muammo — xodim bir dasturdan ma'lumotni ko'chirib, ikkinchisiga qo'lda kiritishi. Bu vaqt va xato demakdir. API integratsiya shu qo'lda ishni butunlay olib tashlaydi.",
    deliverables: [
      "Integratsiya arxitekturasi va ma'lumot oqimi sxemasi",
      "API ulanish va ma'lumotlarni moslashtirish",
      "Xatoliklarni qayta ishlash va takroriy urinish mantiqi",
      "Loglar va monitoring paneli",
      "Texnik hujjatlashtirish",
      "Sinov muhitida to'liq test",
    ],
    sections: [
      {
        h2: "Eng ko'p so'raladigan integratsiyalar",
        list: [
          "To'lov tizimlari — Click, Payme, Uzum Bank, Octo, Stripe",
          "1C integratsiya — mahsulot, qoldiq, narx va hujjatlar sinxronizatsiyasi",
          "Didox — elektron hisob-faktura va shartnomalar almashinuvi",
          "Soliq portali — soliq hisoboti uchun ma'lumot uzatish",
          "SAP integratsiya — korporativ kontur bilan ikki tomonlama almashinuv",
          "CRM va marketing — Bitrix24, amoCRM, Telegram, SMS shlyuzlari",
        ],
      },
      {
        h2: "1C integratsiya qanday ishlaydi",
        body: [
          "Eng keng tarqalgan ssenariy: internet do'kon 1C'dan mahsulot, narx va ombor qoldig'ini oladi, buyurtmalarni esa 1C'ga qaytarib yozadi. Menejer 1C'da ishlashda davom etadi, sayt esa avtomatik yangilanadi.",
          "Almashinuv 5 daqiqadan bir kungacha oraliqda sozlanadi. Muhim nuqta — qoldiq real vaqtda tekshiriladi, shuning uchun omborda yo'q mahsulot sotilib qolmaydi.",
        ],
      },
      {
        h2: "Integratsiyada nima noto'g'ri ketadi",
        body: [
          "Ko'p integratsiyalar birinchi oyda ishlaydi, keyin jimgina buziladi — API o'zgaradi, token muddati tugaydi yoki tarmoq uziladi. Shuning uchun biz har bir integratsiyaga log, xato bildirishnomasi va avtomatik qayta urinish mantiqini quramiz.",
        ],
      },
    ],
    faq: [
      {
        q: "API integratsiya qancha turadi?",
        a: "Oddiy to'lov integratsiyasi 5 000 000 so'mdan, 1C bilan ikki tomonlama sinxronizatsiya 12 000 000 so'mdan, SAP darajasidagi korporativ integratsiya 30 000 000 so'mdan boshlanadi.",
      },
      {
        q: "Bizda API hujjatlari yo'q, nima qilamiz?",
        a: "Bu tez-tez uchraydi. Biz mavjud tizimni tekshiramiz va agar API bo'lmasa, ma'lumot bazasi darajasida yoki fayl almashinuvi orqali yechim taklif qilamiz.",
      },
      {
        q: "Integratsiya ishlashda davom etishini qanday bilamiz?",
        a: "Monitoring paneli beriladi — har bir almashinuv logi ko'rinadi. Xatolik yuz bersa Telegram orqali bildirishnoma keladi.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 9 */
  {
    slug: "suniy-intellekt",
    navTitle: "Sun'iy intellekt",
    h1: "Sun'iy intellekt yechimlari",
    metaTitle: "Sun'iy intellekt yechimlari — AI agent, chatbot va avtomatlashtirish",
    metaDescription:
      "Biznes uchun sun'iy intellekt: AI agent, ChatGPT chatbot, ovozli AI va hujjatlarni avtomatik qayta ishlash. O'zbek tilida ishlaydigan yechimlar.",
    keywords: [
      "sun'iy intellekt",
      "AI agent",
      "ChatGPT bot",
      "AI chatbot",
      "biznes uchun AI",
      "voice AI",
    ],
    summary:
      "AI agent, chatbot, ovozli yordamchi va hujjat tahlili — o'zbek tilini tushunadigan yechimlar.",
    tags: ["ChatGPT", "AI Agent", "Voice AI", "Automation"],
    priceFrom: 8_000_000,
    duration: "3–12 hafta",
    intro:
      "Sun'iy intellekt haqidagi gaplarning ko'pi hali ham namoyish darajasida. Biz esa aniq vazifalarni beramiz: mijoz savoliga javob berish, hujjatdan ma'lumot ajratib olish, qo'ng'iroqni matnga aylantirish. Har biri o'lchanadigan vaqt va pul tejaydi.",
    deliverables: [
      "Vazifani aniqlash va AI qo'llash mumkinligini baholash",
      "Bilimlar bazasi tayyorlash (RAG arxitekturasi)",
      "Model tanlash va sozlash",
      "Telegram, sayt yoki CRM'ga integratsiya",
      "Sifat nazorati va javoblarni baholash tizimi",
      "Sarf-xarajat monitoringi",
    ],
    sections: [
      {
        h2: "AI qanday vazifalarni hal qiladi",
        list: [
          "Mijozlarga qo'llab-quvvatlash — tez-tez so'raladigan savollarning 70 foizini AI yopadi",
          "AI agent — bir necha bosqichli vazifani mustaqil bajaradi: ma'lumot topadi, tizimga yozadi, xabar yuboradi",
          "Hujjat tahlili — shartnoma, hisob-faktura va arizadan ma'lumotni avtomatik ajratib oladi",
          "Ovozli AI — qo'ng'iroqni matnga aylantiradi, mazmunini xulosalaydi va CRM'ga yozadi",
          "Kontent — mahsulot tavsiflari, maqola qoralamalari, tarjima",
        ],
      },
      {
        h2: "O'zbek tilida AI ishlaydimi",
        body: [
          "Ha, ammo ehtiyotkorlik bilan. Zamonaviy modellar o'zbek tilini yaxshi tushunadi, lekin sohaviy atamalar va kompaniyaga xos ma'lumotlarni bilmaydi.",
          "Shuning uchun biz RAG yondashuvidan foydalanamiz: model sizning hujjatlaringiz, narxlaringiz va qoidalaringizdan javob quradi — o'zidan to'qimaydi. Bu javob aniqligini keskin oshiradi.",
        ],
      },
      {
        h2: "Xarajatlarni nazorat qilish",
        body: [
          "AI yechimining asosiy xavfi — nazoratsiz token sarfi. Biz har bir loyihada limit, keshlash va arzonroq model bilan avval filtrlash mexanizmini quramiz. Odatda bu oylik AI xarajatini 3–5 barobar kamaytiradi.",
        ],
      },
    ],
    faq: [
      {
        q: "AI yechimi qancha turadi?",
        a: "Bilimlar bazasiga asoslangan chatbot 8 000 000 so'mdan, AI agent 20 000 000 so'mdan boshlanadi. Bunga qo'shimcha oylik model xarajati bor — odatda 300 000 dan 3 000 000 so'mgacha, yuklamaga qarab.",
      },
      {
        q: "AI noto'g'ri javob bersa-chi?",
        a: "Biz javob manbasini ko'rsatadigan va ishonch darajasi past bo'lganda operatorga uzatadigan tizim quramiz. AI o'zi bilmagan narsani to'qimaydi — bilmayman deb operatorni chaqiradi.",
      },
      {
        q: "Ma'lumotlarimiz xavfsizmi?",
        a: "Korporativ API'lar orqali yuborilgan ma'lumot model o'qitishda ishlatilmaydi. Maxfiylik talabi yuqori bo'lsa, o'z serveringizda ishlaydigan ochiq model variantini taklif qilamiz.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 10 */
  {
    slug: "texnik-qollab-quvvatlash",
    navTitle: "Texnik qo'llab-quvvatlash",
    h1: "Texnik qo'llab-quvvatlash",
    metaTitle: "Texnik qo'llab-quvvatlash — sayt va tizimlar uchun 24/7 support",
    metaDescription:
      "Sayt va tizimlar uchun texnik qo'llab-quvvatlash: 24/7 monitoring, yangilanishlar, xatoliklarni tuzatish, zaxira nusxa. Oyiga 1 500 000 so'mdan.",
    keywords: [
      "texnik qo'llab-quvvatlash",
      "sayt texnik xizmat",
      "IT support",
      "sayt monitoring",
      "sayt yangilash",
    ],
    summary:
      "24/7 monitoring, yangilanishlar, zaxira nusxa va xatoliklarni tez tuzatish — sayt ishlab turishi sizning ishingiz emas.",
    tags: ["24/7", "Monitoring", "Updates", "Bug fix"],
    priceFrom: 1_500_000,
    duration: "Oylik shartnoma",
    intro:
      "Sayt ishga tushgan kun — bu tugash emas, boshlanish. Serverda joy tugaydi, SSL muddati o'tadi, kutubxonalarda zaiflik topiladi. Bularning har biri saytni o'chirib qo'yishi mumkin — odatda eng noqulay paytda.",
    deliverables: [
      "24/7 uptime monitoring va tushib qolishda darhol xabar",
      "Xavfsizlik yangilanishlari va zaifliklarni yopish",
      "Kunlik avtomatik zaxira nusxa",
      "Kontent va kichik o'zgartirishlar (kelishilgan soat hajmida)",
      "Tezlik va Core Web Vitals nazorati",
      "Oylik texnik holat hisoboti",
    ],
    sections: [
      {
        h2: "Tariflar",
        list: [
          "Bazaviy — monitoring, zaxira nusxa, yangilanishlar. Oyiga 1 500 000 so'm",
          "Standart — bazaviy + oyiga 8 soat ish, 8 soat ichida javob. 3 500 000 so'm",
          "Biznes — 24/7 navbatchilik, 2 soat ichida javob, oyiga 20 soat ish. 7 000 000 so'm",
          "Korporativ — SLA shartnomasi, ajratilgan muhandis, individual shartlar",
        ],
      },
      {
        h2: "Nima kiradi va nima kirmaydi",
        body: [
          "Kiradi: xatoliklarni tuzatish, kontent yangilash, yangilanishlar, monitoring, konsultatsiya. Kirmaydi: yangi modul ishlab chiqish yoki dizaynni to'liq qayta qurish — bular alohida loyiha sifatida baholanadi.",
          "Har oy sarflangan soatlar hisoboti beriladi, foydalanilmagan soatlar keyingi oyga o'tadi.",
        ],
      },
    ],
    faq: [
      {
        q: "Sayt boshqa jamoada qurilgan bo'lsa, olib ketasizmi?",
        a: "Ha. Avval texnik audit o'tkazamiz (3 000 000 so'm, keyin shartnomaga hisobga olinadi) va holatni baholaymiz. Kod juda yomon holatda bo'lsa, buni ochiq aytamiz.",
      },
      {
        q: "Tushib qolganda qancha vaqtda tiklaysiz?",
        a: "Bazaviy tarifda ish kunlari 8 soat ichida, Biznes tarifda 2 soat ichida javob beramiz. Kritik tushib qolishlar navbatdan tashqari hal qilinadi.",
      },
      {
        q: "Shartnomani istalgan vaqtda bekor qilsam bo'ladimi?",
        a: "Ha, 30 kun oldin ogohlantirish bilan. Barcha kirish ma'lumotlari va zaxira nusxalar sizga topshiriladi.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 11 */
  {
    slug: "cloud-xizmatlari",
    navTitle: "Cloud xizmatlari",
    h1: "Cloud xizmatlari va server sozlash",
    metaTitle: "Cloud xizmatlari — AWS, DigitalOcean, Hetzner va Azure sozlash",
    metaDescription:
      "Cloud xizmatlari: AWS, DigitalOcean, Hetzner va Azure'da infratuzilma qurish, server sozlash, migratsiya va xarajatlarni optimallashtirish.",
    keywords: [
      "cloud xizmatlari",
      "server sozlash",
      "AWS sozlash",
      "VPS server",
      "cloud migratsiya",
      "hosting Toshkent",
    ],
    summary:
      "AWS, DigitalOcean, Hetzner va Azure'da barqaror infratuzilma — migratsiya, sozlash va xarajat optimizatsiyasi.",
    tags: ["AWS", "DigitalOcean", "Hetzner", "Azure"],
    priceFrom: 4_000_000,
    duration: "1–6 hafta",
    intro:
      "Server — bu shunchaki ijaraga olingan kompyuter emas. Noto'g'ri sozlangan server sekin ishlaydi, buziladi va oyiga kerakligidan uch barobar ko'p pul yeydi. To'g'ri qurilgan infratuzilma esa yuklama oshganda o'zi kengayadi va tushib qolganda o'zi tiklanadi.",
    deliverables: [
      "Infratuzilma arxitekturasini loyihalash",
      "Server o'rnatish va xavfsizlik sozlamalari",
      "Ma'lumotlar bazasi va avtomatik zaxira nusxa",
      "SSL, domen va DNS sozlash",
      "Monitoring va ogohlantirish tizimi",
      "Xarajatlarni optimallashtirish tahlili",
    ],
    sections: [
      {
        h2: "Qaysi provayderni tanlash",
        list: [
          "Hetzner — eng arzon, Yevropada joylashgan, o'rtacha loyihalar uchun ideal",
          "DigitalOcean — sodda, hujjatlari yaxshi, startaplar uchun qulay",
          "AWS — eng keng imkoniyatlar, korporativ talablar va katta yuklama uchun",
          "Azure — Microsoft ekotizimi va 1C bilan ishlaydigan kompaniyalar uchun",
          "Mahalliy data-markazlar — ma'lumot O'zbekistonda saqlanishi shart bo'lganda",
        ],
      },
      {
        h2: "Migratsiya — uzilishsiz",
        body: [
          "Eski hostingdan ko'chirish ko'pincha sayt bir necha soat ishlamasligi bilan tugaydi. Biz boshqacha ishlaymiz: yangi muhitni to'liq quramiz, ma'lumotlarni sinxronlaymiz, testdan o'tkazamiz va faqat shundan keyin DNS'ni o'zgartiramiz.",
          "Amalda uzilish vaqti nolga yaqin bo'ladi va eski server yana bir hafta zaxirada turadi.",
        ],
      },
      {
        h2: "Xarajatni kamaytirish",
        body: [
          "Bulut hisobi odatda kerakligidan katta bo'ladi: ishlatilmayotgan disklar, ortiqcha quvvat, arxivga o'tmagan loglar. Audit natijasida oylik xarajatni 30–50 foizga kamaytirish odatiy hol.",
        ],
      },
    ],
    faq: [
      {
        q: "Server sozlash qancha turadi?",
        a: "Bitta VPS to'liq sozlash 4 000 000 so'mdan. Yuklamaga moslashuvchi klaster arxitekturasi 15 000 000 so'mdan. Bulut ijarasi alohida to'lanadi — odatda oyiga 300 000 dan 4 000 000 so'mgacha.",
      },
      {
        q: "Ma'lumot O'zbekistonda saqlanishi shartmi?",
        a: "Shaxsiy ma'lumotlar bilan ishlaydigan tizimlar uchun qonunchilik talablari bor. Biz mahalliy data-markazlarda ham infratuzilma quramiz va talablarga moslikni tekshiramiz.",
      },
      {
        q: "Serverni o'zimiz boshqara olamizmi?",
        a: "Ha. Barcha kirish ma'lumotlari sizniki bo'ladi, hujjatlashtirish topshiriladi. Xohlasangiz texnik qo'llab-quvvatlash shartnomasi bilan biz yuritamiz.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 12 */
  {
    slug: "devops-xizmatlari",
    navTitle: "DevOps xizmatlari",
    h1: "DevOps xizmatlari",
    metaTitle: "DevOps xizmatlari — Docker, CI/CD, Nginx va Linux",
    metaDescription:
      "DevOps xizmatlari: Docker konteynerlash, CI/CD quvurlari, Nginx va Linux sozlash, monitoring va avtomatik deploy. Relizni daqiqalarga qisqartiring.",
    keywords: [
      "DevOps xizmatlari",
      "CI CD sozlash",
      "Docker",
      "Nginx sozlash",
      "avtomatik deploy",
      "Kubernetes",
    ],
    summary:
      "Docker, CI/CD, Nginx va monitoring — reliz yarim kun emas, olti daqiqa davom etsin.",
    tags: ["Docker", "Nginx", "Linux", "CI/CD"],
    priceFrom: 6_000_000,
    duration: "2–8 hafta",
    intro:
      "Agar yangi versiyani chiqarish uchun dasturchi serverga kirib, fayllarni qo'lda ko'chirishi kerak bo'lsa — reliz har doim qo'rqinchli bo'ladi va shuning uchun kamdan-kam qilinadi. DevOps buni o'zgartiradi: kod yozildi, testdan o'tdi, avtomatik chiqdi.",
    deliverables: [
      "Docker konteynerlash va Compose konfiguratsiyasi",
      "CI/CD quvuri — GitHub Actions yoki GitLab CI",
      "Sinov, staging va ishlab chiqarish muhitlari",
      "Nginx, SSL va reverse proxy sozlash",
      "Monitoring va loglarni markazlashtirish",
      "Rollback — muammoli relizni bir tugmada qaytarish",
    ],
    sections: [
      {
        h2: "DevOps nima beradi",
        list: [
          "Reliz vaqti yarim kundan 5–10 daqiqaga tushadi",
          "Inson xatosi yo'qoladi — jarayon bir xil takrorlanadi",
          "Muammoli versiya bir tugmada orqaga qaytariladi",
          "Har bir dasturchi bir xil muhitda ishlaydi — mening kompyuterimda ishlagan edi muammosi tugaydi",
          "Tushib qolish monitoring orqali oldindan bilinadi",
        ],
      },
      {
        h2: "Kubernetes kerakmi",
        body: [
          "Ko'pincha yo'q. Kubernetes kuchli, ammo uni yuritish alohida bilim va xarajat talab qiladi. Kunlik 50 000 tashrifgacha bo'lgan loyihalar uchun Docker Compose va oddiy CI/CD to'liq yetarli.",
          "Biz Kubernetes'ni faqat haqiqiy ehtiyoj bo'lganda — bir nechta xizmat, katta jamoa va o'zgaruvchan yuklama mavjud bo'lganda taklif qilamiz.",
        ],
      },
    ],
    faq: [
      {
        q: "DevOps sozlash qancha turadi?",
        a: "Bitta loyiha uchun Docker va CI/CD 6 000 000 so'mdan. Bir nechta xizmatli murakkab infratuzilma 20 000 000 so'mdan boshlanadi.",
      },
      {
        q: "Mavjud loyihaga qo'shsa bo'ladimi?",
        a: "Ha, bu eng ko'p uchraydigan holat. Kodni o'zgartirmasdan konteynerlash va avtomatik deploy quramiz — odatda 2–3 haftada.",
      },
      {
        q: "Jamoamizni o'rgatasizmi?",
        a: "Ha, topshirishda hujjatlashtirish va amaliy sessiya o'tkazamiz. Maqsad — bizsiz ham reliz qila olishingiz.",
      },
    ],
  },
];

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

/** Landing sahifadagi xizmatlar bloki uchun qisqa ro'yxat */
export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
