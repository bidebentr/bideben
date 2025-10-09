import React from "react";

export default function CartSidebar({ open, onClose, items, onUpdateQty, onRemove, onClear, total }) {
  if (!open) return null;

  const handlePayment = async () => {
    try {
      const response = await fetch("/api/paytr-init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          basket: items.map((item) => [
            item.name,
            item.unitPrice.toFixed(2),
            item.qty,
          ]),
          total: parseFloat(total),
        }),
      });

      const data = await response.json();
      if (data.status === "success" && data.token) {
        window.location.href = `https://www.paytr.com/odeme/guvenli/${data.token}`;
      } else {
        alert("PayTR bağlantı hatası: " + (data.message || "Geçersiz yanıt"));
      }
    } catch (err) {
      console.error(err);
      alert("Bağlantı hatası, lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-end bg-black/50 z-50">
      <div className="w-96 bg-[#111] h-full text-white p-6 flex flex-col justify-between shadow-2xl">
        {/* Üst Başlık */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">🛒 Sepetin</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white text-lg">
              Kapat ✕
            </button>
          </div>

          {items.length === 0 ? (
            <p className="text-gray-400">Sepet boş.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-3 border-b border-gray-700 pb-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-400">
                    {item.unitPrice} ₺ x {item.qty}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onUpdateQty(item.id, item.qty - 1)}
                    className="px-2 bg-gray-800 rounded hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => onUpdateQty(item.id, item.qty + 1)}
                    className="px-2 bg-gray-800 rounded hover:bg-gray-700"
                  >
                    +
                  </button>
                  <button onClick={() => onRemove(item.id)} className="text-red-500 text-sm">
                    Sil
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Alt Kısım */}
        {items.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between text-lg mb-4">
              <span>Ara Toplam</span>
              <span className="font-semibold">{total} ₺</span>
            </div>

            <button
              onClick={handlePayment}
              className="w-full py-3 rounded-xl font-semibold text-black"
              style={{
                background: "linear-gradient(90deg, #00e5ff, #bb86fc)",
                boxShadow: "0 0 15px rgba(187,134,252,0.8)",
              }}
            >
              Ödeme Yap ({total} ₺)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
