'use client';
import Head from "next/head";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { products as allProducts } from "../data/products.js";

const Footer = dynamic(() => import("../components/Footer.jsx"), { ssr: false });

export default function Oduller() {
  const [completedProducts, setCompletedProducts] = useState([]);

  // ✅ Tamamlanan ürünleri filtrele (%100 ve üzeri doluluk)
  useEffect(() => {
    const filtered = allProducts.filter(
      (item) => item.sold && item.target && item.sold >= item.target
    );
    setCompletedProducts(filtered);
  }, []);

  // 🔙 Anasayfa dönüş fonksiyonu
  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

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

      <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center px-6 py-16">
        {/* 🔙 Anasayfa Butonu */}
        <button
          onClick={handleBack}
          className="mb-10 px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          ⬅️ Anasayfa
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-yellow-400">
          🎁 Topluluk Katkısı Ödülleri
        </h1>

        <p className="max-w-2xl text-center text-gray-300 mb-10 leading-relaxed">
          bideben, dijital eserlerin sadece bir sanat ürünü değil; aynı zamanda bir topluluk katkısı
          olduğunu savunur. Her satın alma, <strong>Katkı Barı</strong>’nı doldurarak gerçek bir
          ödülün topluluğa verilmesini sağlar. Çekiliş yok, tamamen şeffaf katkı sistemi!
        </p>

        <section className="max-w-3xl bg-[#161616] border border-yellow-600 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">🌟 Nasıl Çalışıyor?</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-3">
            <li>Her dijital eser belirli bir gerçek ödülle ilişkilidir.</li>
            <li>Satış sayısı <strong>hedefe ulaştığında</strong>, topluluk katkısı tamamlanır.</li>
            <li>Katkı yapan kullanıcılar arasından biri, ödülü kazanır.</li>
            <li>Tüm süreç şeffaftır — herkes katkı oranını görebilir.</li>
          </ul>
        </section>

        {/* 🏆 Otomatik Tamamlanan Ürünler Listesi */}
        <section className="max-w-6xl w-full text-center mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">🏅 Tamamlanan Ödüller</h2>
          {completedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {completedProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#161616] border border-yellow-600 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-contain mb-4 rounded-xl"
                  />
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1">
                    🎯 Hedef: {item.target?.toLocaleString("tr-TR")}
                  </p>
                  <p className="text-green-400 font-semibold">✅ Katkı Tamamlandı!</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">
              Henüz tamamlanan bir topluluk ödülü bulunmuyor. 🚀
            </p>
          )}
        </section>

        {/* 🦶 Footer */}
        <div className="w-full mt-10">
          <Footer />
        </div>
      </main>
    </>
  );
}
