import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url =
    "https://www.topcoat-llc.com/blog/custom-decorative-concrete-wayne-nj-ideas-2026";

const image =
    "/Images/custom-decorative-concrete-wayne-nj-ideas-2026.webp";

const title =
    "Custom Decorative Concrete Wayne NJ: 10 Stunning Ideas";

const description =
    "Discover 10 stunning custom decorative concrete ideas for Wayne, NJ, including stamped concrete, overlays, resurfacing, patios, and more.";

export const metadata: Metadata = {
    title: { absolute: title },
    description,
    keywords: [
        "Custom Decorative Concrete Wayne NJ",
        "Decorative Concrete Newark NJ",
        "Decorative Concrete Paterson NJ",
        "Decorative Concrete Jersey City NJ",
        "Decorative Concrete New York City",
        "Decorative Concrete Bergen County",
        "Decorative Concrete Paramus NJ",
        "Decorative Concrete Ridgewood NJ",
        "Decorative Concrete Glen Rock NJ",
        "Decorative Concrete Saddle River NJ",
        "Decorative Concrete Upper Saddle River NJ",
        "Decorative Concrete Ramsey NJ",
        "Decorative Concrete Mahwah NJ",
        "Decorative Concrete Midland Park NJ",
        "Decorative Concrete Hillsdale NJ",
        "Decorative Concrete Teaneck NJ",
        "Decorative Concrete Montvale NJ",
        "Decorative Concrete River Vale NJ",
        "Decorative Concrete Westwood NJ",
        "Decorative Concrete Park Ridge NJ",
        "Decorative Concrete Montville NJ",
        "Concrete Overlays Wayne NJ",
        "Concrete Resurfacing Bergen County",
        "Stamped Concrete Designs NJ",
        "Artistic Concrete Finishes NYC"
    ],
    authors: [{ name: "TopCoat Artistry LLC" }],
    robots: { index: true, follow: true },
    alternates: { canonical: url },

    openGraph: {
        type: "article",
        title,
        description:
            "Explore 10 custom decorative concrete ideas transforming outdoor spaces in Wayne, NJ.",
        url,
        siteName: "TopCoat Artistry LLC",
        images: [
            {
                url: image,
                alt: "Custom decorative concrete outdoor design in Wayne NJ",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
    },

    referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    author: {
        "@type": "Organization",
        name: "TopCoat Artistry LLC",
    },
    publisher: {
        "@type": "Organization",
        name: "TopCoat Artistry LLC",
    },
    datePublished: "2026-08-18",
    dateModified: "2026-08-18",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
    },
};

export default function BlogLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData),
                }}
            />
            {children}
        </>
    );
}