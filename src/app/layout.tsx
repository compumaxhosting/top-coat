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
  metadataBase: new URL("https://topcoat-llc.com"),

  title: {
    default: "Epoxy Flooring & Decorative Concrete NJ | TopCoat Artistry LLC",
    template: "%s | TopCoat Artistry LLC",
  },

  description:
    "Top-rated epoxy flooring contractor in New Jersey specializing in terrazzo, stamped concrete, garage floor coatings, and decorative concrete. 20+ years experience. Get a free quote today.",

  keywords: [
    "epoxy flooring contractor New Jersey",
    "decorative concrete NJ",
    "terrazzo flooring installation NJ",
    "stamped concrete patio NJ",
    "garage epoxy flooring NJ",
    "metallic epoxy flooring",
    "concrete resurfacing NJ",
    "commercial epoxy flooring NJ",
    "residential epoxy floors",
    "decorative concrete contractor Wayne NJ",
  ],

  authors: [{ name: "TopCoat Artistry LLC" }],
  creator: "TopCoat Artistry LLC",
  publisher: "TopCoat Artistry LLC",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Epoxy Flooring & Decorative Concrete NJ | TopCoat Artistry LLC",
    description:
      "Premium epoxy flooring, terrazzo, and decorative concrete services across New Jersey. Durable, luxury finishes built to last.",
    url: "https://topcoat-llc.com",
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: "/og-image.png", // 🔥 add this image in public folder
        width: 1200,
        height: 630,
        alt: "Epoxy flooring and decorative concrete in New Jersey",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Epoxy Flooring & Decorative Concrete NJ | TopCoat Artistry LLC",
    description:
      "Top-rated epoxy flooring contractor in NJ. متخصص in terrazzo, stamped concrete & garage coatings.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  verification: {
    google: "lpZ_-TCT1nbuvHSDi3FaXuvWw0OM5RVxYz1o15FH8tU",
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
        {/* GEO SEO (VERY IMPORTANT) */}
        <meta name="geo.region" content="US-NJ" />
        <meta name="geo.placename" content="Wayne, New Jersey" />
        <meta name="geo.position" content="40.9487;-74.2454" />
        <meta name="ICBM" content="40.9487, -74.2454" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B9B54X856E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B9B54X856E');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TWZ7246B');
          `}
        </Script>

        {/* 🔥 LOCAL BUSINESS SCHEMA (MASSIVE SEO BOOST) */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "name": "TopCoat Artistry LLC",
            "url": "https://topcoat-llc.com",
            "logo": "https://topcoat-llc.com/logo.png",
            "image": "https://topcoat-llc.com/og-image.jpg",
            "telephone": "+1-201-315-2633",
            "email": "almahairi@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "108 Fairfield Rd",
              "addressLocality": "Wayne",
              "addressRegion": "NJ",
              "postalCode": "07470",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "State",
              "name": "New Jersey"
            },
            "description": "Epoxy flooring contractor in New Jersey specializing in decorative concrete, terrazzo, stamped concrete, and garage floor coatings.",
            "sameAs": []
          }
          `}
        </Script>
      </head>

      <body className="font-sans antialiased bg-background text-foreground">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWZ7246B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
