"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function CartSidebar({
  open,
  onClose,
  items,
  onUpdateQty,
  onRemove,
  onClear,
  total,
}) {
  const { data: session } = useSession();

  if (!open) return null;

  const handlePayment = async () => {
    if (!session?.user?.email) {
      alert("Ödeme yapabilmek için lütfen giriş yapın.");
      return;
    }

    if (!items || items.length === 0) {
      alert("Sepetiniz boş. Önce ürün ekleyin.");
      return;
    }

    try {
      const basket = items.map((item) => [
        item.name,
        item.unitPrice.toFixed(2),
        item.qty,
      ]);

      const response = await fetch("/api/paytr-init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session.user.email,
          user_name: session.user.name || "BideBen Kullanıcısı",
          user_address: "BideBen Topluluk Katkısı",
          user_phone: "05555555555",
          basket,
          payment_amount: Math.round(parseFloat(total) * 100), // kuruş cinsinden
        }),
      });

      const data = await response.json();

      if (data.token) {
        // 🚀 Başarılı: PayTR ödeme sayfasına yönlendir
        window.location.href = `https://www.paytr.com/odeme/guvenli/${data.token}`;
      } else {
        console.error("PayTR Yanıtı:", data);
        alert("PayTR bağlantı hatası: " + (data.error || "Geçersiz yanıt"));
      }
    } catch (err) {
      console.error("Bağlantı Hatası:", err);
      alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-end bg-black/50 z-50">
      <div className="w-96 bg-[#111] h-full text-white p-6 flex flex-col justify-between shadow-2xl">
        {/* 🧭 Üst Başlık */}
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
                    {item.unitPrice.toFixed(2)} ₺ x {item.qty}
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

        {/* 🧮 Alt Kısım */}
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
              💳 Ödeme Yap ({total} ₺)
            </button>

            <button
              onClick={onClear}
              className="w-full mt-3 py-2 rounded-xl font-semibold bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
            >
              🧹 Sepeti Temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
