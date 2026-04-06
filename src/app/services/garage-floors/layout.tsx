import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "Top-Rated Garage Floor Coating in Wayne & North Jersey | TopCoat Artistry LLC",

  description:
    "TopCoat Artistry LLC is your local authority for high-performance garage floor coating near me. Serving Wayne, Newark, Paterson, and Jersey City with durable, weather-resistant epoxy systems.",

  keywords: [
    "garage floor coating near me",
    "garage epoxy floor coating Newark NJ",
    "garage floor repair Paterson NJ",
    "garage floor installation Wayne NJ",
    "garage flooring contractors New Jersey",
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
    canonical: "https://www.topcoat-llc.com/services/garage-floors",
  },

  referrer: "strict-origin-when-cross-origin",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "TopCoat Garage Floors",
  },

  openGraph: {
    type: "website",
    title: "Top-Rated Garage Floor Coating in Wayne & North Jersey",
    description:
      "Expert garage epoxy and resurfacing services in Wayne, Newark, Paterson, and Jersey City. Weather-resistant, industrial-grade floor systems by TopCoat Artistry LLC.",
    url: "https://www.topcoat-llc.com/services/garage-floors",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/garage-floor.webp",
        width: 1200,
        height: 630,
        alt: "Garage epoxy floor coating in New Jersey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NJ Garage Floor Coating | Epoxy & Resurfacing",
    description:
      "Professional garage floor coating near me for Wayne, Newark, and Jersey City homeowners. Durable epoxy systems and fast installations.",
    images: ["https://www.topcoat-llc.com/Images/garage-floor.webp"],
    site: "@topcoatartistry",
  },

  other: {
    "cache-control": "public",
    expires: "Wed, 01 Jan 2030 00:00:00 GMT",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function GarageFloorsLayout({
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
            "@type": "HousePainter",
            name: "TopCoat Artistry LLC",
            image: "https://www.topcoat-llc.com/Images/garage-floor.webp",
            "@id": "https://www.topcoat-llc.com/services/garage-floors",
            url: "https://www.topcoat-llc.com/services/garage-floors",
            telephone: "+1-201-315-2633",
            priceRange: "$$",
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
              name: "Garage Flooring Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Garage Floor Coating",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Garage Epoxy Flooring",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Garage Floor Repair",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Garage Floor Resurfacing",
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