"use client";

import { useState } from "react";

type Active = "dawn" | "dusk" | null;

/*
 * Element is fixed; left:50%; top:50%; width:60vh; height:60vh.
 * translate(-50%,-50%) centers the sphere at the viewport center.
 * All keyframes express displacement from that center position.
 *
 * Ellipse parameters used for the arc:
 *   semi-major (horizontal) a ≈ 32vw
 *   semi-minor (vertical)   b ≈ 26vh
 *   orbit center            ≈ viewport center + (0, 14vh)
 *
 * 8 evenly-spaced points are sampled along the upper half of the ellipse.
 * Dawn  : starts lower-right  → sweeps CCW → arrives at viewport center
 * Dusk  : mirror (starts lower-left → CW)
 */
const styles = `
  @keyframes sphere-float-1 {
    0%, 100% { transform: translateY(0px) rotate(2deg); }
    50%       { transform: translateY(-12px) rotate(-1.5deg); }
  }
  @keyframes sphere-float-2 {
    0%, 100% { transform: translateY(-6px) rotate(-2.5deg); }
    55%      { transform: translateY(8px) rotate(2deg); }
  }
  .sphere-float-1 { animation: sphere-float-1 6s ease-in-out infinite; }
  .sphere-float-2 { animation: sphere-float-2 7.5s ease-in-out infinite; }

  @keyframes sphere-in {
    from { transform: translate(-50%, -50%) scale(0.15); opacity: 0; }
    to   { transform: translate(-50%, -50%) scale(1);    opacity: 1; }
  }
  .orbit-dawn, .orbit-dusk {
    animation: sphere-in 0.5s cubic-bezier(0.34, 1.3, 0.64, 1) forwards;
  }
`;

export function SphereGallery() {
  const [active, setActive] = useState<Active>(null);

  const toggle = (which: "dawn" | "dusk") =>
    setActive((prev) => (prev === which ? null : which));

  return (
    <>
      <style>{styles}</style>

      {/* Backdrop */}
      {active && (
        <div
          className="fixed inset-0 z-[50] bg-black/20 backdrop-blur-[2px]"
          onClick={() => setActive(null)}
        />
      )}

      {/* Orbit sphere — fixed, left:50% top:50% as anchor */}
      {active && (
        <div
          key={active}
          className={`fixed z-[51] pointer-events-none ${
            active === "dawn" ? "orbit-dawn" : "orbit-dusk"
          }`}
          style={{ left: "50%", top: "50%", width: "60vh", height: "60vh" }}
        >
          <img
            src={`/images/parhelion/sphere0${active === "dawn" ? "1" : "2"}.png`}
            alt={active === "dawn" ? "日出・花蓮" : "日落・臺南"}
            className="w-full h-full rounded-full"
            draggable={false}
          />
        </div>
      )}

      {/* Section */}
      <section
        className="relative z-[2] px-6 md:px-16 py-4 max-w-3xl mx-auto"
        style={{ overflow: "visible" }}
      >
        {/* Floating sphere 01 — Dawn */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: "16px", top: "10px", width: "115px",
            opacity: active === "dawn" ? 0 : 0.28,
            zIndex: 1,
            transition: "opacity 0.4s ease",
          }}
        >
          <div className="sphere-float-1">
            <img src="/images/parhelion/sphere01.png" alt=""
              className="w-full rounded-full select-none" draggable={false} />
          </div>
        </div>

        {/* Floating sphere 02 — Dusk */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: "16px", top: "30px", width: "115px",
            opacity: active === "dusk" ? 0 : 0.28,
            zIndex: 1,
            transition: "opacity 0.4s ease",
          }}
        >
          <div className="sphere-float-2">
            <img src="/images/parhelion/sphere02.png" alt=""
              className="w-full rounded-full select-none" draggable={false} />
          </div>
        </div>

        {/* Text */}
        <p className="relative z-10 text-sm font-bold leading-[1.9] text-white mb-8">
          2022.03.05 驚蟄（六）
        </p>
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <button
              className="text-xs tracking-[0.3em] font-black uppercase mb-4 text-white/70 hover:text-white transition-colors cursor-pointer text-left"
              onClick={() => toggle("dawn")}
            >
              日出 · Dawn
            </button>
            <p className="text-base font-bold mb-1 text-white">貓霧光</p>
            <p className="text-xs font-normal italic mb-3 text-white/70">bâ-bū-á-kng</p>
            <p className="text-sm font-semibold mb-1 text-white">07:00–08:00</p>
            <p className="text-sm font-bold text-white">花蓮－國立東華大學</p>
          </div>
          <div>
            <button
              className="text-xs tracking-[0.3em] font-black uppercase mb-4 text-white/70 hover:text-white transition-colors cursor-pointer text-left"
              onClick={() => toggle("dusk")}
            >
              日落 · Dusk
            </button>
            <p className="text-base font-bold mb-1 text-white">暗雯光</p>
            <p className="text-xs font-normal italic mb-3 text-white/70">àm-bûn-á-kng</p>
            <p className="text-sm font-semibold mb-1 text-white">17:00–18:00</p>
            <p className="text-sm font-bold text-white">臺南－臺南藝術大學</p>
          </div>
        </div>
      </section>
    </>
  );
}
