/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      // 🔁 Hukuki sayfalar için kalıcı yönlendirmeler
      {
        source: "/kullanim-kosullari",
        destination: "/legal/kullanim-kosullari",
        permanent: true,
      },
      {
        source: "/gizlilik-politikasi",
        destination: "/legal/gizlilik-politikasi",
        permanent: true,
      },
      {
        source: "/kvkk-aydinlatma-metni",
        destination: "/legal/kvkk-aydinlatma-metni",
        permanent: true,
      },
    ];
  },

  // 💡 Ek ayarlar (ileride ihtiyacın olursa)
  // reactStrictMode: true,
  // swcMinify: true,
  // experimental: { serverActions: { allowedOrigins: ['*'] } },
};

export default nextConfig;