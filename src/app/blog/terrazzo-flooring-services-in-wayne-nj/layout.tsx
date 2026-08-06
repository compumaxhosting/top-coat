import React from "react";
import type { Metadata, Viewport } from "next";

const title = "Terrazzo Flooring Services in Wayne NJ | Complete Guide";

const description =
  "Explore terrazzo flooring services in Wayne & North Jersey. Learn costs, benefits, installation, and expert tips for long-lasting floors.";

const canonical =
  "https://www.topcoat-llc.com/blog/terrazzo-flooring-services-in-wayne-nj";

const image = "https://www.topcoat-llc.com/Images/terrazzo-interior.webp";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: {
    absolute: title,
  },

  description,

  keywords: [
    "Terrazzo Flooring Services in Wayne NJ",
    "Terrazzo flooring North Jersey",
    "Terrazzo floor installation Wayne NJ",
    "Polished terrazzo floors NJ",
    "Commercial terrazzo flooring NJ",
    "Terrazzo repair and restoration NJ",
    "Epoxy terrazzo flooring services",
    "Cost of terrazzo flooring NJ",
    "Terrazzo contractors near Wayne NJ",
    "Custom terrazzo designs NJ",
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
        alt: "Terrazzo Flooring Services in Wayne NJ",
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

  datePublished: "2026-08-06T00:00:00-04:00",

  dateModified: "2026-08-06T00:00:00-04:00",

  inLanguage: "en-US",

  articleSection: "Terrazzo Flooring",

  keywords: [
    "Terrazzo Flooring Services in Wayne NJ",
    "Terrazzo flooring North Jersey",
    "Terrazzo floor installation Wayne NJ",
    "Polished terrazzo floors NJ",
    "Commercial terrazzo flooring NJ",
    "Terrazzo repair and restoration NJ",
    "Epoxy terrazzo flooring services",
    "Cost of terrazzo flooring NJ",
    "Terrazzo contractors near Wayne NJ",
    "Custom terrazzo designs NJ",
  ],

  isAccessibleForFree: true,
};

export default function TerrazzoFlooringBlogLayout({
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
