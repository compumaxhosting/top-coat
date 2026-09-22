import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "Epoxy Flooring Wayne NJ | TopCoat Artistry LLC | Garage & Commercial",

  description:
    "TopCoat Artistry LLC offers professional epoxy flooring in Wayne, Newark, & Jersey City. High-performance garage epoxy, commercial coatings, and industrial floor installation. Get a free estimate today!",

  keywords: [
    "epoxy flooring Wayne NJ",
    "epoxy floor coating Newark",
    "garage epoxy flooring Paterson",
    "residential epoxy flooring Jersey City",
    "industrial epoxy floor installation",
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
    canonical: "https://www.topcoat-llc.com/services/epoxy-flooring-wayne-new-jersey",
  },

  referrer: "strict-origin-when-cross-origin",

  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "TopCoat Artistry",
  },

  openGraph: {
    type: "website",
    url: "https://www.topcoat-llc.com/services/epoxy-flooring-wayne-new-jersey",
    title: "TopCoat Artistry LLC: Durable Epoxy Flooring & Coatings in North Jersey",
    description:
      "Transform your garage, home, or business with industrial-grade epoxy floor coatings. Serving Wayne, Newark, Paterson, and Jersey City.",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/Service-Epoxy-Flooring.webp",
        width: 1200,
        height: 630,
        alt: "Epoxy flooring installation in Wayne NJ",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring Wayne NJ | Garage & Commercial Coatings | TopCoat",
    description:
      "High-performance epoxy flooring for garages, homes, and businesses in Wayne, Newark & Jersey City.",
    images: ["https://www.topcoat-llc.com/Images/Service-Epoxy-Flooring.webp"],
    site: "@topcoatartistry",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

export default function ServicesLayout({
  children,
}: {
  children: ReactNode;
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
                image: "https://www.topcoat-llc.com/Images/Service-Epoxy-Flooring.webp",
                "@id": "https://www.topcoat-llc.com/services/epoxy-flooring-wayne-new-jersey",
                url: "https://www.topcoat-llc.com/services/epoxy-flooring-wayne-new-jersey",
                telephone: "+1-201-315-2633",
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
                priceRange: "$$",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Epoxy Flooring Services",
                  itemListElement: [
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
                        name: "Commercial Epoxy Flooring",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Industrial Epoxy Flooring",
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
                    name: "Is epoxy flooring good for garages in Wayne, NJ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, it resists salt, oil, and moisture damage, making it ideal for New Jersey garage conditions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How long does epoxy flooring last?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Typically 10–20 years with proper installation.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can epoxy handle heavy traffic?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, it is designed for both light and heavy-duty residential and commercial use.",
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