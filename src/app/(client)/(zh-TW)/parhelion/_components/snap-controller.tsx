"use client";

import { useEffect } from "react";

/**
 * Toggles `html { scroll-snap-type }` based on whether the targeted
 * element fully covers the viewport. Lets a tall scroll-driven section
 * (e.g. the map) be scrolled freely, while the rest of the page keeps
 * mandatory snap.
 */
export function SnapController({ targetId }: { targetId: string }) {
  useEffect(() => {
    const html = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const target = document.getElementById(targetId);
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const vh = window.innerHeight;
      // Half-viewport buffer past the map's natural bottom: keeps snap
      // disabled so the user can freely scroll a bit further before the
      // page snaps to the next slide.
      const exitBuffer = vh * 0.5;
      const inside = rect.top <= 0 && rect.bottom > vh - exitBuffer;
      html.style.scrollSnapType = inside ? "none" : "y mandatory";
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    html.style.scrollSnapType = "y mandatory";
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      html.style.scrollSnapType = "";
    };
  }, [targetId]);

  return null;
}
