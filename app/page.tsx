import ArrowNarrowIcon from "@/components/icons/ArrowNarrowIcon";
import { SiteLayout } from "@/components/site-layout";

const productCards = [
  {
    name: "Elevana",
    tag: "Modern POS & Business Management Platform",
    description:
      "A complete point-of-sale and inventory platform for retailers, restaurants, pharmacies, supermarkets, and growing businesses.",
    highlights: ["POS", "Inventory", "Multi-store management", "Reporting", "API", "Headless Architecture", "Reviews Management"],
    cta: "Learn More →",
  },
  {
    name: "AgroTrace",
    tag: "Agricultural Traceability Platform",
    description:
      "Digital infrastructure for transparent agricultural supply chains. Helping producers, exporters, inspectors, and regulators track products from farm to market while simplifying compliance and improving trust.",
    highlights: [
      "End-to-end traceability",
      "Batch management",
      "Certifications",
      "AI-powered insights",
      "Compliance reporting",
    ],
    cta: "View Case Study →",
  },
  {
    name: "Kavio",
    tag: "Complete School Management Platform",
    description:
      "An all-in-one platform for schools to manage academics, finances, staff, communication, and student records from a single system.",
    highlights: [
      "Student Information System",
      "Fees & Payments",
      "Attendance",
      "Exams",
      "Parent Portal",
      "Reporting",
    ],
    cta: "View Case Study →",
  },
];

const services = [
  {
    title: "Enterprise Software Development",
    detail: "Custom web platforms designed around your organization's workflows.",
  },
  {
    title: "Digital Transformation",
    detail: "Replacing spreadsheets and manual processes with scalable digital systems.",
  },
  {
    title: "API & Systems Integration",
    detail: "Connecting existing software to eliminate data silos.",
  },
  {
    title: "Cloud Infrastructure",
    detail: "Deployment, scaling, monitoring, and cloud-native architectures.",
  },
  {
    title: "Product Engineering",
    detail: "Helping founders and organizations bring software products from concept to production.",
  },
];

const reasons = [
  {
    title: "We Understand Operations",
    detail: "We spend time understanding how businesses actually work before writing code.",
  },
  {
    title: "Built for Growth",
    detail: "Our software is designed to scale as your business grows.",
  },
  {
    title: "API First",
    detail:
      "Integration isn't an afterthought. Every platform is built with modern APIs and future extensibility in mind.",
  },
  {
    title: "Secure by Design",
    detail:
      "Security, authentication, permissions, and data integrity are considered from day one.",
  },
  {
    title: "Long-Term Partnership",
    detail: "We build software that continues evolving alongside your business.",
  },
];

const process = [
  { step: "1", title: "Understand the Problem", detail: "We learn your workflows before proposing technology." },
  {
    step: "2",
    title: "Design the Solution",
    detail: "We create systems that fit your operations - not the other way around.",
  },
  { step: "3", title: "Build", detail: "Modern engineering practices with scalable architecture." },
  { step: "4", title: "Launch", detail: "Deployment, onboarding, documentation, and training." },
  { step: "5", title: "Improve", detail: "Continuous updates based on real-world feedback." },
];

const faq = [
  {
    question: "What industries do you serve?",
    answer:
      "Retail, agriculture, education, healthcare, logistics, finance, and other organizations seeking operational efficiency through technology.",
  },
  {
    question: "Do you build custom software?",
    answer:
      "Yes. Alongside our products, we develop custom enterprise systems where off-the-shelf software isn't enough.",
  },
  {
    question: "Can your products integrate with existing systems?",
    answer: "Absolutely. API-first design is one of our engineering principles.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer implementation assistance, maintenance, updates, and long-term product support.",
  },
  {
    question: "Are your products cloud-based?",
    answer:
      "Yes, with deployment options that can also support private infrastructure where required.",
  },
];

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <header className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-anvil-blue">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-anvil-navy sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg leading-8 text-anvil-slate">{subtitle}</p> : null}
    </header>
  );
}

