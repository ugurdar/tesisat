import { SITE } from "@/lib/constants";

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml

# Block access to admin areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Allow access to important files
Allow: /favicon.ico
Allow: /robots.txt
Allow: /sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
