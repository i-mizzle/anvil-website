import { Metadata } from "next";
import { CalendlyTrigger } from "@/components/calendly-trigger";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteLayout } from "@/components/site-layout";
import AgrotraceLogo from "@/components/products/AgrotraceLogo";
import { createProductMetadata, productSchema } from "@/lib/metadata";

export const metadata: Metadata = createProductMetadata(
  "AgroTrace",
  "AgroTrace is an agricultural traceability platform providing end-to-end supply chain visibility. Digital infrastructure for farmers, exporters, inspectors, and regulators with batch management, certifications, and compliance reporting.",
  "/case-studies/agrotrace",
  [
    "agricultural traceability",
    "supply chain traceability",
    "farm to market",
    "batch management",
    "agricultural compliance",
    "export readiness",
    "certification management",
    "agriculture software",
    "supply chain transparency",
  ]
);

const problemPoints = [
  "Traceability is manual or paper-based",
  "Batch history is incomplete or inconsistent",
  "Certifications are hard to verify in real time",
  "Export readiness depends on fragmented records",
  "Data is not standardized across stakeholders",
];

const builtFor = [
  "Farmers & Producer Groups",
  "Exporters",
  "Inspectors & Certification Bodies",
  "Regulatory Agencies",
  "Agricultural Supply Chain Operators",
];

const capabilities = [
  {
    title: "Traceability Graph",
    detail: "A complete history of every batch from origin to destination.",
  },
  {
    title: "Compliance Records",
    detail: "Structured storage of inspections, certifications, and approvals.",
  },
  {
    title: "Role-Based Access",
    detail: "Different stakeholders see only what they need to act on.",
  },
  {
    title: "Audit-Friendly Architecture",
    detail: "Every action is recorded for accountability.",
  },
  {
    title: "Scalable Data Model",
    detail: "Designed for large-scale agricultural ecosystems.",
  },
];

