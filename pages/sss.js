import Head from "next/head";

export default function SSS() {
  return (
    <>
      <Head>
        <title>Sık Sorulan Sorular | bideben</title>
        <meta
          name="description"
          content="bideben hakkında en çok merak edilen sorular: topluluk katkısı sistemi, ödül kazanma süreci, dijital eserler ve güvenlik hakkında tüm cevaplar burada."
        />
        <meta
          name="keywords"
          content="bideben, sık sorulan sorular, topluluk katkısı, ödül sistemi, dijital eser, çekilişsiz ödül"
        />
        <meta property="og:title" content="Sık Sorulan Sorular | bideben" />
        <meta
          property="og:description"
          content="Topluluk katkısı sistemi nasıl çalışır? Gerçek ödül nasıl kazanılır? Tüm sorularınızın yanıtı burada!"
        />
        <meta property="og:image" content="https://www.bideben.com/images/og-banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bideben.com/sss" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sık Sorulan Sorular | bideben" />
        <meta
          name="twitter:description"
          content="bideben topluluk katkısı sistemi hakkında merak ettiklerinizi öğrenin."
        />
        <meta name="twitter:image" content="https://www.bideben.com/images/og-banner.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "bideben nedir?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "bideben, dijital eserler üzerinden topluluk katkısı oluşturan ve bu katkılarla gerçek ödüller kazandıran yeni nesil bir dijital sanat platformudur.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Topluluk katkısı nasıl çalışır?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Her dijital eser belirli bir gerçek ödülle ilişkilidir. Satın alındıkça katkı barı dolar. Bar dolduğunda ödül topluluk üyelerinden birine verilir.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Çekiliş var mı?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hayır, sistem tamamen şeffaftır. Ödül dağıtımı topluluk katkısına göre gerçekleşir. Türkiye’deki çekiliş yasalarına takılmadan yasal şekilde işler.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Katkı barı ne işe yarar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Katkı barı, topluluğun belirli bir ödüle ulaşmak için toplam katkısını gösterir. Bar dolduğunda ödül verilir.",
                  },
                },
                {
                  "@type": "Question",
                  name: "bideben güvenli mi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Evet. Tüm işlemler kayıt altındadır, şeffaftır ve yasal çerçevede çalışır. Ödemeler güvenli altyapılar üzerinden alınır.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-yellow-400 text-center">
          ❓ Sık Sorulan Sorular
        </h1>

        <div className="max-w-3xl w-full space-y-6">
          {[
            {
              q: "bideben nedir?",
              a: "bideben, dijital eserlerle topluluk katkısı oluşturan ve bu katkılarla gerçek ödüller kazandıran yeni nesil bir dijital sanat platformudur.",
            },
            {
              q: "Topluluk katkısı nasıl çalışır?",
              a: "Her dijital eser belirli bir gerçek ödülle ilişkilidir. Satın alındıkça katkı barı dolar. Bar dolduğunda ödül topluluk üyelerinden birine verilir.",
            },
            {
              q: "Çekiliş var mı?",
              a: "Hayır, sistem tamamen şeffaftır. Ödül dağıtımı topluluk katkısına göre gerçekleşir. Türkiye’deki çekiliş yasalarına takılmadan yasal şekilde işler.",
            },
            {
              q: "Katkı barı ne işe yarar?",
              a: "Katkı barı, topluluğun belirli bir ödüle ulaşmak için toplam katkısını gösterir. Bar dolduğunda ödül verilir.",
            },
            {
              q: "bideben güvenli mi?",
              a: "Evet. Tüm işlemler kayıt altındadır, şeffaftır ve yasal çerçevede çalışır. Ödemeler güvenli altyapılar üzerinden alınır.",
            },
          ].map(({ q, a }, i) => (
            <div
              key={i}
              className="bg-[#161616] border border-yellow-600 rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">{q}</h2>
              <p className="text-gray-300 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-12">
          © {new Date().getFullYear()} bideben — Dijital Eser, Gerçek Ödül.
        </p>
      </main>
    </>
  );
}
