import Section from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Eskişehir tadilat & tesisat işlerinde planlı çalışma, temiz işçilik ve garantili teslimat. Ücretsiz keşif ve yazılı teklif."
};

export default function Page() {
  return (
    <Section>
      <div className="prose dark:prose-invert max-w-3xl">
        <h1>Hakkımızda</h1>
        <p>Eskişehir ve çevresinde boya badana, banyo/mutfak tadilatı, fayans döşeme, çevre düzenleme, su ve elektrik tesisatı gibi işlerde uzman bir ekibiz. Keşiften teslimata kadar şeffaf iletişim ve net takvim ile ilerleriz.</p>
        <p>Önceliğimiz; doğru keşif, kaliteli malzeme ve temiz işçiliktir. Her iş sonunda yazılı garanti sunarız.</p>
      </div>
    </Section>
  );
}
