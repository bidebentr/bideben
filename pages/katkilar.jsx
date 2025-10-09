'use client';
import React, { useState, useEffect } from "react";
import { products } from "../data/products.js";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../components/Footer.jsx"), { ssr: false });

export default function Katkilar() {
  const [progressList, setProgressList] = useState([]);

  useEffect(() => {
    // ürün verilerini ilerleme oranı ile birlikte hazırlayalım
    const withProgress = products.map((p) => {
      const percent = Math.min((p.sold / p.target) * 100, 100);
      return { ...p, progress: percent };
    });
    setProgressList(withProgress);
  }, []);

  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between text-white"
      style={{
        background: "linear-gradient(180deg, #0a0a0a, #111)",
      }}
    >
      {/* Üst Kısım */}
      <div className="max-w-5xl mx-auto mt-12 mb-10 px-6 text-center">
        <h1
          className="text-4xl font-extrabold mb-6"
          style={{
            color: "#ffd700",
            textShadow: "0 0 10px #ffd700, 0 0 30px #ffea70",
          }}
        >
          🌟 Topluluk Katkıları
        </h1>
        <p className="text-gray-400 mb-8 text-sm sm:text-base">
          Aşağıda topluluk tarafından katkı yapılan tüm ürünleri görebilirsiniz.
          Her dijital satın alım, gerçek bir ödülün topluluğa kazandırılmasını sağlar 💎
        </p>

        {/* 🔙 Anasayfaya dön */}
        <button
          onClick={handleBack}
          className="px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-semibold rounded-lg hover:scale-105 transition-transform"
        >
          ⬅️ Anasayfa
        </button>
      </div>

      {/* Ürün listesi */}
      <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {progressList.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-4 text-center backdrop-blur-sm border border-gray-700 transition-transform transform hover:-translate-y-1"
            style={{
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-contain mb-4 rounded-lg bg-black"
            />
            <h2
              className="text-lg font-semibold mb-2"
              style={{
                color: "#ffd700",
                textShadow: "0 0 10px #ffd700",
              }}
            >
              {item.name}
            </h2>
            <p className="text-sm text-gray-400 mb-3">{item.category}</p>

            {/* Katkı Barı */}
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
              <div
                style={{
                  width: `${item.progress}%`,
                  background:
                    item.progress >= 100
                      ? "linear-gradient(90deg, #00ff9d, #00ffaa)"
                      : "linear-gradient(90deg, #ffd700, #fff8b0)",
                  height: "100%",
                  boxShadow:
                    item.progress >= 100
                      ? "0 0 10px #00ffaa"
                      : "0 0 10px #ffd700",
                  transition: "width 0.5s ease",
                }}
              />
            </div>

            <p
              className={`text-sm ${
                item.progress >= 100 ? "text-green-400" : "text-yellow-400"
              }`}
            >
              {(item.sold ?? 0).toLocaleString("tr-TR")} /{" "}
              {(item.target ?? 0).toLocaleString("tr-TR")} katkı tamamlandı
            </p>

            {item.progress >= 100 && (
              <p className="mt-1 text-xs text-green-400 font-semibold">
                ✅ Teslim Edildi!
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}