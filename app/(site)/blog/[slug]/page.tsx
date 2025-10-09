import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/constants";
import Section from "@/components/Section";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: `${post.title} | ${SITE.name}`,
    description: post.excerpt,
    keywords: [...post.tags, "Eskişehir", "tadilat", "tesisat"],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
    }
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-br from-slate-50 via-white to-brand-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors mb-6"
          >
            ← Blog'a Dön
          </Link>
          
          <div className="mb-6">
            <span className="bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-slate-600 dark:text-slate-400 mb-8">
            <time>{new Date(post.publishedAt).toLocaleDateString('tr-TR')}</time>
            <span>•</span>
            <span>{post.readTime} dakika okuma</span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section className="bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/60 dark:to-brand-800/40 rounded-2xl mb-12 flex items-center justify-center">
            <div className="text-6xl text-brand-600 dark:text-brand-400">
              {post.category === "Banyo Tadilatı" && "🛁"}
              {post.category === "Mutfak Tadilatı" && "🍽️"}
              {post.category === "Elektrik Tesisatı" && "⚡"}
              {post.category === "Boya Badana" && "🎨"}
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim() === '') return null;
              
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-slate-800 dark:text-slate-200">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              
              if (paragraph.startsWith('- **')) {
                const [term, description] = paragraph.replace('- **', '').split('**: ');
                return (
                  <li key={index} className="mb-2">
                    <strong className="text-brand-700 dark:text-brand-300">{term}</strong>: {description}
                  </li>
                );
              }
              
              return (
                <p key={index} className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-brand-50 via-white to-brand-100/50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl border border-brand-200/60 dark:border-brand-700/60">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                {post.category} konusunda profesyonel yardıma mı ihtiyacınız var?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Eskişehir genelinde uzman ekibimizle hizmetinizdeyiz. Ücretsiz keşif için hemen arayın.
              </p>
              <a 
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 px-8 py-3 text-white font-semibold shadow-xl hover:shadow-2xl hover:from-brand-700 hover:to-brand-800 transition-all duration-300"
              >
                📞 Hemen Ara – {SITE.phonePretty}
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              İlgili Yazılar
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {BLOG_POSTS.filter(p => p.slug !== post.slug && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                <Link 
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <h4 className="font-semibold mb-2 text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
