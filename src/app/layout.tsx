import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: {
    default: "Epoxy Flooring & Decorative Concrete NJ | TopCoat Artistry LLC",
    template: "%s | TopCoat Artistry LLC",
  },

  description:
    "TopCoat Artistry LLC provides expert epoxy flooring and decorative concrete in Wayne, Newark, and Jersey City, NJ. 20+ years of high-end garage coatings and terrazzo.",

  keywords: [
    "Epoxy Flooring NJ",
    "Stamped Concrete NJ",
    "Garage Floor Epoxy",
    "Terrazzo Flooring",
    "Decorative Concrete Newark",
    "Wayne NJ Concrete Contractor",
  ],

  authors: [{ name: "TopCoat Artistry LLC" }],
  creator: "TopCoat Artistry LLC",
  publisher: "TopCoat Artistry LLC",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://www.topcoat-llc.com/",
    siteName: "TopCoat Artistry LLC",
    title: "Premium Epoxy Flooring & Decorative Concrete in New Jersey",
    description:
      "Transform your surfaces with TopCoat Artistry LLC. High-end epoxy, terrazzo, and stamped concrete across Newark, Wayne, and Jersey City.",
    images: [
      {
        url: "/Images/hero-epoxy.webp",
        width: 1200,
        height: 630,
        alt: "Epoxy flooring and decorative concrete in New Jersey",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "TopCoat Artistry LLC | NJ Concrete & Epoxy Experts",
    description:
      "20+ years of durable, high-end concrete finishes in North Jersey. Get a free estimate today.",
    images: ["/Images/hero-epoxy.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "lpZ_-TCT1nbuvHSDi3FaXuvWw0OM5RVxYz1o15FH8tU",
  },

  // ✅ Pinterest Verification Added
  other: {
    "p:domain_verify": "596afcb1388c302e37d8afe7bbce01f0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* GEO SEO */}
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content="Wayne, New Jersey" />
        <meta name="geo.position" content="40.8876;-74.2574" />
        <meta name="ICBM" content="40.8876, -74.2574" />

        {/* Theme */}
        <meta name="theme-color" content="#ffffff" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        {/* Google Tag Manager */}
          <Script id="gtm-script" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TWZ7246B');
          `}
        </Script>

        {/* SCHEMA */}
        <Script
          id="schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "HousePainter",
            "name": "TopCoat Artistry LLC",
            "image": "https://www.topcoat-llc.com/Images/TopCoat-white-logo.webp",
            "url": "https://www.topcoat-llc.com/",
            "telephone": "+1-201-315-2633",
            "priceRange": "$$",
            "description": "Leading epoxy flooring and decorative concrete contractor in New Jersey with 20+ years experience.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "108 Fairfield Rd",
              "addressLocality": "Wayne",
              "addressRegion": "NJ",
              "postalCode": "07470",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.8876",
              "longitude": "-74.2574"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                "opens": "08:00",
                "closes": "18:00"
              }
            ],
            "areaServed": [
              { "@type": "City", "name": "Wayne" },
              { "@type": "City", "name": "Newark" },
              { "@type": "City", "name": "Paterson" },
              { "@type": "City", "name": "Jersey City" }
            ]
          }
          `}
        </Script>
      </head>

      <body className="font-sans antialiased bg-background text-foreground">
        {/* GTM NOSCRIPT */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWZ7246B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}