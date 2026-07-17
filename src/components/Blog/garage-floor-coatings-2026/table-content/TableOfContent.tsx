import Link from "next/link";

export default function TableOfContents() {
  const items = [
    {
      id: "why-homeowners-choose-garage-floor-coatings",
      title:
        "Why Homeowners in Wayne, NJ Are Choosing Epoxy & Polyaspartic Garage Floor Coatings in 2026",
    },
    {
      id: "epoxy-polyaspartic-garage-floor-coatings",
      title: "What Are Epoxy & Polyaspartic Garage Floor Coatings?",
    },
    {
      id: "how-garage-floor-coating-works",
      title: "How Does Garage Floor Coating Work?",
    },
    {
      id: "benefits-of-garage-floor-coatings",
      title: "Benefits of Epoxy & Polyaspartic Garage Floors",
    },
    {
      id: "common-garage-floor-problems",
      title: "Common Garage Floor Problems",
    },
    {
      id: "garage-floor-coating-cost",
      title: "Cost Factors",
    },
    {
      id: "professional-services",
      title: "Why Professional Services Matter",
    },
    {
      id: "maintenance-best-practices",
      title: "Maintenance Best Practices",
    },
    {
      id: "garage-floor-faq",
      title: "Frequently Asked Questions",
    },
    {
      id: "why-choose-topcoat-artistry",
      title: "Why Choose TopCoat Artistry LLC",
    },
    {
      id: "conclusion",
      title: "Conclusion",
    },
  ];

  return (
    <section className="bg-[#14161A] pt-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-[#282c33] bg-[#0d0f12] p-6">
          <h2 className="mb-6 font-serif text-2xl font-bold text-white/90 md:text-3xl">
            Table of Contents
          </h2>

          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="block text-md text-white/70 transition-colors hover:text-primary md:text-lg"
                >
                  <span className="mr-2 font-mono text-primary/90">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
