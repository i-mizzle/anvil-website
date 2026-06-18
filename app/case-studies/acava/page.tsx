import { Metadata } from "next";
import { CalendlyTrigger } from "@/components/calendly-trigger";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { SiteLayout } from "@/components/site-layout";
import { createProductMetadata } from "@/lib/metadata";

export const metadata: Metadata = createProductMetadata(
  "Acava",
  "Acava is an end-to-end school management system that centralizes admissions, academics, finance, communication, and student lifecycle operations in one unified platform.",
  "/case-studies/acava",
  [
    "school management",
    "school management system",
    "education ERP",
    "student lifecycle management",
    "school admissions software",
    "academic management",
    "fee management system",
    "attendance and assessment",
    "parent and student portal",
    "school analytics dashboard",
    "multi-campus school software",
  ]
);

const roleEnvironments = ["Administrators", "Teachers", "Students", "Parents"];

const institutionTypes = [
  "Primary Schools",
  "Secondary Schools",
  "Private Schools",
  "International Schools",
  "Multi-Campus Institutions",
  "Higher Learning Institutions",
];

const problemPoints = [
  "Fragmented student data across multiple systems",
  "Inefficient admission and onboarding workflows",
  "Lack of real-time visibility into academic and financial performance",
  "Manual fee tracking and reconciliation errors",
  "Poor coordination between staff, parents, and administrators",
  "Limited reporting and decision-making insights",
];

const lifecycleFlow = [
  "Admissions",
  "Academic Structure",
  "Student Management",
  "Assessment",
  "Finance",
  "Graduation",
];

const coreCapabilities = [
  {
    title: "Complete Student Lifecycle Management",
    detail:
      "Manages students from first application through admission, placement, academic tracking, disciplinary records, and graduation or withdrawal.",
  },
  {
    title: "Smart Admissions System",
    detail:
      "Online applications with customizable forms, status tracking, exam scheduling, admission offers, and applicant-to-enrolled conversion.",
  },
  {
    title: "Academic Structure Engine",
    detail:
      "Configures sessions, terms, class structures, class divisions, subject-teacher allocation, timetables, and syllabus management.",
  },
  {
    title: "Attendance, Assessment & Performance Tracking",
    detail:
      "Tracks daily attendance, continuous assessment, grading, student feedback, and academic reporting by student and class.",
  },
  {
    title: "Financial & Fee Management System",
    detail:
      "Supports invoice generation, partial payments, discounts, approvals, wallet-based transactions, Flutterwave integration, and reconciliation reporting.",
  },
  {
    title: "Staff & Administrative Control",
    detail:
      "Provides staff onboarding, department and designation structures, role-based access control, and fine-grained permission management.",
  },
  {
    title: "Parent & Student Portals",
    detail:
      "Delivers real-time academic and financial visibility, document access, notifications, and exeat request and approval workflows.",
  },
  {
    title: "Document & Resource Management",
    detail:
      "Enables document uploads, digital signing, approval workflows, study material distribution, and permission-based access.",
  },
  {
    title: "Inventory & Operational Tracking",
    detail:
      "Monitors assets and inventory with stock tracking, assignment logs, location-based control, and historical movement records.",
  },
  {
    title: "Communication & Automation Layer",
    detail:
      "Runs email and in-app notifications, Slack integrations, queue-based background jobs, and cron-driven operational workflows.",
  },
  {
    title: "Analytics & Dashboards",
    detail:
      "Provides real-time metrics for academics, finance, operations, and parent-facing visibility for stronger decision making.",
  },
];

const architecturePrinciples = [
  "Role-Based Access Control (RBAC) for strict data isolation",
  "Event-driven background processing with queues for emails, logs, and heavy operations",
  "Multi-module architecture separating academics, finance, admissions, and operations",
  "Audit logging for traceability of critical actions",
  "Integration-ready design for payment gateways, email providers, and external tools",
  "Deployment flexibility for single-school use with future multi-tenant scaling",
];

