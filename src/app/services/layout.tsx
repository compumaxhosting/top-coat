import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "Epoxy Flooring & Concrete Services NJ",

  description:
    "Explore professional epoxy flooring, stamped concrete, and terrazzo services by TopCoat Artistry LLC. Premium surface solutions in Wayne, Newark, and Jersey City, NJ.",

  keywords: [
    "Epoxy Flooring Services NJ",
    "Garage Floor Coating Newark",
    "Stamped Concrete Paterson",
    "Terrazzo Installation Jersey City",
    "Decorative Concrete Wayne NJ",
    "Commercial Flooring NJ",
  ],

  authors: [{ name: "TopCoat Artistry LLC" }],
  creator: "TopCoat Artistry LLC",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    type: "website",
    url: "https://www.topcoat-llc.com/services",
    title: "Top-Rated Epoxy & Decorative Concrete Services in New Jersey",
    description:
      "From high-end garage epoxy to custom stamped concrete, TopCoat Artistry LLC provides durable, artistic flooring solutions for NJ homes and businesses.",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/Hero-section.webp",
        width: 1200,
        height: 630,
        alt: "Epoxy and decorative concrete services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NJ's Best Epoxy & Stamped Concrete Services",
    description:
      "Transform your space with TopCoat Artistry LLC. Serving Wayne, Newark, and Jersey City with 20+ years of flooring expertise.",
    images: ["https://www.topcoat-llc.com/Images/Hero-section.webp"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
