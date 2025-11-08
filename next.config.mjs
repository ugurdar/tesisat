/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages static export ayarları
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Base path GitHub Pages proje depoları için isteğe bağlı tutuluyor.
  // Örn: NEXT_BASE_PATH=/tesisat npm run build
  basePath: process.env.NEXT_BASE_PATH
    ? `/${process.env.NEXT_BASE_PATH.replace(/^\/+|\/+$/g, '')}`
    : '',
  assetPrefix: process.env.NEXT_BASE_PATH
    ? `/${process.env.NEXT_BASE_PATH.replace(/^\/+|\/+$/g, '')}/`
    : undefined,
  
  // Performans optimizasyonları
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // Static export için gerekli
  },
  
  // TypeScript strict mode
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig;
