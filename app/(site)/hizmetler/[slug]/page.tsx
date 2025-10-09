import type { Metadata } from "next";
import Section from "@/components/Section";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/constants";
import Script from "next/script";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug)!;
  return {
    title: `${s.title} – ${SITE.city}`,
    description: s.short,
    alternates: { canonical: `/hizmetler/${s.slug}` },
    keywords: [...s.keywords, SITE.city, "tadilat", "tesisat"]
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug)!;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.title,
    areaServed: SITE.city,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.addressLine,
        addressLocality: SITE.city,
        addressCountry: SITE.country
      }
    },
    description: s.short,
    brand: SITE.name,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.title,
      itemListElement: s.details.map((d) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: d } }))
    }
  };

  return (
    <Section>
      <div className="max-w-3xl">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-brand-100 dark:bg-brand-900/40 p-3 text-brand-700 dark:text-brand-300">
            <svg className="w-10 h-10"><use href={`#i-${s.icon}`} /></svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold leading-tight">{s.title} – {SITE.city}</h1>
            <p className="text-slate-700 dark:text-slate-300 mt-2">{s.short}</p>
          </div>
        </div>
        <ul className="mt-6 space-y-2 list-disc pl-6 text-slate-700 dark:text-slate-300">
          {s.details.map((d) => <li key={d}>{d}</li>)}
        </ul>
        <div className="mt-8">
          <a href={`tel:${SITE.phone}`} className="rounded-xl bg-brand-600 px-6 py-3 text-white font-semibold shadow hover:bg-brand-700">Teklif Al – {SITE.phonePretty}</a>
        </div>
      </div>
      <Script id="ld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
    </Section>
  );
}
