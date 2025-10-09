import Link from "next/link";
import Icon from "./Icon";
import type { Service } from "@/lib/services";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <Link href={`/hizmetler/${s.slug}`} className="group block rounded-2xl border border-slate-200/80 dark:border-slate-700/60 p-6 hover:shadow-xl hover:shadow-brand-100/20 dark:hover:shadow-brand-900/20 transition-all duration-300 bg-white dark:bg-slate-800 hover:bg-gradient-to-br hover:from-white hover:to-brand-50/30 dark:hover:from-slate-800 dark:hover:to-slate-700 hover:border-brand-300 dark:hover:border-brand-600 hover:scale-[1.02]">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/60 dark:to-brand-800/40 p-3 text-brand-700 dark:text-brand-300 group-hover:from-brand-200 group-hover:to-brand-300 dark:group-hover:from-brand-800 dark:group-hover:to-brand-700 transition-all duration-300 shadow-md">
          <svg className="w-8 h-8"><use href={`#i-${s.icon}`} /></svg>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg leading-tight text-slate-900 dark:text-slate-100 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors duration-300">{s.title}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{s.short}</p>
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs font-medium text-brand-600 dark:text-brand-400">Detayları gör →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
