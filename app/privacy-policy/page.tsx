import { SiteLayout } from "@/components/site-layout";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "Anvil Digital Innovations Ltd (\"we\", \"us\", \"our\") is a software company that builds digital products and platforms, including but not limited to Elevana, AgroTrace, and our School Management ERP system.",
      "This Privacy Policy explains how we collect, use, store, and protect your information when you interact with our websites, applications, and services (collectively, the \"Services\").",
      "By using our Services, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: ["We collect information in the following ways:"],
    subsections: [
      {
        title: "2.1 Information You Provide Directly",
        items: [
          "Full name",
          "Email address",
          "Phone number",
          "Company or organization details",
          "Login credentials",
          "Payment or billing information (processed securely via third-party providers)",
          "Any data you submit into our systems (e.g., inventory data, student records, agricultural batch data)",
        ],
      },
      {
        title: "2.2 Information Collected Automatically",
        items: [
          "IP address",
          "Device type and browser information",
          "Log data (time of access, pages viewed, actions performed)",
          "Usage analytics",
          "Cookies and similar tracking technologies",
        ],
      },
      {
        title: "2.3 Product-Specific Data",
        intro: "Depending on the product you use:",
        items: [
          "Elevana: sales transactions, inventory data, branch activity",
          "AgroTrace: batch records, supply chain events, certification data",
          "School ERP: student records, academic data, attendance, and administrative information",
        ],
        outro: "We only process this data on behalf of our customers.",
      },
    ],
  },
  {
    title: "3. How We Use Your Information",
    items: [
      "Provide and maintain our Services",
      "Authenticate users and secure accounts",
      "Process transactions and subscriptions",
      "Improve system performance and user experience",
      "Generate analytics and reporting insights",
      "Provide customer support",
      "Send important service updates and notifications",
      "Comply with legal obligations",
    ],
  },
  {
    title: "4. Data Ownership",
    body: [
      "We respect that you retain ownership of all data you input into our systems.",
      "Anvil Digital Innovations Ltd acts as a data processor for customer-generated data and does not claim ownership over it.",
    ],
  },
  {
    title: "5. Data Sharing",
    body: ["We do not sell your personal data.", "We may share information only in the following cases:"],
    items: [
      "With trusted service providers (e.g., cloud hosting, payment processors, email services)",
      "When required by law or legal process",
      "To protect the security, integrity, or rights of our systems and users",
      "With your explicit consent",
    ],
  },
  {
    title: "6. Data Storage and Security",
    body: ["We implement appropriate technical and organizational measures to protect your data, including:"],
    items: [
      "Encryption in transit and at rest (where applicable)",
      "Secure authentication systems",
      "Access control and role-based permissions",
      "Regular system monitoring and updates",
    ],
    outro: "However, no system is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "7. Data Retention",
    body: ["We retain personal and operational data only as long as necessary to:"],
    items: [
      "Provide our Services",
      "Comply with legal obligations",
      "Resolve disputes",
      "Enforce agreements",
    ],
    outro: "You may request deletion of your data, subject to legal and operational constraints.",
  },
  {
    title: "8. Cookies and Tracking Technologies",
    body: ["We use cookies and similar technologies to:"],
    items: [
      "Keep users logged in",
      "Understand usage patterns",
      "Improve platform performance",
    ],
    outro: "You can disable cookies in your browser settings, but some features may not function properly.",
  },
  {
    title: "9. Third-Party Services",
    body: ["Our Services may integrate with third-party providers such as:"],
    items: [
      "Cloud infrastructure providers",
      "Payment processors",
      "Analytics tools",
      "Communication services (email/SMS providers)",
    ],
    outro: "These providers have their own privacy policies governing how they handle your data.",
  },
  {
    title: "10. International Data Transfers",
    body: [
      "If you access our Services outside the country where our servers are located, your data may be transferred and processed in different jurisdictions.",
      "We take reasonable steps to ensure such transfers are secure and compliant with applicable laws.",
    ],
  },
  {
    title: "11. Your Rights",
    body: ["Depending on your location, you may have rights to:"],
    items: [
      "Access your personal data",
      "Request correction of inaccurate data",
      "Request deletion of your data",
      "Restrict or object to processing",
      "Request data portability",
    ],
    outro: "To exercise these rights, contact us using the details below.",
  },
  {
    title: "12. Children’s Privacy",
    body: [
      "Our Services are not intended for children under the age of 13 (or applicable minimum age in your jurisdiction). We do not knowingly collect personal data from children.",
    ],
  },
  {
    title: "13. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the Effective Date and notify users where appropriate.",
    ],
  },
  {
    title: "14. Contact Us",
    body: ["If you have questions about this Privacy Policy or how your data is handled, you can contact us at:"],
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-anvil-border bg-linear-to-b from-anvil-soft to-white">
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-anvil-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="mx-auto w-full max-w-4xl px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-anvil-blue">Privacy Policy</p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-anvil-navy sm:text-5xl">
            Anvil Digital Innovations Ltd
          </h1>
          <p className="mt-5 text-lg leading-8 text-anvil-slate">Effective Date: June 2026</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-20 lg:px-8">
          <div className="space-y-14 text-anvil-slate">
            {sections.map((section) => (
              <section key={section.title} className="space-y-5">
                <h2 className="font-display text-2xl font-bold tracking-tight text-anvil-navy">{section.title}</h2>

                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8">
                    {paragraph}
                  </p>
                ))}

                {section.items ? (
                  <ul className="list-disc space-y-2 pl-6 text-base leading-8">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {section.subsections ? (
                  <div className="space-y-8">
                    {section.subsections.map((subsection) => (
                      <div key={subsection.title} className="space-y-3">
                        <h3 className="font-display text-xl font-bold tracking-tight text-anvil-navy">
                          {subsection.title}
                        </h3>
                        {subsection.intro ? (
                          <p className="text-base leading-8">{subsection.intro}</p>
                        ) : null}
                        {subsection.items ? (
                          <ul className="list-disc space-y-2 pl-6 text-base leading-8">
                            {subsection.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : null}
                        {subsection.outro ? <p className="text-base leading-8">{subsection.outro}</p> : null}
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.outro ? <p className="text-base leading-8">{section.outro}</p> : null}

                {section.contact ? (
                  <div className="space-y-2 text-base leading-8 text-anvil-navy">
                    <p className="font-semibold">Anvil Digital Innovations Ltd</p>
                    <p>
                      Email:{" "}
                      <a href="mailto:hello@anvil.com.ng" className="text-anvil-blue transition hover:text-anvil-navy">
                        hello@anvil.com.ng
                      </a>
                    </p>
                    <p>
                      Website:{" "}
                      <a href="https://anvil.com.ng" className="text-anvil-blue transition hover:text-anvil-navy">
                        https://anvil.com.ng
                      </a>
                    </p>
                  </div>
                ) : null}
              </section>
            ))}

            <section className="space-y-4 rounded-3xl border border-anvil-border bg-anvil-soft p-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-anvil-navy">15. “Forged by Anvil”</h2>
              <p className="text-base leading-8">
                All data protection principles across our systems follow a simple philosophy:
              </p>
              <blockquote className="border-l-4 border-anvil-blue pl-5 font-display text-xl font-semibold leading-tight text-anvil-navy">
                Build software that respects the people who use it.
              </blockquote>
              <p className="text-base leading-8 font-semibold text-anvil-navy">Forged by Anvil.</p>
            </section>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}