"use client";

import { useEffect, useRef, useState } from "react";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.6))" }}
    >
      {dir === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

const PHOTOS = [
  "1-1.jpg",
  "1-2.jpg",
  "1-3.jpg",
  "1-4.jpg",
  "1-5.jpg",
  "2-1.jpg",
  "2-2.jpg",
  "2-3.jpg",
  "2-4.jpg",
  "2-5.jpg",
  "3-1.jpg",
  "3-2.jpg",
  "3-3.jpg",
  "3-4.jpg",
  "3-5.jpg",
];

type Slot = {
  // resting (tight pile) offset from cluster centre, in px
  tightX: number;
  tightY: number;
  // active (spread) offset from cluster centre, in px
  spreadX: number;
  spreadY: number;
  rotate: number;
  z: number;
};

// 3 rows × 5 cols, but loosely — only the row and rough column order
// matches the filename (1-1..1-5 in the top band, 2-x in the middle,
// 3-x in the bottom). Positions and rotations are deliberately
// jittered so it still looks like a casual pile.
const SLOTS: Slot[] = [
  // Row 1: 1-1 ~ 1-5
  {
    tightX: -145,
    tightY: -95,
    spreadX: -310,
    spreadY: -235,
    rotate: -11,
    z: 3,
  },
  { tightX: -75, tightY: -115, spreadX: -130, spreadY: -205, rotate: 6, z: 6 },
  { tightX: -5, tightY: -80, spreadX: 20, spreadY: -245, rotate: -2, z: 4 },
  { tightX: 55, tightY: -105, spreadX: 170, spreadY: -195, rotate: 9, z: 7 },
  { tightX: 125, tightY: -90, spreadX: 315, spreadY: -225, rotate: -6, z: 5 },
  // Row 2: 2-1 ~ 2-5
  { tightX: -135, tightY: -5, spreadX: -295, spreadY: 10, rotate: 7, z: 5 },
  { tightX: -60, tightY: 15, spreadX: -160, spreadY: -25, rotate: -8, z: 8 },
  { tightX: 10, tightY: -15, spreadX: 15, spreadY: 15, rotate: 3, z: 9 },
  { tightX: 70, tightY: 10, spreadX: 145, spreadY: -15, rotate: -9, z: 6 },
  { tightX: 130, tightY: 5, spreadX: 305, spreadY: 20, rotate: 5, z: 7 },
  // Row 3: 3-1 ~ 3-5
  { tightX: -140, tightY: 85, spreadX: -310, spreadY: 235, rotate: -8, z: 4 },
  { tightX: -65, tightY: 110, spreadX: -150, spreadY: 210, rotate: 4, z: 6 },
  { tightX: 0, tightY: 80, spreadX: 10, spreadY: 245, rotate: -5, z: 8 },
  { tightX: 60, tightY: 105, spreadX: 160, spreadY: 200, rotate: 8, z: 5 },
  { tightX: 125, tightY: 85, spreadX: 315, spreadY: 230, rotate: -4, z: 7 },
];

const PHOTO_BASE = "/images/parhelion/color-tickets/202112";

interface ScatteredGalleryProps {
  locale?: "zh" | "en";
}

export function ScatteredGallery({ locale = "zh" }: ScatteredGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [displayed, setDisplayed] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setAtStart(scrollLeft <= 1);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollByAmount = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  // Keep the lightbox image in DOM during fade-out.
  useEffect(() => {
    if (active) setDisplayed(active);
  }, [active]);

  // Lock body scroll while lightbox is open.
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  // ESC closes the lightbox.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const onMouseMove = (e: React.MouseEvent) => {
    const cx = e.clientX;
    const cy = e.clientY;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = cx - (r.left + r.width / 2);
      const dy = cy - (r.top + r.height / 2);
      const d = Math.sqrt(dx * dx + dy * dy);
      // Snap to spread inside 450px, snap back beyond 550px. The 100px
      // hysteresis keeps the state from flickering at the boundary.
      setExpanded((cur) => {
        if (cur && d > 550) return false;
        if (!cur && d < 450) return true;
        return cur;
      });
    });
  };

  const onMouseLeave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    setExpanded(false);
    setHovered(null);
  };

  return (
    <>
      <style>{`
        .parhelion-mobile-grid::-webkit-scrollbar { display: none; }
      `}</style>

      {/* 作品牌 */}
      <div
        className="absolute bottom-10 left-6 md:left-16 z-10 flex flex-col gap-1"
        style={{ color: "rgba(90,40,30,1)" }}
      >
        <p className="text-sm font-bold tracking-wide italic">
          {locale === "en"
            ? "Sketching in December 2021"
            : "2021年的12月份寫生"}
        </p>
        <p className="text-xs font-semibold tracking-wide opacity-60">
          {locale === "en"
            ? "2021, Poster Colour on Arches, 75×50mm, 15 in total"
            : "2021，以廣告顏料繪於法國水彩紙，75×50mm，共15張"}
        </p>
      </div>

      {/* Desktop — scattered pile */}
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="hidden md:block relative w-full h-full select-none"
      >
        {PHOTOS.map((photo, i) => {
          const s = SLOTS[i];
          const x = expanded ? s.spreadX : s.tightX;
          const y = expanded ? s.spreadY : s.tightY;
          const isHovered = hovered === i;
          return (
            <button
              key={photo}
              onClick={() => setActive(photo)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
              aria-label={`查看色票 ${photo}`}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${s.rotate}deg)`,
                transition: "transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)",
                zIndex: isHovered ? 100 : s.z,
                transformOrigin: "center",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <div
                className="bg-white p-1"
                style={{
                  boxShadow:
                    "0 10px 28px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.25)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={`${PHOTO_BASE}/${photo}`}
                  alt=""
                  draggable={false}
                  loading="lazy"
                  style={{
                    width: 150,
                    height: 225,
                    objectFit: "cover",
                    display: "block",
                    cursor: "pointer",
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile — horizontally scrollable 5×3 grid */}
      <div className="md:hidden relative w-full h-full">
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="parhelion-mobile-grid w-full h-full overflow-x-auto overflow-y-hidden flex items-center pt-24 pb-10"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            boxSizing: "border-box",
          }}
        >
          <div className="flex flex-col gap-3 pl-6 pr-10 w-max">
            {[0, 1, 2].map((rowIdx) => (
              <div key={rowIdx} className="flex gap-3">
                {PHOTOS.slice(rowIdx * 5, rowIdx * 5 + 5).map((photo) => (
                  <button
                    key={photo}
                    onClick={() => setActive(photo)}
                    aria-label={`查看色票 ${photo}`}
                    className="bg-white p-1 shrink-0"
                    style={{
                      boxShadow:
                        "0 8px 22px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.2)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={`${PHOTO_BASE}/${photo}`}
                      alt=""
                      draggable={false}
                      loading="lazy"
                      style={{
                        width: 100,
                        height: 150,
                        objectFit: "cover",
                        display: "block",
                        cursor: "pointer",
                      }}
                    />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {!atStart && (
          <button
            onClick={() => scrollByAmount(-1)}
            aria-label="向左捲動"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Chevron dir="left" />
          </button>
        )}
        {!atEnd && (
          <button
            onClick={() => scrollByAmount(1)}
            aria-label="向右捲動"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Chevron dir="right" />
          </button>
        )}
      </div>

      {/* Lightbox overlay */}
      <div
        onClick={() => setActive(null)}
        onTransitionEnd={(e) => {
          if (e.propertyName === "opacity" && !active) setDisplayed(null);
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
        style={{
          background: "rgba(20, 14, 12, 0.85)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          opacity: active ? 1 : 0,
          pointerEvents: active ? "auto" : "none",
          transition: "opacity 0.4s ease",
        }}
      >
        {displayed && (
          <img
            src={`${PHOTO_BASE}/${displayed}`}
            alt=""
            draggable={false}
            className="bg-white p-2"
            style={{
              maxHeight: "82vh",
              maxWidth: "85vw",
              boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
              cursor: "pointer",
            }}
          />
        )}
      </div>
    </>
  );
}
