"use client";

import { useState } from "react";

export function SphereGallery() {
  const [isDusk, setIsDusk] = useState(false);

  return (
    <section className="relative z-[2] px-6 md:px-16 py-4 max-w-5xl mx-auto w-full">
      <p className="text-sm font-bold leading-[1.9] text-white mb-4 md:mb-8">
        2022.03.05 驚蟄（六）
      </p>

      {/*
       * Sphere width = 40% of track width (CSS percentage).
       * Track height is fixed; sphere fills it top-to-bottom and is
       * square via aspect-ratio so the circular PNG stays circular.
       * We use aspect-ratio:1 + height:100% on the thumb, which means
       * the track height must be at least as tall as 40%-wide sphere —
       * so we let the track height auto-size via padding instead.
       */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          paddingTop: "40%",
          background: isDusk ? "#ffafb2" : "#f1f294",
          transition: "background 0.6s ease",
          boxShadow:
            "inset 0 4px 10px rgba(0,0,0,0.28), inset 0 1px 4px rgba(0,0,0,0.16)",
          border: "1.5px solid rgba(0,0,0,0.10)",
        }}
      >
        <style>{`
          @keyframes parhelion-ripple {
            0%   { transform: translate(-50%, -50%) scale(0.5); opacity: 0.5; }
            85%  { opacity: 0; }
            100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
          }
        `}</style>

        {/* ── Swipe hint — concentric ripples from the thumb ── */}
        {[0, 1, 2].map((n) => (
          <div
            key={n}
            className="pointer-events-none absolute rounded-full"
            style={{
              top: "50%",
              left: isDusk ? "80%" : "20%",
              width: "40%",
              aspectRatio: "1 / 1",
              border: `16px solid ${isDusk ? "#ffc9cb" : "#e0e178"}`,
              filter: "blur(8px)",
              animation: "parhelion-ripple 4.5s ease-out infinite",
              animationDelay: `${n * 1.5}s`,
              transition:
                "left 0.6s cubic-bezier(0.65, 0, 0.35, 1), border-color 0.6s ease",
            }}
          />
        ))}

        {/* ── Dawn info — right side (yellow bg → dark text) ── */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{
            top: "50%",
            left: "calc(40% + 16px)",
            right: 24,
            transform: isDusk
              ? "translateY(-50%) translateX(8px)"
              : "translateY(-50%) translateX(0)",
            opacity: isDusk ? 0 : 1,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: isDusk ? "none" : "auto",
          }}
        >
          <p className="text-sm md:text-2xl font-bold mb-0.5 md:mb-1 text-black/80">
            貓霧光 bâ-bū-á-kng
          </p>
          {/* <p className="text-sm md:text-2xl font-bold mb-0.5 md:mb-1 text-black/80">
          </p> */}
          <p className="text-[10px] md:text-base font-semibold mb-0.5 md:mb-1 text-black/65 pt-4">
            07:00–08:00
          </p>
          <p className="text-[10px] md:text-base font-bold text-black/80 leading-tight">
            花蓮－國立東華大學
          </p>
        </div>

        {/* ── Dusk info — left side (pink bg → white text) ──── */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{
            top: "50%",
            left: 24,
            right: "calc(40% + 16px)",
            transform: isDusk
              ? "translateY(-50%) translateX(0)"
              : "translateY(-50%) translateX(-8px)",
            opacity: isDusk ? 1 : 0,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: isDusk ? "auto" : "none",
          }}
        >
          <p className="text-sm md:text-2xl font-bold mb-0.5 md:mb-1 text-white">
            暗雯光 àm-bûn-á-kng
          </p>
          {/* <p className="text-sm md:text-2xl font-bold mb-0.5 md:mb-1 text-white">
            
          </p> */}
          <p className="text-[10px] md:text-base font-semibold mb-0.5 md:mb-1 text-white/80 pt-4">
            17:00–18:00
          </p>
          <p className="text-[10px] md:text-base font-bold text-white leading-tight">
            臺南－臺南藝術大學
          </p>
        </div>

        {/* ── Sphere thumb — 40% wide, 6px inset padding ───── */}
        <button
          onClick={() => setIsDusk((d) => !d)}
          aria-label={isDusk ? "切換至日出" : "切換至日落"}
          className="absolute z-10 cursor-pointer select-none"
          style={{
            top: 6,
            bottom: 6,
            /* width shrinks by 6px on each side to leave gap from track edge */
            width: "calc(40% - 12px)",
            left: isDusk ? "calc(60% + 6px)" : 6,
            transition: "left 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
            background: "none",
            border: "none",
            padding: 0,
            /* drop-shadow follows the circular PNG shape */
            filter:
              "drop-shadow(0 4px 14px rgba(0,0,0,0.32)) drop-shadow(0 2px 4px rgba(0,0,0,0.18))",
          }}
        >
          {/* sphere01 — Dawn */}
          <img
            src="/images/parhelion/sphere01.png"
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              opacity: isDusk ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          />
          {/* sphere02 — Dusk */}
          <img
            src="/images/parhelion/sphere02.png"
            alt=""
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              opacity: isDusk ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        </button>
      </div>
    </section>
  );
}