const projectedOutcomes = [
  "Reduce ambiguity in origin tracking",
  "Improve export readiness confidence",
  "Strengthen compliance processes",
  "Build trust between buyers and producers",
  "Digitize historically manual workflows",
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

export default function AgrotraceCaseStudyPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-anvil-border bg-linear-to-b from-anvil-soft to-white">
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-anvil-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-40">
          <div>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-anvil-blue">Case Study</p>
              <div className="mt-5">
                <AgrotraceLogo />
              </div>
              <h1 className="mt-6 font-sans text-4xl font-bold leading-tight tracking-tight text-anvil-navy sm:text-5xl">
                End-to-End Agricultural Traceability & Compliance System
              </h1>
              <p className="mt-6 text-lg leading-8 text-anvil-slate">
                Forged by Anvil. Built for trust in the supply chain.
              </p>
              <p className="mt-4 inline-flex rounded-full border border-anvil-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-anvil-blue">
                Currently in Development
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <CalendlyTrigger className="rounded-full border border-anvil-accent-blue bg-anvil-accent-blue px-6 py-3 text-sm font-semibold text-white transition hover:border-anvil-blue hover:bg-anvil-navy">
                  Explore with Our Team
                </CalendlyTrigger>
                <a
                  href="https://agrotraceng.cloud"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-anvil-border bg-white px-6 py-3 text-sm font-semibold text-anvil-navy transition hover:border-anvil-blue/40 hover:bg-anvil-sky"
                >
                  Join the Waitlist
                </a>
              </div>
            </div>

            <div className="mt-12 rounded-lg border border-anvil-border bg-white p-8 shadow-[0_12px_40px_-20px_rgba(7,26,61,0.45)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-anvil-blue">Development Focus</p>
              <p className="mt-4 max-w-4xl text-lg leading-8 text-anvil-slate">
                AgroTraceNG is being designed to create structured, verifiable traceability from farm origin to export readiness. The platform is evolving with supply-chain stakeholders so the workflow reflects real field conditions, regulatory realities, and trade requirements.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="The Origin" title="Agricultural supply chains are complex, fragmented, and often undocumented." />
          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-anvil-slate">
            <p>
              Produce changes hands multiple times before reaching export markets, with little to no structured visibility into origin, handling, or compliance.
            </p>
            <p>The result is a trust gap:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Exporters struggle with documentation.</li>
              <li>Inspectors lack reliable data.</li>
              <li>Regulators enforce compliance retroactively.</li>
              <li>Buyers question provenance.</li>
            </ul>
            <p>AgroTraceNG is being developed to close that gap.</p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-anvil-soft">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="The Problem"
            title="In most agricultural ecosystems, traceability remains fragmented."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {problemPoints.map((item, index) => (
              <RevealOnScroll key={item} delayMs={index * 70}>
                <article className="rounded-2xl border border-anvil-border bg-white p-5">
                  <p className="text-sm font-semibold text-anvil-navy">{item}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>

          <p className="mt-10 text-lg leading-8 text-anvil-slate">
            This creates friction at every stage of trade.
          </p>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="The Insight"
            title="The issue wasn't lack of data."
            subtitle="It was lack of structured traceability infrastructure."
          />

          <div className="mt-8 max-w-4xl space-y-6 text-base leading-8 text-anvil-slate">
            <p>So we reframed the problem:</p>
            <blockquote className="rounded-2xl border border-anvil-border bg-anvil-soft p-6 font-display text-2xl font-semibold leading-tight text-anvil-navy">
              What if every agricultural batch had a digital identity from origin to export?
            </blockquote>
            <p>
              A system where every actor in the supply chain can contribute to a single, verifiable record.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="The Solution"
            title="AgroTraceNG is being built as a traceability and compliance platform for agricultural supply chains."
            subtitle="Designed to bring transparency, structure, and trust to agricultural trade."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              "End-to-end batch tracking",
              "Digital certification records",
              "Export readiness verification",
              "Compliance documentation management",
              "Role-based access for stakeholders",
            ].map((item, index) => (
              <RevealOnScroll key={item} delayMs={index * 60}>
                <article className="rounded-2xl border border-anvil-border bg-anvil-soft p-5">
                  <p className="text-sm font-semibold text-anvil-navy">{item}</p>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-anvil-soft">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="A structured flow from origin to export confidence." />
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                title: "Batch Creation at Source",
                detail: "Every produce batch will be registered at origin with key metadata.",
              },
              {
                title: "Movement Tracking",
                detail: "Each transfer will update the batch history in sequence.",
              },
              {
                title: "Certification Linking",
                detail: "Inspection and compliance records will be attached directly to batches.",
              },
              {
                title: "Export Readiness",
                detail: "Exporters will be able to quickly assess whether a batch meets requirements.",
              },
              {
                title: "Verification Layer",
                detail: "Stakeholders will be able to validate origin and history without ambiguity.",
              },
            ].map((step, index) => (
              <RevealOnScroll key={step.title} delayMs={index * 60}>
                <li className="rounded-2xl border border-anvil-border bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-anvil-blue">Step {index + 1}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-anvil-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-anvil-slate">{step.detail}</p>
                </li>
              </RevealOnScroll>
            ))}
          </ol>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Built For" title="Stakeholders across agricultural trade ecosystems." />
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
          <SectionHeading eyebrow="Key Capabilities" title="Built to support trustworthy, auditable trade workflows." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <RevealOnScroll key={capability.title} delayMs={index * 70}>
                <article className="rounded-2xl border border-anvil-border bg-anvil-soft p-6">
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
          <SectionHeading eyebrow="Expected Outcome" title="Introducing structure where there was previously fragmentation." />
          <p className="mt-6 max-w-4xl text-base leading-8 text-anvil-slate">
            As AgroTraceNG progresses, it is expected to help stakeholders:
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projectedOutcomes.map((outcome, index) => (
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
          <SectionHeading eyebrow="What We Learned" title="Agriculture doesn't suffer from lack of effort." />
          <div className="mt-8 rounded-3xl border border-anvil-border bg-white p-8">
            <p className="text-base leading-8 text-anvil-slate">It suffers from lack of visibility.</p>
            <blockquote className="mt-4 font-display text-2xl font-semibold leading-tight text-anvil-navy">
              When trust is expensive, transparency becomes infrastructure.
            </blockquote>
          </div>
        </RevealOnScroll>
      </section>

      <section className="bg-linear-to-r from-anvil-navy to-anvil-blue text-white">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-xl border border-white/20 bg-white/5 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">Next Step</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              AgroTraceNG is evolving into foundational infrastructure for transparent agricultural trade.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-blue-100">
              Explore how it can support your supply chain.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CalendlyTrigger className="rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-semibold text-anvil-navy transition hover:bg-anvil-sky">
                Schedule a Conversation
              </CalendlyTrigger>
              <a
                href="https://agrotraceng.cloud"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Join the Waitlist
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </SiteLayout>
  );
}