import Section from "@/components/Section";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `📞 İletişim | ${SITE.city} Tadilat & Tesisat ⚡ Ücretsiz Keşif`,
  description: `✅ ${SITE.city} genelinde tadilat ve tesisat hizmetleri. 📍 ${SITE.addressLine}, ${SITE.city} 📞 ${SITE.phonePretty} - Ücretsiz keşif randevusu ve hızlı teklif için hemen arayın! 7/24 acil servis mevcuttur.`,
  keywords: [
    `${SITE.city} tadilat iletişim`,
    `${SITE.city} tesisat telefon`,
    `${SITE.city} tadilat randevu`,
    "ücretsiz keşif",
    "hızlı teklif",
    "acil tesisat",
    "7/24 servis",
    `${SITE.addressLine} tadilat`,
    `${SITE.phonePretty} tesisat`
  ],
  openGraph: {
    title: `📞 İletişim | ${SITE.city} Tadilat & Tesisat ⚡`,
    description: `✅ ${SITE.city} genelinde tadilat ve tesisat hizmetleri. Ücretsiz keşif için hemen arayın! 📞 ${SITE.phonePretty}`,
    type: 'website',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE.city} Tadilat ve Tesisat İletişim`
      }
    ]
  },
  alternates: {
    canonical: '/iletisim'
  }
};

export default function Page() {
  return (
    <Section>
      <h1 className="text-3xl font-bold mb-6">İletişim</h1>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3">
          <p className="flex items-center gap-2">
            <span className="text-brand-600">📍</span>
            <strong>Adres:</strong> {SITE.addressLine}, {SITE.city}
          </p>
          <p className="flex items-center gap-2">
            <span className="text-brand-600">📞</span>
            <strong>Telefon:</strong> <a className="hover:underline text-brand-600 hover:text-brand-700" href={`tel:${SITE.phone}`}>{SITE.phonePretty}</a>
          </p>
          <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <span className="text-brand-600">⏰</span>
            Hafta içi/sonu randevu ile keşif yapılır.
          </p>
        </div>
        <div className="h-72 w-full overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
          <iframe
            title="Harita"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Vali%20Ali%20Fuat%20G%C3%BCven%20Caddesi%2C%20Eski%C5%9Fehir&output=embed"
          />
        </div>
      </div>
    </Section>
  );
}
