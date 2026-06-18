"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  threshold?: number;
  once?: boolean;
};

export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
  threshold = 0.18,
  once = true,
}: RevealOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const revealWhenInOrPastViewport = () => {
      const rect = node.getBoundingClientRect();
      const triggerPoint = window.innerHeight * (1 - threshold);
      const hasEnteredViewport = rect.top <= triggerPoint && rect.bottom >= 0;
      const hasBeenPassed = rect.bottom < 0;

      if (hasEnteredViewport || hasBeenPassed) {
        setIsVisible(true);
        return true;
      }

      if (!once) {
        setIsVisible(false);
      }

      return false;
    };

    if (revealWhenInOrPastViewport() && once) {
      return;
    }

    let rafId: number | null = null;

    const onViewportChange = () => {
      if (rafId !== null) {
        return;
      }

      rafId = window.requestAnimationFrame(() => {
        revealWhenInOrPastViewport();
        rafId = null;
      });
    };

    // Trigger once after paint so initial transition can run when in view.
    onViewportChange();

    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);

    return () => {
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [once, threshold]);

  return (
    <div
      ref={containerRef}
      className={`reveal-on-scroll ${isVisible ? "is-visible" : ""} ${className ?? ""}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
