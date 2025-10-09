export type Service = {
  slug: string;
  title: string;
  short: string;
  details: string[];
  keywords: string[];
  icon: string; // Symbol id from Icon.tsx
};

export const SERVICES: Service[] = [
  {
    slug: "boya-badana",
    title: "Boya & Badana",
    short: "Daire, ofis, dükkan iç-dış boya; zımpara, astar, epoksi.",
    details: [
      "Silinebilir su bazlı ve epoksi uygulamaları",
      "Kabarma ve çatlak onarımı",
      "Rutubet/küf izolasyonu ve astar"
    ],
    keywords: ["boya", "badana", "ustası", "eskisehir"],
    icon: "paint"
  },
  {
    slug: "banyo-tadilati",
    title: "Banyo Tadilatı",
    short: "Kırmadan-kırarak yenileme, tesisat ve seramik dahil.",
    details: [
      "Su yalıtımı ve tesisat yenileme",
      "Duşakabin imalat & montaj",
      "Seramik, klozet, hilton lavabo"
    ],
    keywords: ["banyo tadilatı", "banyo yenileme", "duşakabin"],
    icon: "bath"
  },
  {
    slug: "fayans-doseme",
    title: "Fayans Döşeme",
    short: "Banyo, mutfak, balkon; lazer tesviye ile düzgün hatlar.",
    details: [
      "1. sınıf seramik/granit uygulaması",
      "Derz yenileme, su terazisi ile düz zemin",
      "Kaymaz ve derz koruyucu çözümler"
    ],
    keywords: ["fayans", "seramik", "ustası"],
    icon: "tiles"
  },
  {
    slug: "mutfak-tadilati",
    title: "Mutfak Tadilatı",
    short: "Dolap, tezgah, seramik; tesisat ve elektrik dahil.",
    details: [
      "Ölçüye özel dolap ve tezgah",
      "Sıhhi tesisat & priz hatları yenileme",
      "Aydınlatma ve havalandırma çözümleri"
    ],
    keywords: ["mutfak tadilatı", "tezgah", "dolap"],
    icon: "kitchen"
  },
  {
    slug: "cevre-duzenleme",
    title: "Çevre Düzenleme",
    short: "Bahçe, yürüyüş yolu, peyzaj; bordür ve dekoratif taş.",
    details: [
      "Kilit parke, bordür, çim taş",
      "Drenaj ve yağmur oluğu sistemleri",
      "Aydınlatma ve sulama altyapısı"
    ],
    keywords: ["çevre", "peyzaj", "bahçe düzenleme"],
    icon: "garden"
  },
  {
    slug: "su-tesisati-tamir",
    title: "Su Tesisatı & Tamiri",
    short: "Kaçak tespiti, boru değişimi, kombi/armatür montajı.",
    details: [
      "Termal kamera ile kaçak tespiti",
      "Pex/boru hat yenileme, kolektör sistemi",
      "Kombi, radyatör, armatür montaj"
    ],
    keywords: ["su tesisatı", "tesisat tamiri", "kaçak tespiti"],
    icon: "water"
  },
  {
    slug: "elektrik-tesisati-tamir",
    title: "Elektrik Tesisatı & Tamiri",
    short: "Pano, hat çekimi, aydınlatma, arıza tespiti.",
    details: [
      "Sigorta/pano yenileme ve kaçak akım rölesi",
      "Topraklama testi ve priz hatları",
      "Aydınlatma, sensör ve led uygulamaları"
    ],
    keywords: ["elektrik tesisatı", "elektrik arıza", "pano"],
    icon: "electric"
  },
  {
    slug: "dusakabin-imalat-montaj",
    title: "Duşakabin İmalat & Montaj",
    short: "Ölçüye özel temper cam, hızlı montaj ve sızdırmazlık.",
    details: [
      "Krom-alüminyum profiller, temper cam",
      "Kabin ölçü alımı, üretim ve montaj",
      "Silikon/conta ile sızdırmazlık garanti"
    ],
    keywords: ["duşakabin", "imalat", "montaj"],
    icon: "shower"
  },
  {
    slug: "anahtar-teslim-tadilat",
    title: "Anahtar Teslim Tadilat",
    short: "Daire/dükkan komple; keşif, planlama, uygulama, teslim.",
    details: [
      "Keşif ve teklif, takvimlendirme",
      "Tüm disiplinlerin koordinasyonu",
      "Zamanında ve temiz teslimat"
    ],
    keywords: ["anahtar teslim", "komple tadilat", "daire", "dükkan"],
    icon: "turnkey"
  }
];
