import '@/styles/globals.css';  // ✅ Tailwind stillerini dahil eder

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
