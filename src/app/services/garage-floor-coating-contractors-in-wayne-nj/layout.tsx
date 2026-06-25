import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "Garage Floor Coating Contractors in Wayne, NJ | Epoxy & Polyaspartic Flooring | TopCoat Artistry LLC",

  description:
    "TopCoat Artistry LLC provides professional garage floor coating services in Wayne, NJ. We specialize in epoxy flooring, polyaspartic coatings, decorative concrete, concrete resurfacing, and commercial flooring for homes and businesses throughout Bergen County and Northern New Jersey.",

  keywords: [
    "garage floor coating contractors Wayne NJ",
    "epoxy garage floor coating Wayne NJ",
    "garage floor coating company Wayne NJ",
    "polyaspartic garage floor coating NJ",
    "epoxy flooring Bergen County",
    "decorative concrete Wayne NJ",
    "garage floor epoxy near Newark",
    "commercial epoxy flooring NJ",
    "residential garage flooring Wayne NJ",
    "concrete resurfacing NJ",
    "garage floor coatings Northern NJ",
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
    canonical: "https://www.topcoat-llc.com/services/garage-floor-coating-contractors-in-wayne-nj",
  },

  referrer: "strict-origin-when-cross-origin",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "TopCoat Artistry LLC",
  },

  openGraph: {
    type: "website",
    title: "Garage Floor Coating Contractors in Wayne, NJ | TopCoat Artistry LLC",
    description:
      "Transform your garage with premium epoxy and polyaspartic floor coatings in Wayne, NJ. Durable, slip-resistant, and professionally installed concrete coating solutions for residential and commercial properties.",
    url: "https://www.topcoat-llc.com/services/garage-floor-coating-contractors-in-wayne-nj",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/images/garage-floor-coating-wayne-nj.jpg",
        width: 1200,
        height: 630,
        alt: "Garage Floor Coating Contractors in Wayne NJ by TopCoat Artistry LLC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Garage Floor Coating Contractors in Wayne, NJ | TopCoat Artistry LLC",
    description:
      "Professional epoxy and polyaspartic garage floor coatings in Wayne, NJ. Durable flooring systems for homes, garages, warehouses, and commercial facilities.",
    images: ["https://www.topcoat-llc.com/images/garage-floor-coating-wayne-nj.jpg"],
    site: "@TopCoatLLC",
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
            image: "https://www.topcoat-llc.com/images/garage-floor-coating-wayne-nj.jpg",
            "@id": "https://www.topcoat-llc.com/services/garage-floor-coating-contractors-in-wayne-nj",
            url: "https://www.topcoat-llc.com/services/garage-floor-coating-contractors-in-wayne-nj",
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