export default function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-anvil-border bg-linear-to-b from-anvil-soft to-white">
        <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-anvil-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="mx-auto w-full max-w-6xl px-6 py-40 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-anvil-blue">Forged Digital Products</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-anvil-navy sm:text-5xl lg:text-6xl">
              Software Forged to Solve Real Business Problems.
            </h1>
            <p className="mt-6 text-lg leading-8 text-anvil-slate">
              Anvil Digital Innovations builds modern software products that help organizations operate more efficiently, make better decisions, and scale with confidence.
             From retail and agriculture to education and enterprise operations, we create technology that delivers measurable business outcomes.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#products"
                className="rounded-full border border-anvil-accent-blue bg-anvil-accent-blue hover:bg-anvil-navy px-6 py-3 text-sm font-semibold font-display text-white transition hover:border-anvil-blue"
              >
                Explore Our Products
              </a>
              <a
                href="#contact"
                className="rounded-full border border-anvil-border bg-white px-6 py-3 text-sm font-semibold font-display text-anvil-navy transition hover:border-anvil-blue/40 hover:bg-anvil-sky"
              >
                Talk to Us
              </a>
            </div>

            <p className="mt-8 text-sm text-anvil-slate">Forged by Anvil. Built for the real world.</p>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-anvil-border bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="About Anvil"
            title="We forge software that businesses can depend on."
          />
          
          <div className="mt-10  text-anvil-slate">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-anvil-blue">
              Every great tool begins in the forge.
            </p>

            <div className="mt-6 xl:flex items-start gap-x-5 justify-between">
              <div className="w-full ">
                <div>
                  <h3 className="font-display text-2xl font-bold text-anvil-navy">Story</h3>
                  <p className="mt-3 text-md leading-8">
                    Anvil Digital Innovations was founded with a simple belief: 
                    The best software isn&apos;t the one with the longest feature list or flashiest demo - It&apos;s the one that quietly solves important problems every single day.
                  </p>
                  <p className="mt-4 text-md leading-8">
                    Our focus is building technology that helps organizations operate more efficiently, make better decisions, and grow sustainably.
                  </p>
                  <p className="mt-4 text-md leading-8">
                    From retail operations and agricultural traceability to education and enterprise management, we create software that improves the way businesses work.
                  </p>
                </div>

              </div>

              <div className="w-full xl:px-6 mt-10 xl:mt-0">
                <div className="">
                  <article className="">
                    <h4 className="font-display text-xl font-bold text-anvil-navy">Mission</h4>
                    <p className="mt-3 text-sm leading-7">
                      To build practical digital products that solve meaningful operational challenges.
                    </p>
                  </article>
                  <article className="mt-4">
                    <h4 className="font-display text-xl font-bold text-anvil-navy">Vision</h4>
                    <p className="mt-3 text-sm leading-7">
                      To become one of Africa&apos;s leading product engineering companies, creating software infrastructure that powers businesses across industries.
                    </p>
                  </article>
                  
                </div>
              </div>

            </div>
            <h3 className="font-display text-xl mt-4 font-bold text-anvil-navy">Values</h3>
              <div className="mt-6 space-y-4 grid md:grid-cols-2 xl:grid-cols-5 gap-6">
                <div>
                  <p className="font-semibold text-anvil-navy">Practicality</p>
                  <p className="mt-1 text-sm leading-7">Technology should solve real problems.</p>
                </div>
                <div>
                  <p className="font-semibold text-anvil-navy">Craftsmanship</p>
                  <p className="mt-1 text-sm leading-7">Every product is engineered with care.</p>
                </div>
                <div>
                  <p className="font-semibold text-anvil-navy">Reliability</p>
                  <p className="mt-1 text-sm leading-7">Businesses should be able to depend on their software.</p>
                </div>
                <div>
                  <p className="font-semibold text-anvil-navy">Innovation</p>
                  <p className="mt-1 text-sm leading-7">Not innovation for attention-but innovation with purpose.</p>
                </div>
                <div>
                  <p className="font-semibold text-anvil-navy">Partnership</p>
                  <p className="mt-1 text-sm leading-7">We succeed when our customers succeed.</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section id="products" className="border-b border-anvil-border bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Products Forged by Anvil"
            title="Industry-focused software built on shared engineering principles."
            subtitle="Our products are designed to solve industry-specific challenges while sharing the same engineering principles: Simplicity, Reliability, Security, Scalability, and Extensibility."
          />

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-anvil-blue">Engineering Principles</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Simplicity", "Reliability", "Security", "Scalability", "Extensibility"].map((principle) => (
                <li
                  key={principle}
                  className="rounded-full border border-anvil-border bg-white px-3 py-1 text-xs font-semibold text-anvil-slate"
                >
                  {principle}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-7 text-anvil-slate">
              Built for operations, not demos. Every product starts with real field challenges and is engineered for measurable outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {productCards.map((product) => (
              <article
                key={product.name}
                className="flex h-full flex-col rounded-2xl transition hover:-translate-y-1"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-anvil-blue">{product.name}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-anvil-navy">{product.tag}</h3>
                <div className="h-inherit xl:h-42.5">
                  <p className="mt-4 text-sm leading-7 text-anvil-slate">{product.description}</p>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-anvil-border bg-anvil-soft px-3 py-1 text-xs font-semibold text-anvil-slate"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-8 text-sm font-semibold text-anvil-blue">
                  {product.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-anvil-border bg-anvil-soft">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading
            eyebrow="Beyond Products"
            title="We also build custom systems where long-term value can be created."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border-anvil-border bg-white p-6">
                <h3 className="font-display text-xl font-bold text-anvil-navy">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-anvil-slate">{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Why Anvil" title="Why Organizations Choose Anvil" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-2xl border border-anvil-border p-6">
                <h3 className="font-display text-xl font-bold text-anvil-navy">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-anvil-slate">{reason.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-anvil-border bg-anvil-soft">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Process" title="How We Work" />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {process.map((item, itemIndex) => (
              <li key={itemIndex} className="rounded-lg bg-white/80 p-4 relative">
                <p className="font-display text-2xl font-bold text-anvil-blue">{item.step}</p>
                {itemIndex < process.length - 1 &&<ArrowNarrowIcon className="w-6 h-6 absolute text-anvil-slate/50 -right-3 top-5" />}
                <h3 className="mt-3 font-display text-lg font-bold text-anvil-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-anvil-slate">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-anvil-border bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="Built Through Real Business Experience" title="Proof through practical outcomes." />
          <div className="mt-8 rounded-3xl border border-anvil-border bg-anvil-soft p-8">
            <p className="max-w-4xl text-lg leading-8 text-anvil-slate">
              Every Anvil product began by solving practical operational challenges - from inventory management and retail operations to agricultural traceability and enterprise workflows. We believe software should prove its value in everyday use before it&apos;s called successful.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="border-b border-anvil-border bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="mt-10 space-y-4">
            {faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-anvil-border bg-anvil-soft px-5 py-4">
                <summary className="cursor-pointer list-none text-base font-semibold text-anvil-navy">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-anvil-slate">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-r from-anvil-navy to-anvil-blue text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-xl border-white/20 bg-white/5 p-8 sm:p-10">
            {/* <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-100">Final CTA</p> */}
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              Ready to Build Better Software?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100">
              Whether you&apos;re looking for a proven product or a custom solution, we&apos;d love to learn about your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full font-display border border-white bg-white px-6 py-3 text-sm font-semibold text-anvil-navy transition hover:bg-transparent hover:text-white"
              >
                Schedule a Conversation
              </a>
              <a
                href="#products"
                className="rounded-full font-display border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
