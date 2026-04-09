"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      const isRight = e.clientX > window.innerWidth / 2;
      el.style.background = isRight ? "#f1f294" : "#ffafb2";
    };

    const tick = () => {
      if (el) {
        el.style.transform = `translate(${pos.current.x - 40}px, ${pos.current.y - 40}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[1] rounded-full"
      style={{
        width: 80,
        height: 80,
        background: "#f1f294",
        transition: "background 0.8s ease",
        willChange: "transform",
      }}
    />
  );
}
