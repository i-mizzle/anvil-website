"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ChevronIcon from "./icons/ChevronIcon";
import HamburgerIcon from "./icons/HamburgerIcon";

type ProductLink = {
  name: string;
  href: string;
  summary: string;
};

const productLinks: ProductLink[] = [
  {
    name: "Elevana",
    href: "#products",
    summary: "Modern POS and business management for growing operations.",
  },
  {
    name: "AgroTrace",
    href: "#products",
    summary: "Agricultural traceability from farm to market with compliance support.",
  },
  {
    name: "Kavio",
    href: "#products",
    summary: "Unified school management for academics, finance, and communication.",
  },
];

const navLinkClass =
  "text-sm font-semibold text-anvil-slate transition-colors hover:text-anvil-navy";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-anvil-border/70 bg-white/95 shadow-sm shadow-anvil-navy/5 backdrop-blur"
          : "border-b border-transparent bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-anvil-navy">
          <Image src="./img/logo.svg" alt="Anvil Digital Innovations Logo" width={150} height={50} />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          <a href="#about" className={navLinkClass}>
            About
          </a>

          <div className="group relative">
            <button
              type="button"
              className={`${navLinkClass} inline-flex items-center gap-x-1 font-sans`}
              aria-haspopup="true"
            >
              Products
              <ChevronIcon className="w-4 h-4" />
            </button>

            <div className="pointer-events-none absolute left-1/2 top-full mt-4 w-176 -translate-x-1/2 rounded-2xl border border-anvil-border bg-white p-4 opacity-0 shadow-xl shadow-anvil-navy/10 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <div className="grid gap-3 md:grid-cols-3">
                {productLinks.map((product) => (
                  <a
                    key={product.name}
                    href={product.href}
                    className="rounded-xl border border-anvil-border bg-anvil-soft p-4 transition hover:-translate-y-0.5 hover:border-anvil-blue/40 hover:bg-anvil-sky"
                  >
                    <h3 className="font-display text-base font-bold text-anvil-navy">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-anvil-slate">{product.summary}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#services" className={navLinkClass}>
            Services
          </a>
          <a href="#process" className={navLinkClass}>
            Process
          </a>
          <a href="#faq" className={navLinkClass}>
            FAQ
          </a>
          <a href="#contact" className={navLinkClass}>
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden font-display rounded-full border border-anvil-accent-blue bg-anvil-accent-blue px-5 py-2 text-sm font-semibold text-white transition hover:border-anvil-blue hover:bg-anvil-navy md:inline-flex"
        >
          Schedule a Conversation
        </a>

        <details className="group md:hidden">
          <summary className="list-none rounded-full font-semibold text-anvil-navy">
            <HamburgerIcon className="w-8 h-8" />
          </summary>
          <div className="absolute left-0 right-0 top-full border-b border-anvil-border bg-white px-6 py-6 shadow-lg shadow-anvil-navy/10">
            <div className="mx-auto grid max-w-6xl gap-4">
              <a href="#about" className={navLinkClass}>
                About
              </a>
              <div>
                <p className="text-sm font-semibold text-anvil-navy">Products</p>
                <div className="mt-2 grid gap-2 rounded-xl border border-anvil-border bg-anvil-soft p-3">
                  {productLinks.map((product) => (
                    <a key={product.name} href={product.href} className="text-sm text-anvil-slate">
                      <span className="font-semibold text-anvil-navy">{product.name}:</span>{" "}
                      {product.summary}
                    </a>
                  ))}
                </div>
              </div>
              <a href="#services" className={navLinkClass}>
                Services
              </a>
              <a href="#process" className={navLinkClass}>
                Process
              </a>
              <a href="#faq" className={navLinkClass}>
                FAQ
              </a>
              <a href="#contact" className={navLinkClass}>
                Contact
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}