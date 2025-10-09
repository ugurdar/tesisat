"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE } from "@/lib/constants";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Force dark mode - completely override system preferences
    const forceDarkMode = () => {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    };
    
    // Apply immediately
    forceDarkMode();
    
    // Also override any media query changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => forceDarkMode(); // Always force dark regardless
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);



  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/60 dark:border-slate-700/60 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm dark:shadow-slate-900/20">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            <svg className="w-8 h-8 text-brand-600 dark:text-brand-400" viewBox="0 0 24 24" fill="none">
              <path className="fill-current" d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.56 4.74V17c0 .55.45 1 1 1h.38c.55 0 1-.45 1-1v-5.51c2.55-.09 4.56-2.17 4.56-4.74C18.75 4.13 16.62 2 12 2z"/>
              <circle cx="12" cy="6.25" r="1.25" className="fill-white dark:fill-slate-900"/>
            </svg>
            <span className="hidden sm:inline">Eskişehir Tesisat</span>
            <span className="sm:hidden">Tesisat</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className="text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors relative group py-2"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 dark:bg-brand-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">

            {/* Phone Button - Hidden on mobile */}
            <a 
              href={`tel:${SITE.phone}`} 
              className="hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 px-4 py-2 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path className="stroke-current stroke-2" d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 6.18 2 2 0 0 1 5 4h4.09a1 1 0 0 1 1 .75l1.2 4.79a1 1 0 0 1-.27.95l-2.2 2.2a16 16 0 0 0 6.88 6.88l2.2-2.2a1 1 0 0 1 .95-.27l4.79 1.2a1 1 0 0 1 .75 1z"/>
              </svg>
              <span className="hidden lg:inline">{SITE.phonePretty}</span>
              <span className="lg:hidden">Ara</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path className="stroke-current stroke-2" d="M18 6L6 18M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path className="stroke-current stroke-2" d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 font-medium"
                >
                  {l.label}
                </Link>
              ))}
              
              {/* Mobile Phone Button */}
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center justify-center gap-2 mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path className="stroke-current stroke-2" d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 6.18 2 2 0 0 1 5 4h4.09a1 1 0 0 1 1 .75l1.2 4.79a1 1 0 0 1-.27.95l-2.2 2.2a16 16 0 0 0 6.88 6.88l2.2-2.2a1 1 0 0 1 .95-.27l4.79 1.2a1 1 0 0 1 .75 1z"/>
                </svg>
                Hemen Ara: {SITE.phonePretty}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
