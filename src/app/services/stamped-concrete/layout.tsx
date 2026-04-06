import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "Stamped Concrete Wayne NJ | Decorative Patios & Driveways | TopCoat Artistry",

  description:
    "TopCoat Artistry LLC: Professional stamped concrete in Wayne, Newark, & Jersey City. We specialize in decorative stamped concrete patios, driveways, and installation services. Salt-resistant NJ finishes. Free quotes!",

  keywords: [
    "stamped concrete near me",
    "stamped concrete contractors Wayne NJ",
    "stamped concrete patio Newark",
    "stamped concrete driveway Jersey City",
    "decorative concrete Paterson",
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
    canonical: "https://www.topcoat-llc.com/services/stamped-concrete",
  },

  referrer: "strict-origin-when-cross-origin",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "TopCoat Concrete",
  },

  openGraph: {
    type: "website",
    title: "Expert Stamped Concrete Patios & Driveways in North Jersey",
    description:
      "Elevate your curb appeal with professional stamped concrete services. Serving Wayne, Newark, Paterson, and Jersey City. High-end textures by TopCoat Artistry LLC.",
    url: "https://www.topcoat-llc.com/services/stamped-concrete",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/stamped-concrete.webp",
        width: 1200,
        height: 630,
        alt: "Stamped concrete patio in New Jersey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stamped Concrete Contractors in Wayne & Newark NJ",
    description:
      "Custom stamped concrete installation for NJ homes. Beautiful, weather-resistant outdoor surfaces. Get your free estimate from TopCoat Artistry LLC today.",
    images: ["https://www.topcoat-llc.com/Images/stamped-concrete.webp"],
    site: "@topcoatartistry",
  },

  other: {
    "cache-control": "public",
    expires: "Wed, 01 Jan 2030 00:00:00 GMT",
  },
};

export const viewport: Viewport = {
  themeColor: "#4a5d4e",
};

export default function StampedConcreteLayout({
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
            image: "https://www.topcoat-llc.com/Images/stamped-concrete.webp",
            "@id": "https://www.topcoat-llc.com/services/stamped-concrete",
            url: "https://www.topcoat-llc.com/services/stamped-concrete",
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
              name: "Stamped Concrete Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Stamped Concrete Installation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Stamped Concrete Patio Construction",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Stamped Concrete Driveway Installation",
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