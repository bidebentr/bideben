import React, { useState, useEffect } from "react";

export default function KatkıModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (product?.price) {
      const p = parseFloat(String(product.price).replace(/[₺TL\s]/gi, "").replace(",", ".")) || 0;
      setTotal(p * quantity);
    }
  }, [product, quantity]);

  if (!product) return null;

  const handleAdd = () => setQuantity((q) => q + 1);
  const handleRemove = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-[#111] p-6 rounded-2xl border border-[#bb86fc] max-w-md w-full text-center text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-3">{product.name}</h2>
        <p className="text-[#00e5ff] mb-3">
          Dijital Eser Fiyatı: {product.price}
        </p>

        {/* 🔢 Adet Ayarlama */}
        <div className="flex items-center justify-center mb-4">
          <button
            onClick={handleRemove}
            className="px-3 py-2 bg-gray-800 text-xl rounded-l-lg hover:bg-gray-700"
          >
            -
          </button>
          <span className="px-6 text-2xl font-bold bg-black border-y border-gray-700">
            {quantity}
          </span>
          <button
            onClick={handleAdd}
            className="px-3 py-2 bg-gray-800 text-xl rounded-r-lg hover:bg-gray-700"
          >
            +
          </button>
        </div>

        <p className="text-lg mb-5">
          Toplam Katkı Tutarı:{" "}
          <span className="text-[#ffd700] font-bold">
            {total.toFixed(2)} ₺
          </span>
        </p>

        {/* 🛒 Sepete Ekle & Vazgeç */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 rounded-xl font-semibold text-black"
            style={{
              background: "linear-gradient(90deg, #00e5ff, #bb86fc)",
              boxShadow: "0 0 15px rgba(187,134,252,0.8)",
            }}
          >
            Sepete Ekle
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600"
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  );
}
