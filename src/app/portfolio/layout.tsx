import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "Our Portfolio | Epoxy Flooring & Concrete Gallery NJ",

  description:
    "View our portfolio of high-end epoxy flooring, stamped concrete, and terrazzo projects across Wayne, Newark, and Jersey City, NJ. 20+ years of quality craftsmanship.",

  keywords: [
    "Epoxy Flooring Portfolio NJ",
    "Stamped Concrete Gallery",
    "Garage Floor Coating Photos",
    "Terrazzo Project Examples",
    "Decorative Concrete Newark",
    "Wayne NJ Concrete Contractor",
  ],

  authors: [{ name: "TopCoat Artistry LLC" }],
  creator: "TopCoat Artistry LLC",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/portfolio",
  },

  openGraph: {
    type: "website",
    url: "https://www.topcoat-llc.com/portfolio",
    title: "Project Gallery: Premium NJ Epoxy & Decorative Concrete",
    description:
      "See the TopCoat Artistry difference. Browse our gallery of finished epoxy, terrazzo, and stamped concrete projects in Northern New Jersey.",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "/images/portfolio-featured.jpg",
        width: 1200,
        height: 630,
        alt: "Epoxy flooring and decorative concrete portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our NJ Flooring & Concrete Projects | TopCoat Artistry",
    description:
      "High-end surface transformations in Wayne, Newark, and Jersey City. 20+ years of durable, artistic finishes.",
    images: ["/images/portfolio-featured.jpg"],
  },

  other: {
    referrer: "strict-origin-when-cross-origin",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
