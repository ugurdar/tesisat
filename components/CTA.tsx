import { SITE } from "@/lib/constants";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="rounded-3xl border border-brand-200/60 dark:border-brand-700/60 p-8 bg-gradient-to-br from-brand-50 via-white to-brand-100/50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 shadow-xl shadow-brand-100/20 dark:shadow-slate-900/40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Hemen keşif randevusu alın</h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Eskişehir'in her yerine aynı gün içinde dönüş yapıyoruz.</p>
          <div className="flex items-center gap-2 mt-3">
            <svg className="w-5 h-5 text-green-500"><use href="#i-check" /></svg>
            <span className="text-sm text-slate-600 dark:text-slate-400">Ücretsiz keşif</span>
            <svg className="w-5 h-5 text-green-500 ml-4"><use href="#i-check" /></svg>
            <span className="text-sm text-slate-600 dark:text-slate-400">Aynı gün dönüş</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={`tel:${SITE.phone}`} className="rounded-full bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-3 text-white font-medium shadow-lg hover:shadow-xl hover:from-brand-700 hover:to-brand-800 transition-all duration-300 text-center">
            📞 Ara: {SITE.phonePretty}
          </a>
          <Link href="/iletisim" className="rounded-full border border-brand-300 dark:border-brand-600 px-6 py-3 font-medium hover:bg-brand-50 dark:hover:bg-slate-700 transition-colors duration-300 text-center text-brand-700 dark:text-brand-300">
            💬 İletişim
          </Link>
        </div>
      </div>
    </div>
  );
}
