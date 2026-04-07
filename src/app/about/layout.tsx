import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: "About TopCoat Artistry LLC | Epoxy Flooring Experts in Wayne, NJ",

  description:
    "TopCoat Artistry LLC is a trusted epoxy flooring contractor in Wayne, NJ serving Newark, Paterson & Jersey City. 20+ years of experience in garage, commercial & industrial floor coatings.",

  keywords: [
    "TopCoat Artistry LLC",
    "epoxy flooring Wayne NJ",
    "garage epoxy flooring Newark",
    "commercial epoxy Paterson",
    "industrial floor coating Jersey City",
    "NJ epoxy flooring contractor",
  ],

  authors: [{ name: "TopCoat Artistry LLC" }],
  creator: "TopCoat Artistry LLC",

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    type: "website",
    url: "https://www.topcoat-llc.com/about",
    title: "TopCoat Artistry LLC | Epoxy Flooring Specialists in North Jersey",
    description:
      "Learn about TopCoat Artistry LLC, delivering high-performance epoxy flooring solutions across Wayne, Newark, Paterson & Jersey City. Built on 20+ years of expertise.",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "https://www.topcoat-llc.com/Images/About.webp",
        width: 1200,
        height: 630,
        alt: "TopCoat Artistry LLC Team - Epoxy Flooring Experts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About TopCoat Artistry LLC | NJ Epoxy Flooring Experts",
    description:
      "20+ years of experience in epoxy flooring, garage coatings, and commercial surfaces across Northern New Jersey.",
    images: ["https://www.topcoat-llc.com/Images/About.webp"],
  },

  other: {
    "theme-color": "#1a1a1a",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="lazyOnload" // ✅ changed from afterInteractive
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HousePainter",
          name: "TopCoat Artistry LLC",
          image: "https://www.topcoat-llc.com/Images/About.webp",
          "@id": "https://www.topcoat-llc.com/about",
          url: "https://www.topcoat-llc.com/about",
          telephone: "+1-201-315-2633",
          priceRange: "$$",
          description:
            "TopCoat Artistry LLC provides professional epoxy flooring and concrete coating services in Wayne, Newark, Paterson, and Jersey City, NJ.",
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
        })}
      </Script>
    </>
  );
}
