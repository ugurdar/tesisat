import Section from "@/components/Section";
import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Eskişehir genelinde boya badana, banyo/mutfak tadilatı, fayans, çevre düzenleme, su & elektrik tesisatı, duşakabin, anahtar teslim tadilat."
};

export default function Page() {
  return (
    <Section>
      <h1 className="text-3xl font-bold mb-6">Hizmetler</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <ServiceCard key={s.slug} s={s} />
        ))}
      </div>
    </Section>
  );
}
