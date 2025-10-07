import React, { useEffect, useRef } from "react";

export default function PixarScene({ image }) {
  const ref = useRef(null);

  useEffect(() => {
    // Görsel sahneye girdiğinde fade-in animasyonu tetiklenir
    const el = ref.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "scale(0.95)";
      setTimeout(() => {
        el.style.transition = "all 1.2s ease-out";
        el.style.opacity = "1";
        el.style.transform = "scale(1)";
      }, 150);
    }
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden relative shadow-[0_0_25px_rgba(187,134,252,0.4)] hover:shadow-[0_0_45px_rgba(187,134,252,0.8)] transition-shadow duration-700"
      style={{
        background: "linear-gradient(145deg, #0b0b0b, #1b1b1b)",
        border: "2px solid #bb86fc",
        height: "28rem",
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* ✨ Görsel */}
      <img
        src={image}
        alt="Pixar sahnesi"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: "brightness(1.1) contrast(1.05)",
          opacity: 0.95,
          transition: "transform 2s ease-in-out, opacity 1.5s ease",
        }}
      />

      {/* 🌟 Parlayan efekt (kenarlardan içeri doğru ışık dalgası) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(187,134,252,0.25), transparent 70%)",
          mixBlendMode: "screen",
          animation: "pulseGlow 3s ease-in-out infinite",
        }}
      ></div>

      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
