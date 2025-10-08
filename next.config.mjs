/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // İstersen ileride diğer ayarlar da buraya:
  // reactStrictMode: true,
  // swcMinify: true,
  // experimental: { serverActions: { allowedOrigins: ['*'] } },
};

export default nextConfig;
