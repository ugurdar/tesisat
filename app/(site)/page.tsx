import Section from "@/components/Section";
import CTA from "@/components/CTA";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `🏠 ${SITE.city} Tadilat & Tesisat Ustası | Profesyonel Hizmet ⚡ Ücretsiz Keşif`,
  description: `✅ ${SITE.city} genelinde boya badana, banyo & mutfak tadilatı, fayans döşeme, su & elektrik tesisatı, duşakabin kurulumu. ⚡ Hızlı teslimat, garantili işçilik, uygun fiyat! 📞 ${SITE.phonePretty} - Ücretsiz keşif için hemen arayın!`,
  keywords: [
    `${SITE.city} tadilat ustası en iyi`,
    `${SITE.city} tesisat ustası profesyonel`, 
    `${SITE.city} boya badana uygun fiyat`,
    `${SITE.city} banyo tadilatı garantili`,
    `${SITE.city} mutfak yenileme hızlı`,
    `${SITE.city} fayans döşeme kaliteli`,
    `${SITE.city} duşakabin kurulum`,
    `${SITE.city} su tesisatı arıza`,
    `${SITE.city} elektrik tesisatı güvenli`,
    "ücretsiz keşif tadilat",
    "anahtar teslim ev tadilatı",
    "7/24 tesisat hizmeti",
    "garantili işçilik",
    "temiz işçilik"
  ],
  openGraph: {
    title: `🏠 ${SITE.city} Tadilat & Tesisat Ustası | Profesyonel Hizmet ⚡`,
    description: `✅ ${SITE.city} genelinde anahtar teslim tadilat ve tesisat hizmetleri. Ücretsiz keşif, garantili işçilik! 📞 ${SITE.phonePretty}`,
    type: 'website',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE.city} Tadilat ve Tesisat Ustası - Ana Sayfa`
      }
    ]
  },
  twitter: {
    title: `🏠 ${SITE.city} Tadilat & Tesisat Ustası ⚡`,
    description: `✅ ${SITE.city} geneli profesyonel hizmet. Ücretsiz keşif! 📞 ${SITE.phonePretty}`,
  },
  alternates: {
    canonical: '/'
  }
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-b border-slate-200/60 dark:border-slate-700/60">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
          <div 
            className="w-full h-full" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.4) 1px, transparent 0)',
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        {/* Animated Background Waves - Enhanced */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full h-64 opacity-8 dark:opacity-15" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(14, 165, 233)" stopOpacity="0.4"/>
                <stop offset="50%" stopColor="rgb(56, 189, 248)" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="rgb(14, 165, 233)" stopOpacity="0.1"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path className="animate-wave-1" fill="url(#waveGradient1)" filter="url(#glow)" d="M0,150 C300,250 400,50 600,150 C800,250 900,50 1200,150 L1200,300 L0,300 Z"/>
          </svg>
          <svg className="absolute bottom-0 left-0 w-full h-56 opacity-10 dark:opacity-20" viewBox="0 0 1200 250" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(56, 189, 248)" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="rgb(14, 165, 233)" stopOpacity="0.5"/>
              </linearGradient>
            </defs>
            <path className="animate-wave-2" fill="url(#waveGradient2)" d="M0,200 C400,100 500,300 800,200 C900,150 1000,250 1200,200 L1200,250 L0,250 Z"/>
          </svg>
          <svg className="absolute bottom-0 left-0 w-full h-48 opacity-12 dark:opacity-25" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="rgb(14, 165, 233)" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            <path className="animate-wave-3" fill="url(#waveGradient3)" d="M0,120 C200,20 600,220 900,120 C1000,70 1100,170 1200,120 L1200,200 L0,200 Z"/>
          </svg>
        </div>

        {/* Floating Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute animate-sparkle"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              <div className="w-1 h-1 bg-brand-400 rounded-full animate-ping"></div>
            </div>
          ))}
        </div>

        <div className="relative min-h-[90vh] flex items-center">
          <div className="container py-20 sm:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="max-w-2xl animate-slide-in-left">
                <div className="flex items-center gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 dark:bg-emerald-900/20 dark:border-emerald-800 px-6 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-300 shadow-lg backdrop-blur-sm animate-pulse-glow">
                    <svg className="w-4 h-4 animate-spin-slow" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="3" className="fill-emerald-500"/>
                      <path className="stroke-emerald-500 stroke-2" d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                    Eskişehir geneli – Ücretsiz keşif
                  </span>
                </div>
                
                <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <span className="inline-block text-slate-900 dark:text-white animate-text-shimmer">
                    Tadilat & Tesisatta
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-brand-600 via-brand-500 to-brand-800 dark:from-brand-400 dark:via-brand-300 dark:to-brand-600 bg-clip-text text-transparent animate-gradient-x">
                    Hızlı, Temiz ve
                  </span>
                  <br />
                  <span className="inline-block bg-gradient-to-r from-brand-800 via-brand-600 to-brand-500 dark:from-brand-600 dark:via-brand-400 dark:to-brand-300 bg-clip-text text-transparent animate-gradient-x-reverse">
                    Garantili İşçilik
                  </span>
                </h1>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  Boya badana, banyo/mutfak yenileme, fayans döşeme, su‑elektrik tesisatı, duşakabin ve anahtar teslim çözümler. <span className="text-brand-700 dark:text-brand-400 font-medium">{SITE.city}</span>'in her yerine hizmet.
                </p>
                
                <div className="hero-buttons flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                  <a href={`tel:${SITE.phone}`} className="group inline-flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-5 text-white font-semibold shadow-lg hover:shadow-xl hover:from-brand-700 hover:to-brand-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
                    <div className="flex items-center mb-1">
                      <svg className="mr-2 w-5 h-5 group-hover:animate-ring" viewBox="0 0 24 24" fill="none">
                        <path className="stroke-current stroke-2" d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 6.18 2 2 0 0 1 5 4h4.09a1 1 0 0 1 1 .75l1.2 4.79a1 1 0 0 1-.27.95l-2.2 2.2a16 16 0 0 0 6.88 6.88l2.2-2.2a1 1 0 0 1 .95-.27l4.79 1.2a1 1 0 0 1 .75 1z"/>
                      </svg>
                      <span className="text-lg sm:text-base lg:text-lg">Hemen Ara</span>
                    </div>
                    <span className="text-xl sm:text-lg lg:text-xl font-bold tracking-wider">{SITE.phonePretty}</span>
                  </a>
                  <a href="#hizmetler" className="group inline-flex items-center justify-center rounded-2xl border-2 border-brand-600 dark:border-brand-400 px-6 py-5 font-semibold hover:bg-brand-600 hover:text-white dark:hover:bg-brand-400 dark:hover:text-slate-900 transition-all duration-300 text-brand-600 dark:text-brand-400 transform hover:scale-[1.02] active:scale-95 backdrop-blur-sm">
                    <svg className="mr-3 w-5 h-5 group-hover:animate-wrench" viewBox="0 0 24 24" fill="none">
                      <path className="stroke-current stroke-2" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                    </svg>
                    <span className="text-lg sm:text-base lg:text-lg">Hizmetlere Göz At</span>
                  </a>
                </div>
              </div>

              {/* Animated Service Icons */}
              <div className="hidden lg:block relative animate-slide-in-right">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-brand-600 to-brand-800 rounded-full animate-pulse-ring shadow-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white animate-spin-slow" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" className="stroke-current stroke-2"/>
                    <path className="stroke-current stroke-2" d="M12 6v6l4 2"/>
                  </svg>
                </div>

                {/* Orbiting Icons */}
                <div className="relative w-80 h-80 mx-auto">
                  {[
                    { icon: "water", angle: 0, title: "Su Tesisatı" },
                    { icon: "paint", angle: 60, title: "Boya Badana" },
                    { icon: "electric", angle: 120, title: "Elektrik" },
                    { icon: "tiles", angle: 180, title: "Fayans" },
                    { icon: "shower", angle: 240, title: "Duşakabin" },
                    { icon: "kitchen", angle: 300, title: "Mutfak" },
                  ].map((item, index) => {
                    const radius = 120;
                    const x = Math.cos((item.angle * Math.PI) / 180) * radius;
                    const y = Math.sin((item.angle * Math.PI) / 180) * radius;
                    
                    return (
                      <div
                        key={item.icon}
                        className="absolute animate-orbit"
                        style={{ 
                          left: `calc(50% + ${x}px - 32px)`,
                          top: `calc(50% + ${y}px - 32px)`,
                          animationDelay: `${index * 0.5}s`
                        }}
                      >
                        <div className="group w-16 h-16 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-110 animate-float-gentle" title={item.title}>
                          <svg className="w-8 h-8 text-brand-600 dark:text-brand-400 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors" viewBox="0 0 24 24">
                            <use href={`#i-${item.icon}`} />
                          </svg>
                        </div>
                        
                        {/* Connecting Lines */}
                        <div 
                          className="absolute top-8 left-8 w-px bg-gradient-to-r from-transparent via-brand-300 to-transparent animate-pulse"
                          style={{
                            height: `${Math.sqrt(x*x + y*y) - 64}px`,
                            transform: `rotate(${Math.atan2(-y, -x) * 180 / Math.PI}deg)`,
                            transformOrigin: 'top'
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Güven unsurları */}
      <Section className="bg-white dark:bg-slate-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-brand-700 to-slate-900 dark:from-white dark:via-brand-300 dark:to-white bg-clip-text text-transparent">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Profesyonel ekibimiz ve kaliteli hizmet anlayışımızla güvende hissedeceksiniz.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              t: "Zamanında Teslim", 
              d: "Planlı iş akışı, net takvim ve sürpriz yok. Verilen sürede kaliteli teslimat.", 
              icon: (
                <svg className="w-12 h-12 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" className="stroke-current stroke-2"/>
                  <path className="stroke-current stroke-2" d="M12 6v6l4 2"/>
                  <circle cx="12" cy="12" r="2" className="fill-current"/>
                </svg>
              ), 
              color: "emerald",
              bgGradient: "from-emerald-50 to-green-50 dark:from-emerald-950/50 dark:to-green-950/50",
              borderColor: "group-hover:border-emerald-300 dark:group-hover:border-emerald-600"
            },
            { 
              t: "Temiz İşçilik", 
              d: "Koruma malzemeleri, düzenli alan ve her gün temizlik. Eviniz her zaman temiz kalır.", 
              icon: (
                <svg className="w-12 h-12 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                  <path className="stroke-current stroke-2" d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path className="stroke-current stroke-2" d="M9 12l2 2 4-4"/>
                </svg>
              ), 
              color: "blue",
              bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50",
              borderColor: "group-hover:border-blue-300 dark:group-hover:border-blue-600"
            },
            { 
              t: "Garantili Çözüm", 
              d: "Yazılı teklif, garanti sertifikası ve kaliteli malzeme kullanımı garantisi.", 
              icon: (
                <svg className="w-12 h-12 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none">
                  <path className="stroke-current stroke-2" d="M20 6L9 17l-5-5"/>
                  <path className="stroke-current stroke-2" d="M21 8c0-3.31-2.69-6-6-6H9C5.69 2 3 4.69 3 8v8c0 3.31 2.69 6 6 6h6c3.31 0 6-2.69 6-6V8z"/>
                  <circle cx="12" cy="12" r="3" className="fill-current opacity-20"/>
                </svg>
              ), 
              color: "purple",
              bgGradient: "from-purple-50 to-violet-50 dark:from-purple-950/50 dark:to-violet-950/50",
              borderColor: "group-hover:border-purple-300 dark:group-hover:border-purple-600"
            }
          ].map((i, index) => (
            <div 
              key={i.t} 
              className={`group rounded-2xl border border-slate-200/60 dark:border-slate-700/60 p-8 bg-gradient-to-br ${i.bgGradient} hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/40 transition-all duration-500 ${i.borderColor} animate-fade-in-up cursor-pointer transform hover:scale-105`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm mb-6 mx-auto group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors duration-300">
                {i.icon}
              </div>
              <h3 className="font-bold text-xl mb-4 text-slate-900 dark:text-white text-center group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">{i.t}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center">{i.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Hizmetler */}
      <Section id="hizmetler" className="bg-gradient-to-br from-slate-50 via-white to-brand-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 services-grid">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-brand-700 to-slate-900 dark:from-white dark:via-brand-300 dark:to-white bg-clip-text text-transparent">Hizmetlerimiz</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Eskişehir genelinde profesyonel tadilat ve tesisat hizmetleri. Kaliteli işçilik ve uygun fiyatlarla.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} s={s} />
          ))}
        </div>
        <div className="mt-12">
          <CTA />
        </div>
      </Section>

      {/* NAP + Harita */}
      <Section className="bg-white dark:bg-slate-950">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Bize Ulaşın</h3>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-brand-600">📍</span>
                <strong>Adres:</strong> {SITE.addressLine}, {SITE.city}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-600">📞</span>
                <strong>Telefon:</strong> <a className="hover:underline text-brand-600 hover:text-brand-700" href={`tel:${SITE.phone}`}>{SITE.phonePretty}</a>
              </li>
            </ul>
          </div>
          <div className="h-64 w-full overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
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

      {/* SVG Sprite - Profesyonel İkonlar */}
      <svg className="hidden" width="0" height="0">
        <defs>
          {/* Su Tesisatı İkonu */}
          <g id="i-water">
            <path fill="currentColor" d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.56 4.74V17c0 .55.45 1 1 1h.38c.55 0 1-.45 1-1v-5.51c2.55-.09 4.56-2.17 4.56-4.74C18.75 4.13 16.62 2 12 2zm0 1.5c1.52 0 2.75 1.23 2.75 2.75S13.52 8.75 12 8.75 9.25 7.52 9.25 6.25 10.48 3.5 12 3.5z"/>
            <circle fill="currentColor" cx="12" cy="6.25" r="1.25"/>
            <path fill="currentColor" d="M7 12c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm10 0c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1z"/>
          </g>

          {/* Boya İkonu */}
          <g id="i-paint">
            <path fill="currentColor" d="M18 4V3c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-3zM10 4h4v1h-4V4zm6 13H8V7h8v10z"/>
            <rect fill="currentColor" x="9" y="8" width="6" height="1" rx="0.5"/>
            <rect fill="currentColor" x="9" y="10" width="6" height="1" rx="0.5"/>
            <rect fill="currentColor" x="9" y="12" width="4" height="1" rx="0.5"/>
          </g>

          {/* Elektrik İkonu */}
          <g id="i-electric">
            <path fill="currentColor" d="M14 2l-4 8h3l-2 4 4-8h-3l2-4z"/>
            <circle fill="none" stroke="currentColor" strokeWidth="2" cx="12" cy="12" r="9"/>
            <path fill="currentColor" d="M8.5 16.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm7 0c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"/>
          </g>

          {/* Fayans İkonu */}
          <g id="i-tiles">
            <rect fill="currentColor" x="3" y="3" width="8" height="8" rx="1"/>
            <rect fill="currentColor" x="13" y="3" width="8" height="8" rx="1"/>
            <rect fill="currentColor" x="3" y="13" width="8" height="8" rx="1"/>
            <rect fill="currentColor" x="13" y="13" width="8" height="8" rx="1"/>
            <rect fill="none" stroke="white" strokeWidth="0.5" x="4" y="4" width="6" height="6" rx="0.5"/>
            <rect fill="none" stroke="white" strokeWidth="0.5" x="14" y="4" width="6" height="6" rx="0.5"/>
            <rect fill="none" stroke="white" strokeWidth="0.5" x="4" y="14" width="6" height="6" rx="0.5"/>
            <rect fill="none" stroke="white" strokeWidth="0.5" x="14" y="14" width="6" height="6" rx="0.5"/>
          </g>

          {/* Duşakabin İkonu */}
          <g id="i-shower">
            <rect fill="none" stroke="currentColor" strokeWidth="2" x="4" y="6" width="16" height="16" rx="2"/>
            <path fill="currentColor" d="M12 2v4M8 4h8"/>
            <circle fill="currentColor" cx="12" cy="4" r="1"/>
            <g fill="currentColor">
              <circle cx="8" cy="10" r="0.5"/>
              <circle cx="10" cy="10" r="0.5"/>
              <circle cx="12" cy="10" r="0.5"/>
              <circle cx="14" cy="10" r="0.5"/>
              <circle cx="16" cy="10" r="0.5"/>
              <circle cx="8" cy="12" r="0.5"/>
              <circle cx="10" cy="12" r="0.5"/>
              <circle cx="12" cy="12" r="0.5"/>
              <circle cx="14" cy="12" r="0.5"/>
              <circle cx="16" cy="12" r="0.5"/>
              <circle cx="8" cy="14" r="0.5"/>
              <circle cx="10" cy="14" r="0.5"/>
              <circle cx="12" cy="14" r="0.5"/>
              <circle cx="14" cy="14" r="0.5"/>
              <circle cx="16" cy="14" r="0.5"/>
            </g>
          </g>

          {/* Mutfak İkonu */}
          <g id="i-kitchen">
            <rect fill="none" stroke="currentColor" strokeWidth="2" x="3" y="3" width="18" height="18" rx="2"/>
            <rect fill="currentColor" x="5" y="5" width="14" height="3" rx="1"/>
            <rect fill="currentColor" x="5" y="9" width="6" height="6" rx="1"/>
            <rect fill="currentColor" x="13" y="9" width="6" height="6" rx="1"/>
            <rect fill="currentColor" x="5" y="16" width="14" height="3" rx="1"/>
            <circle fill="white" cx="8" cy="12" r="1"/>
            <circle fill="white" cx="16" cy="12" r="1"/>
          </g>
        </defs>
      </svg>

      {/* JSON-LD Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: `${SITE.city} Tadilat & Tesisat Ustası - Ana Sayfa`,
            description: `${SITE.city} genelinde profesyonel tadilat ve tesisat hizmetleri. Boya badana, banyo tadilatı, mutfak yenileme, fayans döşeme.`,
            url: SITE.url,
            mainEntity: {
              "@type": "LocalBusiness",
              name: SITE.name,
              telephone: SITE.phone,
              address: {
                "@type": "PostalAddress",
                addressLocality: SITE.city,
                addressCountry: SITE.country
              }
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Ana Sayfa",
                  item: SITE.url
                }
              ]
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".hero-description"]
            },
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE.url}/blog?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </>
  );
}