const impactPoints = [
  "Digitized admissions and reduced manual paperwork",
  "Real-time tracking of student performance",
  "Automated fee collection and financial reporting",
  "Improved communication between parents, staff, and administrators",
  "Actionable insights from centralized dashboards",
  "Significant reduction in administrative overhead",
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

export default function AcavaCaseStudyPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-anvil-border bg-linear-to-b from-anvil-soft to-white">
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-anvil-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-40">
          <div>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-anvil-blue">Case Study</p>
              <h1 className="mt-6 font-sans text-4xl font-bold leading-tight tracking-tight text-anvil-navy sm:text-5xl">
                Acava - End-to-End School Management System
              </h1>
              <p className="mt-6 text-lg leading-8 text-anvil-slate">
                A unified platform for admissions, academics, finance, and student lifecycle management.
              </p>
              <p className="mt-4 inline-flex rounded-full border border-anvil-border bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-anvil-blue">
                School Operations, Unified
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <CalendlyTrigger className="rounded-full border border-anvil-accent-blue bg-anvil-accent-blue px-6 py-3 text-sm font-semibold text-white transition hover:border-anvil-blue hover:bg-anvil-navy">
                  Book a Demo
                </CalendlyTrigger>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="OVERVIEW"
            title="Built to Digitize the Full School Lifecycle"
            subtitle="Acava centralizes admissions, academics, finance, communication, and operations in one structured platform for modern schools."
          />

          <p className="mt-8 max-w-4xl text-base leading-8 text-anvil-slate sm:text-lg">
            Acava is a full-scale school management system designed and developed to digitize and centralize academic and administrative workflows from student admission to graduation. Built for multi-role environments, it replaces fragmented tools and manual processes with a single operating system that scales from smaller institutions to multi-campus schools.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-anvil-blue">Role Environments</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {roleEnvironments.map((role, idx) => (
                  <span
                    key={idx}
                    className="inline-flex rounded-full border border-anvil-border bg-white px-4 py-2 text-sm font-medium text-anvil-navy"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-anvil-blue">Deployment Fit</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {institutionTypes.map((institution, idx) => (
                  <span
                    key={idx}
                    className="inline-flex rounded-full border border-anvil-border bg-white px-4 py-2 text-sm font-medium text-anvil-navy"
                  >
                    {institution}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-anvil-soft/40">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="THE PROBLEM"
            title="Disconnected Tools Were Slowing Schools Down"
            subtitle="Most institutions relied on spreadsheets, separate finance tools, manual admissions, and informal communication channels."
          />

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {problemPoints.map((point, idx) => (
              <li key={idx} className="rounded-2xl border border-anvil-border bg-white px-5 py-4 text-sm text-anvil-slate">
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-4xl text-base leading-8 text-anvil-slate sm:text-lg">
            Schools needed a centralized system that could manage the full student lifecycle instead of isolated modules.
          </p>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="THE SOLUTION"
            title="One Continuous, Role-Based School Operating System"
            subtitle="Acava was designed as a modular platform where each department runs on connected data with no duplication and no manual handoff gaps."
          />

          <p className="mt-8 max-w-4xl text-base leading-8 text-anvil-slate sm:text-lg">
            Instead of treating school management as separate systems, Acava models operations as one continuous lifecycle across the institution.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {lifecycleFlow.map((stage, idx) => (
              <span
                key={idx}
                className="inline-flex rounded-full border border-anvil-border bg-white px-4 py-2 text-sm font-medium text-anvil-navy"
              >
                {stage}
              </span>
            ))}

            <span className="inline-flex rounded-full border border-anvil-blue/20 bg-anvil-blue/10 px-4 py-2 text-sm font-semibold text-anvil-blue">
              End-to-End Integration
            </span>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coreCapabilities.map((cap, idx) => (
              <div key={idx} className="rounded-2xl border border-anvil-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-anvil-blue">Capability {idx + 1}</p>
                <h3 className="mt-2 font-semibold text-anvil-navy">{cap.title}</h3>
                <p className="mt-3 text-sm leading-7 text-anvil-slate">{cap.detail}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="ENGINEERING APPROACH"
            title="Modular, API-First, and Automation-Ready"
            subtitle="Acava was engineered for scalability, traceability, and operational reliability across schools with varying complexity."
          />

          <ul className="mt-8 space-y-4">
            {architecturePrinciples.map((principle, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="font-semibold text-anvil-blue">•</span>
                <span className="text-anvil-slate">{principle}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="IMPACT"
            title="From Fragmentation to a Single Source of Truth"
          />

          <ul className="mt-8 space-y-4">
            {impactPoints.map((point, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="font-semibold text-anvil-blue">✓</span>
                <span className="text-anvil-slate">{point}</span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </section>

      <section className="border-b border-anvil-border bg-anvil-soft">
        <RevealOnScroll className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="OUTCOME"
              title="A Complete Operational Backbone for Education"
            />
            <p className="mt-6 text-lg text-anvil-slate">
              Acava is not just a school management tool. It is a complete operational backbone for educational institutions, bringing structure, visibility, and automation to every layer of school administration.
            </p>
            <p className="mt-4 text-lg text-anvil-slate">
              It reflects a shift from traditional school software to a fully integrated education ERP system.
            </p>
            <div className="mt-8">
              <CalendlyTrigger className="rounded-full border border-anvil-accent-blue bg-anvil-accent-blue px-6 py-3 text-sm font-semibold text-white transition hover:border-anvil-blue hover:bg-anvil-navy">
                Schedule an Acava Demo
              </CalendlyTrigger>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </SiteLayout>
  );
}
