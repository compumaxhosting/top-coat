import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url = "https://www.topcoat-llc.com/blog/epoxy-flooring-nyc-homes-businesses";
const image = "/Images/epoxy-flooring-nyc-homes-businesses.webp";
const title = "Epoxy Flooring for NYC Homes & Businesses | TopCoat Artistry";
const description =
  "Discover if epoxy flooring is right for NYC homes and businesses. Explore benefits, costs, durability, installation, and expert NJ flooring solutions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),
  title: { absolute: title },
  description,
  keywords: [
    "epoxy flooring NYC",
    "epoxy flooring New Jersey",
    "epoxy flooring Wayne NJ",
    "commercial epoxy flooring",
    "garage epoxy flooring",
    "epoxy floor coating",
  ],
  authors: [{ name: "TopCoat Artistry LLC" }],
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    title,
    description:
      "Discover if epoxy flooring is right for NYC homes and businesses, including benefits, costs, durability, installation, and maintenance.",
    url,
    siteName: "TopCoat Artistry LLC",
    images: [{ url: image, alt: "Professional epoxy flooring for NYC homes and businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Learn how epoxy flooring benefits NYC and New Jersey homes and businesses, from garages to commercial and industrial spaces.",
    images: [image],
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = { themeColor: "#ffffff" };

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  image: `https://www.topcoat-llc.com${image}`,
  author: { "@type": "Organization", name: "TopCoat Artistry LLC" },
  publisher: { 
    "@type": "Organization", 
    name: "TopCoat Artistry LLC",
    logo: {
      "@type": "ImageObject",
      url: "https://www.topcoat-llc.com/Images/logo.webp",
    }
  },
  datePublished: "2026-08-26",
  dateModified: "2026-08-26",
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
  inLanguage: "en-US",
  articleSection: "Epoxy Flooring",
  keywords: [
    "epoxy flooring NYC",
    "epoxy flooring New Jersey",
    "epoxy flooring Wayne NJ",
    "commercial epoxy flooring",
    "garage epoxy flooring",
    "epoxy floor coating",
  ],
  isAccessibleForFree: true,
};

export default function EpoxyFlooringNYCBlogLayout({
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
