import Section from "@/components/Section";
import Link from "next/link";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog";
import { SITE } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `📚 Tadilat & Tesisat Rehberi | ${SITE.city} Uzman İpuçları`,
  description: `✅ ${SITE.city} tadilat ve tesisat konularında uzman ipuçları, praktik rehberler ve güncel bilgiler. Boya badana, banyo tadilatı, mutfak yenileme, fayans döşeme rehberleri. 📞 ${SITE.phonePretty}`,
  keywords: [
    `${SITE.city} tadilat rehberi`,
    `${SITE.city} tesisat ipuçları`,
    "banyo tadilatı rehberi",
    "mutfak yenileme ipuçları",
    "boya badana rehberi",
    "fayans döşeme nasıl yapılır",
    "su tesisatı arızaları",
    "elektrik tesisatı güvenliği",
    "tadilat ipuçları",
    "tesisat bakımı"
  ],
  openGraph: {
    title: `📚 Tadilat & Tesisat Rehberi | ${SITE.city} Uzman İpuçları`,
    description: `✅ ${SITE.city} tadilat ve tesisat konularında uzman rehberler ve ipuçları. Pratik çözümler için okuyun!`,
    type: 'website',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE.city} Tadilat ve Tesisat Rehberi`
      }
    ]
  },
  alternates: {
    canonical: '/blog'
  }
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-slate-50 via-white to-brand-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-brand-700 to-slate-900 dark:from-white dark:via-brand-300 dark:to-white bg-clip-text text-transparent">
            Tadilat & Tesisat Rehberi
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Uzman ipuçları, pratik çözümler ve güncel bilgilerle tadilat ve tesisat işlerinizde rehberiniz oluyoruz.
          </p>
        </div>

        {/* Kategoriler */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {BLOG_CATEGORIES.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-brand-300 dark:hover:border-brand-600 transition-colors cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </Section>

      {/* Blog Posts */}
      <Section className="bg-white dark:bg-slate-950">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 overflow-hidden hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/40 transition-all duration-300 hover:border-brand-200 dark:hover:border-brand-700"
            >
              <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/60 dark:to-brand-800/40 flex items-center justify-center">
                <div className="w-16 h-16 text-brand-600 dark:text-brand-400">
                  {post.category === "Banyo Tadilatı" && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <rect x="4" y="6" width="16" height="12" rx="2" className="stroke-current stroke-2" fill="none"/>
                      <path d="M4 10h16M8 14h8" className="stroke-current stroke-2"/>
                      <circle cx="6" cy="8" r="1" className="fill-current"/>
                      <circle cx="18" cy="8" r="1" className="fill-current"/>
                      <path d="M12 2v4" className="stroke-current stroke-2"/>
                    </svg>
                  )}
                  {post.category === "Mutfak Tadilatı" && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <rect x="3" y="3" width="18" height="18" rx="2" className="stroke-current stroke-2" fill="none"/>
                      <rect x="5" y="5" width="14" height="3" rx="1" className="fill-current"/>
                      <rect x="5" y="9" width="6" height="6" rx="1" className="fill-current"/>
                      <rect x="13" y="9" width="6" height="6" rx="1" className="fill-current"/>
                      <rect x="5" y="16" width="14" height="3" rx="1" className="fill-current"/>
                      <circle cx="8" cy="12" r="1" fill="white"/>
                      <circle cx="16" cy="12" r="1" fill="white"/>
                    </svg>
                  )}
                  {post.category === "Elektrik Tesisatı" && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" className="fill-current"/>
                      <circle cx="12" cy="12" r="9" className="stroke-current stroke-2" fill="none"/>
                    </svg>
                  )}
                  {post.category === "Boya Badana" && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M18 4V3c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1H3c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h1v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7h1c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-3z" className="fill-current"/>
                      <rect x="8" y="4" width="8" height="1" className="fill-white"/>
                      <rect x="8" y="8" width="8" height="1" className="fill-white"/>
                      <rect x="8" y="10" width="8" height="1" className="fill-white"/>
                      <rect x="8" y="12" width="6" height="1" className="fill-white"/>
                    </svg>
                  )}
                  {post.category === "Su Tesisatı" && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.56 4.74V17c0 .55.45 1 1 1h.38c.55 0 1-.45 1-1v-5.51c2.55-.09 4.56-2.17 4.56-4.74C18.75 4.13 16.62 2 12 2z" className="fill-current"/>
                      <circle cx="12" cy="6.25" r="1.25" className="fill-white"/>
                      <path d="M7 12c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1zm10 0c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1z" className="fill-current"/>
                    </svg>
                  )}
                  {post.category === "Genel Tadilat" && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" className="fill-current"/>
                      <circle cx="12" cy="12" r="8" className="stroke-current stroke-2" fill="none"/>
                      <path d="M12 8v4l3 3" className="stroke-current stroke-2"/>
                    </svg>
                  )}
                  {(post.category === "Fayans Döşeme" || post.category === "Fayans") && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <rect x="3" y="3" width="8" height="8" rx="1" className="fill-current"/>
                      <rect x="13" y="3" width="8" height="8" rx="1" className="fill-current"/>
                      <rect x="3" y="13" width="8" height="8" rx="1" className="fill-current"/>
                      <rect x="13" y="13" width="8" height="8" rx="1" className="fill-current"/>
                      <rect x="4" y="4" width="6" height="6" rx="0.5" className="stroke-white stroke-1" fill="none"/>
                      <rect x="14" y="4" width="6" height="6" rx="0.5" className="stroke-white stroke-1" fill="none"/>
                      <rect x="4" y="14" width="6" height="6" rx="0.5" className="stroke-white stroke-1" fill="none"/>
                      <rect x="14" y="14" width="6" height="6" rx="0.5" className="stroke-white stroke-1" fill="none"/>
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-slate-500 dark:text-slate-400">
                  <span className="bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.readTime} dk okuma</span>
                </div>
                
                <h3 className="font-bold text-lg mb-3 text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <time className="text-xs text-slate-500 dark:text-slate-400">
                    {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                  </time>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-brand-600 dark:text-brand-400 font-medium text-sm hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                  >
                    Devamını oku →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
