import React from "react";
import type { Metadata, Viewport } from "next";

const title =
  "Epoxy Flooring Benefits for Homes & Businesses | TopCoat Artistry LLC";

const description =
  "Discover why epoxy flooring is durable, cost-effective, and ideal for homes and businesses in Wayne & North Jersey. Learn benefits, costs, and uses.";

const canonical =
  "https://www.topcoat-llc.com/blog/epoxy-flooring-benefits-for-homes-businesses";

const image = "https://www.topcoat-llc.com/Images/epoxy-flooring2.webp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: {
    absolute: title,
  },

  description,

  keywords: [
    "Epoxy Flooring",
    "Epoxy flooring benefits",
    "Residential epoxy flooring",
    "Commercial epoxy flooring",
    "Garage epoxy floors",
    "Industrial epoxy flooring",
    "Epoxy floor coating cost",
    "Epoxy flooring in Wayne & North Jersey",
    "Durable flooring solutions",
    "Low maintenance flooring",
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
        alt: title,
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

  datePublished: "",

  dateModified: "",

  inLanguage: "en-US",

  articleSection: "Epoxy Flooring",

  keywords: [
    "Epoxy Flooring",
    "Epoxy flooring benefits",
    "Residential epoxy flooring",
    "Commercial epoxy flooring",
    "Garage epoxy floors",
    "Industrial epoxy flooring",
    "Epoxy floor coating cost",
    "Epoxy flooring in Wayne & North Jersey",
    "Durable flooring solutions",
    "Low maintenance flooring",
  ],

  isAccessibleForFree: true,
};

export default function BlogLayout({
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
