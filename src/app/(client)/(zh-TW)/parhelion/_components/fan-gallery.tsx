"use client";

import { useEffect, useState } from "react";

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
                    zIndex: isHovered ? 100 : 10 + i,
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
      <div
        className="parhelion-mobile-grid md:hidden w-full h-full overflow-x-auto overflow-y-hidden flex items-center pt-24 pb-10"
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
                  width: 200,
                  height: 300,
                  objectFit: "cover",
                  display: "block",
                  cursor: "pointer",
                }}
              />
            </button>
          ))}
        </div>
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
