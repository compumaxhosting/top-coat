import React from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Building Facade Solutions in New Jersey | Durable & Modern Exteriors",
  description:
    "Professional building facade solutions in New Jersey. Improve durability, energy efficiency, design, and curb appeal with expert exterior services.",
  keywords: [
    "Building Facade Solutions in New Jersey",
    "facade contractors NJ",
    "exterior building renovation",
    "commercial facade services",
    "facade restoration",
    "building envelope systems",
    "energy efficient facades",
    "exterior cladding New Jersey",
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
      "https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "Building Facade Solutions NJ",
  },
  openGraph: {
    type: "article",
    title: "Building Facade Solutions in New Jersey",
    description:
      "Professional building facade solutions in New Jersey. Improve durability, energy efficiency, design, and curb appeal with expert exterior services.",
    url: "https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/building-facade-blog.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Facade Solutions in New Jersey",
    description:
      "Professional building facade solutions in New Jersey. Improve durability, energy efficiency, design, and curb appeal with expert exterior services.",
    images: ["https://www.topcoat-llc.com/Images/building-facade-blog.webp"],
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
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey/#blogposting",
      headline: "Building Facade Solutions in New Jersey",
      description:
        "Professional building facade solutions in New Jersey. Improve durability, energy efficiency, design, and curb appeal with expert exterior services.",
      url: "https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey",
      image: "https://www.topcoat-llc.com/Images/building-facade-blog.webp",
      author: {
        "@type": "Organization",
        "@id": "https://www.topcoat-llc.com/#organization",
        name: "TopCoat Artistry LLC",
        url: "https://www.topcoat-llc.com/",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.topcoat-llc.com/#organization",
        name: "TopCoat Artistry LLC",
        url: "https://www.topcoat-llc.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.topcoat-llc.com/Images/TopCoat-white-logo.webp",
        },
      },
      datePublished: "2026-06-10",
      dateModified: "2026-06-10",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.topcoat-llc.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.topcoat-llc.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Building Facade Solutions in New Jersey",
          item: "https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey",
        },
      ],
    },
  ],
};

export default function BuildingFacadeBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>{children}</main>
    </>
  );
}
