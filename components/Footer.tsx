import { SITE } from "@/lib/constants";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-10">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-semibold">{SITE.name}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 flex items-center gap-1">
            <span>📍</span> {SITE.addressLine}, {SITE.city}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
            <span>📞</span> <a className="hover:underline hover:text-brand-600" href={`tel:${SITE.phone}`}>{SITE.phonePretty}</a>
          </p>
        </div>
        <div>
          <p className="font-semibold">Hizmet Bölgeleri</p>
          <ul className="mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1">
            <li>Odunpazarı, Tepebaşı ve tüm Eskişehir</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Çalışma Şekli</p>
          <ul className="mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1">
            <li>Ücretsiz keşif ve hızlı teklif</li>
            <li>Yazılı sözleşme ile anahtar teslim</li>
            <li>Faturalı hizmet</li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.</div>
    </footer>
  );
}
