import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "Terrazzo Flooring Wayne NJ | Restoration & Installation | TopCoat Artistry",

  description:
    "TopCoat Artistry LLC: Expert terrazzo flooring in Wayne, Newark, Paterson, & Jersey City. We specialize in terrazzo floor installation, professional polishing, and restoration services. Free NJ estimates!",

  keywords: [
    "terrazzo flooring contractors near me",
    "terrazzo flooring Wayne NJ",
    "terrazzo floor restoration Newark",
    "terrazzo polishing Jersey City",
    "commercial terrazzo NJ",
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
    canonical: " https://www.topcoat-llc.com/services/terrazzo",
  },

  referrer: "strict-origin-when-cross-origin",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "TopCoat Terrazzo",
  },

  openGraph: {
    type: "website",
    title: "Expert Terrazzo Floor Installation & Polishing in North Jersey",
    description:
      "Premium terrazzo restoration and installation for homes and businesses in Wayne, Newark, and Jersey City. Discover the durability of TopCoat Artistry LLC.",
    url: " https://www.topcoat-llc.com/services/terrazzo",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/terrazzo.webp",
        width: 1200,
        height: 630,
        alt: "Terrazzo flooring in New Jersey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terrazzo Flooring Contractors Wayne & Newark NJ",
    description:
      "Restore your floors to a mirror finish. TopCoat Artistry LLC offers professional terrazzo polishing and installation across North Jersey.",
    images: ["https://www.topcoat-llc.com/Images/terrazzo.webp"],
    site: "@topcoatartistry",
  },

  other: {
    "cache-control": "public",
    expires: "Wed, 01 Jan 2030 00:00:00 GMT",
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f9fa",
};

export default function TerrazzoLayout({
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
            image: "https://www.topcoat-llc.com/Images/terrazzo.webp",
            "@id": " https://www.topcoat-llc.com/services/terrazzo",
            url: " https://www.topcoat-llc.com/services/terrazzo",
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
              name: "Terrazzo and Epoxy Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Terrazzo Floor Installation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Terrazzo Floor Restoration",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Terrazzo Polishing",
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