import React, { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [daysLeft, setDaysLeft] = useState(90);

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 90);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setDaysLeft(0);
      } else {
        setDaysLeft(Math.ceil(diff / (1000 * 60 * 60 * 24)));
      }
    }, 1000 * 60 * 60); // her saat başı günceller

    return () => clearInterval(timer);
  }, []);

  return (
    <p
      style={{
        marginTop: "10px",
        fontSize: "0.95rem",
        color: "#ffffff",
        background: "linear-gradient(90deg, #ffffff, #9b8aff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "600",
        letterSpacing: "0.5px",
      }}
    >
      ⏱️ Kalan Süre: <span style={{ color: "#fff" }}>{daysLeft} gün</span>
    </p>
  );
}
