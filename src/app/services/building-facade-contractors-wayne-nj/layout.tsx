import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Facade Contractors Wayne NJ | Facade Restoration & Repair | Topcoat LLC",
  description: "Expert Building Facade Contractors Wayne NJ providing facade restoration, waterproofing, masonry repair & building envelope services.",
  keywords: [
    "Building Facade Contractors Wayne NJ",
    "Facade Restoration Wayne NJ",
    "Commercial Facade Repair Wayne NJ",
    "Building Envelope Contractors Wayne NJ",
    "Exterior Wall Restoration Wayne NJ",
    "Brick Facade Repair Wayne NJ",
    "Facade Waterproofing Wayne NJ",
    "Commercial Masonry Restoration Wayne NJ",
    "Building Facade Inspection Wayne NJ",
    "Structural Facade Repair Wayne NJ",
    "Building Facade Contractors Passaic County NJ",
    "Building Facade Contractors Totowa NJ",
    "Building Facade Contractors Paterson NJ",
    "Building Facade Contractors Fairfield NJ",
    "Building Facade Contractors Little Falls NJ",
    "Building Facade Contractors North Jersey"
  ],
  authors: [{ name: "Topcoat LLC" }],
  alternates: {
    canonical: "https://www.topcoat-llc.com/services/building-facade-contractors-wayne-nj",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Building Facade Contractors Wayne NJ | Facade Restoration & Repair",
    description: "Professional facade restoration, commercial facade repair, waterproofing, masonry restoration and building envelope services in Wayne NJ.",
    url: "https://www.topcoat-llc.com/services/building-facade-contractors-wayne-nj",
    siteName: "Topcoat LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/building-facade.webp",
        alt: "Building Facade Contractors Wayne NJ - Facade Restoration and Exterior Wall Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Facade Contractors Wayne NJ | Topcoat LLC",
    description: "Trusted facade restoration, masonry repair and building envelope contractors serving Wayne NJ and North Jersey.",
    images: ["https://www.topcoat-llc.com/Images/building-facade.webp"],
  },
  referrer: "strict-origin-when-cross-origin",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}