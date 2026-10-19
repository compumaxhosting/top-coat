import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const url =
  "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026";
const image =
  "https://www.topcoat-llc.com/Images/garage-floor-coating-2026.webp";
const title = "How to Choose Garage Floor Coating Contractors in 2026";
const description =
  "Learn how to choose the best garage floor coating contractors in Wayne, NJ, and nearby areas. Compare coatings, costs, warranties, and installation quality.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "garage floor coating contractors",
    "garage floor coating Wayne NJ",
    "epoxy garage flooring NJ",
    "polyaspartic floor coating",
    "garage floor coating Newark",
    "garage floor coating Paterson",
    "garage floor coating Jersey City",
    "Bergen County garage flooring",
  ],
  authors: [{ name: "TopCoat Artistry LLC" }],
  robots: { index: true, follow: true },
  alternates: { canonical: url },
  openGraph: {
    type: "article",
    title,
    description,
    url,
    siteName: "TopCoat Artistry LLC",
    publishedTime: "2026-10-19",
    images: [
      {
        url: image,
        alt: "Professionally coated garage floor with a durable decorative finish",
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
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id":
        "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026#blogposting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026",
      },
      headline:
        "How to Choose the Best Garage Floor Coating Contractors in 2026",
      description:
        "Learn how to choose reliable garage floor coating contractors in Wayne, NJ, and surrounding areas. Compare coating materials, preparation methods, costs, warranties, and installation quality.",
      image: {
        "@type": "ImageObject",
        url: image,
      },
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
      },
      datePublished: "2026-10-19",
      dateModified: "2026-10-19",
      "inLanguage": "en-US",
      keywords: [
        "garage floor coating contractors",
        "garage floor coating Wayne NJ",
        "epoxy garage flooring NJ",
        "polyaspartic floor coating",
        "garage floor coating Newark",
        "garage floor coating Paterson",
        "garage floor coating Jersey City",
        "Bergen County garage flooring",
      ],
      articleSection: [
        "Garage Floor Coatings",
        "Contractor Selection",
        "Epoxy Flooring",
        "Polyaspartic Coatings",
        "Garage Floor Maintenance",
      ],
      about: [
        {
          "@type": "Thing",
          name: "Garage floor coating",
        },
        {
          "@type": "Thing",
          name: "Epoxy flooring",
        },
        {
          "@type": "Thing",
          name: "Polyaspartic floor coatings",
        },
      ],
      contentLocation: [
        {
          "@type": "Place",
          name: "Wayne, New Jersey",
        },
        {
          "@type": "Place",
          name: "Newark, New Jersey",
        },
        {
          "@type": "Place",
          name: "Paterson, New Jersey",
        },
        {
          "@type": "Place",
          name: "Jersey City, New Jersey",
        },
        {
          "@type": "Place",
          name: "Bergen County, New Jersey",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I choose the best garage floor coating contractor in NJ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choose a contractor with relevant installation experience, proven surface preparation methods, quality coating materials, transparent estimates, and a clear written warranty. Review completed projects and customer feedback, and ask how the company evaluates moisture and repairs damaged concrete. Compare the entire installation process rather than relying on price or advertised curing times alone.",
          },
        },
        {
          "@type": "Question",
          name: "Is epoxy or polyaspartic better for a garage floor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Both can provide durable, attractive finishes when installed correctly. Epoxy is a versatile option for many residential garages, while polyaspartic systems typically offer faster curing and strong UV resistance. The best choice depends on concrete conditions, budget, installation requirements, and expected use. Ask your contractor to explain the advantages and limitations of the proposed system.",
          },
        },
        {
          "@type": "Question",
          name: "How long does professional garage floor coating installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some polyaspartic coating systems can be installed in a single day, while certain epoxy systems require multiple application days or longer curing periods. Actual timing depends on repairs, surface preparation, temperature, humidity, and product specifications. Always confirm when the floor can safely accommodate foot traffic and vehicles before moving belongings or parking your car.",
          },
        },
        {
          "@type": "Question",
          name: "How much does garage floor coating cost in Wayne, NJ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The price depends on garage dimensions, existing concrete damage, moisture conditions, preparation requirements, coating materials, and decorative finishes. Extensive repairs can increase the total project cost, while premium systems may require a larger initial investment. Request an itemized quote from a local contractor so you can compare materials, labor, preparation, and warranty coverage accurately.",
          },
        },
        {
          "@type": "Question",
          name: "Are garage floor coatings suitable for New Jersey winters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Properly selected and installed garage floor coating systems can withstand normal residential garage use, including exposure to tracked-in water and road salt. Performance depends on the coating formulation, surface preparation, concrete condition, and installation quality. Regular cleaning and suitable slip-resistant finishes can also help maintain performance during wet and snowy weather.",
          },
        },
        {
          "@type": "Question",
          name: "Can contractors coat cracked or old garage concrete?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, in many cases. Existing concrete can often be coated after appropriate grinding, cleaning, and repair. However, active structural cracks, significant deterioration, or moisture problems require evaluation before work begins. Repairs can improve the finished appearance, but they cannot guarantee that cracks caused by continued concrete movement will never reappear.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.topcoat-llc.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.topcoat-llc.com/blog/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Choose the Best Garage Floor Coating Contractors in 2026",
          item: "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id":
        "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026#webpage",
      url: "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026",
      name: "How to Choose the Best Garage Floor Coating Contractors in 2026",
      description:
        "A practical guide to selecting garage floor coating contractors in Wayne, NJ, and nearby New Jersey communities.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.topcoat-llc.com/#website",
        url: "https://www.topcoat-llc.com/",
        name: "TopCoat Artistry LLC",
      },
      "inLanguage": "en-US",
      breadcrumb: {
        "@id":
          "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026#breadcrumb",
      },
      mainEntity: {
        "@id":
          "https://www.topcoat-llc.com/blog/choose-best-garage-floor-coating-contractors-2026#blogposting",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.topcoat-llc.com/#organization",
      name: "TopCoat Artistry LLC",
      url: "https://www.topcoat-llc.com/",
      description:
        "Professional garage floor coatings, epoxy flooring, polyaspartic coatings, and decorative concrete services in Wayne and Northern New Jersey.",
      areaServed: {
        "@type": "State",
        name: "New Jersey",
      },
      knowsAbout: [
        "Garage Floor Coating",
        "Epoxy Flooring",
        "Polyaspartic Floor Coatings",
        "Decorative Concrete",
        "Concrete Surface Preparation",
      ],
    },
  ],
};

export default function GarageFloorCoatingContractors2026Layout({
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
