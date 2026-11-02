import type { Metadata } from "next";
import Script from "next/script";
import dynamic from "next/dynamic";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Home/HeroSection";

// Lazy load below-the-fold
const AboutSection = dynamic(() => import("@/components/Home/AboutSection"));
const ServicesSection = dynamic(
  () => import("@/components/Home/ServiceSection"),
);
const ExperienceSection = dynamic(
  () => import("@/components/Home/ExperienceSection"),
);
const PortfolioSection = dynamic(
  () => import("@/components/Home/PortfolioSection"),
);
const CTASection = dynamic(() => import("@/components/Home/CTASection"));
const Footer = dynamic(() => import("@/components/Layout/Footer"));
const BackToTop = dynamic(() => import("@/components/Layout/BackToTop"));

// ✅ Homepage-specific metadata overrides root layout defaults
export const metadata: Metadata = {
  title: "Epoxy Flooring NJ | TopCoat Artistry LLC",
  description:
    "TopCoat Artistry LLC offers expert epoxy flooring and decorative concrete in New Jersey. Custom garage floors, commercial coatings and terrazzo.",
  alternates: {
    canonical: "https://www.topcoat-llc.com/",
  },
  robots: {
    index: true,
    follow: true,
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
};

// ✅ FAQPage structured data matching the visible homepage FAQs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is epoxy flooring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Epoxy flooring is a coating system applied to properly prepared concrete surfaces. It creates a durable, seamless finish that can improve floor appearance and help protect against everyday wear, stains, and moisture exposure.",
      },
    },
    {
      "@type": "Question",
      name: "How long does epoxy flooring last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The lifespan of epoxy flooring depends on surface preparation, coating quality, installation, traffic, and maintenance. A professionally installed and properly maintained system can provide many years of service.",
      },
    },
    {
      "@type": "Question",
      name: "Is epoxy flooring suitable for residential garages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Epoxy flooring is a popular option for residential garages because it creates an attractive, durable surface that is generally easier to clean than untreated concrete.",
      },
    },
    {
      "@type": "Question",
      name: "Can epoxy flooring be customized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Depending on the selected coating system, epoxy floors can be customized with different colors, decorative flakes, metallic effects, and finish options.",
      },
    },
    {
      "@type": "Question",
      name: "Is epoxy flooring suitable for commercial properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Epoxy flooring can be suitable for many commercial environments. The appropriate system depends on traffic levels, operational requirements, chemical exposure, and the condition of the existing concrete.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between epoxy flooring and decorative concrete?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Epoxy flooring uses a resin-based coating system applied to concrete, while decorative concrete focuses on enhancing the appearance of concrete through colors, textures, patterns, and specialized finishes.",
      },
    },
    {
      "@type": "Question",
      name: "Does epoxy flooring require special maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Epoxy flooring generally requires regular sweeping and cleaning with suitable cleaning products. Avoiding harsh chemicals and abrasive cleaning methods can help maintain its appearance.",
      },
    },
    {
      "@type": "Question",
      name: "How should concrete be prepared before epoxy installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Concrete preparation may involve cleaning, removing contaminants, repairing cracks, and mechanically preparing the surface. Proper preparation is essential for coating adhesion and performance.",
      },
    },
    {
      "@type": "Question",
      name: "Can existing concrete floors be coated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many existing concrete floors can be coated after proper inspection and preparation. The condition, moisture level, contamination, and previous coatings must be evaluated before selecting a suitable system.",
      },
    },
    {
      "@type": "Question",
      name: "Does TopCoat Artistry LLC provide flooring services in New Jersey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TopCoat Artistry LLC offers epoxy flooring and decorative concrete solutions in New Jersey. Contact the company to discuss your location and project requirements.",
      },
    },
  ],
};

// ✅ Organization schema
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.topcoat-llc.com/#organization",
  name: "TopCoat Artistry LLC",
  url: "https://www.topcoat-llc.com/",
  description:
    "Professional epoxy flooring and decorative concrete solutions in New Jersey.",
  logo: {
    "@type": "ImageObject",
    url: "https://www.topcoat-llc.com/Images/TopCoat-white-logo.webp",
  },
  sameAs: [
    "https://www.facebook.com/topcoatllc.net/",
    "https://www.instagram.com/top.coat.artistry",
    "https://www.tiktok.com/@top.coat.artistry",
    "https://x.com/TopCoatnj",
  ],
};

const Page = () => {
  return (
    <>
      {/* ✅ FAQPage structured data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ✅ Organization structured data */}
      <Script
        id="org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <PortfolioSection />
        <CTASection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Page;
