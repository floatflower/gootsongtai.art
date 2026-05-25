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
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const PHOTO_BASE = "/images/parhelion/color-tickets/202201";

const CARD_W = 150;
const CARD_H = 225;
const ANGLE_STEP = 6; // degrees between adjacent cards
const PIVOT_OFFSET = 600; // px below the card bottom — bigger = wider fan spread

export function FanGallery() {
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

  useEffect(() => {
    if (active) setDisplayed(active);
  }, [active]);

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

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      {/* 作品牌 */}
      <div
        className="absolute bottom-10 left-6 md:left-16 z-10 flex flex-col gap-1"
        style={{ color: "rgba(90,40,30,1)" }}
      >
        <p className="text-sm font-bold tracking-wide italic">
          2022年公轉後的第一個日落
        </p>
        <p className="text-xs font-semibold tracking-wide opacity-60">
          2022，以廣告顏料繪於法國水彩紙，75×50mm，共9張
        </p>
      </div>

      {/* Desktop: peacock fan, fixed at screen centre */}
      <div className="hidden md:block relative w-full h-full overflow-hidden">
        {/* Anchor: container 50% × 70%; fan pivot sits here */}
        <div className="absolute" style={{ top: "60%", left: "50%" }}>
          <div>
            {PHOTOS.map((photo, i) => {
              const angle = (i - (PHOTOS.length - 1) / 2) * ANGLE_STEP;
              const isHovered = hovered === i;
              return (
                <button
                  key={photo}
                  onClick={() => setActive(photo)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                  aria-label={`查看色票 ${photo}`}
                  className="absolute bg-white p-1"
                  style={{
                    left: -CARD_W / 2,
                    top: -CARD_H,
                    width: CARD_W,
                    height: CARD_H,
                    transformOrigin: `50% calc(100% + ${PIVOT_OFFSET}px)`,
                    transform: `rotate(${angle}deg)${
                      isHovered ? " translateY(-20px)" : ""
                    }`,
                    transition: "transform 0.25s ease",
                    zIndex: isHovered ? 100 : 10 + (PHOTOS.length - 1 - i),
                    border: "none",
                    cursor: "pointer",
                    boxShadow:
                      "0 10px 24px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.25)",
                  }}
                >
                  <img
                    src={`${PHOTO_BASE}/${photo}`}
                    alt=""
                    draggable={false}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      pointerEvents: "none",
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: single-row horizontally scrollable */}
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
          <div className="flex gap-3 pl-6 pr-10 w-max">
            {PHOTOS.map((photo) => (
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

      {/* Lightbox */}
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
