import { Metadata } from "next";
import Image from "next/image";
import { CalendlyTrigger } from "@/components/calendly-trigger";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteLayout } from "@/components/site-layout";
import { createProductMetadata, productSchema } from "@/lib/metadata";

export const metadata: Metadata = createProductMetadata(
  "Elevana",
  "Elevana is a modern POS and business management platform for retail stores, restaurants, pharmacies, and supermarkets. Unified sales system, inventory intelligence, and multi-location control with headless architecture.",
  "/case-studies/elevana",
  [
    "POS system",
    "point of sale",
    "inventory management",
    "retail management",
    "restaurant POS",
    "pharmacy management",
    "business management platform",
    "multi-location",
    "API",
    "headless architecture",
  ]
);

const capabilities = [
  {
    title: "Unified Sales System",
    detail: "Every transaction updates inventory and reporting instantly.",
  },
  {
    title: "Inventory Intelligence",
    detail: "Stock levels reflect reality, not delayed manual updates.",
  },
  {
    title: "Multi-Location Control",
    detail: "Centralized oversight for businesses with multiple branches.",
  },
  {
    title: "Headless Architecture",
    detail:
      "Elevana is not tied to a single interface. It can power web apps, mobile apps, or custom dashboards via API.",
  },
  {
    title: "Extensible API Layer",
    detail: "Built for integrations, automation, and external systems.",
  },
];

const builtFor = [
  "Retail Stores",
  "Restaurants & Bars",
  "Pharmacies",
  "Supermarkets",
  "Small & Medium Enterprises scaling operations",
];

const outcomes = [
  "Clearer visibility into inventory movement",
  "Faster decision-making",
  "Reduced manual reconciliation",
  "More reliable reporting",
  "Easier scaling across locations",
];

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-anvil-blue">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-anvil-navy sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg leading-8 text-anvil-slate">{subtitle}</p> : null}
    </header>
  );
}

