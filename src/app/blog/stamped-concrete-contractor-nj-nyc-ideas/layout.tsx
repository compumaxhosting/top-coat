import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url = "https://www.topcoat-llc.com/blog/stamped-concrete-contractor-nj-nyc-ideas";
const image = "/Images/stamped-concrete-contractor-nj-nyc-ideas.webp";
const title = "Stamped Concrete Contractor Wayne NJ | Driveway Ideas";
const description =
  "Find a trusted Stamped Concrete Contractor Wayne NJ for driveways, patios and walkways. Explore stamped concrete ideas for NJ & NYC homes and businesses.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Stamped Concrete Contractor Wayne NJ",
    "stamped concrete NJ",
    "stamped concrete NYC",
    "stamped driveways Wayne NJ",
    "decorative concrete Wayne New Jersey",
    "concrete patio contractor",
    "custom stamped concrete",
    "patterned concrete installation",
    "concrete walkway installation",
    "decorative driveway installation",
    "NJ stamped concrete company",
  ],
  authors: [{ name: "TopCoat Artistry LLC" }],
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    title,
    description:
      "Explore stamped concrete driveway, patio and walkway ideas for Wayne, NJ, North Jersey and NYC. Learn about patterns, benefits, costs and installation.",
    url,
    siteName: "TopCoat Artistry LLC",
    images: [{ url: image, alt: "Stamped concrete driveway, patio and walkway ideas in NJ and NYC" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Explore stamped concrete driveway, patio and walkway ideas for Wayne, NJ, North Jersey and NYC.",
    images: [image],
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = { themeColor: "#ffffff" };

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Stamped Concrete Contractor NJ & NYC: Driveway, Patio & Walkway Ideas",
  description,
  image,
  author: { "@type": "Organization", name: "TopCoat Artistry LLC" },
  publisher: { "@type": "Organization", name: "TopCoat Artistry LLC" },
  datePublished: "2026-08-12",
  dateModified: "2026-08-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
};

export default function StampedConcreteBlogLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}
