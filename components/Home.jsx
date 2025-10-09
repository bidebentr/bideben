'use client';
import { useState, useEffect } from "react";
import { products as initialProducts } from "../data/products.js";
import dynamic from "next/dynamic";

const ParticleLayer = dynamic(() => import("./ParticleLayer.jsx"), { ssr: false });
const CountdownTimer = dynamic(() => import("./CountdownTimer.jsx"), { ssr: false });
const KatkıModal = dynamic(() => import("./KatkıModal.jsx"), { ssr: false });
const CartSidebar = dynamic(() => import("./CartSidebar.jsx"), { ssr: false });
const Footer = dynamic(() => import("./Footer.jsx"), { ssr: false });

export default function Home() {
  // 🧩 State'ler
  const [searchTerm, setSearchTerm] = useState("");
  const [digitalSales, setDigitalSales] = useState(0);
  const [realProducts, setRealProducts] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [productList, setProductList] = useState(initialProducts);

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
    DEFAULT: "#a0a0a0",
  };

  // 🔍 Arama filtresi
  const filteredProducts = productList.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 📈 Topluluk istatistik animasyonu
  useEffect(() => {
    let salesStart = 0;
    let realStart = 0;
    const salesTarget = 9564;
    const realTarget = 11;

    const interval = setInterval(() => {
      salesStart += Math.ceil((salesTarget - salesStart) / 15);
      realStart += Math.ceil((realTarget - realStart) / 15);
      setDigitalSales(salesStart);
      setRealProducts(realStart);
      if (salesStart >= salesTarget && realStart >= realTarget) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // 🛒 Sepet ekleme
  const addToCart = (product, quantity = 1) => {
    const unitPrice =
      parseFloat(
        String(product.price).replace(/[₺TL\s]/gi, "").replace(",", ".")
      ) || 0;

    setCartItems((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + quantity } : p
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            unitPrice,
            qty: quantity,
            image: product.image || null,
          },
        ];
      }
    });
    setCartOpen(true);
    setSelectedProduct(null);
  };

  // 🧮 Sepet işlemleri
  const updateCartQty = (id, qty) =>
    setCartItems((prev) =>
      prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p))
    );
  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCartItems([]);
  const cartTotal = cartItems
    .reduce((s, i) => s + i.unitPrice * i.qty, 0)
    .toFixed(2);

  // 💠 Katkı yapıldığında bar güncelleme
  const handleContribution = (productId, quantity) => {
    setProductList((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, sold: Math.min(item.sold + quantity, item.target) }
          : item
      )
    );
  };

  // 🎨 Arama kutusu rengi
  const activeCategory = Object.keys(categoryColors).find((cat) =>
    searchTerm.toLowerCase().includes(cat.toLowerCase())
  );
  const searchColor =
    categoryColors[activeCategory] || categoryColors.DEFAULT;

  return (
    <>
      <ParticleLayer />

      {/* 🌍 Topluluk Katkısı Paneli */}
      <div
        className="max-w-4xl mx-auto mt-10 mb-10 p-8 rounded-2xl text-center backdrop-blur-md"
        style={{
          background: "rgba(20, 20, 20, 0.7)",
          border: "2px solid #bb86fc",
          boxShadow:
            "0 0 20px rgba(187, 134, 252, 0.4), inset 0 0 20px rgba(98, 0, 234, 0.3)",
        }}
      >
        <h2
          className="text-3xl font-extrabold mb-6"
          style={{
            color: "#bb86fc",
            textShadow: "0 0 10px #bb86fc, 0 0 30px #6200ea",
          }}
        >
          🌍 Topluluk Katkısı İstatistikleri
        </h2>

        {(() => {
          const totalSold = productList.reduce(
            (sum, p) => sum + (Number(p.sold) || 0),
            0
          );
          const totalTarget = productList.reduce(
            (sum, p) => sum + (Number(p.target) || 0),
            0
          );
          const totalRealProducts = productList.filter(
            (p) => p.sold >= p.target
          ).length;
          const completionRate =
            totalTarget > 0 ? ((totalSold / totalTarget) * 100).toFixed(1) : 0;

          // 📊 En popüler kategori
          const categoryCount = {};
          productList.forEach((p) => {
            const cat = p.category || "Bilinmiyor";
            categoryCount[cat] = (categoryCount[cat] || 0) + (p.sold || 0);
          });
          const topCategory =
            Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] ||
            "—";

          // 🏆 En çok katkı yapılan ürün
          const topProduct =
            [...productList].sort((a, b) => b.sold - a.sold)[0]?.name || "—";

          return (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg font-semibold"
              style={{ color: "#eaeaea" }}
            >
              <p>
                💎{" "}
                <span style={{ color: "#4fc3f7" }}>
                  Toplam Dijital Eser Satışı:
                </span>{" "}
                {totalSold.toLocaleString("tr-TR")}
              </p>

              <p>
                🎯{" "}
                <span style={{ color: "#81c784" }}>
                  Gerçek Ürün Hedeflerinin Tamamlanma Oranı:
                </span>{" "}
                %{completionRate}
              </p>

              <p>
                🚀{" "}
                <span style={{ color: "#ffb74d" }}>
                  Teslim Edilen Gerçek Ürün Sayısı:
                </span>{" "}
                {totalRealProducts}
              </p>

              <p>
                💫{" "}
                <span style={{ color: "#f06292" }}>En Popüler Kategori:</span>{" "}
                {topCategory}
              </p>

              <p className="col-span-full text-center mt-4">
                🔥{" "}
                <span style={{ color: "#ffd700" }}>
                  En Çok Katkı Yapılan Ürün:
                </span>{" "}
                {topProduct}
              </p>
            </div>
          );
        })()}
      </div>

      {/* 🔍 Arama Kutusu */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="🔍 Ürün veya kategori ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-96 px-5 py-3 rounded-xl outline-none text-white text-center transition-all duration-500"
          style={{
            background: "rgba(0,0,0,0.4)",
            border: `2px solid ${searchColor}`,
            boxShadow: `0 0 15px ${searchColor}88, inset 0 0 10px ${searchColor}44`,
            textShadow: `0 0 8px ${searchColor}`,
          }}
        />
      </div>

      {/* 🛍️ Ürün Kartları */}
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 text-white">
        <div className="grid [grid-template-columns:repeat(auto-fill,minmax(130px,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(180px,1fr))] md:[grid-template-columns:repeat(auto-fill,minmax(260px,1fr))] lg:[grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-3 sm:gap-5 md:gap-8 justify-center">
          {filteredProducts.map((item) => {
            const categoryKey = Object.keys(categoryColors).find(
              (key) =>
                key.toLowerCase() === item.category?.toLowerCase().trim()
            );
            const barColor =
              categoryColors[categoryKey] || categoryColors.DEFAULT;

            return (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden text-center transition transform hover:-translate-y-2 h-full flex flex-col"
                style={{
                  background: "linear-gradient(145deg, #0b0b0b, #1b1b1b)",
                  border: `2px solid ${barColor}`,
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(90deg, ${barColor}, #fff, ${barColor})`,
                    height: "6px",
                    animation: "flowGlow 3s linear infinite",
                  }}
                />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 md:h-72 object-contain bg-black rounded-b-lg mb-4 transition-transform duration-500"
                />

                <h2
                  style={{
                    background: `linear-gradient(90deg, ${barColor}, #ffffff, ${barColor})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 900,
                    fontSize: "1.1rem",
                    marginBottom: 8,
                    animation: "heartbeat 3s ease-in-out infinite",
                  }}
                >
                  {item.name}
                </h2>

                <p style={{ fontSize: "0.75rem", color: barColor }}>
                  {item.category}
                </p>

                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 10,
                    padding: 8,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <p>
                    💎 <strong>Dijital Eser:</strong> {item.price}
                  </p>
                  <p>
                    🎯 <strong>Hedef Satış:</strong>{" "}
                    {item.target?.toLocaleString("tr-TR")}
                  </p>
                  <p>
                    💠 <strong>Piyasa Değeri:</strong> {item.marketprice}
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    height: 8,
                    borderRadius: 8,
                    overflow: "hidden",
                    marginBottom: 8,
                  }}
                >
                  <div
                    className="transition-all duration-500"
                    style={{
                      width: `${(item.sold / item.target) * 100}%`,
                      height: "100%",
                      background: `linear-gradient(90deg, ${barColor}, #fff)`,
                      boxShadow: `0 0 10px ${barColor}`,
                    }}
                  />
                </div>

                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#ccc",
                    marginBottom: 10,
                  }}
                >
                  {item.sold} / {item.target} katkı tamamlandı
                </p>

                <CountdownTimer />

                <button
                  onClick={() => setSelectedProduct(item)}
                  style={{
                    display: "inline-block",
                    padding: "10px 14px",
                    borderRadius: 8,
                    background: `linear-gradient(90deg, ${barColor}, #fff)`,
                    color: "#000",
                    fontWeight: "bold",
                    boxShadow: `0 0 10px ${barColor}`,
                    marginBottom: "10px",
                    fontSize: "0.8rem",
                  }}
                >
                  💎 Resmi Satın Al
                </button>

                {item.link && item.link !== "nan" && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-1 py-2 rounded-lg font-semibold text-black transition transform hover:scale-[1.03] text-[0.8rem]"
                    style={{
                      display: "inline-block",
                      background: "linear-gradient(90deg, #ffd700, #fff8b0)",
                      boxShadow: "0 0 12px #ffd700",
                      textAlign: "center",
                      marginBottom: "10px",
                    }}
                  >
                    🔍 Gerçek Ürünü Gör
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 💎 Katkı Modal */}
      {selectedProduct && (
        <KatkıModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
          onAddContribution={handleContribution}
        />
      )}

      {/* 🛒 Sepet */}
      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQty={updateCartQty}
        onRemove={removeFromCart}
        onClear={clearCart}
        total={cartTotal}
      />

      {/* 🦶 Footer */}
      <Footer />

      <style jsx global>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.03); }
          50% { transform: scale(0.98); }
          75% { transform: scale(1.03); }
        }
        @keyframes flowGlow {
          0% { filter: drop-shadow(0 0 2px white); }
          50% { filter: drop-shadow(0 0 8px white); }
          100% { filter: drop-shadow(0 0 2px white); }
        }
      `}</style>
    </>
  );
}