export default function ElevanaCaseStudyPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-anvil-border bg-linear-to-b from-anvil-soft to-white">
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-anvil-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-40">
          <div>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-anvil-blue">Case Study</p>
              <Image
                src="/img/products/elevana-logo.svg"
                alt="Elevana logo"
                width={190}
                height={58}
                className="mt-5 h-8 w-auto"
                priority
              />
              <h1 className="mt-6 font-sans text-4xl font-bold leading-tight tracking-tight text-anvil-navy sm:text-5xl">
                A Unified System for Retail Operations, Inventory, and Sales
              </h1>
              <p className="mt-6 text-lg leading-8 text-anvil-slate">
                Forged by Anvil. Built from real retail chaos.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <CalendlyTrigger className="rounded-full border border-anvil-accent-blue bg-anvil-accent-blue px-6 py-3 text-sm font-semibold text-white transition hover:border-anvil-blue hover:bg-anvil-navy">
                  Book a Demo
                </CalendlyTrigger>
                <a
                  href="https://elevana.cloud"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-anvil-border bg-white px-6 py-3 text-sm font-semibold text-anvil-navy transition hover:border-anvil-blue/40 hover:bg-anvil-sky"
                >
                  Explore the Product
                </a>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-lg border border-anvil-border bg-white shadow-[0_12px_40px_-20px_rgba(7,26,61,0.45)]">
              <Image
                src="/img/products/elevana-dashboard.png"
                alt="Elevana dashboard"
                width={1600}
                height={1024}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="The Origin" title="Elevana didn't start as a product idea." />
          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-anvil-slate">
            <p>
              It started behind a counter.
            </p>
            <p>
              A retail and hospitality business struggling to keep up with sales, inventory, and reporting using disconnected tools, spreadsheets, and manual reconciliation. Every day ended with the same pattern: numbers that didn&apos;t quite match, stock that &quot;disappeared,&quot; and decisions made too late.
            </p>
            <p>So we built a system to fix our own problem first.</p>
            <p>That system became Elevana.</p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-anvil-soft">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="The Problem"
            title="Most retail and hospitality businesses operate with fragmented systems."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Sales happen in one place",
              "Inventory is tracked somewhere else (if at all)",
              "Reporting is delayed or manually compiled",
              "Multi-branch operations become nearly impossible to unify",
              "Scaling introduces more confusion, not clarity",
            ].map((item, index) => (
              <RevealOnScroll key={item} delayMs={index * 70}>
                <article className="rounded-2xl border border-anvil-border bg-white p-5">
                  <p className="text-sm font-semibold text-anvil-navy">{item}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <p className="mt-10 text-lg leading-8 text-anvil-slate">
            The result is predictable: businesses grow in revenue, but lose visibility.
          </p>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="The Turning Point"
            title="The issue wasn't lack of tools."
            subtitle="It was lack of connection between tools."
          />

          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-anvil-slate">
            <p>
              So instead of building another POS system, we asked:
            </p>
            <blockquote className="rounded-2xl border border-anvil-border bg-anvil-soft p-6 font-display text-2xl font-semibold leading-tight text-anvil-navy">
              What if the entire business operation lived in one connected system?
            </blockquote>
            <p>
              Not just a checkout tool, but a complete operational backbone.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="The Solution"
            title="Elevana is a modular retail operations platform."
            subtitle="Designed to unify how businesses sell, track, and manage inventory across one or multiple locations."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Point of Sale (POS)",
              "Inventory Management",
              "Multi-branch Control",
              "Reporting & Analytics",
              "Supplier & Stock Tracking",
              "API-first architecture for integrations",
            ].map((item, index) => (
              <RevealOnScroll key={item} delayMs={index * 60}>
                <article className="rounded-2xl border border-anvil-border bg-anvil-soft p-5">
                  <p className="text-sm font-semibold text-anvil-navy">{item}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <p className="mt-10 text-lg leading-8 text-anvil-slate">
            More importantly, Elevana creates real-time operational visibility.
          </p>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-anvil-soft">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Key Capabilities" title="Built for operational clarity at scale." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <RevealOnScroll key={capability.title} delayMs={index * 70}>
                <article className="rounded-2xl border border-anvil-border bg-white p-6">
                  <h3 className="font-display text-xl font-bold text-anvil-navy">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-anvil-slate">{capability.detail}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Built For" title="Industries with operational complexity." />
          <ul className="mt-8 flex flex-wrap gap-3">
            {builtFor.map((item) => (
              <li
                key={item}
                className="rounded-full border border-anvil-border bg-anvil-soft px-4 py-2 text-sm font-semibold text-anvil-slate"
              >
                {item}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="The Outcome" title="From fragmented workflows to one operational system." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <RevealOnScroll key={outcome} delayMs={index * 60}>
                <article className="rounded-2xl border border-anvil-border p-5">
                  <p className="text-sm font-semibold text-anvil-navy">{outcome}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-anvil-soft">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="What We Learned" title="Most operational problems are not software problems." />
          <div className="mt-8 rounded-3xl border border-anvil-border bg-white p-8">
            <blockquote className="font-display text-2xl font-semibold leading-tight text-anvil-navy">
              Most operational problems are not software problems. They are system design problems.
            </blockquote>
            <p className="mt-5 max-w-3xl text-base leading-8 text-anvil-slate">
              The right system doesn&apos;t just track a business. It helps run it.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-linear-to-r from-anvil-navy to-anvil-blue text-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-xl border border-white/20 bg-white/5 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">Next Step</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              Elevana continues to evolve as a modular platform for modern retail operations.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-blue-100">
              Book a demo or explore how Elevana fits your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CalendlyTrigger className="rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-anvil-navy transition hover:bg-anvil-sky">
                Book a Demo
              </CalendlyTrigger>
              <a
                href="https://elevana.cloud"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore the Product
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </SiteLayout>
  );
}