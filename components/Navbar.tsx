import Link from "next/link";
import { SITE } from "@/lib/constants";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" }
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/60 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">{SITE.name}</Link>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} className="hover:text-brand-600 transition-colors">{l.label}</Link></li>
          ))}
        </ul>
        <a href={`tel:${SITE.phone}`} className="rounded-full bg-brand-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-brand-700">
          Ara: {SITE.phonePretty}
        </a>
      </div>
    </nav>
  );
}
