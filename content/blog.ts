export type PostSection = {
  h2: string;
  body?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  /** ISO sana */
  date: string;
  updated: string;
  readingMinutes: number;
  category: string;
  intro: string;
  sections: PostSection[];
  /** Ichki havolalar — tegishli xizmat sahifalari slug'lari */
  related: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  /* ------------------------------------------------------------- 1 */
  {
    slug: "dasturlash-xizmatlari-nima",
    title: "Dasturlash xizmatlari nima va biznesga qanday foyda beradi?",
    metaTitle: "Dasturlash xizmatlari nima va biznesga qanday foyda beradi?",
    metaDescription:
      "Dasturlash xizmatlari nima, ular qanday turlarga bo'linadi va O'zbekistondagi biznesga qanday aniq foyda keltiradi — amaliy misollar bilan.",
    keywords: [
      "dasturlash xizmatlari",
      "dasturlash xizmatlari O'zbekiston",
      "IT xizmatlar",
      "dasturiy ta'minot ishlab chiqish",
    ],
    excerpt:
      "Dasturlash xizmati — bu kod yozish emas, biznes muammosini dastur yordamida hal qilish. Qaysi turlari bor va qaysi biri sizga kerak.",
    date: "2026-08-14",
    updated: "2026-09-02",
    readingMinutes: 8,
    category: "Asoslar",
    intro:
      "Ko'p rahbar dasturlash xizmatini sayt yasatish deb tushunadi. Aslida bu ancha keng tushuncha: biznesdagi takrorlanuvchi, qimmat yoki xatoga moyil har qanday jarayonni dastur bilan almashtirish. Quyida bu xizmatlar qanday turlarga bo'linishini va har biri qanday muammoni yechishini ko'rib chiqamiz.",
    sections: [
      {
        h2: "Dasturlash xizmatlari nima",
        body: [
          "Dasturlash xizmati — bu buyurtmachi biznesining aniq vazifasi uchun dasturiy yechim loyihalash, ishlab chiqish, joriy qilish va yuritish. Bu tayyor qutidagi mahsulot sotish emas: yechim sizning jarayoningizga moslab quriladi.",
          "Farqni oddiy misolda ko'rish mumkin. Tayyor dastur sotib olsangiz, jarayoningizni dasturga moslashtirasiz. Buyurtma asosidagi ishlab chiqishda esa dastur sizning jarayoningizga moslashadi. Birinchisi arzon va tez, ikkinchisi qimmat lekin aniq mos keladi.",
        ],
      },
      {
        h2: "Asosiy yo'nalishlar",
        list: [
          "Veb-ishlab chiqish — landing, korporativ sayt, internet do'kon, veb-ilova",
          "Mobil ishlab chiqish — Android va iOS ilovalari",
          "Biznes tizimlari — CRM, ERP, ombor va HR yechimlari",
          "Avtomatlashtirish — Telegram botlar, hisobot generatorlari, integratsiyalar",
          "Sun'iy intellekt — chatbot, hujjat tahlili, ovozli yordamchi",
          "Infratuzilma — server, cloud, DevOps, monitoring",
          "Qo'llab-quvvatlash — mavjud tizimni yuritish va rivojlantirish",
        ],
      },
      {
        h2: "Biznes qanday aniq foyda oladi",
        body: [
          "Foydani uchta o'lchanadigan toifaga bo'lish mumkin. Birinchisi — vaqt tejash. Kunlik hisobotni qo'lda yig'ish 40 daqiqa olsa, avtomatlashtirilgan hisobot 0 daqiqa oladi. Oyiga bu 14 soat, yiliga 170 soat — bir yarim oylik ish vaqti.",
          "Ikkinchisi — xatolarni kamaytirish. Ombordagi qoldiq qo'lda yuritilsa, xato muqarrar. Tizim esa har bir harakatni yozadi va nomuvofiqlikni darhol ko'rsatadi.",
          "Uchinchisi — yangi daromad. Sayt qidiruvdan mijoz olib keladi, bot kechasi buyurtma qabul qiladi, ilova esa mijozni qaytarib keladi. Bular yangi sotuv kanallari.",
        ],
      },
      {
        h2: "Qayerdan boshlash kerak",
        body: [
          "Texnologiyadan emas, muammodan boshlang. Eng ko'p vaqt yeydigan yoki eng ko'p pul yo'qotadigan uchta jarayonni yozib chiqing. Keyin har biriga savol bering: buni dastur bajara oladimi?",
          "Amalda birinchi loyiha eng katta emas, eng tez natija beradigani bo'lishi kerak. Kichik g'alaba jamoaning ishonchini oshiradi va keyingi bosqichga yo'l ochadi.",
        ],
      },
      {
        h2: "Xizmat ko'rsatuvchini qanday tanlash",
        list: [
          "Portfolio — sizning sohangizga yaqin loyihalar bormi",
          "Shartnoma — muddat, narx va kafolat yozma qayd etilganmi",
          "Kod egaligi — loyiha tugagach kod sizga o'tadimi",
          "Hujjatlashtirish — boshqa jamoa davom ettira oladimi",
          "Qo'llab-quvvatlash — ishga tushgandan keyin kim javob beradi",
        ],
      },
    ],
    related: ["web-sayt-yaratish", "crm-tizimi", "telegram-bot-yaratish"],
  },

  /* ------------------------------------------------------------- 2 */
  {
    slug: "web-sayt-yoki-telegram-bot",
    title: "Web sayt yoki Telegram bot: qaysi biri biznesingiz uchun foydaliroq?",
    metaTitle: "Web sayt yoki Telegram bot — qaysi biri biznesga foydaliroq?",
    metaDescription:
      "Web sayt va Telegram bot o'rtasidagi farq, har birining kuchli tomonlari va byudjetingizga qarab qaysi birini birinchi qilish kerakligi.",
    keywords: [
      "web sayt",
      "telegram bot",
      "sayt yoki bot",
      "telegram bot yoki sayt",
    ],
    excerpt:
      "Ikkalasi ham kerak, lekin tartib muhim. Byudjet cheklangan bo'lsa, qaysi birini birinchi qurish kerakligini aniqlaymiz.",
    date: "2026-08-06",
    updated: "2026-08-28",
    readingMinutes: 7,
    category: "Tanlov",
    intro:
      "Bu savol deyarli har bir brifda chiqadi. To'g'ri javob biznes turiga bog'liq: ba'zi kompaniyalar uchun bot birinchi kundan sotadi, boshqalari uchun esa saytsiz umuman ishonch qozonib bo'lmaydi.",
    sections: [
      {
        h2: "Ikkalasi qanday vazifani bajaradi",
        body: [
          "Sayt — bu ishonch va topilish. Odam Google'da qidiradi, sizni topadi, narxlar va portfolio bilan tanishadi, keyin murojaat qiladi. Sayt sizga tegishli, indekslanadi va yillar davomida trafik olib keladi.",
          "Bot — bu tezlik va qulaylik. Odam sizni allaqachon biladi, unga faqat tez buyurtma berish kerak. Bot ilova yuklab olishni talab qilmaydi va push xabar bepul.",
        ],
      },
      {
        h2: "Bot birinchi bo'lishi kerak bo'lgan holatlar",
        list: [
          "Buyurtmalar takrorlanadi — restoran, yetkazib berish, gullar, suv",
          "Mijozlar oqimi Instagram yoki Telegram kanalidan keladi",
          "Bron qilish kerak — stol, xona, navbat, qabul",
          "Byudjet 5 000 000 so'mgacha va tez natija kerak",
          "Xaridning o'zi sodda: tanla — to'la — kut",
        ],
      },
      {
        h2: "Sayt birinchi bo'lishi kerak bo'lgan holatlar",
        list: [
          "Xizmat qimmat va uzoq o'ylanadi — qurilish, huquq, tibbiyot, B2B",
          "Mijoz Google'da qidiradi — masalan, konditsioner o'rnatish narxi",
          "Portfolio va ishonch dalillari muhim rol o'ynaydi",
          "Kontekst reklama ishga tushirmoqchisiz — reklama qo'nish sahifasini talab qiladi",
          "Kompaniya tender yoki yirik mijozlar bilan ishlaydi",
        ],
      },
      {
        h2: "Eng kuchli variant — ikkalasi birga",
        body: [
          "Amalda eng yaxshi natija sayt va bot bir tizimga bog'langanda chiqadi. Sayt qidiruvdan trafik keltiradi va ishonch hosil qiladi, bot esa shu trafikni buyurtmaga aylantiradi va mijoz bilan aloqani ushlab turadi.",
          "Bitta mijozimizda saytdagi buyurtma tugmasi botga olib boradi. Sayt konversiyasi 1,8 foizdan 4,3 foizga chiqdi — odamlar uzun forma to'ldirishdan ko'ra Telegramda yozishni afzal ko'rdi.",
        ],
      },
      {
        h2: "Byudjet taqsimoti bo'yicha maslahat",
        body: [
          "Agar 10 000 000 so'm byudjetingiz bo'lsa, uni ikkiga bo'lish o'rniga bosqichma-bosqich boring: avval biznesingizga mos birinchi kanalni sifatli quring, undan kelgan daromadga ikkinchisini qo'shing.",
          "Ikkita yarim tayyor mahsulotdan bitta ishlaydigani ancha foydali.",
        ],
      },
    ],
    related: ["web-sayt-yaratish", "telegram-bot-yaratish", "seo-xizmatlari"],
  },

  /* ------------------------------------------------------------- 3 */
  {
    slug: "crm-tizimi-nima",
    title: "CRM tizimi nima va uni qachon joriy qilish kerak?",
    metaTitle: "CRM tizimi nima va qachon joriy qilish kerak?",
    metaDescription:
      "CRM tizimi nima, u qanday muammolarni hal qiladi, joriy qilish belgilari va O'zbekistondagi biznes uchun amaliy tavsiyalar.",
    keywords: ["CRM", "CRM tizimi", "CRM joriy qilish", "CRM nima"],
    excerpt:
      "CRM — dastur emas, sotuv jarayonining yozma qoidasi. Uni qachon joriy qilish kerakligini beshta belgi orqali aniqlaymiz.",
    date: "2026-07-29",
    updated: "2026-08-30",
    readingMinutes: 9,
    category: "Biznes tizimlari",
    intro:
      "CRM — Customer Relationship Management, ya'ni mijozlar bilan munosabatlarni boshqarish tizimi. Ammo bu ta'rif nima uchun kerakligini tushuntirmaydi. Amalda CRM bitta savolga javob beradi: kelgan har bir mijoz bilan nima bo'ldi?",
    sections: [
      {
        h2: "CRM qanday muammoni hal qiladi",
        body: [
          "Mijoz qo'ng'iroq qildi, menejer daftariga yozdi. Ertasiga menejer kasal bo'ldi. Mijoz raqobatchiga ketdi. Bu O'zbekistondagi kichik va o'rta biznesda kuniga yuzlab marta takrorlanadigan holat.",
          "CRM bu zanjirni uzadi. Har bir murojaat tizimga tushadi, har bir bosqichda mas'ul va muddat bo'ladi, hech bir lid e'tibordan chetda qolmaydi.",
        ],
      },
      {
        h2: "Joriy qilish vaqti kelganini bildiruvchi beshta belgi",
        list: [
          "Sotuv bo'yicha ikki va undan ortiq xodim ishlaydi",
          "Oyiga 50 dan ortiq murojaat keladi va ular turli kanaldan tushadi",
          "Rahbar qancha lid kelgani va qanchasi sotuvga aylanganini aniq ayta olmaydi",
          "Menejer ishdan ketganda mijozlar bazasi ham u bilan ketadi",
          "Takroriy sotuv bo'yicha ish yo'q — eski mijozlarga qayta murojaat qilinmaydi",
        ],
      },
      {
        h2: "CRM'da nimalar bo'lishi kerak",
        list: [
          "Sotuv voronkasi — lid qaysi bosqichda ekani ko'rinadi",
          "Aloqa tarixi — qo'ng'iroq, xat, xabar bir joyda",
          "Vazifalar va eslatmalar — hech kim qayta qo'ng'iroqni unutmaydi",
          "Hisobotlar — konversiya, o'rtacha chek, menejer samaradorligi",
          "Integratsiyalar — telefoniya, Telegram, sayt formasi, 1C",
        ],
      },
      {
        h2: "Tayyor CRM yoki o'z tizimingiz",
        body: [
          "Bitrix24 va amoCRM tez ishga tushadi va arzonroq. Jarayoningiz standart bo'lsa — bu to'g'ri tanlov.",
          "O'z tizimingiz esa jarayon o'ziga xos bo'lganda kerak: 1C bilan chuqur bog'lanish, Didox orqali hujjat almashish, ko'p valyutali hisob yoki maxsus ruxsat qoidalari. Ustama sifatida oylik abonent to'lovi bo'lmaydi va ma'lumot o'z serveringizda qoladi.",
        ],
      },
      {
        h2: "Nega ko'p CRM loyihalari muvaffaqiyatsiz tugaydi",
        body: [
          "Asosiy sabab texnik emas, tashkiliy. Tizim sotib olinadi, lekin jarayon yozilmaydi va xodimlar o'rgatilmaydi. Uch oydan keyin hamma yana Excel'ga qaytadi.",
          "Shuning uchun joriy qilishni dasturdan emas, jarayonni qog'ozda chizishdan boshlash kerak. Kim, qachon, nimani kiritadi — bu savolga javob bo'lmasa, hech qanday CRM yordam bermaydi.",
        ],
      },
    ],
    related: ["crm-tizimi", "erp-tizimi", "api-integratsiya"],
  },

  /* ------------------------------------------------------------- 4 */
  {
    slug: "2026-yilda-eng-kerakli-it-yechimlar",
    title: "2026-yilda biznes uchun eng kerakli 10 ta IT yechim",
    metaTitle: "2026-yilda biznes uchun eng kerakli 10 ta IT yechim",
    metaDescription:
      "2026-yilda O'zbekistondagi biznes uchun eng katta ta'sir beradigan 10 ta IT yechim — har biri uchun narx va joriy qilish muddati bilan.",
    keywords: [
      "IT xizmatlar",
      "business automation",
      "biznes uchun IT yechimlar",
      "raqamlashtirish",
    ],
    excerpt:
      "Trend uchun emas, natija uchun tanlangan o'nta yechim — har biri qaysi biznesga mos kelishi va qanchaga tushishi bilan.",
    date: "2026-07-18",
    updated: "2026-09-01",
    readingMinutes: 10,
    category: "Strategiya",
    intro:
      "Ro'yxatlar odatda modaga qaraydi. Biz esa oxirgi ikki yilda mijozlarimizda haqiqiy o'lchanadigan natija bergan yechimlarni tanladik — ularning har biri yo xarajatni kamaytirdi, yo daromadni oshirdi.",
    sections: [
      {
        h2: "1. Tez ochiladigan, SEO'ga tayyor sayt",
        body: [
          "Eski WordPress sayt 5 soniyada ochilsa, tashrif buyuruvchilarning yarmi ketadi. Zamonaviy stekda qayta qurilgan sayt odatda 1,5 soniyada ochiladi va bir necha oyda organik trafikni 2–3 barobar oshiradi. Narxi 4 000 000 so'mdan.",
        ],
      },
      {
        h2: "2. Buyurtma qabul qiluvchi Telegram bot",
        body: [
          "Eng tez o'zini oqlaydigan yechim. Operator yuklamasini kamaytiradi, kechasi ham ishlaydi va mijoz bazasini yig'adi. 7 kunda ishga tushadi, 3 000 000 so'mdan.",
        ],
      },
      {
        h2: "3. CRM va sotuv voronkasi",
        body: [
          "Yo'qolgan lidlar — eng ko'rinmas yo'qotish. CRM joriy qilingandan keyin konversiyaning 15–25 foizga o'sishi odatiy natija, chunki oddiygina hech kim qayta qo'ng'iroqni unutmaydi.",
        ],
      },
      {
        h2: "4. 1C va sayt integratsiyasi",
        body: [
          "Qoldiq va narxni qo'lda ko'chirish har kuni bir necha soat oladi va xatoga olib keladi. Ikki tomonlama sinxronizatsiya buni butunlay olib tashlaydi.",
        ],
      },
      {
        h2: "5. Bilimlar bazasiga asoslangan AI chatbot",
        body: [
          "Tez-tez so'raladigan savollarning 60–70 foizini yopadi. Muhim shart — u sizning hujjatlaringizdan javob berishi, o'zidan to'qimasligi kerak.",
        ],
      },
      {
        h2: "6. Elektron hujjat aylanmasi (Didox)",
        body: [
          "Qog'oz shartnoma va hisob-fakturalar bilan ishlash bugun raqobat kamchiligi. Didox integratsiyasi hujjat aylanish vaqtini kunlardan daqiqalarga tushiradi.",
        ],
      },
      {
        h2: "7. Ombor va inventarizatsiya tizimi",
        body: [
          "Savdo va ishlab chiqarishda eng katta yashirin yo'qotish shu yerda. Shtrix-kod bilan ishlaydigan tizim inventarizatsiyani bir kundan bir soatga qisqartiradi.",
        ],
      },
      {
        h2: "8. Avtomatik hisobot va dashboard",
        body: [
          "Rahbar har kuni yangilanadigan bitta ekranga qarasa — savdo, qarzdorlik, ombor, kassa — qaror qabul qilish tezligi keskin oshadi.",
        ],
      },
      {
        h2: "9. CI/CD va monitoring",
        body: [
          "Relizni avtomatlashtirmagan jamoa har bir yangilanishda xavf ostida. DevOps quvuri bu xavfni deyarli nolga tushiradi va reliz vaqtini daqiqalarga qisqartiradi.",
        ],
      },
      {
        h2: "10. Mobil ilova — takroriy foydalanish bo'lsa",
        body: [
          "Ilova hamma uchun emas. Ammo mijoz oyiga bir necha marta qaytadigan biznesda (yetkazib berish, fitnes, bank, ta'lim) u sotuvni sezilarli oshiradi.",
        ],
      },
      {
        h2: "Qaysi biridan boshlash kerak",
        body: [
          "Byudjet cheklangan bo'lsa, eng ko'p qo'l mehnati bor jarayonni tanlang. Odatda bu buyurtma qabul qilish yoki hisobot tayyorlash bo'ladi — ikkalasi ham nisbatan arzon avtomatlashtiriladi va natija birinchi oydayoq ko'rinadi.",
        ],
      },
    ],
    related: ["crm-tizimi", "api-integratsiya", "suniy-intellekt"],
  },

  /* ------------------------------------------------------------- 5 */
  {
    slug: "telegram-bot-orqali-avtomatlashtirish",
    title: "Telegram bot orqali biznesni avtomatlashtirish",
    metaTitle: "Telegram bot orqali biznesni avtomatlashtirish — amaliy qo'llanma",
    metaDescription:
      "Telegram bot yordamida buyurtma, to'lov, bron va ichki jarayonlarni avtomatlashtirish. Amaliy ssenariylar, integratsiyalar va natijalar.",
    keywords: [
      "telegram bot",
      "telegram automation",
      "biznesni avtomatlashtirish",
      "telegram bot buyurtma",
    ],
    excerpt:
      "Bot faqat savolga javob beradigan menyu emas. Mana u haqiqatda qanday jarayonlarni o'z zimmasiga olishi mumkin.",
    date: "2026-07-05",
    updated: "2026-08-20",
    readingMinutes: 8,
    category: "Avtomatlashtirish",
    intro:
      "O'zbekistonda Telegram — bu shunchaki messenjer emas, asosiy muloqot kanali. Shuning uchun bot bu yerda boshqa mamlakatlarga qaraganda ancha kuchli vosita: mijozni yangi ilovaga ko'chirish shart emas, u allaqachon shu yerda.",
    sections: [
      {
        h2: "Tashqi botlar — mijozlar bilan ishlash",
        list: [
          "Buyurtma qabul qilish — katalog, savat, manzil, to'lov",
          "Bron — stol, xona, navbat yoki shifokor qabuli",
          "Yetkazib berish holati — buyurtma qayerda ekani real vaqtda",
          "Sodiqlik dasturi — ball to'plash va chegirmalar",
          "Qo'llab-quvvatlash — tipik savollar va operatorga ulash",
        ],
      },
      {
        h2: "Ichki botlar — xodimlar bilan ishlash",
        list: [
          "Kunlik hisobot yig'ish — har bir xodim botga yozadi, tizim jamlaydi",
          "Ariza tasdiqlash — ta'til, avans, xarid bir tugmada tasdiqlanadi",
          "Davomat — geolokatsiya bilan kelish va ketish qayd etiladi",
          "Ogohlantirishlar — server tushdi, qoldiq tugadi, yangi lid keldi",
          "Ombor — shtrix-kod skanerlash va qoldiq tekshirish",
        ],
      },
      {
        h2: "To'lov qabul qilish qanday ishlaydi",
        body: [
          "Bot Click yoki Payme merchant hisobingiz bilan bog'lanadi. Foydalanuvchi buyurtmani rasmiylashtirgach, bot to'lov havolasini yaratadi. To'lov o'tgach, tizim tasdiqni oladi va buyurtmani avtomatik ravishda tayyorlashga yuboradi.",
          "Muhim: pul bevosita sizning hisobingizga tushadi, oraliq hisob bo'lmaydi.",
        ],
      },
      {
        h2: "Bot qurishda eng ko'p uchraydigan xatolar",
        list: [
          "Juda chuqur menyu — foydalanuvchi uch bosqichdan keyin chiqib ketadi",
          "Orqaga qaytish tugmasi yo'q — bu eng ko'p shikoyat sababi",
          "Operatorga ulanish imkoni yo'q — bot javob bera olmasa, mijoz yo'qoladi",
          "Xatoliklar ko'rsatilmaydi — to'lov o'tmasa, foydalanuvchi nima bo'lganini bilmaydi",
          "Admin panel yo'q — har bir o'zgarish uchun dasturchi kerak bo'ladi",
        ],
      },
      {
        h2: "Kutiladigan natija",
        body: [
          "Amaliyotimizda buyurtma qabul qiluvchi bot odatda operator yuklamasini 50–70 foizga kamaytiradi va o'rtacha buyurtma rasmiylashtirish vaqtini 6 daqiqadan 90 soniyaga tushiradi.",
          "Qo'shimcha foyda — har bir mijoz kontakti bazaga tushadi, bu esa keyingi ommaviy xabarlar uchun tayyor auditoriya.",
        ],
      },
    ],
    related: ["telegram-bot-yaratish", "crm-tizimi", "api-integratsiya"],
  },

  /* ------------------------------------------------------------- 6 */
  {
    slug: "mobil-ilova-yaratish-narxi",
    title: "Mobil ilova yaratish narxi qancha?",
    metaTitle: "Mobil ilova yaratish narxi qancha — 2026 narxlar tahlili",
    metaDescription:
      "Mobil ilova yaratish narxi nimadan tashkil topadi, Android va iOS qancha turadi va byudjetni qanday kamaytirish mumkin — aniq raqamlar bilan.",
    keywords: [
      "mobil ilova narxi",
      "mobile app",
      "ilova yaratish narxi",
      "android ilova narxi",
    ],
    excerpt:
      "Narx 25 milliondan 150 milliongacha o'zgaradi. Farq nimada va byudjetni qanday to'g'ri rejalashtirish kerak.",
    date: "2026-06-22",
    updated: "2026-08-25",
    readingMinutes: 8,
    category: "Narxlar",
    intro:
      "Mobil ilova qancha turadi degan savolga bitta raqam bilan javob berish mumkin emas — bu uy qancha turadi deb so'rashga o'xshaydi. Lekin narxni shakllantiruvchi omillarni tushunsangiz, o'z loyihangiz uchun taxminni ancha aniq chiqara olasiz.",
    sections: [
      {
        h2: "Narx darajalari",
        list: [
          "MVP — 5–7 ekran, asosiy funksiya: 25 000 000 – 45 000 000 so'm",
          "O'rtacha ilova — kabinet, to'lov, bildirishnoma: 60 000 000 – 100 000 000 so'm",
          "Murakkab ilova — marketplace, xarita, chat, ko'p rol: 150 000 000 so'mdan",
          "Korporativ ilova — ichki tizimlar bilan integratsiya: loyihaga qarab",
        ],
      },
      {
        h2: "Byudjet nimaga sarflanadi",
        body: [
          "Odatda taqsimot shunday: dizayn 20 foiz, mobil qism 40 foiz, backend va API 25 foiz, test hamda do'konlarga joylash 15 foiz.",
          "Ko'p buyurtmachi backendni hisobga olmaydi. Ammo ilova ma'lumotni qayerdandir olishi kerak — server, baza va admin panel narxning chorak qismini tashkil qiladi.",
        ],
      },
      {
        h2: "Android va iOS — ikki barobar to'lanadimi",
        body: [
          "Yo'q, agar React Native yoki Flutter tanlansa. Bitta kod bazasi ikkala platformaga chiqadi va bu native yondashuvga qaraganda taxminan 40 foiz arzon.",
          "Native ishlab chiqish faqat og'ir grafika, murakkab kamera ishlovi yoki maksimal unumdorlik kerak bo'lganda oqlanadi.",
        ],
      },
      {
        h2: "Yashirin xarajatlar",
        list: [
          "Apple Developer — yiliga 99 dollar, Google Play — bir martalik 25 dollar",
          "Server ijarasi — oyiga 300 000 so'mdan boshlab",
          "Push xizmati va SMS — foydalanish hajmiga qarab",
          "Do'kon talablari o'zgarganda majburiy yangilanishlar — yiliga 1–2 marta",
          "Qo'llab-quvvatlash — odatda loyiha narxining 15–20 foizi yiliga",
        ],
      },
      {
        h2: "Byudjetni qanday kamaytirish mumkin",
        body: [
          "Eng samarali usul — MVP'dan boshlash. Birinchi versiyaga faqat asosiy ssenariyni qo'ying, qolganini foydalanuvchi ma'lumotiga qarab qo'shing. Bu odatda birinchi bosqich byudjetini yarmiga tushiradi.",
          "Ikkinchi usul — agar takroriy foydalanish bo'lmasa, ilova o'rniga tez ochiladigan mobil sayt yoki Telegram botni ko'rib chiqish. Ko'p holatda ular bir xil vazifani uchdan bir narxga bajaradi.",
        ],
      },
    ],
    related: ["mobil-ilova-yaratish", "ui-ux-dizayn", "telegram-bot-yaratish"],
  },

  /* ------------------------------------------------------------- 7 */
  {
    slug: "ai-biznesni-qanday-ozgartiradi",
    title: "AI biznesingizni qanday o'zgartiradi?",
    metaTitle: "AI biznesingizni qanday o'zgartiradi — amaliy qo'llanma",
    metaDescription:
      "Sun'iy intellekt biznesda qanday aniq vazifalarni bajaradi: chatbot, AI agent, hujjat tahlili va ovozli yechimlar. Xarajat va natija bilan.",
    keywords: ["AI", "ChatGPT", "AI Agent", "sun'iy intellekt biznes"],
    excerpt:
      "Namoyishlardan tashqari, AI bugun qanday aniq ishlarni bajara oladi va qaysilarini hali bajara olmaydi.",
    date: "2026-06-10",
    updated: "2026-09-03",
    readingMinutes: 9,
    category: "Sun'iy intellekt",
    intro:
      "Sun'iy intellekt haqidagi suhbatlar ko'pincha ikki chekkaga boradi: yo hammasini o'zgartiradi, yo shunchaki moda. Haqiqat o'rtada — AI aniq belgilangan vazifalar sinfini juda yaxshi bajaradi, qolganida esa hali ishonchsiz.",
    sections: [
      {
        h2: "AI bugun nimani yaxshi bajaradi",
        list: [
          "Matnni tushunish va xulosalash — hujjat, xat, qo'ng'iroq matni",
          "Tuzilmasiz ma'lumotdan maydonlarni ajratib olish — hisob-fakturadan summa va sana",
          "Tipik savollarga javob berish — bilimlar bazasi asosida",
          "Tarjima va matn qayta yozish",
          "Tasniflash — murojaatni bo'limlarga avtomatik yo'naltirish",
        ],
      },
      {
        h2: "AI hali ishonchsiz bo'lgan joylar",
        body: [
          "Aniq hisob-kitob va moliyaviy qarorlar. Model raqamlarni to'qib qo'yishi mumkin, shuning uchun hisob-kitob har doim oddiy kod bilan bajarilishi kerak — AI faqat natijani izohlaydi.",
          "Shuningdek, yuridik javobgarlik talab qiladigan yakuniy qarorlar. AI tayyorlaydi, odam tasdiqlaydi — bu bugungi to'g'ri sxema.",
        ],
      },
      {
        h2: "Chatbot va AI agent farqi",
        body: [
          "Chatbot savolga javob beradi. AI agent esa harakat qiladi: ma'lumot topadi, tizimga yozadi, xabar yuboradi, keyingi qadamni rejalashtiradi.",
          "Misol: chatbot yetkazib berish narxini aytadi. Agent esa manzilni so'raydi, hisoblaydi, buyurtmani CRM'ga yozadi va kuryerga topshiriq yuboradi.",
        ],
      },
      {
        h2: "O'zbek tilida ishlaydimi",
        body: [
          "Zamonaviy modellar o'zbek tilini yetarlicha yaxshi tushunadi. Asosiy muammo til emas, kontekst: model sizning narxlaringiz, qoidalaringiz va mahsulotlaringizni bilmaydi.",
          "Yechim — RAG arxitekturasi. Model javobni sizning hujjatlaringizdan quradi. Bu javob aniqligini keskin oshiradi va to'qish xavfini kamaytiradi.",
        ],
      },
      {
        h2: "Xarajat va o'zini oqlash",
        body: [
          "Joriy qilish 8 000 000 so'mdan boshlanadi, oylik model xarajati esa odatda 300 000 – 3 000 000 so'm oralig'ida. Solishtirish uchun: bitta qo'llab-quvvatlash operatorining oylik xarajati 4 000 000 so'mdan yuqori.",
          "Agar AI murojaatlarning yarmini yopsa, u odatda uch-to'rt oyda o'zini oqlaydi. Shuning uchun birinchi loyihani eng ko'p takrorlanadigan savollardan boshlash mantiqli.",
        ],
      },
    ],
    related: ["suniy-intellekt", "telegram-bot-yaratish", "api-integratsiya"],
  },

  /* ------------------------------------------------------------- 8 */
  {
    slug: "seo-va-web-dasturlash",
    title: "SEO va web dasturlash birga ishlaganda natija qanday bo'ladi?",
    metaTitle: "SEO va web dasturlash birga — natija qanday bo'ladi?",
    metaDescription:
      "Nima uchun SEO'ni saytdan keyin emas, sayt bilan birga qilish kerak. Texnik SEO, Core Web Vitals va kontent strategiyasining birgalikdagi ta'siri.",
    keywords: ["SEO", "web development", "texnik SEO", "Core Web Vitals"],
    excerpt:
      "SEO'ni sayt tayyor bo'lgandan keyin qo'shish — ta'mir tugagach devor ichiga sim tortishga o'xshaydi.",
    date: "2026-05-28",
    updated: "2026-08-18",
    readingMinutes: 8,
    category: "SEO",
    intro:
      "Ko'p kompaniya avval saytni quradi, keyin SEO agentligiga murojaat qiladi. Agentlik esa saytning yarmini qayta qurish kerakligini aytadi. Bu ikki marta to'lash demakdir — va bunga yo'l qo'ymaslik mumkin edi.",
    sections: [
      {
        h2: "Nima uchun keyinroq qilish qimmatga tushadi",
        body: [
          "Sayt arxitekturasi — URL tuzilishi, sahifalar ierarxiyasi, sarlavhalar mantiqiy tartibi — bu SEO poydevori. Uni keyin o'zgartirish deyarli qayta qurish bilan teng.",
          "Yana bir masala — tezlik. Agar sayt og'ir freymvorkda va katta rasmlar bilan qurilgan bo'lsa, uni keyinchalik tezlashtirish ancha qiyin va qimmat.",
        ],
      },
      {
        h2: "Birinchi kundan hisobga olinishi kerak bo'lgan narsalar",
        list: [
          "Server tomonida render — qidiruv roboti kontentni to'liq ko'rishi uchun",
          "URL strukturasi — o'zbekcha, tushunarli, o'zgarmaydigan manzillar",
          "Sarlavhalar ierarxiyasi — har sahifada bitta H1 va mantiqiy H2 tartibi",
          "Core Web Vitals — LCP, INP va CLS ko'rsatkichlari yashil zonada",
          "Schema.org mikro-belgilash — Organization, Service, FAQ, Article",
          "Sitemap va robots.txt — birinchi deploy'dan mavjud",
        ],
      },
      {
        h2: "Core Web Vitals nima uchun muhim",
        body: [
          "Google 2021-yildan beri sahifa tajribasi ko'rsatkichlarini reyting omili sifatida ishlatadi. Amalda bu shuni anglatadi: ikki bir xil sifatli sahifadan tezrog'i yuqoriroq turadi.",
          "LCP 2,5 soniyadan kam, INP 200 millisekunddan kam, CLS 0,1 dan kam bo'lishi kerak. Next.js kabi zamonaviy stekda bu ko'rsatkichlarga erishish ancha oson.",
        ],
      },
      {
        h2: "Kontent va texnika birga ishlaganda",
        body: [
          "Texnik jihatdan mukammal, lekin bo'sh sayt reyting olmaydi. Ajoyib kontent, lekin sekin va indekslanmaydigan sayt ham reyting olmaydi. Natija faqat ikkalasi birga bo'lganda chiqadi.",
          "Bizning amaliyotimizda to'g'ri qurilgan sayt uchun odatiy natija: 2–3 oyda indeksatsiya to'liq, 4–6 oyda organik trafik ishga tushishga qaraganda 3–5 barobar oshadi.",
        ],
      },
      {
        h2: "O'zbek tilidagi SEO xususiyatlari",
        body: [
          "O'zbek tilida raqobat past — bu katta imkoniyat. Ammo lotin va kirill yozuvi, o' va g' harflarining turlicha yozilishi hamda so'z shakllarining ko'pligi semantik yadro yig'ishni murakkablashtiradi.",
          "To'g'ri yondashuv — barcha yozuv variantlarini qamrab olish, lekin ularni bitta kanonik sahifaga yo'naltirish. Aks holda o'z sahifalaringiz bir-biri bilan raqobatlashadi.",
        ],
      },
    ],
    related: ["seo-xizmatlari", "web-sayt-yaratish", "ui-ux-dizayn"],
  },

  /* ------------------------------------------------------------- 9 */
  {
    slug: "erp-va-crm-farqi",
    title: "ERP va CRM o'rtasidagi farq",
    metaTitle: "ERP va CRM o'rtasidagi farq — qaysi biri sizga kerak?",
    metaDescription:
      "ERP va CRM o'rtasidagi farq nimada, qaysi biri qachon kerak bo'ladi va ularni birga ishlatish mumkinmi — amaliy tushuntirish.",
    keywords: ["ERP", "CRM", "ERP va CRM farqi", "biznes tizimlari"],
    excerpt:
      "CRM tashqariga — mijozga qaraydi, ERP ichkariga — resurslarga. Qaysi biridan boshlash kerakligini aniqlaymiz.",
    date: "2026-05-15",
    updated: "2026-08-12",
    readingMinutes: 7,
    category: "Biznes tizimlari",
    intro:
      "Bu ikki qisqartma tez-tez aralashtiriladi, chunki ikkalasi ham biznesni boshqarish tizimi. Farq esa juda aniq: ular kompaniyaning turli tomonlariga qaraydi.",
    sections: [
      {
        h2: "Oddiy farq",
        body: [
          "CRM savolga javob beradi: mijoz qayerda, kelishuv qaysi bosqichda, menejer nima qilyapti, qancha lid sotuvga aylandi.",
          "ERP boshqa savolga javob beradi: bu mahsulotning haqiqiy tannarxi qancha, omborda nima qoldi, keyingi oy pul yetadimi, qaysi sex rejadan orqada.",
        ],
      },
      {
        h2: "CRM modullari",
        list: [
          "Lidlar va sotuv voronkasi",
          "Mijozlar bazasi va aloqa tarixi",
          "Vazifalar va menejer yuklamasi",
          "Marketing kampaniyalari",
          "Sotuv hisobotlari va konversiya tahlili",
        ],
      },
      {
        h2: "ERP modullari",
        list: [
          "Ishlab chiqarish rejasi va tannarx kalkulyatsiyasi",
          "Ombor va logistika",
          "Xarid va yetkazib beruvchilar",
          "Moliya — byudjet, kassa, qarzdorlik",
          "HR va ish haqi",
        ],
      },
      {
        h2: "Qaysi biridan boshlash kerak",
        body: [
          "Deyarli har doim CRM'dan. U arzonroq, tezroq ishga tushadi va natijasi darhol ko'rinadi — yo'qolgan lidlar kamayadi, sotuv o'sadi.",
          "ERP esa kompaniya kattalashgach, ishlab chiqarish yoki ko'p omborli logistika paydo bo'lgach kerak bo'ladi. Uni joriy qilish oylar davom etadi va butun kompaniyaga ta'sir qiladi.",
        ],
      },
      {
        h2: "Ikkalasini birga ishlatish",
        body: [
          "Bu eng keng tarqalgan va to'g'ri sxema. CRM sotuv bo'limida ishlaydi, ERP ishlab chiqarish va moliyada. Ular integratsiya orqali bog'lanadi: CRM'dagi kelishuv tasdiqlangach, ERP'da buyurtma va ishlab chiqarish topshirig'i paydo bo'ladi.",
          "Muhim shart — bitta ma'lumot faqat bitta tizimda yaratilishi kerak. Aks holda ikkita haqiqat manbasi paydo bo'ladi va bu eng og'ir muammoga aylanadi.",
        ],
      },
    ],
    related: ["erp-tizimi", "crm-tizimi", "api-integratsiya"],
  },

  /* ------------------------------------------------------------- 10 */
  {
    slug: "biznesni-avtomatlashtirish-dasturiy-yechimlar",
    title: "Biznesni avtomatlashtirish uchun 15 ta dasturiy yechim",
    metaTitle: "Biznesni avtomatlashtirish uchun 15 ta dasturiy yechim",
    metaDescription:
      "Biznesni avtomatlashtirish uchun 15 ta amaliy dasturiy yechim — sotuv, ombor, moliya, HR va marketing bo'yicha. Har biri uchun natija bilan.",
    keywords: [
      "biznesni avtomatlashtirish",
      "automation software",
      "avtomatlashtirish dasturlari",
      "jarayonlarni avtomatlashtirish",
    ],
    excerpt:
      "Har bir bo'lim uchun bittadan yechim — qaysi qo'l mehnatini olib tashlashi va qanday natija berishi bilan.",
    date: "2026-04-30",
    updated: "2026-08-08",
    readingMinutes: 11,
    category: "Avtomatlashtirish",
    intro:
      "Avtomatlashtirishni butun kompaniyani bir vaqtda o'zgartirish deb tushunish shart emas. Odatda eng katta samara kichik, aniq nuqtalardan keladi. Quyida amalda sinab ko'rilgan o'n beshta yechim.",
    sections: [
      {
        h2: "Sotuv va marketing",
        list: [
          "CRM va sotuv voronkasi — yo'qolgan lidlarni nolga tushiradi",
          "Saytdagi forma va CRM integratsiyasi — ariza darhol menejerga tushadi",
          "Telegram bot orqali buyurtma — operator yuklamasi 50–70 foizga kamayadi",
          "Avtomatik eslatmalar — qayta qo'ng'iroq va tug'ilgan kun tabriklari",
          "Ommaviy xabar yuborish — segmentlangan auditoriyaga",
        ],
      },
      {
        h2: "Ombor va logistika",
        list: [
          "Shtrix-kod bilan ombor tizimi — inventarizatsiya bir kundan bir soatga tushadi",
          "Qoldiqni sayt bilan real vaqtda sinxronlash — yo'q mahsulot sotilmaydi",
          "Yetkazib berish xizmatlari bilan integratsiya — yorliqlar avtomatik yaratiladi",
          "Minimal qoldiq ogohlantirishi — mahsulot tugashidan oldin xabar keladi",
        ],
      },
      {
        h2: "Moliya va hujjatlar",
        list: [
          "1C integratsiyasi — qo'lda ma'lumot ko'chirish tugaydi",
          "Didox orqali elektron hujjat aylanmasi — kunlar o'rniga daqiqalar",
          "Avtomatik hisob-faktura shakllantirish — shartnomadan bir tugmada",
          "To'lov kalendari va qarzdorlik nazorati — kassa uzilishining oldini oladi",
        ],
      },
      {
        h2: "HR va ichki jarayonlar",
        list: [
          "Telegram bot orqali davomat va kunlik hisobot yig'ish",
          "Arizalarni elektron tasdiqlash — ta'til, avans, xarid",
          "Rahbar uchun bitta dashboard — savdo, kassa, ombor bir ekranda",
        ],
      },
      {
        h2: "Qaysi biridan boshlash kerak",
        body: [
          "Uchta savolga javob bering: qaysi ish eng ko'p vaqt oladi, qaysi jarayonda eng ko'p xato bo'ladi, qaysi ma'lumotni topish eng qiyin. Uchala javob ham bitta jarayonni ko'rsatsa — avtomatlashtirishni shundan boshlang.",
          "Odatda birinchi loyiha kichik bo'lishi kerak: 2–4 hafta va aniq o'lchanadigan natija. Bu jamoada ishonch hosil qiladi va keyingi bosqichlarga yo'l ochadi.",
        ],
      },
      {
        h2: "Avtomatlashtirishda eng katta xato",
        body: [
          "Tartibsiz jarayonni avtomatlashtirish uni tezroq tartibsiz qiladi, xolos. Agar hozir kim nima qilishi aniq bo'lmasa, dastur buni hal qilmaydi.",
          "Shuning uchun har bir loyiha jarayonni chizishdan boshlanadi. Ko'pincha shu bosqichdayoq ba'zi qadamlar umuman keraksiz ekani ma'lum bo'ladi — va ularni dasturlash shart emas.",
        ],
      },
    ],
    related: ["crm-tizimi", "telegram-bot-yaratish", "api-integratsiya"],
  },
];

export const getPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);
