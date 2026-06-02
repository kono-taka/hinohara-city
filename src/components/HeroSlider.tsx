"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    src: "/images/hero/hero-1.png",
    alt: "房総丘陵の山並みと棚田",
    caption: "山と水と人が輝く　みんなのふるさと ひのはら",
  },
  {
    src: "/images/hero/hero-2.png",
    alt: "菜の花畑と青空",
    caption: "一面に広がる菜の花　南房総の春",
  },
  {
    src: "/images/hero/hero-3.png",
    alt: "ぽんなわびわ狩り体験",
    caption: "幻の在来種「ぽんなわびわ」　5月が旬です",
  },
  {
    src: "/images/hero/hero-4.png",
    alt: "白峰温泉郷の露天風呂",
    caption: "照葉樹林に囲まれた白峰温泉郷",
  },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="hero-area">
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            opacity: current === i ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            style={{ objectFit: "cover", objectPosition: "center 60%" }}
            priority={i === 0}
            sizes="740px"
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(10,30,70,0.38)" }} />
        </div>
      ))}

      {/* キャプション */}
      <div className="hero-caption" style={{ position: "absolute", bottom: 36, left: 0, zIndex: 2 }}>
        <h2>日野原市公式ホームページへようこそ</h2>
        <p style={{ opacity: 0.9, transition: "opacity 0.4s" }}>{slides[current].caption}</p>
      </div>

      {/* ドットナビ */}
      <div className="hero-dots" style={{ zIndex: 3 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${current === i ? " active" : ""}`}
            aria-label={`${i + 1}枚目`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
