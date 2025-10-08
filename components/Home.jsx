'use client';
import React, { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { products } from "../data/products.js";

const ParticleLayer = dynamic(() => import("./ParticleLayer.jsx"), { ssr: false });
const Hero = dynamic(() => import("./Hero.jsx"), { ssr: false });
const CountdownTimer = dynamic(() => import("./CountdownTimer.jsx"), { ssr: false });
const PixarScene = dynamic(() => import("./PixarScene.jsx"), { ssr: false });
const KatkıModal = dynamic(() => import("./KatkıModal.jsx"), { ssr: false });
const CartSidebar = dynamic(() => import("./CartSidebar.jsx"), { ssr: false });

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [digitalSales, setDigitalSales] = useState(0);
  const [realProducts, setRealProducts] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Pixar sahneleri
  const pixarScenes = [
    { id: 1, image: "/images/pixar-1.png" },
    { id: 2, image: "/images/pixar-2.png" },
    { id: 3, image: "/images/pixar-3.png" },
    { id: 4, image: "/images/pixar-4.png" },
    { id: 5, image: "/images/pixar-5.png" },
    { id: 6, image: "/images/pixar-6.png" },
    { id: 7, image: "/images/pixar-7.png" },
    { id: 8, image: "/images/pixar-8.png" },
  ];

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

  // Arama filtresi
  const filteredProducts = products.filter(
    (item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sayaçlar
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

  // Sepet fonksiyonları
  const addToCart = (product, quantity = 1) => {
    const unitPrice = parseFloat(String(product.price).replace(/[₺TL\s]/gi, "").replace(",", ".")) || 0;
    setCartItems((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + quantity } : p));
      } else {
        return [
          ...prev,
          { id: product.id, name: product.name, unitPrice, qty: quantity, image: product.image || null },
        ];
      }
    });
    setCartOpen(true);
    setSelectedProduct(null);
  };

  const updateCartQty = (id, qty) => setCartItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p)));
  const removeFromCart = (id) => setCartItems((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCartItems([]);
  const cartTotal = cartItems.reduce((s, i) => s + i.unitPrice * i.qty, 0).toFixed(2);

  const activeCategory = Object.keys(categoryColors).find((cat) =>
    searchTerm.toLowerCase().includes(cat.toLowerCase())
  );
  const searchColor = categoryColors[activeCategory] || categoryColors.DEFAULT;

  return (
    <>
      <ParticleLayer />
      <Hero />

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg font-semibold" style={{ color: "#eaeaea" }}>
          <p>💎 <span style={{ color: "#4fc3f7" }}>Toplam Dijital Eser Satışı:</span> {digitalSales.toLocaleString("tr-TR")}</p>
          <p>🎯 <span style={{ color: "#81c784" }}>Gerçek Ürün Hedeflerinin Tamamlanma Oranı:</span> %29</p>
          <p>🚀 <span style={{ color: "#ffb74d" }}>Teslim Edilen Gerçek Ürün Sayısı:</span> {realProducts}</p>
          <p>💫 <span style={{ color: "#f06292" }}>En Popüler Kategori:</span> Telefonlar</p>
          <p className="col-span-full text-center mt-4">🔥 <span style={{ color: "#ffd700" }}>En Çok Katkı Yapılan Ürün:</span> Dyson V15 Kablosuz Süpürge</p>
        </div>
        {/* 🌐 bideben Bilgi Sayfaları */}
<section className="mt-20 text-center text-gray-300">
  <h2
    className="text-2xl font-semibold mb-6"
    style={{
      color: "#ffd700",
      textShadow: "0 0 10px #ffd700aa",
    }}
  >
    Daha Fazla Bilgi
  </h2>

  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="/nasil-calisir"
      className="px-6 py-3 bg-[#161616] border border-yellow-600 rounded-xl hover:bg-yellow-600 hover:text-black transition-all"
    >
      ⚙️ bideben Nasıl Çalışır?
    </a>

    <a
      href="/oduller"
      className="px-6 py-3 bg-[#161616] border border-yellow-600 rounded-xl hover:bg-yellow-600 hover:text-black transition-all"
    >
      🎁 Topluluk Katkısı Ödülleri
    </a>

    <a
      href="/sss"
      className="px-6 py-3 bg-[#161616] border border-yellow-600 rounded-xl hover:bg-yellow-600 hover:text-black transition-all"
    >
      ❓ Sık Sorulan Sorular
    </a>
  </div>
</section>

      </div>

      {/* Arama Kutusu */}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-10 max-w-7xl mx-auto text-white">
        {filteredProducts.map((item, index) => {
          const categoryKey = Object.keys(categoryColors).find(
            (key) => key.toLowerCase() === item.category?.toLowerCase().trim()
          );
          const barColor = categoryColors[categoryKey] || categoryColors.DEFAULT;

          const CHUNK = 11;
          const shouldShowScene = (index + 1) % CHUNK === 0;
          const sceneIndex = Math.floor(index / CHUNK) % pixarScenes.length;

          return (
            <React.Fragment key={item.id}>
              <div
                className="rounded-2xl overflow-hidden text-center transition transform hover:-translate-y-2 h-full flex flex-col"
                style={{ background: "linear-gradient(145deg, #0b0b0b, #1b1b1b)", border: `2px solid ${barColor}` }}
              >
                <div style={{
                  background: `linear-gradient(90deg, ${barColor}, #fff, ${barColor})`,
                  height: "6px",
                  animation: "flowGlow 3s linear infinite",
                }} />
                <img src={item.image} alt={item.name} className="w-full h-72 object-contain bg-black rounded-b-lg mb-4 transition-transform duration-500" />

                <h2 style={{
                  background: `linear-gradient(90deg, ${barColor}, #ffffff, ${barColor})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  marginBottom: 8,
                  animation: "heartbeat 3s ease-in-out infinite",
                }}>
                  {item.name}
                </h2>

                <p style={{ fontSize: "0.85rem", color: barColor }}>{item.category}</p>

                <div style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 12,
                  marginBottom: 12,
                }}>
                  <p>💎 <strong>Dijital Eser:</strong> {item.price}</p>
                  <p>🎯 <strong>Hedef Satış:</strong> {item.target?.toLocaleString("tr-TR")}</p>
                  <p>💠 <strong>Piyasa Değeri:</strong> {item.marketprice}</p>
                </div>

                <div style={{
                  background: "rgba(255,255,255,0.08)",
                  height: 10,
                  borderRadius: 8,
                  overflow: "hidden",
                  marginBottom: 8,
                }}>
                  <div className="animate-pulse" style={{
                    width: `${(item.sold / item.target) * 100}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${barColor}, #fff)`,
                    boxShadow: `0 0 10px ${barColor}`,
                  }} />
                </div>

                <p style={{ fontSize: "0.85rem", color: "#ccc", marginBottom: 12 }}>
                  {item.sold} / {item.target} katkı tamamlandı
                </p>

                <CountdownTimer />

                <button
                  onClick={() => setSelectedProduct(item)}
                  style={{
                    display: "inline-block",
                    padding: "10px 16px",
                    borderRadius: 8,
                    background: `linear-gradient(90deg, ${barColor}, #fff)`,
                    color: "#000",
                    fontWeight: "bold",
                    boxShadow: `0 0 10px ${barColor}`,
                    marginBottom: "12px",
                  }}
                >
                  💎 Katkı Yap
                </button>

                {item.link && item.link !== "nan" && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "10px 16px",
                      borderRadius: 8,
                      background: `linear-gradient(90deg, ${barColor}, #fff)`,
                      color: "#000",
                      fontWeight: "bold",
                      boxShadow: `0 0 10px ${barColor}`,
                      marginBottom: "16px",
                    }}>
                    🔗 Gerçek Ürünü Gör
                  </a>
                )}
              </div>

              {shouldShowScene && <PixarScene image={pixarScenes[sceneIndex].image} />}
            </React.Fragment>
          );
        })}
      </div>

      {selectedProduct && (
        <KatkıModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQty={updateCartQty}
        onRemove={removeFromCart}
        onClear={clearCart}
        total={cartTotal}
      />

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
