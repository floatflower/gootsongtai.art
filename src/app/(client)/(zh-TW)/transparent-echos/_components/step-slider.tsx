"use client";

import { useRef, type KeyboardEvent, type PointerEvent } from "react";

/** 旋鈕直徑（px），軌道左右各內縮半個旋鈕，讓旋鈕不會超出軌道 */
const KNOB = 36;

/**
 * 分段式滑桿：共 `steps` 格（預設 5），左邊到旋鈕之間會填色。
 * 加上 data-no-flip，讓外層 PageFlipper 不會把拖曳當成翻頁手勢。
 */
export function StepSlider({
  value,
  onChange,
  steps = 5,
  label,
  minLabel,
  maxLabel,
}: {
  value: number;
  onChange: (value: number) => void;
  steps?: number;
  label: string;
  minLabel: string;
  maxLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const max = steps - 1;

  /** 第 i 格在軌道上的水平位置 */
  const positionOf = (i: number) =>
    `calc(${KNOB / 2}px + (100% - ${KNOB}px) * ${i / max})`;

  const valueFromPointer = (clientX: number) => {
    const rect = trackRef.current!.getBoundingClientRect();
    const ratio = (clientX - rect.left - KNOB / 2) / (rect.width - KNOB);
    return Math.round(Math.min(1, Math.max(0, ratio)) * max);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    onChange(valueFromPointer(e.clientX));
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    const next = valueFromPointer(e.clientX);
    if (next !== value) onChange(next);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let next = value;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = value - 1;
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") next = value + 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = max;
    else return;
    e.preventDefault();
    onChange(Math.min(max, Math.max(0, next)));
  };

  return (
    <div
      ref={trackRef}
      data-no-flip
      role="slider"
      tabIndex={0}
      aria-label={label}
      aria-valuemin={1}
      aria-valuemax={steps}
      aria-valuenow={value + 1}
      aria-valuetext={`${value + 1} / ${steps}（${minLabel} — ${maxLabel}）`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onKeyDown={onKeyDown}
      className="relative h-7 w-full cursor-pointer touch-none select-none rounded-full bg-white shadow-[0_6px_14px_rgba(0,0,0,0.12)] outline-none focus-visible:ring-2 focus-visible:ring-[#4fa3c4]"
    >
      {/* 凹槽 */}
      <div className="absolute inset-1.5 rounded-full bg-[#e4e4ea] shadow-[inset_0_1px_3px_rgba(0,0,0,0.18)]" />

      {/* 填色 */}
      <div
        className="absolute bottom-1.5 left-1.5 top-1.5 rounded-full bg-linear-to-r from-[#4fa3c4] to-[#93dfc0] transition-[width] duration-200 ease-out"
        style={{ width: `calc(${positionOf(value)} - 6px)` }}
      />

      {/* 每一格的刻度點 */}
      {Array.from({ length: steps }, (_, i) => (
        <span
          key={i}
          className={`absolute top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
            i <= value ? "bg-white/80" : "bg-[#b9b9c2]"
          }`}
          style={{ left: positionOf(i) }}
        />
      ))}

      {/* 旋鈕 */}
      <div
        className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-[left] duration-200 ease-out"
        style={{ left: positionOf(value), width: KNOB, height: KNOB }}
      >
        <span className="size-3 rounded-full bg-[#4fa3c4]" />
      </div>
    </div>
  );
}
