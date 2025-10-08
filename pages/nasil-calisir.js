import Head from "next/head";

export default function NasilCalisir() {
  return (
    <>
      <Head>
        <title>bideben nasıl çalışır? | Dijital Eser, Gerçek Ödül</title>
        <meta
          name="description"
          content="bideben platformu nasıl çalışıyor? Dijital eser satın al, topluluk katkısı oluştur, katkı barı dolunca gerçek ödül kazananını topluluk belirler."
        />
        <meta
          name="keywords"
          content="bideben, nasıl çalışır, topluluk katkısı, dijital eser, ödül sistemi, çekilişsiz ödül, katkı barı"
        />
        <meta property="og:title" content="bideben nasıl çalışır? | Dijital Eser, Gerçek Ödül" />
        <meta
          property="og:description"
          content="Katkı yap, topluluğu büyüt, gerçek ödül kazan! bideben’in çekilişsiz ödül sistemi nasıl çalışıyor, adım adım öğren."
        />
        <meta property="og:image" content="https://www.bideben.com/images/og-banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bideben.com/nasil-calisir" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="bideben nasıl çalışır? | Dijital Eser, Gerçek Ödül" />
        <meta
          name="twitter:description"
          content="bideben topluluk katkısı sistemi: dijital eserlerle ödül kazandıran yeni nesil platform."
        />
        <meta name="twitter:image" content="https://www.bideben.com/images/og-banner.png" />
      </Head>

      <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-yellow-400 text-center">
          ⚙️ bideben nasıl çalışır?
        </h1>

        <section className="max-w-3xl w-full space-y-8">
          <div className="bg-[#161616] border border-yellow-600 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">1️⃣ Dijital Eser Seç</h2>
            <p className="text-gray-300 leading-relaxed">
              bideben’de her eser, gerçek bir ödülle ilişkilidir. Beğendiğin bir dijital eseri seç
              ve satın alarak katkını başlat. Her satış, o ödülün <strong>Katkı Barı</strong>’na
              eklenir.
            </p>
          </div>

          <div className="bg-[#161616] border border-yellow-600 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">2️⃣ Katkı Barı Dolsun</h2>
            <p className="text-gray-300 leading-relaxed">
              Her eser için hedeflenen bir satış adedi vardır. Bu hedef tamamlandığında katkı barı
              dolar ve ödül <strong>Topluluk Katkısı Kazananı</strong>’na verilir. Çekiliş yok,
              şans değil, tamamen topluluk katkısı sistemi!
            </p>
          </div>

          <div className="bg-[#161616] border border-yellow-600 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">3️⃣ Gerçek Ödül Dağıtımı</h2>
            <p className="text-gray-300 leading-relaxed">
              Katkı barı dolduğunda sistem, katkı yapanlar arasından şeffaf bir şekilde kazananı
              belirler. Ödül, bideben ekibi tarafından doğrudan kazanana gönderilir.
            </p>
          </div>

          <div className="bg-[#161616] border border-yellow-600 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">4️⃣ Şeffaf ve Güvenli</h2>
            <p className="text-gray-300 leading-relaxed">
              Tüm katkı hareketleri herkes tarafından görülebilir. 
              bideben, Türkiye’deki yasal çerçeveye uygun, çekilişsiz ve 
              tamamen <strong>şeffaf ödül sistemi</strong> sunar.
            </p>
          </div>

          <div className="bg-[#161616] border border-yellow-600 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">5️⃣ Topluluğu Büyüt</h2>
            <p className="text-gray-300 leading-relaxed">
              Her katkı sadece bir ödüle değil, gelecekteki yeni koleksiyonların açılmasına da katkı
              sağlar. Topluluk büyüdükçe, ödüller ve dijital eserler de büyür.
            </p>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-12">
          © {new Date().getFullYear()} bideben — Dijital Eser, Gerçek Ödül.
        </p>
      </main>
    </>
  );
}
