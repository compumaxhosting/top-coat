import Link from "next/link";

export default function TableOfContents() {
  const items = [
    { title: "What Is Epoxy Flooring?", id: "what-is-epoxy" },
    { title: "How Does Professional Epoxy Flooring Installation Work?", id: "how-it-works" },
    { title: "Benefits of Epoxy Flooring in Wayne, NJ", id: "benefits" },
    { title: "Is Epoxy Flooring Good for Garages and Commercial Spaces?", id: "garages-and-commercial" },
    { title: "Common Epoxy Flooring Challenges", id: "challenges" },
    { title: "How Much Does Epoxy Flooring Cost in Wayne, NJ?", id: "cost" },
    { title: "How Long Does Epoxy Flooring Last?", id: "lifespan" },
    { title: "Why Professional Installation Matters", id: "why-professional" },
    { title: "Epoxy Flooring Maintenance Tips", id: "maintenance" },
    { title: "Frequently Asked Questions", id: "faq" },
    { title: "Why Choose TopCoat Artistry?", id: "why-choose" },
    { title: "Conclusion", id: "conclusion" },
  ];

  return (
    <section className="bg-[#14161A] pt-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl border border-[#282c33] bg-[#0d0f12] p-6">
          <h2 className="mb-6 font-serif text-2xl font-bold text-white/90 md:text-3xl">
            Table of Contents
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
