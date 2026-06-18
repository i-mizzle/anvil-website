"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ChevronIcon from "./icons/ChevronIcon";
import HamburgerIcon from "./icons/HamburgerIcon";
import { CalendlyTrigger } from "./calendly-trigger";

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
    name: "Acava",
    href: "#products",
    summary: "Complete school management ERP for academics, finance, and communication.",
  },
];

const navLinkClass =
  "text-sm font-semibold text-anvil-slate transition-colors hover:text-anvil-navy";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = (event: React.MouseEvent<HTMLElement>) => {
    const menu = event.currentTarget.closest("details");

    if (menu instanceof HTMLDetailsElement) {
      menu.open = false;
    }
  };

  const handleHeaderLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");

    if (!href || !href.startsWith("#")) {
      return;
    }

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    if (href === "#top") {
      window.scrollTo({ top: 0, behavior });
      history.replaceState(null, "", href);
      return;
    }

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    const headerOffset = 96;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior });
    history.replaceState(null, "", href);
  };

  const handleMobileLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMobileMenu(event);
    handleHeaderLinkClick(event);
  };

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
        <a href="/#top" className="font-display text-lg font-bold tracking-tight text-anvil-navy" onClick={handleHeaderLinkClick}>
          <Image src="/img/logo.svg" alt="Anvil Digital Innovations Logo" width={150} height={50} />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          <a href="#about" className={navLinkClass} onClick={handleHeaderLinkClick}>
            About
          </a>

          <a href="#products" className={navLinkClass} onClick={handleHeaderLinkClick}>
            Products
          </a>

          <a href="#services" className={navLinkClass} onClick={handleHeaderLinkClick}>
            Services
          </a>
          <a href="#process" className={navLinkClass} onClick={handleHeaderLinkClick}>
            Process
          </a>
          <a href="#faq" className={navLinkClass} onClick={handleHeaderLinkClick}>
            FAQ
          </a>
          <a href="#contact" className={navLinkClass} onClick={handleHeaderLinkClick}>
            Contact
          </a>
        </nav>

        <CalendlyTrigger
          className="hidden font-display rounded-full border border-anvil-accent-blue bg-anvil-accent-blue px-5 py-2 text-sm font-semibold text-white transition hover:border-anvil-blue hover:bg-anvil-navy md:inline-flex"
        >
          Schedule a Conversation
        </CalendlyTrigger>

        <details className="group md:hidden">
          <summary className="list-none rounded-full font-semibold text-anvil-navy">
            <HamburgerIcon className="w-8 h-8" />
          </summary>
          <div className="absolute left-0 right-0 top-full border-b border-anvil-border bg-white px-6 py-6 shadow-lg shadow-anvil-navy/10">
            <div className="mx-auto grid max-w-6xl gap-4">
              <a href="#about" className={navLinkClass} onClick={handleMobileLinkClick}>
                About
              </a>

              <a href="#products" className={navLinkClass} onClick={handleMobileLinkClick}>
                Products 
              </a>
            
              <a href="#services" className={navLinkClass} onClick={handleMobileLinkClick}>
                Services
              </a>

              <a href="#process" className={navLinkClass} onClick={handleMobileLinkClick}>
                Process
              </a>
              
              <a href="#faq" className={navLinkClass} onClick={handleMobileLinkClick}>
                FAQ
              </a>
              
              <a href="#contact" className={navLinkClass} onClick={handleMobileLinkClick}>
                Contact
              </a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}