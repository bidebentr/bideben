import React, { useState, useMemo } from "react";

export default function KatkıModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  if (!product) return null;

  // Sayısal fiyat değeri çıkarma
  const priceValue = useMemo(() => {
    const raw = String(product.price || "").replace(/[₺TL\s]/gi, "").replace(",", ".");
    return parseFloat(raw) || 0;
  }, [product]);

  // Topluluk katkısı yüzdesi
  const contributionProgress = useMemo(() => {
    const sold = product.sold || 0;
    const target = product.target || 1;
    return Math.min((sold / target) * 100, 100);
  }, [product]);

  const totalPrice = (quantity * priceValue).toFixed(2);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => Math.max(1, q - 1));

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
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
        className="relative p-8 rounded-2xl shadow-lg text-white w-[90%] max-w-md animate-fadeIn"
        style={{
          background:
            "linear-gradient(145deg, rgba(20,20,20,0.95), rgba(30,30,30,0.9))",
          border: "2px solid #bb86fc",
          boxShadow:
            "0 0 25px rgba(187,134,252,0.6), inset 0 0 25px rgba(98,0,234,0.4)",
        }}
      >
        {/* ❌ Kapat butonu */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl hover:text-pink-400 transition"
        >
          ✕
        </button>

        {/* 🌍 Başlık */}
        <h2
          className="text-3xl font-extrabold text-center mb-6"
          style={{
            color: "#bb86fc",
            textShadow: "0 0 10px #bb86fc, 0 0 25px #6200ea",
          }}
        >
          🌍 Topluluğa Katkı Yap
        </h2>

        {/* Ürün Görseli */}
        <div className="flex justify-center mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl w-48 h-48 object-cover border-2 border-purple-500 shadow-lg"
          />
        </div>

        {/* Ürün Bilgisi */}
        <h3 className="text-xl font-semibold text-center mb-2 text-yellow-300">
          {product.name}
        </h3>
        <p className="text-center text-sm text-gray-300 mb-4">
          {product.category} • Dijital Eser:{" "}
          <span className="text-yellow-400 font-semibold">{product.price}</span>
        </p>

        {/* 🎯 Topluluk Katkısı Barı */}
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
                width: `${contributionProgress}%`,
                background: `linear-gradient(90deg, #bb86fc, #ffb74d, #bb86fc)`,
                boxShadow: `0 0 10px #bb86fc, 0 0 20px #ffb74d`,
              }}
            ></div>
          </div>

          <p
            className="text-center text-sm mt-2"
            style={{ color: "#bb86fc", textShadow: "0 0 8px #bb86fc" }}
          >
            %{contributionProgress.toFixed(1)} hedef tamamlandı
          </p>
        </div>

        {/* 🔢 Miktar Seçimi */}
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

        {/* 💰 Toplam Katkı Tutarı */}
        <p
          className="text-center mb-6 text-lg font-semibold"
          style={{ color: "#ffb74d", textShadow: "0 0 10px #ffb74d" }}
        >
          💰 Toplam Katkın:{" "}
          <span className="text-yellow-300">{quantity} × {priceValue.toFixed(2)} TL = <b>{totalPrice} TL</b></span>
        </p>

        {/* 🛒 Katkı Yap Butonu */}
        <button
          onClick={handleAdd}
          className="w-full py-3 text-lg font-bold rounded-xl transition transform hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #bb86fc, #ffb74d, #bb86fc)",
            color: "#000",
            boxShadow:
              "0 0 20px rgba(187,134,252,0.8), 0 0 40px rgba(255,183,77,0.6)",
            animation: "glow 3s ease-in-out infinite",
          }}
        >
          💎 Katkı Yap ve Sepete Ekle
        </button>
      </div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.3); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
