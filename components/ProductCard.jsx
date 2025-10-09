import React from "react";

export default function ProductCard({ product, handleAddToCart }) {
  const title = product?.name || "Ürün Adı";
  const category = product?.category || "Kategori";
  const price = parseFloat(String(product?.price || "0").replace(",", "."));
  const target = Number(product?.target || 0);
  const marketprice = product?.marketprice || "-";
  const image = product?.image || "/images/default.jpg";
  const link = product?.link || "#";

  const sold = Math.min(Math.floor(target * 0.45), target); // demo
  const progress = target ? Math.min((sold / target) * 100, 100) : 0;

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
    <div className="w-full bg-[#0b0b0b] border border-yellow-600/60 rounded-xl p-3 sm:p-4 text-white shadow-[0_0_18px_rgba(255,215,0,0.12)] hover:shadow-[0_0_24px_rgba(255,215,0,0.22)] transition-all">
      {/* Görsel — sabit en-boy oranı + object-cover */}
      <div
        className="relative w-full rounded-lg overflow-hidden mb-3"
        style={{ aspectRatio: "4 / 5" }}  // => görüntü bozulmaz
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Başlık / kategori */}
      <h2 className="text-[13px] sm:text-base font-bold text-yellow-300 text-center leading-snug mb-1">
        {title}
      </h2>
      <p className="text-[12px] sm:text-sm text-gray-300 text-center mb-3">
        {category}
      </p>

      {/* Bilgiler */}
      <div className="text-[12px] sm:text-sm space-y-1 text-gray-200 mb-3">
        <p>💎 Dijital Eser: <span className="text-yellow-400">{price.toFixed(2)} TL</span></p>
        <p>🎯 Hedef Satış: <span className="text-yellow-400">{target.toLocaleString("tr-TR")}</span></p>
        <p>💰 Piyasa Değeri: <span className="text-yellow-400">{marketprice}</span></p>
      </div>

      {/* Katkı barı */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
        <div
          className="bg-yellow-400 h-2 transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-[11px] text-gray-400 mb-3">
        {sold.toLocaleString("tr-TR")} / {target.toLocaleString("tr-TR")} katkı tamamlandı
      </p>

      {/* Butonlar */}
      <button
        onClick={add}
        className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded-lg shadow-md transition text-[13px] sm:text-sm"
      >
        🛒 Sepete Ekle
      </button>

      {link && link !== "#" && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-2 inline-flex items-center justify-center gap-1 rounded-lg font-semibold text-black py-2 transition-transform hover:scale-[1.02] text-[13px] sm:text-sm"
          style={{
            background: "linear-gradient(90deg, #fcd34d, #facc15, #fde68a)",
            boxShadow: "0 0 12px rgba(255, 235, 59, 0.55)",
          }}
        >
          🔍 Gerçek Ürünü Gör
        </a>
      )}
    </div>
  );
}
