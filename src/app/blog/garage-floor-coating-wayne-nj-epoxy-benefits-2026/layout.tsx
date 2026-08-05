import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url =
  "/blog/garage-floor-coating-wayne-nj-epoxy-benefits-2026";
const image = "/Images/garage-floor-coating-wayne-nj.webp";
const title = "Garage Floor Coating Wayne NJ | Epoxy Garage Flooring Experts";
const description =
  "Upgrade your garage with Garage Floor Coating Wayne NJ. Durable epoxy and polyaspartic flooring for homes and businesses in Wayne & Bergen County.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Garage Floor Coating Wayne NJ",
    "Epoxy Garage Flooring Wayne",
    "Polyaspartic Garage Coatings",
    "Concrete Floor Resurfacing",
    "Residential Garage Flooring",
    "Commercial Garage Coatings",
    "Decorative Concrete Finishes",
    "Flake Epoxy Systems",
    "Metallic Epoxy Floors",
    "Industrial Floor Protection",
    "Concrete Crack Repair",
    "Slip Resistant Surfaces",
    "Chemical Resistant Flooring",
    "Durable Concrete Coatings",
    "Professional Epoxy Installers",
    "Custom Garage Finishes",
    "Concrete Surface Preparation",
    "Showroom Garage Floors",
    "High Performance Flooring",
    "Moisture Resistant Coatings",
    "Garage Floor Restoration",
    "Concrete Sealing Services",
    "Wayne Epoxy Contractors",
    "Long Lasting Floor Finish",
    "Premium Garage Floor Solutions",
  ],
  authors: [{ name: "TopCoat Artistry LLC" }],
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    title,
    description:
      "Discover premium Garage Floor Coating Wayne NJ with durable epoxy and polyaspartic systems for residential and commercial garages.",
    url,
    siteName: "TopCoat Artistry LLC",
    images: [{ url: image, alt: "Garage Floor Coating Wayne NJ by TopCoat Artistry LLC" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Professional epoxy and polyaspartic garage floor coatings in Wayne, NJ. Durable, attractive, and built to last.",
    images: [image],
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = { themeColor: "#ffffff" };

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Garage Floor Coating Wayne NJ: 15 Reasons Homeowners Are Upgrading to Epoxy in 2026",
  description,
  image,
  author: { "@type": "Organization", name: "TopCoat Artistry LLC" },
  publisher: { "@type": "Organization", name: "TopCoat Artistry LLC" },
  datePublished: "2026-08-05",
  dateModified: "2026-08-05",
  mainEntityOfPage: { "@type": "WebPage", "@id": url },
};

export default function GarageFloorCoatingWayneLayout({
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
