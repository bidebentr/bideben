import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    // 🧩 Facebook login sonrası "#_=_" temizle
    if (window.location.hash === "#_=_") {
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }

    // 🌀 Facebook bazen session'ı geç dolduruyor — sayfayı 1 kere yenileyelim
    const url = window.location.href;
    if (url.includes("facebook") && !session) {
      const refreshed = sessionStorage.getItem("fb_refreshed");
      if (!refreshed) {
        sessionStorage.setItem("fb_refreshed", "1");
        window.location.reload(); // otomatik 1 defa yenile
      }
    }
  }, [session]);

  return (
    <SessionProvider session={session} refetchInterval={0} refetchOnWindowFocus={false}>
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="bideben – yapay zeka ile üretilen dijital eserler" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* 📊 Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XRB4G2KHWL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XRB4G2KHWL', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
