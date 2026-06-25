import Link from "next/link";

export default function TableOfContents() {
  const items = [
    { id: "what-is-epoxy-flooring", title: "What Is Epoxy Flooring?" },
    { id: "how-epoxy-flooring-works", title: "How Epoxy Flooring Works" },
    { id: "types-of-epoxy-flooring-services", title: "Types of Epoxy Flooring Services" },
    { id: "benefits-of-epoxy-flooring", title: "Benefits of Epoxy Flooring" },
    { id: "why-professional-installation", title: "Why Professional Installation" },
    { id: "applications-of-epoxy-flooring", title: "Applications of Epoxy Flooring" },
    { id: "epoxy-flooring-cost", title: "Epoxy Flooring Cost in Wayne, NJ" },
    { id: "maintenance-tips", title: "Maintenance Tips" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  return (
    <section className="pt-10 bg-[#14161A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-[#282c33] bg-[#0d0f12] p-6">
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white/90 mb-6">
            Table of Contents
          </h2>

          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="text-white/70 hover:text-primary transition-colors text-md md:text-lg"
                >
                  <span className="text-primary/90 mr-2">
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