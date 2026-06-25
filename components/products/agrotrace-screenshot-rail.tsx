"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import ArrowNarrowIcon from "@/components/icons/ArrowNarrowIcon";

const screenshots = [
  {
    src: "/img/products/agrotrace/screen-dashboard.png",
    alt: "AgroTrace dashboard view",
  },
  {
    src: "/img/products/agrotrace/screen-products.png",
    alt: "AgroTrace products management screen",
  },
  {
    src: "/img/products/agrotrace/screen-batches.png",
    alt: "AgroTrace batches tracking interface",
  },
  {
    src: "/img/products/agrotrace/screen-assets.png",
    alt: "AgroTrace assets overview",
  },
  {
    src: "/img/products/agrotrace/screen-locations.png",
    alt: "AgroTrace locations management view",
  },
  {
    src: "/img/products/agrotrace/screen-events.png",
    alt: "AgroTrace events activity screen",
  },
];

export function AgrotraceScreenshotRail() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const node = scrollerRef.current;

    if (!node) {
      return;
    }

    const maxScrollLeft = node.scrollWidth - node.clientWidth;
    setCanScrollLeft(node.scrollLeft > 2);
    setCanScrollRight(node.scrollLeft < maxScrollLeft - 2);
  }, []);

  useEffect(() => {
    const node = scrollerRef.current;

    if (!node) {
      return;
    }

    updateScrollState();

    const handleResize = () => updateScrollState();

    node.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      node.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: "left" | "right") => {
    const node = scrollerRef.current;

    if (!node) {
      return;
    }

    const firstCard = node.querySelector("[data-screenshot-card]") as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth ?? node.clientWidth;
    const computedGap = Number.parseFloat(window.getComputedStyle(node).columnGap || "0") || 0;
    const scrollAmount = cardWidth + computedGap;

    node.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") {
      return;
    }

    const node = scrollerRef.current;

    if (!node) {
      return;
    }

    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = event.clientX;
    startScrollLeftRef.current = node.scrollLeft;
    node.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }

    const node = scrollerRef.current;

    if (!node) {
      return;
    }

    const dragDistance = event.clientX - startXRef.current;
    node.scrollLeft = startScrollLeftRef.current - dragDistance;
  };

  const stopDragging = () => {
    if (!isDraggingRef.current) {
      return;
    }

    isDraggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <p className="max-w-3xl text-base leading-8 text-anvil-slate">
          A quick walkthrough of AgroTrace screens built to keep traceability data structured, verifiable, and easy to
          act on.
        </p>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll screenshots left"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-anvil-border bg-white text-anvil-navy transition hover:border-anvil-blue/35 hover:bg-anvil-sky disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowNarrowIcon className="h-5 w-5 rotate-180" />
          </button>

          <button
            type="button"
            onClick={() => scrollByCard("right")}
            disabled={!canScrollRight}
            aria-label="Scroll screenshots right"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-anvil-border bg-white text-anvil-navy transition hover:border-anvil-blue/35 hover:bg-anvil-sky disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowNarrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className={`mt-8 flex gap-4 overflow-x-auto pb-2 scrollbar-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-x" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
      >
        {screenshots.map((shot, index) => (
          <figure
            key={shot.src}
            data-screenshot-card
            className="shrink-0 basis-[85%] overflow-hidden rounded-2xl border border-anvil-border bg-white shadow-[0_12px_32px_-22px_rgba(7,26,61,0.55)] sm:basis-[62%] lg:basis-[calc((100%-2.5rem)/3.5)]"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1600}
              height={1000}
              className="h-auto w-full"
              priority={index < 2}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}