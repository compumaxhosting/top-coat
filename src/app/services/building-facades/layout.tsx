import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "Building Facade Contractors New Jersey | Restoration & Repair | TopCoat Artistry",

  description:
    "TopCoat Artistry LLC: Leading building facade contractors in New Jersey. Expert facade restoration, waterproofing, and exterior renovation in Wayne, Newark, & Jersey City. Protect your building today!",

  keywords: [
    "building facade contractors near me",
    "facade restoration services NJ",
    "facade repair New Jersey",
    "exterior building renovation Wayne",
    "facade waterproofing Newark",
    "TopCoat Artistry LLC",
  ],

  authors: [{ name: "TopCoat Artistry LLC" }],
  creator: "TopCoat Artistry LLC",

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
    canonical: "https://www.topcoat-llc.com/services/building-facades",
  },

  referrer: "strict-origin-when-cross-origin",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "TopCoat Facades",
  },

  openGraph: {
    type: "website",
    url: "https://www.topcoat-llc.com/services/building-facades",
    title: "Expert Building Facade Restoration & Repair Services in NJ",
    description:
      "Industrial-grade facade restoration and waterproofing for commercial properties in Wayne, Newark, and Jersey City. Professional care by TopCoat Artistry LLC.",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/building-facade.webp",
        width: 1200,
        height: 630,
        alt: "Building facade restoration in New Jersey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NJ Building Facade Contractors | Restoration & Waterproofing",
    description:
      "Restore and protect your building exterior with TopCoat Artistry LLC. Serving Wayne, Paterson, and Newark with expert facade repair.",
    images: ["https://www.topcoat-llc.com/Images/building-facade.webp"],
    site: "@topcoatartistry",
  },

  other: {
    "cache-control": "public",
    expires: "Wed, 01 Jan 2030 00:00:00 GMT",
  },
};

export const viewport: Viewport = {
  themeColor: "#2c3e50",
};

export default function BuildingFacadesLayout({
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
            "@type": "GeneralContractor",
            name: "TopCoat Artistry LLC",
            image: "https://www.topcoat-llc.com/Images/building-facade.webp",
            "@id": "https://www.topcoat-llc.com/services/building-facades",
            url: "https://www.topcoat-llc.com/services/building-facades",
            telephone: "+1-201-315-2633",
            priceRange: "$$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "108 Fairfield Rd",
              addressLocality: "Wayne",
              addressRegion: "NJ",
              postalCode: "07470",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.8876,
              longitude: -74.2576,
            },
            areaServed: [
              { "@type": "City", name: "Wayne" },
              { "@type": "City", name: "Newark" },
              { "@type": "City", name: "Paterson" },
              { "@type": "City", name: "Jersey City" },
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
                    name: "Exterior Building Renovation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Building Facade Repair",
                  },
                },
              ],
            },
          }),
        }}
      />

      {children}
    </>
  );
}