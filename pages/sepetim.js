import { useEffect, useState } from "react";

export default function Sepetim() {
  const [items, setItems] = useState([]);

  // 🧩 İlk yüklemede sepeti localStorage'dan çek
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      setItems(raw ? JSON.parse(raw) : []);
    } catch {
      setItems([]);
    }
  }, []);

  // 💾 Her değişiklikte localStorage'a geri yaz
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // 🔼 Miktar artır / azalt / kaldır
  const inc = (id) =>
    setItems((xs) =>
      xs.map((it) => (it.id === id ? { ...it, qty: (it.qty || 1) + 1 } : it))
    );

  const dec = (id) =>
    setItems((xs) =>
      xs.map((it) =>
        it.id === id ? { ...it, qty: Math.max(1, (it.qty || 1) - 1) } : it
      )
    );

  const removeItem = (id) => setItems((xs) => xs.filter((it) => it.id !== id));
  const clear = () => setItems([]);

  // 💰 Ara toplam
  const subtotal = items.reduce(
    (s, it) => s + (Number(it.price) || 0) * (Number(it.qty) || 1),
    0
  );

  return (
    <div className="min-h-screen bg-black text-gray-200 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-yellow-400 mb-6">🛒 Sepetim</h1>

        {items.length === 0 ? (
          <div className="bg-gray-900/60 border border-yellow-600/40 rounded-xl p-8 text-center">
            <p>Sepetiniz boş.</p>
            <a
              href="/"
              className="inline-block mt-4 px-4 py-2 rounded-lg border border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-black transition"
            >
              Ürünlere dön
            </a>
          </div>
        ) : (
          <>
            {/* Ürün listesi */}
            <div className="bg-gray-900/60 border border-yellow-600/40 rounded-xl divide-y divide-gray-800">
              {items.map((it) => (
                <div key={it.id} className="flex items-center gap-4 p-4">
                  <img
                    src={it.image}
                    alt={it.title}
                    className="w-20 h-20 object-cover rounded-lg border border-yellow-700/30"
                  />
                  <div className="flex-1">
                    <div className="font-medium">{it.title}</div>
                    <div className="text-sm text-gray-400">
                      {(Number(it.price) || 0).toFixed(2)} TL
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dec(it.id)}
                      className="w-8 h-8 rounded-lg border border-yellow-600 hover:bg-yellow-600 hover:text-black"
                    >
                      −
                    </button>
                    <div className="w-10 text-center">{it.qty ?? 1}</div>
                    <button
                      onClick={() => inc(it.id)}
                      className="w-8 h-8 rounded-lg border border-yellow-600 hover:bg-yellow-600 hover:text-black"
                    >
                      +
                    </button>
                  </div>

                  <div className="w-28 text-right font-medium">
                    {(
                      (Number(it.price) || 0) * (Number(it.qty) || 1)
                    ).toFixed(2)}{" "}
                    TL
                  </div>
                  <button
                    onClick={() => removeItem(it.id)}
                    className="ml-2 text-sm text-red-400 hover:text-red-300"
                  >
                    Kaldır
                  </button>
                </div>
              ))}
            </div>

            {/* Alt kısım */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <button
                onClick={clear}
                className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Sepeti Temizle
              </button>

              <div className="text-right">
                <div className="text-sm text-gray-400">Ara Toplam</div>
                <div className="text-2xl font-semibold text-yellow-400">
                  {subtotal.toFixed(2)} TL
                </div>
                <a
                  href="/api/paytr-init"
                  className="inline-block mt-3 px-6 py-3 rounded-xl bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
                >
                  Ödemeye Git
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
