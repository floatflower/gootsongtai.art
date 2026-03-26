"use client";

import { useCallback, useRef, useState } from "react";

const PAIRS = [
  {
    before: "/images/idoruru/a-before.avif",
    after: "/images/idoruru/a-after.avif",
  },
  {
    before: "/images/idoruru/b-before.avif",
    after: "/images/idoruru/b-after.avif",
  },
  {
    before: "/images/idoruru/c-before.avif",
    after: "/images/idoruru/c-after.avif",
  },
];

function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePos = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden select-none cursor-col-resize"
      onMouseDown={(e) => {
        dragging.current = true;
        updatePos(e.clientX);
      }}
      onMouseMove={(e) => {
        if (dragging.current) updatePos(e.clientX);
      }}
      onMouseUp={() => {
        dragging.current = false;
      }}
      onMouseLeave={() => {
        dragging.current = false;
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        updatePos(e.touches[0].clientX);
      }}
      onTouchMove={(e) => {
        if (dragging.current) updatePos(e.touches[0].clientX);
      }}
      onTouchEnd={() => {
        dragging.current = false;
      }}
    >
      {/* Before image — full size, right side */}
      <img
        src={before}
        alt="before"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After image — full size, clipped to left of slider via clip-path */}
      <img
        src={after}
        alt="after"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/80"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center"
        style={{ left: `${pos}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M5 8H1M1 8L3 6M1 8L3 10M11 8H15M15 8L13 6M15 8L13 10"
            stroke="#555"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function BeforeAfterCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full">
      <BeforeAfterSlider
        key={index}
        before={PAIRS[index].before}
        after={PAIRS[index].after}
      />

      {/* Controls */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => setIndex((i) => (i - 1 + PAIRS.length) % PAIRS.length)}
          className="text-xs font-black tracking-[0.2em] uppercase text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          ← Prev
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {PAIRS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? "bg-neutral-700" : "bg-neutral-300"}`}
            />
          ))}
        </div>

        <button
          onClick={() => setIndex((i) => (i + 1) % PAIRS.length)}
          className="text-xs font-black tracking-[0.2em] uppercase text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
