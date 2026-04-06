import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "Custom Decorative Concrete NJ | Bespoke Surface Artistry | TopCoat Artistry",

  description:
    "TopCoat Artistry LLC: Premier decorative concrete contractors in NJ. Expert custom installation, colored concrete, and stamped designs in Wayne, Newark, & Jersey City. Artisan-grade outdoor surfaces.",

  keywords: [
    "decorative concrete contractors near me",
    "custom decorative concrete NJ",
    "decorative concrete installation Wayne NJ",
    "custom concrete patio Newark",
    "decorative concrete Jersey City",
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
    canonical: "https://www.topcoat-llc.com/services/custom-decorative-concrete",
  },

  referrer: "strict-origin-when-cross-origin",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "TopCoat Artistry",
  },

  openGraph: {
    type: "website",
    title: "Bespoke Surface Artistry: Premier Custom Decorative Concrete NJ",
    description:
      "Elevate your outdoor space with artisan-grade decorative concrete. Serving Wayne, Newark, and Jersey City with custom colors and textures. Professional NJ installation.",
    url: "https://www.topcoat-llc.com/services/custom-decorative-concrete",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/Decorative.webp",
        width: 1200,
        height: 630,
        alt: "Custom decorative concrete in New Jersey",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Decorative Concrete Contractors | Wayne & Newark NJ",
    description:
      "Artisan-grade concrete finishes for patios, walkways, and more. Transform your NJ property with TopCoat Artistry LLC. Get a free quote today.",
    images: ["https://www.topcoat-llc.com/Images/Decorative.webp"],
    site: "@topcoatartistry",
  },

  other: {
    "cache-control": "public",
    expires: "Wed, 01 Jan 2030 00:00:00 GMT",
  },
};

export const viewport: Viewport = {
  themeColor: "#3d3d3d",
};

export default function CustomDecorativeConcreteLayout({
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
            image: "https://www.topcoat-llc.com/Images/Decorative.webp",
            "@id": "https://www.topcoat-llc.com/services/custom-decorative-concrete",
            url: "https://www.topcoat-llc.com/services/custom-decorative-concrete",
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
              name: "Custom Decorative Concrete Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Decorative Concrete Installation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Colored Decorative Concrete",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Concrete Patio Construction",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Artisan Stamped Concrete",
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