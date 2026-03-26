"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor(): React.ReactElement {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on fine-pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX  = 0;
    let ringY  = 0;
    let raf    = 0;

    const onMove = (e: MouseEvent): void => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top  = `${mouseY}px`;
    };

    // Ring follows with slight lag
    const animate = (): void => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top  = `${ringY}px`;
      raf = requestAnimationFrame(animate);
    };

    const onEnterHoverable = (): void => ring.classList.add("hovered");
    const onLeaveHoverable = (): void => ring.classList.remove("hovered");

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    // Attach to all interactive elements
    const bindHover = (): void => {
      document
        .querySelectorAll("a, button, [role='button'], [role='tab'], input, textarea, select, label")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnterHoverable);
          el.addEventListener("mouseleave", onLeaveHoverable);
        });
    };

    bindHover();

    // Re-bind after each navigation (SPA route change)
    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
