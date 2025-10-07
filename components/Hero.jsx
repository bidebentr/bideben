import React, { useEffect } from "react";
export default function Hero() {
  useEffect(() => {
    const meteorContainer = document.querySelector(".meteor-layer");

    // 10 adet meteor oluştur
    for (let i = 0; i < 10; i++) {
      const meteor = document.createElement("div");
      meteor.className = "meteor";
      meteor.style.left = `${Math.random() * 100}%`;
      meteor.style.top = `${Math.random() * 100}%`;
      meteor.style.animationDelay = `${Math.random() * 8}s`;
      meteor.style.animationDuration = `${4 + Math.random() * 4}s`;
      meteorContainer.appendChild(meteor);
    }
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center text-white overflow-hidden"
      style={{
        height: "85vh",
        background: "radial-gradient(circle at 20% 30%, #050017, #000)",
      }}
    >
      {/* 🌌 Arka Plan Katmanları */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="meteor-layer"></div>
      </div>

      {/* ✨ İçerik */}
      <div className="relative z-10">
        <h1
          className="text-5xl sm:text-6xl font-extrabold mb-6"
          style={{
            background: "linear-gradient(90deg, #00e5ff, #bb86fc, #ffd700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(187,134,252,0.9)",
            animation: "pulseText 3s ease-in-out infinite",
          }}
        >
          ✨ Katkını Yap, Yıldızını Parlat
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Dijital eserini al, topluluğun parçası ol.  
          <br />Her katkı seni gerçek ödüle bir adım daha yaklaştırır.
        </p>

        <a
          href="#urunler"
          className="px-8 py-4 rounded-full font-bold tracking-wide text-lg"
          style={{
            background: "linear-gradient(90deg, #00e5ff, #bb86fc, #ffd700)",
            color: "#000",
            boxShadow: "0 0 30px rgba(187,134,252,0.8)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = "0 0 45px rgba(0,229,255,0.9)")
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = "0 0 30px rgba(187,134,252,0.8)")
          }
        >
          🚀 Katkılara Katıl
        </a>
      </div>

      {/* 🌠 CSS Animasyonları */}
      <style jsx global>{`
        @keyframes moveStars {
          from { transform: translateY(0); }
          to { transform: translateY(-2000px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        @keyframes pulseText {
          0%, 100% { text-shadow: 0 0 20px #bb86fc, 0 0 40px #00e5ff; }
          50% { text-shadow: 0 0 40px #ffd700, 0 0 80px #00e5ff; }
        }

        .stars {
          position: absolute;
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow:
            100px 200px #fff, 300px 400px #fff, 500px 700px #fff,
            800px 1200px #fff, 1200px 900px #fff, 1400px 1300px #fff;
          animation: moveStars 60s linear infinite;
        }

        .twinkling {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: transparent url("https://www.transparenttextures.com/patterns/stardust.png") repeat;
          animation: twinkle 4s infinite;
          opacity: 0.25;
        }

        /* 🌠 Meteorlar */
        .meteor-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .meteor {
          position: absolute;
          width: 2px;
          height: 80px;
          background: linear-gradient(180deg, #00e5ff, #bb86fc, transparent);
          opacity: 0.8;
          transform: rotate(45deg);
          animation: fall 6s linear infinite;
          border-radius: 2px;
          box-shadow: 0 0 10px #00e5ff, 0 0 20px #bb86fc;
        }

        @keyframes fall {
          0% {
            transform: translate(0, 0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translate(-600px, 600px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
