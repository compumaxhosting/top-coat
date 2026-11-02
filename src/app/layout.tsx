import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import BottomMenu from "@/components/Layout/BottomMenu";

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

// ✅ Root layout metadata – overridden by individual page metadata exports
export const metadata: Metadata = {
  metadataBase: new URL("https://www.topcoat-llc.com"),

  title: {
    default: "Epoxy Flooring NJ | TopCoat Artistry LLC",
    template: "%s | TopCoat Artistry LLC",
  },

  description:
    "TopCoat Artistry LLC offers expert epoxy flooring and decorative concrete in New Jersey. Custom garage floors, commercial coatings and terrazzo.",

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
    canonical: "https://www.topcoat-llc.com/",
  },

  openGraph: {
    type: "website",
    url: "https://www.topcoat-llc.com/",
    siteName: "TopCoat Artistry LLC",
    title: "Epoxy Flooring NJ | TopCoat Artistry LLC",
    description:
      "Discover professional epoxy flooring, decorative concrete, garage floor coatings, commercial flooring, and terrazzo solutions from TopCoat Artistry LLC in New Jersey.",
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
    title: "Epoxy Flooring NJ | TopCoat Artistry LLC",
    description:
      "Discover professional epoxy flooring, decorative concrete, garage floor coatings, commercial flooring, and terrazzo solutions from TopCoat Artistry LLC in New Jersey.",
    images: ["/Images/hero-epoxy.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "lpZ_-TCT1nbuvHSDi3FaXuvWw0OM5RVxYz1o15FH8tU",
  },

  // ✅ Pinterest Verification
  other: {
    "p:domain_verify": "596afcb1388c302e37d8afe7bbce01f0",
  },
};

// ✅ Improved GeneralContractor + HomeAndConstructionBusiness schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
  "@id": "https://www.topcoat-llc.com/#business",
  name: "TopCoat Artistry LLC",
  image: "https://www.topcoat-llc.com/Images/TopCoat-white-logo.webp",
  url: "https://www.topcoat-llc.com/",
  telephone: "+1-201-315-2633",
  email: "Almahairi@gmail.com",
  priceRange: "$$",
  description:
    "Professional epoxy flooring, decorative concrete, terrazzo, and building facade contractor in New Jersey.",
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
    latitude: "40.8876",
    longitude: "-74.2574",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Wayne" },
    { "@type": "City", name: "Woodland Park" },
    { "@type": "City", name: "Newark" },
    { "@type": "City", name: "Paterson" },
    { "@type": "City", name: "Jersey City" },
    { "@type": "City", name: "Clifton" },
    { "@type": "City", name: "Hoboken" },
    { "@type": "AdministrativeArea", name: "Passaic County" },
    { "@type": "AdministrativeArea", name: "Bergen County" },
    { "@type": "AdministrativeArea", name: "Essex County" },
    { "@type": "AdministrativeArea", name: "Morris County" },
    { "@type": "City", name: "New York City" },
  ],
  hasMap: "https://maps.app.goo.gl/kAzRomcnvKNRFmjK8",
  sameAs: [
    "https://www.facebook.com/topcoatllc.net/",
    "https://www.instagram.com/top.coat.artistry",
    "https://www.tiktok.com/@top.coat.artistry",
    "https://x.com/TopCoatnj",
  ],
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

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B9B54X856E"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-B9B54X856E');
  `}
        </Script>

        {/* ✅ Improved GeneralContractor + HomeAndConstructionBusiness schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
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
        <BottomMenu />
      </body>
    </html>
  );
}
