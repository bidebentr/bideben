import Head from "next/head";

export default function Oduller() {
  return (
    <>
      <Head>
        <title>Topluluk Katkısı Ödülleri | bideben</title>
        <meta
          name="description"
          content="bideben'de dijital eser satın al, topluluk katkısı sayesinde gerçek ödüller kazan! Katkı barı doldukça kazanan belirlenir, herkesin katkısı değerlidir."
        />
        <meta
          name="keywords"
          content="bideben, topluluk katkısı, ödül sistemi, dijital eser, AI sanat, çekilişsiz ödül, katkı barı"
        />
        <meta property="og:title" content="Topluluk Katkısı Ödülleri | bideben" />
        <meta
          property="og:description"
          content="Topluluk katkısı sistemiyle ödül kazandıran yeni nesil dijital sanat platformu. Katkı yap, kazananlardan biri ol!"
        />
        <meta property="og:image" content="https://www.bideben.com/images/og-banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bideben.com/oduller" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Topluluk Katkısı Ödülleri | bideben" />
        <meta
          name="twitter:description"
          content="Katkı barı doldukça ödüller topluluğa dağıtılır. bideben ile dijital eser al, toplulukla kazan!"
        />
        <meta name="twitter:image" content="https://www.bideben.com/images/og-banner.png" />
      </Head>

      <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-yellow-400">
          🎁 Topluluk Katkısı Ödülleri
        </h1>
        <p className="max-w-2xl text-center text-gray-300 mb-10 leading-relaxed">
          bideben, dijital eserlerin sadece bir sanat ürünü değil; aynı zamanda bir topluluk katkısı
          olduğunu savunur. Her satın alma, <strong>“Katkı Barı”</strong>nı doldurarak gerçek bir
          ödülün topluluğa verilmesini sağlar. Çekiliş yok, tamamen şeffaf katkı sistemi!
        </p>

        <section className="max-w-3xl bg-[#161616] border border-yellow-600 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            🌟 Nasıl Çalışıyor?
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Her dijital eser belirli bir gerçek ödülle ilişkilidir.</li>
            <li>Satış sayısı <strong>hedefe ulaştığında</strong>, topluluk katkısı tamamlanır.</li>
            <li>Katkı yapan kullanıcılar arasından biri, ödülü kazanır.</li>
            <li>Tüm süreç blokzincir mantığında şeffaftır — herkes katkı oranını görebilir.</li>
          </ul>
        </section>

        <section className="max-w-3xl bg-[#161616] border border-yellow-600 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            🏆 Neden Topluluk Katkısı?
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Çünkü bizce “ödül” sadece kazanana değil, katkı sağlayan herkese aittir. 
            bideben topluluğu, paylaşım ekonomisinin dijital sanat versiyonudur. 
            Her katkı, gelecekteki yeni ödüllerin de temelini oluşturur.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-12">
          © {new Date().getFullYear()} bideben — Dijital Eser, Gerçek Ödül.
        </p>
      </main>
    </>
  );
}
