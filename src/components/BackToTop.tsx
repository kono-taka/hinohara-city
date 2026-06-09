"use client";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="ページの先頭へ戻る"
      title="ページの先頭へ戻る"
      style={{
        position: "fixed",
        bottom: 28,
        right: 24,
        width: 46,
        height: 46,
        borderRadius: "50%",
        background: "#1a6e5a",
        color: "#fff",
        border: "2px solid rgba(255,255,255,0.3)",
        cursor: "pointer",
        fontSize: 18,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
        zIndex: 200,
        lineHeight: 1,
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#145548"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#1a6e5a"; }}
    >
      ▲
    </button>
  );
}
