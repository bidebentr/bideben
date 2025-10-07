import React from "react";

export default function ProductCard({ product }) {
  const progress = Math.min((product.sales / product.goal) * 100, 100);

  return (
    <div className="w-80 bg-gray-900 border border-cyan-400 rounded-xl p-4 m-4 shadow-lg text-white hover:scale-105 transition-transform">
      <img
        src={product.image}
        alt={product.title}
        className="rounded-lg mb-3 h-48 w-full object-cover"
      />
      <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
      <p className="text-cyan-300 mb-2">{product.category}</p>
      <p className="text-sm text-cyan-100 mb-3">Dijital Eser: {product.price} TL</p>

      <div className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
        <div
          className="bg-cyan-400 h-3 transition-all duration-700"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs text-cyan-200">
        {product.sales} / {product.goal} katkı tamamlandı
      </p>
    </div>
  );
}
