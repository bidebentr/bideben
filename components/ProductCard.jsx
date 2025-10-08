import React from "react";

export default function ProductCard({ product, handleAddToCart }) {
  // 🧠 Verileri güvenle al
  const title = product?.name || "Ürün Adı";
  const category = product?.category || "Kategori";
  const price = parseFloat(product?.price?.replace(",", ".") || 0);
  const target = product?.target || 0;
  const marketprice = product?.marketprice || "-";
  const link = product?.link || "#";
  const image = product?.image || "/images/default.jpg";

  // 🔁 Rastgele örnek satış değeri (gerçek sistemde API'den gelir)
  const sales = Math.floor(Math.random() * (target * 0.6));
  const progress = Math.min((sales / target) * 100, 100);

  // 🛒 Sepete ekleme işlemi
  const add = () => {
    handleAddToCart?.({
      id: product.id,
      title,
      price,
      image,
      qty: 1,
    });
  };

  return (
    <div className="w-80 bg-[#0a0a0a] border border-yellow-600 rounded-2xl p-4 m-4 text-white shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_35px_rgba(255,215,0,0.35)] hover:scale-105 transition-transform duration-300">
      {/* Görsel */}
      <img
        src={image}
        alt={title}
        className="rounded-xl mb-3 h-56 w-full object-cover"
      />

      {/* Başlık ve kategori */}
      <h2 className="text-lg font-bold text-yellow-300 text-center mb-1 uppercase tracking-wide">
        {title}
      </h2>
      <p className="text-sm text-gray-300 text-center mb-3">{category}</p>

      {/* Detay Bilgiler */}
      <div className="text-sm space-y-1 text-gray-200 mb-3">
        <p>
          💎 Dijital Eser:{" "}
          <span className="text-yellow-400">{price.toFixed(2)} TL</span>
        </p>
        <p>
          🎯 Hedef Satış:{" "}
          <span className="text-yellow-400">{target.toLocaleString("tr-TR")}</span>
        </p>
        <p>
          💰 Piyasa Değeri:{" "}
          <span className="text-yellow-400">{marketprice}</span>
        </p>
      </div>

      {/* Katkı Barı */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
        <div
          className="bg-yellow-400 h-2 transition-all duration-700"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-400 mb-4">
        ⏳ Kalan Süre: <span className="text-yellow-300">90 gün</span>
      </p>

      {/* 🛒 Sepete Ekle */}
      <button
        onClick={add}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-lg shadow-md transition"
      >
        🛒 Sepete Ekle
      </button>

      {/* 🔗 Gerçek Ürünü Gör */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full mt-3 py-2 rounded-lg font-semibold text-black text-center transition-transform transform hover:scale-[1.03]"
        style={{
          background: "linear-gradient(90deg, #fcd34d, #facc15, #fde68a)",
          boxShadow: "0 0 12px rgba(255, 235, 59, 0.6)",
        }}
      >
        🔍 Gerçek Ürünü Gör
      </a>
    </div>
  );
}
