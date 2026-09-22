import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
                name: "TopCoat Artistry LLC",
                image: "https://www.topcoat-llc.com/Images/building-facade.webp",
                "@id": "https://www.topcoat-llc.com/services/building-facade-contractors-wayne-nj",
                url: "https://www.topcoat-llc.com/services/building-facade-contractors-wayne-nj",
                telephone: "+1-201-315-2633",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "86 Lackawanna Ave, Suite 215",
                  addressLocality: "Woodland Park",
                  addressRegion: "NJ",
                  postalCode: "07424",
                  addressCountry: "US",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 40.8876,
                  longitude: -74.2576,
                },
                areaServed: [
                  { "@type": "City", name: "Wayne" },
                  { "@type": "City", name: "Woodland Park" },
                  { "@type": "City", name: "Newark" },
                  { "@type": "City", name: "Paterson" },
                  { "@type": "City", name: "Jersey City" },
                  { "@type": "City", name: "Clifton" },
                  { "@type": "AdministrativeArea", name: "Passaic County" },
                  { "@type": "AdministrativeArea", name: "Bergen County" },
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Building Facade Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Building Facade Restoration",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Facade Waterproofing",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Commercial Masonry Restoration",
                      },
                    },
                  ],
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is building facade restoration?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Building facade restoration involves repairing, strengthening, and preserving a building's exterior systems to improve safety, appearance, and durability.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much does facade repair cost in Wayne NJ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Costs vary depending on building size, accessibility, material type, and the extent of damage. A professional inspection is the best way to determine project pricing.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why is facade waterproofing important?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Waterproofing prevents moisture penetration, reduces deterioration, protects structural components, and extends building lifespan.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How often should commercial facades be inspected?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Most commercial buildings should be professionally inspected every 3 to 5 years, or sooner if signs of deterioration are present.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}