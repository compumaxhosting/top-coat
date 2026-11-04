import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url =
  "https://www.topcoat-llc.com/blog/terrazzo-floor-restoration-vs-replacement";
const image =
  "https://www.topcoat-llc.com/Images/terrazzo-floor-restoration-vs-replacement-nj.webp";
const title =
  "Terrazzo Floor Restoration vs. Replacement | TopCoat Artistry";
const description =
  "Compare terrazzo floor restoration vs. replacement in Wayne, NJ. Discover costs, benefits, and expert solutions for restoring or replacing terrazzo floors.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "terrazzo floor restoration vs replacement",
    "terrazzo floor restoration Wayne NJ",
    "terrazzo floor repair",
    "terrazzo floor polishing",
    "terrazzo flooring contractors Wayne NJ",
    "terrazzo floor replacement",
    "terrazzo restoration cost",
    "professional terrazzo restoration",
  ],
  authors: [{ name: "TopCoat Artistry LLC" }],
  creator: "TopCoat Artistry LLC",
  publisher: "TopCoat Artistry LLC",
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    type: "article",
    title,
    description:
      "Discover whether terrazzo floor restoration or replacement is the better choice in Wayne, NJ. Compare costs, durability, benefits, and professional solutions.",
    url,
    siteName: "TopCoat Artistry LLC",
    images: [
      {
        url: image,
        alt: "Professionally restored and polished terrazzo flooring in Wayne, New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Compare terrazzo floor restoration and replacement in Wayne, NJ. Learn about costs, benefits, durability, and expert flooring solutions.",
    images: [image],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${url}#blogpost`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      headline:
        "Terrazzo Floor Restoration vs. Replacement: Which Is the Better Option?",
      description,
      image,
      author: {
        "@type": "Organization",
        "@id": "https://www.topcoat-llc.com/#organization",
        name: "TopCoat Artistry LLC",
        url: "https://www.topcoat-llc.com/",
      },
      publisher: {
        "@type": "Organization",
        "@id": "https://www.topcoat-llc.com/#organization",
        name: "TopCoat Artistry LLC",
        url: "https://www.topcoat-llc.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.topcoat-llc.com/Images/logo.webp",
        },
      },
      datePublished: "2026-11-04",
      dateModified: "2026-11-04",
      articleSection: [
        "Terrazzo Flooring",
        "Floor Restoration",
        "Floor Replacement",
        "Floor Maintenance",
      ],
      keywords: [
        "terrazzo floor restoration vs replacement",
        "terrazzo floor restoration Wayne NJ",
        "terrazzo floor repair",
        "terrazzo floor polishing",
        "terrazzo flooring contractors",
        "terrazzo floor replacement",
        "terrazzo restoration cost",
      ],
      about: [
        { "@type": "Thing", name: "Terrazzo Floor Restoration" },
        { "@type": "Thing", name: "Terrazzo Floor Replacement" },
        { "@type": "Thing", name: "Terrazzo Floor Polishing" },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is terrazzo floor restoration better than replacement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Restoration is generally better when the existing floor is structurally sound and has primarily cosmetic damage. It preserves the original material, reduces demolition, and can cost less than replacement. However, extensive structural damage, widespread deterioration, or major renovation requirements may make replacement the more practical long-term option.",
          },
        },
        {
          "@type": "Question",
          name: "How long does terrazzo floor restoration take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The timeline depends on the floor's size, condition, repair requirements, and finishing process. Smaller residential areas may take a few days, while large commercial flooring projects can require longer. Your contractor should provide a project schedule after inspecting the floor.",
          },
        },
        {
          "@type": "Question",
          name: "Can cracked terrazzo floors be restored?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many cracked terrazzo floors can be repaired. Professionals can fill and blend certain cracks using compatible materials. However, if cracks result from ongoing structural movement or significant substrate problems, those underlying issues must be addressed before restoration.",
          },
        },
        {
          "@type": "Question",
          name: "How much does terrazzo floor restoration cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no universal price because costs depend on square footage, surface condition, crack repairs, grinding requirements, and polishing specifications. Restoration is often less expensive than replacement because it avoids extensive demolition and new installation. A professional inspection provides the most reliable estimate.",
          },
        },
        {
          "@type": "Question",
          name: "How long does restored terrazzo flooring last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Terrazzo is known for its exceptional longevity. A properly maintained terrazzo floor can last for several decades, and professionally installed systems may last 40–75 years or longer. Actual lifespan depends on installation quality, maintenance, traffic levels, and environmental conditions.",
          },
        },
        {
          "@type": "Question",
          name: "Can old terrazzo floors regain their original shine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Professional diamond grinding, honing, and polishing can significantly improve dull terrazzo surfaces. Repairs can also address minor chips and cracks before polishing. The final appearance depends on the condition of the original flooring and the extent of existing damage.",
          },
        },
        {
          "@type": "Question",
          name: "Should I replace terrazzo flooring in a commercial building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Commercial terrazzo often experiences heavy foot traffic but can remain structurally sound for decades. Restoration may be a practical option for office buildings, hotels, schools, and retail spaces. An inspection helps determine whether restoration can meet the property's appearance and performance requirements.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.topcoat-llc.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.topcoat-llc.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Terrazzo Floor Restoration vs. Replacement",
          item: url,
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.topcoat-llc.com/#organization",
      name: "TopCoat Artistry LLC",
      url: "https://www.topcoat-llc.com/",
      telephone: "+1-201-315-2633",
      address: {
        "@type": "PostalAddress",
        streetAddress: "86 Lackawanna Ave, Suite 215",
        addressLocality: "Woodland Park",
        addressRegion: "NJ",
        postalCode: "07424",
        addressCountry: "US",
      },
      description:
        "Professional terrazzo flooring, decorative concrete, epoxy flooring, floor restoration, and specialty flooring services in New Jersey.",
      areaServed: [
        { "@type": "City", name: "Wayne" },
        { "@type": "State", name: "New Jersey" },
      ],
      knowsAbout: [
        "Terrazzo Floor Restoration",
        "Terrazzo Floor Replacement",
        "Terrazzo Floor Polishing",
        "Terrazzo Floor Repair",
        "Decorative Concrete",
        "Epoxy Flooring",
        "Floor Maintenance",
      ],
    },
  ],
};

export default function TerrazzoRestorationVsReplacementLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}

