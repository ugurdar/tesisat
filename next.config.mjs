/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages static export ayarları
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Base path GitHub Pages için (repository ismi)
  basePath: process.env.NODE_ENV === 'production' ? '/tesisat' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tesisat/' : '',
  
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
