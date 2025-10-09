import { SITE } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog";

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  try {
    const posts = BLOG_POSTS;
  
  const staticPages = [
    "",
    "/iletisim",
    "/blog"
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (path) => `
    <url>
      <loc>${SITE.url}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${path === "" ? "daily" : "weekly"}</changefreq>
      <priority>${path === "" ? "1.0" : "0.8"}</priority>
    </url>`
    )
    .join("")}
  ${posts
    .map(
      (post) => `
    <url>
      <loc>${SITE.url}/blog/${post.slug}</loc>
      <lastmod>${post.publishedAt}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}
