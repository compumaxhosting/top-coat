import React from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Why Wayne Homeowners Choose Epoxy Garage Floor Coatings in 2026",
  description:
    "Discover why homeowners in Wayne, NJ are choosing epoxy and polyaspartic garage floor coatings in 2026 for durable, attractive, and long-lasting concrete floor protection.",
  keywords: [
    "Garage Floor Coating Wayne NJ",
    "Epoxy Garage Flooring Wayne",
    "Concrete Floor Resurfacing",
    "Polyaspartic Floor Systems",
    "Residential Garage Finishes",
    "Commercial Floor Protection",
    "Decorative Concrete Solutions",
    "Industrial Surface Treatments",
    "Basement Floor Coatings",
    "Concrete Sealing Services",
    "Flake Finish Installations",
    "Metallic Epoxy Surfaces",
    "Durable Concrete Restoration",
    "Slip Resistant Flooring",
    "Chemical Resistant Coatings",
    "Custom Concrete Designs",
    "High Performance Flooring",
    "Concrete Crack Repair",
    "Garage Floor Refinishing",
    "Professional Coating Contractors",
    "Moisture Barrier Systems",
    "Premium Floor Finishes",
    "Concrete Surface Preparation",
    "Long Lasting Floor Protection",
    "Decorative Epoxy Installations",
  ],
  authors: [{ name: "TopCoat Artistry LLC" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical:
      "https://www.topcoat-llc.com/blog/why-wayne-homeowners-choose-epoxy-polyaspartic-garage-floor-coatings-2026",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "TopCoat Artistry LLC",
  },
  openGraph: {
    type: "article",
    title: "Why Wayne Homeowners Choose Epoxy Garage Floor Coatings in 2026",
    description:
      "Learn why epoxy and polyaspartic garage floor coatings are the top choice for homeowners in Wayne, NJ, offering durability, style, and long-lasting protection.",
    url: "https://www.topcoat-llc.com/blog/why-wayne-homeowners-choose-epoxy-polyaspartic-garage-floor-coatings-2026",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/assets/images/blog/epoxy-garage-floor-coating-wayne-nj-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Epoxy Garage Floor Coating Wayne NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Wayne Homeowners Choose Epoxy Garage Floor Coatings in 2026",
    description:
      "Explore the benefits of epoxy and polyaspartic garage floor coatings for Wayne, NJ homeowners in 2026.",
    images: [
      "https://www.topcoat-llc.com/assets/images/blog/epoxy-garage-floor-coating-wayne-nj-2026.jpg",
    ],
    site: "@TopCoatArtistry",
  },
  referrer: "strict-origin-when-cross-origin",
  other: {
    "cache-control": "public",
    expires: "Wed, 01 Jan 2030 00:00:00 GMT",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Why Homeowners in Wayne, NJ Are Choosing Epoxy & Polyaspartic Garage Floor Coatings in 2026",
  description:
    "Discover why epoxy and polyaspartic garage floor coatings are becoming the preferred flooring solution for homeowners in Wayne, NJ in 2026.",
  image:
    "https://www.topcoat-llc.com/assets/images/blog/epoxy-garage-floor-coating-wayne-nj-2026.jpg",
  author: {
    "@type": "Organization",
    name: "TopCoat Artistry LLC",
  },
  publisher: {
    "@type": "Organization",
    name: "TopCoat Artistry LLC",
    logo: {
      "@type": "ImageObject",
      url: "https://www.topcoat-llc.com/assets/images/logo.png",
    },
  },
  datePublished: "2026-07-17",
  dateModified: "2026-07-17",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.topcoat-llc.com/blog/why-wayne-homeowners-choose-epoxy-polyaspartic-garage-floor-coatings-2026",
  },
  keywords: [
    "Garage Floor Coating Wayne NJ",
    "Epoxy Garage Flooring Wayne",
    "Polyaspartic Floor Systems",
    "Concrete Floor Resurfacing",
    "Decorative Concrete Solutions",
  ],
  inLanguage: "en-US",
};

export default function GarageFloorCoatingsBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <main>{children}</main>
    </>
  );
}
