import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* ✅ Google Search Console Doğrulama */}
        <meta name="google-site-verification" content="TPfoGwWxWoZouG_OoAXbMHOMFdRYNSxnTRzFqXRb8i8" />

        {/* 🌐 Genel Site Bilgileri */}
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="bideben — dijital eserlerle topluluk ödülleri kazandıran yeni nesil platform. Katkı yap, topluluğu büyüt, ödülü paylaş!"
        />
        <meta
          name="keywords"
          content="bideben, topluluk katkısı, dijital eser, ödül sistemi, koleksiyon, AI sanat, dijital sanat, çekilişsiz ödül"
        />
        <meta name="author" content="Hasan Ali Yüce" />
        <meta name="theme-color" content="#0b0b0b" />

        {/* 🖼️ Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="bideben" />
        <meta property="og:title" content="bideben | Dijital Eser & Topluluk Katkısı" />
        <meta
          property="og:description"
          content="Dijital eser satın al, topluluk katkısıyla gerçek ödüller kazan. bideben topluluğuna katıl!"
        />
        <meta property="og:url" content="https://www.bideben.com" />
        <meta property="og:image" content="https://www.bideben.com/images/og-banner.png" />

        {/* 🐦 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="bideben | Dijital Eser & Topluluk Katkısı" />
        <meta
          name="twitter:description"
          content="Topluluk katkısı ile ödül kazandıran dijital eser platformu. Katkı yap, kazananlardan biri ol!"
        />
        <meta name="twitter:image" content="https://www.bideben.com/images/og-banner.png" />
        <meta name="twitter:site" content="@bidebenX" />

        {/* 🌟 Favicon */}
        <link rel="icon" href="/images/favicon.png" type="image/png" />

        {/* ⚡ Performans için Preload */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
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
