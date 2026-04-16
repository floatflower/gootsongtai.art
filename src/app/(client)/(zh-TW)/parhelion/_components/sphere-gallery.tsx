"use client";

import { useState } from "react";

export function SphereGallery() {
  const [isDusk, setIsDusk] = useState(false);

  return (
    <section className="relative z-[2] px-6 md:px-16 py-4 max-w-3xl mx-auto">
      <p className="text-sm font-bold leading-[1.9] text-white mb-6">
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
        className="relative rounded-full"
        style={{
          paddingTop: "40%",
          background: isDusk ? "#ffafb2" : "#f1f294",
          transition: "background 0.6s ease",
          boxShadow:
            "inset 0 4px 10px rgba(0,0,0,0.28), inset 0 1px 4px rgba(0,0,0,0.16)",
          border: "1.5px solid rgba(0,0,0,0.10)",
        }}
      >
        {/* ── Dawn info — right side (yellow bg → dark text) ── */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{
            top: "50%",
            left: "calc(40% + 16px)",
            right: 24,
            transform: isDusk ? "translateY(-50%) translateX(8px)" : "translateY(-50%) translateX(0)",
            opacity: isDusk ? 0 : 1,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: isDusk ? "none" : "auto",
          }}
        >
          <p className="text-[10px] tracking-[0.3em] font-black uppercase mb-2 text-black/45">
            日出 · Dawn
          </p>
          <p className="text-base font-bold mb-0.5 text-black/80">貓霧光</p>
          <p className="text-xs font-normal italic mb-2 text-black/45">
            bâ-bū-á-kng
          </p>
          <p className="text-sm font-semibold mb-0.5 text-black/65">07:00–08:00</p>
          <p className="text-sm font-bold text-black/80">花蓮－國立東華大學</p>
        </div>

        {/* ── Dusk info — left side (pink bg → white text) ──── */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{
            top: "50%",
            left: 24,
            right: "calc(40% + 16px)",
            transform: isDusk ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(-8px)",
            opacity: isDusk ? 1 : 0,
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: isDusk ? "auto" : "none",
          }}
        >
          <p className="text-[10px] tracking-[0.3em] font-black uppercase mb-2 text-white/60">
            日落 · Dusk
          </p>
          <p className="text-base font-bold mb-0.5 text-white">暗雯光</p>
          <p className="text-xs font-normal italic mb-2 text-white/60">
            àm-bûn-á-kng
          </p>
          <p className="text-sm font-semibold mb-0.5 text-white/80">17:00–18:00</p>
          <p className="text-sm font-bold text-white">臺南－臺南藝術大學</p>
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
