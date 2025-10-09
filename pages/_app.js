import Head from "next/head";
import Script from "next/script";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <>
        {/* Head meta - burada viewport tanımı yer almalı */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-425090360"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-425090360');
          `}
        </Script>

        {/* Sayfa içeriği */}
        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
