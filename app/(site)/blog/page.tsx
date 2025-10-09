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
              <div className="aspect-video bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-contain"
                  width={400}
                  height={300}
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-400 border border-brand-500/20">
                    {post.category}
                  </span>
                  <span className="text-slate-500 text-sm">{post.readTime} dk okuma</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <time className="text-sm text-slate-500">
                    {new Date(post.publishedAt).toLocaleDateString('tr-TR', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-brand-400 hover:text-brand-300 transition-colors text-sm font-medium"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-slate-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Profesyonel Yardıma İhtiyacınız Var mı?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Blog yazılarımızdan faydalanın, ancak profesyonel işler için uzman ekibimizle iletişime geçmeyi unutmayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path className="stroke-current stroke-2" d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 6.18 2 2 0 0 1 5 4h4.09a1 1 0 0 1 1 .75l1.2 4.79a1 1 0 0 1-.27.95l-2.2 2.2a16 16 0 0 0 6.88 6.88l2.2-2.2a1 1 0 0 1 .95-.27l4.79 1.2a1 1 0 0 1 .75 1z"/>
              </svg>
              Hemen Ara: {SITE.phonePretty}
            </a>
            <Link
              href="/hizmetler"
              className="inline-flex items-center justify-center gap-2 border border-brand-600 text-brand-400 hover:bg-brand-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path className="stroke-current stroke-2" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
