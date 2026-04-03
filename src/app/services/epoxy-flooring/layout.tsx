import type { Metadata } from "next";

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
        canonical: "/services/epoxy-flooring",
    },

    themeColor: "#1a1a1a",

    appleWebApp: {
        capable: true,
        statusBarStyle: "black",
        title: "TopCoat Artistry",
    },

    openGraph: {
        type: "website",
        url: "https://www.topcoat-llc.com/services/epoxy-flooring",
        title:
            "TopCoat Artistry LLC: Durable Epoxy Flooring & Coatings in North Jersey",
        description:
            "Transform your garage, home, or business with industrial-grade epoxy floor coatings. Serving Wayne, Newark, Paterson, and Jersey City.",
        siteName: "TopCoat Artistry LLC",
        images: [
            {
                url: "https://www.topcoat-llc.com/Images/hero-epoxy.webp",
                width: 1200,
                height: 630,
                alt: "Epoxy flooring installation in Wayne NJ",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Epoxy Flooring Wayne NJ | Garage & Commercial Coatings | TopCoat",
        description:
            "High-performance epoxy flooring for garages, homes, and businesses in Wayne, Newark & Jersey City.",
        images: [
            "https://www.topcoat-llc.com/Images/hero-epoxy.webp",
        ],
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* ✅ SCHEMA (JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "TopCoat Artistry LLC",
                        image:
                            "https://www.topcoat-llc.com/Images/hero-epoxy.webp",
                        "@id":
                            "https://www.topcoat-llc.com/services/epoxy-flooring",
                        url: "https://www.topcoat-llc.com/services/epoxy-flooring",
                        telephone: "+1-201-315-2633",
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
                    }),
                }}
            />

            {children}
        </>
    );
}