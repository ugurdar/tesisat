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
      <Section className="bg-gradient-to-br from-slate-950 via-slate-900/70 to-slate-800/50">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-brand-300 to-white bg-clip-text text-transparent">
            Tadilat & Tesisat Rehberi
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Uzman ipuçları, pratik çözümler ve güncel bilgilerle tadilat ve tesisat işlerinizde rehberiniz oluyoruz.
          </p>
        </div>

        {/* Kategoriler */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {BLOG_CATEGORIES.map((category) => (
            <span
              key={category}
              className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium text-slate-300 hover:border-brand-600 transition-colors cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </Section>

      {/* Blog Posts */}
      <Section className="bg-slate-950">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group bg-slate-800 rounded-2xl border border-slate-700/60 overflow-hidden hover:shadow-xl hover:shadow-slate-900/40 transition-all duration-500 hover:border-brand-700 hover:-translate-y-2"
            >
              <div className="aspect-video bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {post.category === "Banyo Tadilatı" && (
                  <img 
                    src="/blog/banyo-tadilat.svg" 
                    alt="Banyo Tadilatı" 
                    className="w-full h-full object-cover"
                  />
                )}
                {post.category === "Mutfak Tadilatı" && (
                  <img 
                    src="/blog/mutfak-tadilat.svg" 
                    alt="Mutfak Tadilatı" 
                    className="w-full h-full object-cover"
                  />
                )}
                {post.category === "Elektrik Tesisatı" && (
                  <img 
                    src="/blog/elektrik-tesisat.svg" 
                    alt="Elektrik Tesisatı" 
                    className="w-full h-full object-cover"
                  />
                )}
                {post.category === "Boya Badana" && (
                  <img 
                    src="/blog/boya-badana.svg" 
                    alt="Boya Badana" 
                    className="w-full h-full object-cover"
                  />
                )}
                {(post.category === "Su Tesisatı" || post.category === "Genel Tadilat" || post.category === "Fayans Döşeme") && (
                  <div className="w-full h-full bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/60 dark:to-brand-800/40 flex items-center justify-center">
                    <div className="w-24 h-24 text-brand-600 dark:text-brand-400">
                      {post.category === "Su Tesisatı" && (
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                          <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.56 4.74V17c0 .55.45 1 1 1h.38c.55 0 1-.45 1-1v-5.51c2.55-.09 4.56-2.17 4.56-4.74C18.75 4.13 16.62 2 12 2z" className="fill-current"/>
                          <circle cx="12" cy="6.25" r="1.25" className="fill-white dark:fill-slate-900"/>
                        </svg>
                      )}
                      {post.category === "Genel Tadilat" && (
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" className="fill-current"/>
                        </svg>
                      )}
                      {post.category === "Fayans Döşeme" && (
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                          <rect x="3" y="3" width="8" height="8" rx="1" className="fill-current"/>
                          <rect x="13" y="3" width="8" height="8" rx="1" className="fill-current"/>
                          <rect x="3" y="13" width="8" height="8" rx="1" className="fill-current"/>
                          <rect x="13" y="13" width="8" height="8" rx="1" className="fill-current"/>
                        </svg>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>
              </div>
              
              <div className="p-6 relative">
                {/* Category Badge - Absolute positioned */}
                <div className="absolute -top-3 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-600 to-brand-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
                      <path className="fill-current" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {post.category}
                  </span>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-6 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                          <path className="stroke-current stroke-2" d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                        </svg>
                        {new Date(post.publishedAt).toLocaleDateString('tr-TR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" className="stroke-current stroke-2"/>
                          <path className="stroke-current stroke-2" d="M12 6v6l4 2"/>
                        </svg>
                        {post.readTime} dk
                      </div>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-brand-100 dark:hover:bg-brand-900/40 text-slate-700 dark:text-slate-300 hover:text-brand-700 dark:hover:text-brand-300 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 group/link"
                    >
                      Oku
                      <svg className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none">
                        <path className="stroke-current stroke-2" d="M5 12h14m-7-7l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
