"use client";

import { Children, useEffect, useRef, type ReactNode } from "react";

/** 滾輪累積超過這個距離（px）才翻頁 */
const WHEEL_THRESHOLD = 150;
/** 觸控滑動超過這個距離（px）才翻頁 */
const TOUCH_THRESHOLD = 80;
/** 翻頁動畫時間（ms） */
const FLIP_DURATION = 700;
/** 停止滾動多久後（ms）把未達門檻的累積量歸零、頁面彈回 */
const IDLE_RESET = 180;
/** 未達門檻時，頁面跟著位移的比例（讓使用者感覺到「快翻了」） */
const WHEEL_FEEDBACK = 0.25;
const TOUCH_FEEDBACK = 0.5;

/**
 * 整頁翻頁容器：每個 child 佔滿一個畫面。
 * 滾動（滾輪 / 觸控 / 鍵盤）累積到門檻後，整頁往上或往下翻一頁。
 */
export function PageFlipper({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pages = Children.toArray(children);
  const count = pages.length;

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let index = 0;
    let acc = 0;
    let locked = false;
    let flipAt = 0;
    let lastWheel = 0;
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    let touchStartY: number | null = null;
    let touchDelta = 0;

    const apply = (offset: number, animate: boolean) => {
      track.style.transition = animate
        ? `transform ${FLIP_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`
        : "none";
      track.style.transform = `translate3d(0, calc(${-index * 100}dvh + ${offset}px), 0)`;
    };

    /** 在邊界（第一頁往上 / 最後一頁往下）時不能再翻 */
    const atEdge = (dir: number) =>
      (dir < 0 && index === 0) || (dir > 0 && index === count - 1);

    const flip = (dir: number) => {
      acc = 0;
      if (atEdge(dir)) {
        apply(0, true);
        return;
      }
      index += dir;
      locked = true;
      flipAt = performance.now();
      apply(0, true);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = performance.now();

      if (locked) {
        // 動畫結束、且滾輪慣性停下來（出現間隔）之後才解鎖，
        // 避免觸控板的慣性滾動一次連翻好幾頁。
        if (now - flipAt > FLIP_DURATION && now - lastWheel > 100) {
          locked = false;
        } else {
          lastWheel = now;
          return;
        }
      }
      lastWheel = now;

      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 16;
      else if (e.deltaMode === 2) delta *= window.innerHeight;

      acc += delta;
      if (idleTimer) clearTimeout(idleTimer);

      if (atEdge(Math.sign(acc))) {
        acc = 0;
        apply(0, true);
        return;
      }

      if (Math.abs(acc) >= WHEEL_THRESHOLD) {
        flip(Math.sign(acc));
        return;
      }

      apply(-acc * WHEEL_FEEDBACK, false);
      idleTimer = setTimeout(() => {
        acc = 0;
        apply(0, true);
      }, IDLE_RESET);
    };

    const isBusy = () => {
      if (locked && performance.now() - flipAt > FLIP_DURATION) locked = false;
      return locked;
    };

    /** 互動元件（滑桿等）標上 data-no-flip，在它上面的手勢不觸發翻頁 */
    const isNoFlip = (target: EventTarget | null) =>
      target instanceof Element && target.closest("[data-no-flip]") !== null;

    const onTouchStart = (e: TouchEvent) => {
      if (isBusy() || isNoFlip(e.target)) return;
      touchStartY = e.touches[0].clientY;
      touchDelta = 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (touchStartY === null) return;
      touchDelta = touchStartY - e.touches[0].clientY;
      if (atEdge(Math.sign(touchDelta))) {
        touchDelta = 0;
        apply(0, false);
        return;
      }
      apply(-touchDelta * TOUCH_FEEDBACK, false);
    };

    const onTouchEnd = () => {
      if (touchStartY === null) return;
      touchStartY = null;
      if (Math.abs(touchDelta) >= TOUCH_THRESHOLD) flip(Math.sign(touchDelta));
      else apply(0, true);
      touchDelta = 0;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      const dir =
        e.key === "ArrowDown" || e.key === "PageDown" || e.key === " "
          ? 1
          : e.key === "ArrowUp" || e.key === "PageUp"
            ? -1
            : 0;
      if (!dir || isNoFlip(e.target)) return;
      e.preventDefault();
      if (isBusy()) return;
      flip(dir);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd);
    container.addEventListener("touchcancel", onTouchEnd);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      if (idleTimer) clearTimeout(idleTimer);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden overscroll-none touch-none"
    >
      <div ref={trackRef} className="will-change-transform">
        {pages.map((page, i) => (
          <div key={i} className="h-dvh w-full">
            {page}
          </div>
        ))}
      </div>
    </div>
  );
}
