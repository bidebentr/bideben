"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function KatkıModal({ product, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [progress, setProgress] = useState(0);
  const { data: session } = useSession();

  if (!product) return null;

  // 🎨 Kategori renkleri
  const categoryColors = {
    "Beyaz Eşya": "#4fc3f7",
    "Elektrikli Ev Aletleri": "#ba68c8",
    "Klima ve Isıtıcılar": "#ffb74d",
    "Bilgisayar": "#81c784",
    "Telefon": "#f06292",
    "Spor ve Outdoor": "#4db6ac",
    "Taşıtlar": "#f44336",
    "Oyun ve Oyuncak": "#9575cd",
    "Foto ve Kamera": "#64b5f6",
    "Oto Market": "#ff9800",
    "Ödül Havuzu": "#ffd700",
    DEFAULT: "#bb86fc",
  };
  const barColor =
    categoryColors[product.category?.trim()] || categoryColors.DEFAULT;

  const priceValue = useMemo(() => {
    const raw = String(product.price || "")
      .replace(/[₺TL\s]/gi, "")
      .replace(",", ".");
    return parseFloat(raw) || 0;
  }, [product]);

  const baseProgress = useMemo(() => {
    const sold = product.sold || 0;
    const target = product.target || 1;
    return Math.min((sold / target) * 100, 100);
  }, [product]);

  useEffect(() => {
    let start = 0;
    const end = baseProgress + quantity * 0.1;
    const step = () => {
      start += (end - start) * 0.1;
      setProgress(start);
      if (start < end - 0.2) requestAnimationFrame(step);
      else setProgress(end);
    };
    step();
  }, [baseProgress, quantity]);

  const totalPrice = (quantity * priceValue).toFixed(2);
  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => Math.max(1, q - 1));

  // 💳 Ödeme işlemini başlat
  const handlePayment = async () => {
    if (!session?.user?.email) {
      alert("Lütfen giriş yapmadan katkı yapamazsınız.");
      return;
    }

    setAdded(true);
    setTimeout(async () => {
      try {
        const basket = [[product.name, totalPrice, quantity]];
        const response = await fetch("/api/paytr-init", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: session.user.email,
            user_name: session.user.name,
            user_address: "Katkı Sahibi - BideBen Kullanıcısı",
            user_phone: "05555555555",
            payment_amount: Math.round(priceValue * quantity * 100), // PayTR kuruş cinsinden ister
            basket,
          }),
        });

        const data = await response.json();

        if (data.token) {
          // 🧭 PayTR iframe sayfasına yönlendir
          window.location.href = `https://www.paytr.com/odeme/guvenli/${data.token}`;
        } else {
          console.error("PAYTR hata:", data.error);
          alert("Ödeme başlatılamadı: " + data.error);
        }
      } catch (err) {
        console.error("Ödeme isteği hatası:", err);
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    }, 1500);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        className={`relative p-8 rounded-2xl shadow-lg text-white w-[90%] max-w-md animate-fadeIn ${
          added ? "animate-glowPulse" : ""
        }`}
        style={{
          background:
            "linear-gradient(145deg, rgba(20,20,20,0.95), rgba(30,30,30,0.9))",
          border: `2px solid ${barColor}`,
          boxShadow: `0 0 25px ${barColor}90, inset 0 0 25px ${barColor}50`,
          transition: "all 0.5s ease",
        }}
      >
        {/* ❌ Kapat */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl hover:text-pink-400 transition"
        >
          ✕
        </button>

        {!added ? (
          <>
            <h2
              className="text-3xl font-extrabold text-center mb-6"
              style={{
                color: barColor,
                textShadow: `0 0 10px ${barColor}, 0 0 25px #fff`,
              }}
            >
              🌍 Topluluğa Katkı Yap
            </h2>

            <div className="flex justify-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl w-48 h-48 object-cover border-2"
                style={{
                  borderColor: barColor,
                  boxShadow: `0 0 15px ${barColor}`,
                }}
              />
            </div>

            <h3 className="text-xl font-semibold text-center mb-2 text-yellow-300">
              {product.name}
            </h3>
            <p className="text-center text-sm text-gray-300 mb-4">
              {product.category} •{" "}
              <span className="text-yellow-400 font-semibold">
                {product.price}
              </span>
            </p>

            {/* 🎯 Katkı Barı */}
            <div className="mt-4 mb-6">
              <p className="text-center text-sm text-gray-300 mb-1">
                🎯 Hedef Katkı:{" "}
                <span className="text-yellow-400">
                  {product.sold?.toLocaleString("tr-TR") || 0} /{" "}
                  {product.target?.toLocaleString("tr-TR")}
                </span>
              </p>

              <div
                className="w-full h-4 rounded-full overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  boxShadow: "inset 0 0 10px rgba(255,255,255,0.2)",
                }}
              >
                <div
                  className="h-full transition-all duration-700"
                  style={{
                    width: `${progress}%`,
                    background: `linear-gradient(90deg, ${barColor}, #fff, ${barColor})`,
                    boxShadow: `0 0 12px ${barColor}`,
                  }}
                />
              </div>

              <p
                className="text-center text-sm mt-2"
                style={{
                  color: barColor,
                  textShadow: `0 0 8px ${barColor}`,
                }}
              >
                %{progress.toFixed(1)} hedef tamamlandı
              </p>
            </div>

            {/* 🔢 Miktar */}
            <div className="flex justify-center items-center mb-4 space-x-4">
              <button
                onClick={decrease}
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-xl font-bold"
              >
                −
              </button>
              <span className="text-2xl font-semibold">{quantity}</span>
              <button
                onClick={increase}
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg text-xl font-bold"
              >
                +
              </button>
            </div>

            {/* 💰 Tutar */}
            <p
              className="text-center mb-6 text-lg font-semibold"
              style={{ color: "#ffb74d", textShadow: "0 0 10px #ffb74d" }}
            >
              💰 Toplam Katkın:{" "}
              <span className="text-yellow-300">
                {quantity} × {priceValue.toFixed(2)} TL ={" "}
                <b>{totalPrice} TL</b>
              </span>
            </p>

            {/* 🛒 Ödeme Butonu */}
            <button
              onClick={handlePayment}
              className="w-full py-3 text-lg font-bold rounded-xl transition transform hover:scale-105"
              style={{
                background: `linear-gradient(90deg, ${barColor}, #fff, ${barColor})`,
                color: "#000",
                boxShadow: `0 0 20px ${barColor}`,
                animation: "glow 3s ease-in-out infinite",
              }}
            >
              💳 Ödeme Yap ve Katkı Sağla
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-64">
            <div
              className="text-5xl mb-4 animate-bounce"
              style={{ color: barColor, textShadow: `0 0 20px ${barColor}` }}
            >
              🔄
            </div>
            <h3
              className="text-2xl font-bold"
              style={{
                color: barColor,
                textShadow: `0 0 10px ${barColor}`,
              }}
            >
              PayTR bağlantısı kuruluyor...
            </h3>
            <p className="mt-2 text-gray-300 text-sm text-center">
              Lütfen bekleyin, ödeme sayfasına yönlendiriliyorsunuz 💎
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
