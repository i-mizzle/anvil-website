import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://anvildigitalinnovations.com";
const siteName = "Anvil Digital Innovations";
const twitterHandle = "@anvildigital";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anvil Digital Innovations | Enterprise Software Development",
    template: "%s | Anvil Digital Innovations",
  },
  description:
    "Anvil Digital Innovations builds practical software products and custom systems for real business operations. Enterprise software development, digital transformation, and cloud infrastructure.",
  keywords: [
    "enterprise software development",
    "custom software",
    "digital transformation",
    "cloud infrastructure",
    "business software",
    "software products",
    "API integration",
    "software engineering",
  ],
  authors: [{ name: "Anvil Digital Innovations" }],
  creator: "Anvil Digital Innovations",
  publisher: "Anvil Digital Innovations",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Anvil Digital Innovations | Enterprise Software Development",
    description:
      "Build practical software products and custom systems for real business operations.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Anvil Digital Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anvil Digital Innovations",
    description:
      "Build practical software products and custom systems for real business operations.",
    creator: twitterHandle,
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string = "/",
  keywords?: string[],
  imageUrl?: string
): Metadata {
  const pageUrl = `${siteUrl}${path}`;
  const ogImage = imageUrl || `${siteUrl}/og-image.jpg`;

  return {
    ...baseMetadata,
    title,
    description,
    keywords: keywords
      ? [...keywords, ...(baseMetadata.keywords as string[])]
      : baseMetadata.keywords,
    openGraph: {
      ...baseMetadata.openGraph,
      type: "website",
      url: pageUrl,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export function createProductMetadata(
  productName: string,
  description: string,
  path: string,
  features: string[],
  imageUrl?: string
): Metadata {
  const title = `${productName} | Anvil Digital Innovations`;
  const keywords = [
    `${productName.toLowerCase()}`,
    ...features.map((f) => f.toLowerCase()),
    "case study",
    "enterprise software",
  ];

  return createPageMetadata(title, description, path, keywords, imageUrl);
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Anvil Digital Innovations builds practical software products and custom systems for real business operations.",
  sameAs: [
    "https://twitter.com/anvildigital",
    "https://linkedin.com/company/anvil-digital-innovations",
  ],
  contact: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@anvildigitalinnovations.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressCountry: "NG",
  },
};

export const productSchema = (
  productName: string,
  description: string,
  features: string[]
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: productName,
  description: description,
  brand: {
    "@type": "Brand",
    name: siteName,
  },
  manufacturer: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "100",
  },
  features: features,
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.url}`,
  })),
});
