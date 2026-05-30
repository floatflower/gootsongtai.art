"use client";

import { useEffect, useRef, useState } from "react";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === "left" ? (
        <polyline points="15 18 9 12 15 6" />
      ) : (
        <polyline points="9 18 15 12 9 6" />
      )}
    </svg>
  );
}

const VIDEOS = [
  {
    id: "720Nl6ZYuO8",
    title: "藝術家楊家芸訪談",
    year: "2025",
    type: "智慧型手機、串流，02'20\"",
  },
  {
    id: "icwgHSugnfA",
    title: "藝術家陳律佑訪談",
    year: "2025",
    type: "智慧型手機、串流，02'20\"",
  },
  {
    id: "taLoHrD2cjs",
    title: "藝術家呂文婷訪談",
    year: "2025",
    type: "智慧型手機、串流，02'20\"",
  },
];

export function InterviewVideos() {
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
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <>
      <style>{`.idoruru-scroll::-webkit-scrollbar { display: none; }`}</style>

      {/* Desktop — 3-col grid */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-4">
        {VIDEOS.map((v) => (
          <div key={v.id} className="flex flex-col">
            <div className="relative w-full aspect-video bg-neutral-200">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${v.id}`}
                title={`《${v.title}》4K中英字幕完整版`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <p className="text-sm font-bold text-black tracking-wide italic">
                {v.title}
              </p>
              <p className="text-xs font-semibold text-neutral-400 tracking-wide">
                {v.year}，{v.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile — horizontal scroll */}
      <div className="sm:hidden relative w-full">
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="idoruru-scroll flex overflow-x-auto overflow-y-hidden"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex gap-4 pl-1 pr-10 w-max">
            {VIDEOS.map((v) => (
              <div key={v.id} className="flex flex-col shrink-0 w-[78vw]">
                <div className="relative w-full aspect-video bg-neutral-200">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={`《${v.title}》4K中英字幕完整版`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <p className="text-sm font-bold text-black tracking-wide italic">
                    {v.title}
                  </p>
                  <p className="text-xs font-semibold text-neutral-400 tracking-wide">
                    {v.year}，{v.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!atStart && (
          <button
            onClick={() => scrollByAmount(-1)}
            aria-label="向左捲動"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 text-stone-400"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Chevron dir="left" />
          </button>
        )}
        {!atEnd && (
          <button
            onClick={() => scrollByAmount(1)}
            aria-label="向右捲動"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 text-stone-400"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Chevron dir="right" />
          </button>
        )}
      </div>
    </>
  );
}
