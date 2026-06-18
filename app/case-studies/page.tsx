import { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata(
  "Case Studies | Anvil Digital Innovations",
  "Explore our software development case studies. See how we built Elevana POS, AgroTrace agricultural traceability, and Acava school management systems.",
  "/case-studies",
  [
    "case studies",
    "software development",
    "project portfolio",
    "elevana case study",
    "agrotrace case study",
    "acava case study",
    "enterprise solutions",
  ]
);

const CaseStudies = () => {
  return (
    <div>page</div>
  )
}

export default CaseStudies