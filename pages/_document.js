import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta
  name="google-site-verification"
  content="oVX_IwBVT7ZFU_CZXCAA68H5wT5e-5wx1-9Re7q9gT8"
/>

        {/* 🌐 Genel Site Bilgisi */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0b0b0b" />
        <meta
          name="description"
          content="bideben — dijital eserlerle topluluk ödülleri kazandıran yeni nesil platform. Katkı yap, topluluğu büyüt, ödülü paylaş."
        />
        <meta
          name="keywords"
          content="bideben, dijital eser, topluluk katkısı, ödül sistemi, koleksiyon, NFT, dijital sanat, çekilişsiz ödül"
        />
        <meta name="author" content="bideben.com" />

        {/* 🪐 Open Graph (Facebook / WhatsApp / LinkedIn önizleme) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="bideben" />
        <meta
          property="og:title"
          content="bideben — Dijital Eser, Gerçek Ödül"
        />
        <meta
          property="og:description"
          content="Katkı yap, topluluk ödülüne ortak ol. Gerçek ürün, toplulukla paylaşılır."
        />
        <meta property="og:url" content="https://bideben.com" />
        <meta property="og:image" content="https://bideben.com/images/og-banner.png" />

        {/* 🐦 Twitter Card (X platformu için) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="bideben — Dijital Eser, Gerçek Ödül"
        />
        <meta
          name="twitter:description"
          content="Topluluk katkısı ile dijital eserler bir araya geliyor. Her katkı seni gerçek bir ödüle yaklaştırır."
        />
        <meta
          name="twitter:image"
          content="https://bideben.com/images/og-banner.png"
        />
        <meta name="twitter:site" content="@bidebenX" />
        <meta name="twitter:creator" content="@bidebenX" />

        {/* 💎 Favicon & App Icons */}
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />

        {/* 🧠 Font - Orbitron (dijital tarz) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
