import "@/styles/globals.css";
import { SITE } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IconDefs } from "@/components/Icon";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.city} Tadilat & Tesisat Ustası | Profesyonel Hizmet 🏠 ${SITE.name}`,
    template: "%s | Eskişehir Tadilat & Tesisat Ustası"
  },
  description: `✅ ${SITE.city} genelinde boya badana, banyo & mutfak tadilatı, fayans döşeme, su & elektrik tesisatı, duşakabin kurulumu. ⚡ Ücretsiz keşif, hızlı teslimat, garantili işçilik. 📞 ${SITE.phonePretty}`,
  keywords: [
    `${SITE.city} tadilat ustası`,
    `${SITE.city} tesisat ustası`, 
    `${SITE.city} boya badana`,
    `${SITE.city} banyo tadilatı`,
    `${SITE.city} mutfak tadilatı`,
    `${SITE.city} fayans döşeme`,
    `${SITE.city} duşakabin`,
    `${SITE.city} su tesisatı`,
    `${SITE.city} elektrik tesisatı`,
    "anahtar teslim tadilat",
    "garantili işçilik",
    "ücretsiz keşif",
    "uygun fiyat tadilat"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `🏠 ${SITE.city} Tadilat & Tesisat Ustası | Profesyonel Hizmet`,
    description: `✅ ${SITE.city} genelinde anahtar teslim tadilat ve tesisat hizmetleri. Ücretsiz keşif, garantili işçilik! 📞 ${SITE.phonePretty}`,
    images: [{ 
      url: "/og-image.jpg", 
      width: 1200, 
      height: 630,
      alt: `${SITE.city} Tadilat & Tesisat Ustası - Profesyonel Hizmet`
    }],
    locale: 'tr_TR'
  },
  twitter: { 
    card: "summary_large_image", 
    title: `🏠 ${SITE.city} Tadilat & Tesisat Ustası`, 
    description: `✅ ${SITE.city} geneli profesyonel hizmet. Ücretsiz keşif! 📞 ${SITE.phonePretty}`, 
    images: ["/og-image.jpg"],
    creator: `@${SITE.name.replace(/\s+/g, '')}` 
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'your-google-verification-code', // Canlıya alırken güncellenecek
  },
  other: {
    'geo.region': 'TR-26',
    'geo.placename': SITE.city,
    'geo.position': '39.7767;30.5206', // Eskişehir koordinatları
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const businessLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber", "Contractor"],
    name: SITE.name,
    description: `${SITE.city} genelinde profesyonel tadilat ve tesisat hizmetleri. Boya badana, banyo tadilatı, mutfak yenileme, fayans döşeme, duşakabin kurulumu.`,
    url: SITE.url,
    telephone: SITE.phone,
    priceRange: "$$",
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card",
    openingHours: ["Mo-Sa 08:00-18:00"],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLine,
      addressLocality: SITE.city,
      addressRegion: SITE.city,
      postalCode: "26000",
      addressCountry: SITE.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.7767",
      longitude: "30.5206"
    },
    areaServed: {
      "@type": "City",
      name: SITE.city
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "39.7767",
        longitude: "30.5206"
      },
      geoRadius: "30000"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tadilat ve Tesisat Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Boya Badana",
            description: "İç ve dış cephe boya badana hizmetleri"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Banyo Tadilatı",
            description: "Komple banyo yenileme ve tadilat işleri"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mutfak Tadilatı",
            description: "Mutfak dolabı ve tezgah yenileme"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fayans Döşeme",
            description: "Yer ve duvar fayans döşeme işleri"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Su Tesisatı",
            description: "Su tesisat döşeme, arıza onarım"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Elektrik Tesisatı",
            description: "Elektrik tesisat yenileme ve onarım"
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1"
    },
    sameAs: []
  };

  return (
    <html lang="tr" className="dark">
      <head>
        <script src="/dark-mode-init.js" />
      </head>
      <body className="dark">
        <IconDefs />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script id="ld-localbusiness" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }} />
      </body>
    </html>
  );
}
