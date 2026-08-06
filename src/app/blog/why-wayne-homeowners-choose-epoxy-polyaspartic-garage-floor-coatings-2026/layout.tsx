import React from "react";
import type { Metadata, Viewport } from "next";

const title = "Why Wayne Homeowners Choose Epoxy Garage Floor Coatings in 2026";

const description =
  "Discover why homeowners in Wayne, NJ are choosing epoxy and polyaspartic garage floor coatings in 2026 for durable, attractive, and long-lasting concrete floor protection.";

const canonical =
  "https://www.topcoat-llc.com/blog/why-wayne-homeowners-choose-epoxy-polyaspartic-garage-floor-coatings-2026";

const image = "https://www.topcoat-llc.com/Images/garage-floor.webp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: {
    absolute: title,
  },

  description,

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

  authors: [
    {
      name: "TopCoat Artistry LLC",
    },
  ],

  creator: "TopCoat Artistry LLC",

  publisher: "TopCoat Artistry LLC",

  category: "Home Improvement",

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
    canonical,
  },

  openGraph: {
    type: "article",
    url: canonical,
    title,
    description,
    siteName: "TopCoat Artistry LLC",

    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Epoxy Garage Floor Coating in Wayne NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },

  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  headline: title,

  description,

  url: canonical,

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonical,
  },

  image: {
    "@type": "ImageObject",
    url: image,
    width: 1200,
    height: 630,
  },

  author: {
    "@type": "Organization",
    name: "TopCoat Artistry LLC",
  },

  publisher: {
    "@type": "Organization",
    name: "TopCoat Artistry LLC",
    logo: {
      "@type": "ImageObject",
      url: "https://www.topcoat-llc.com/Images/logo.webp",
    },
  },

  datePublished: "2026-07-17T00:00:00-04:00",

  dateModified: "2026-07-17T00:00:00-04:00",

  inLanguage: "en-US",

  articleSection: "Garage Floor Coatings",

  keywords: [
    "Garage Floor Coating Wayne NJ",
    "Epoxy Garage Flooring Wayne",
    "Polyaspartic Garage Floors",
    "Concrete Floor Resurfacing",
    "Garage Floor Restoration",
  ],

  isAccessibleForFree: true,
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
