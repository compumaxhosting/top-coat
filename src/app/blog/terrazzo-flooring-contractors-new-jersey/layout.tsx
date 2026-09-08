import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const title =
  "Terrazzo Flooring Contractors in New Jersey | TopCoat Artistry LLC";
const description =
  "Looking for terrazzo flooring contractors in New Jersey? Learn about terrazzo flooring, installation, benefits, designs, and choosing the right contractor.";
const url =
  "https://www.topcoat-llc.com/blog/terrazzo-flooring-contractors-new-jersey";
const image =
  "https://www.topcoat-llc.com/Images/terrazzo-flooring.webp";
const keywords = [
  "terrazzo flooring contractors New Jersey",
  "terrazzo flooring New Jersey",
  "terrazzo floor installation NJ",
  "terrazzo contractors NJ",
  "terrazzo flooring Wayne NJ",
];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords,
  authors: [{ name: "TopCoat Artistry LLC" }],
  creator: "TopCoat Artistry LLC",
  publisher: "TopCoat Artistry LLC",
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    title,
    description,
    url,
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: image,
        alt: "Terrazzo flooring contractors in New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Discover terrazzo flooring benefits, installation options, designs, and tips for choosing contractors in New Jersey.",
    images: [image],
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${url}#blogpost`,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline:
        "Looking for Terrazzo Flooring Contractors in New Jersey? Here’s What You Need to Know",
      description,
      image,
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
          url: "https://www.topcoat-llc.com/Images/logo.webp",
        },
      },
      articleSection: "Terrazzo Flooring",
      keywords: keywords.join(", "),
      about: { "@type": "Thing", name: "Terrazzo Flooring" },
      inLanguage: "en-US",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
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
          item: "https://www.topcoat-llc.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Terrazzo Flooring Contractors in New Jersey",
          item: url,
        },
      ],
    },
  ],
};

export default function TerrazzoContractorsBlogLayout({
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